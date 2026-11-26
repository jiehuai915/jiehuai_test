import assert from "node:assert/strict";
import test from "node:test";
import { createRecipeCopyFile, generateRecipeCopy } from "../lib/recipe-copy";

const recipe = {
  recipeName: "鸡胸藜麦轻食碗",
  ingredients: "鸡胸肉 120g\n藜麦 50g\n西兰花 100g\n鸡蛋 1个",
  steps: "1. 鸡胸肉切块\n2. 蒸制 15 分钟\n3. 藜麦煮 20 分钟\n4. 配上蔬菜和鸡蛋"
};

test("generates exactly three distinct copy styles with titles, bodies and topics", () => {
  const copies = generateRecipeCopy(recipe);
  assert.deepEqual(copies.map((copy) => copy.style), ["日常分享风", "实用教程风", "食欲种草风"]);
  assert.equal(new Set(copies.map((copy) => copy.title)).size, 3);
  assert.equal(new Set(copies.map((copy) => copy.body)).size, 3);
  for (const copy of copies) {
    assert.ok(copy.title.includes(recipe.recipeName));
    assert.ok(copy.body.includes(recipe.recipeName));
    assert.ok(copy.hashtags.length >= 5 && copy.hashtags.length <= 8);
    assert.equal(new Set(copy.hashtags).size, copy.hashtags.length);
    assert.ok(copy.hashtags.every((tag) => tag.startsWith("#") && !/\s/.test(tag)));
  }
});

test("all styles preserve actual ingredient amounts and every preparation step", () => {
  for (const copy of generateRecipeCopy(recipe)) {
    for (const line of recipe.ingredients.split("\n")) assert.ok(copy.body.includes(line));
    for (const step of ["鸡胸肉切块", "蒸制 15 分钟", "藜麦煮 20 分钟", "配上蔬菜和鸡蛋"]) {
      assert.ok(copy.body.includes(step));
    }
    assert.doesNotMatch(copy.body, /亲测|零失败|宝宝爱吃|瘦|减重|kcal|卡路里|热量|月龄/);
    assert.ok(!copy.body.includes("橄榄油"));
  }
});

test("copy topics follow baby, fitness, drink, western and creative recipes", () => {
  const cases = [
    ["宝宝南瓜蒸蛋", "#宝宝辅食"],
    ["鸡胸藜麦轻食碗", "#轻食"],
    ["夏日椰芒冻冻茶", "#自制饮品"],
    ["番茄意面", "#西餐"],
    ["猎奇创意汉堡", "#创意料理"],
    ["草莓布丁", "#自制甜品"],
    ["番茄炒蛋", "#家常菜"]
  ];
  for (const [recipeName, topic] of cases) {
    for (const copy of generateRecipeCopy({ ...recipe, recipeName, ingredients: "" })) {
      assert.ok(copy.hashtags.includes(topic));
    }
  }
  assert.ok(generateRecipeCopy({ ...recipe, recipeName: "宝宝鸡胸肉辅食" })[0].hashtags.includes("#宝宝辅食"));
});

test("drinks use drink copy without inventing sensory descriptions", () => {
  const copies = generateRecipeCopy({ ...recipe, recipeName: "椰芒冻冻茶" });
  assert.ok(copies[0].title.includes("喝这个"));
  assert.ok(copies[2].title.includes("日常饮品"));
  for (const copy of copies) assert.doesNotMatch(copy.body, /酸甜|奶香|Q弹|嫩滑/);
  assert.ok(generateRecipeCopy({ ...recipe, recipeName: " 椰芒冻冻茶 ", ingredients: "" })[0].hashtags.includes("#自制饮品"));
  for (const recipeName of ["抹茶蛋糕", "茶树菇炒肉", "奶茶布丁"]) {
    assert.ok(generateRecipeCopy({ ...recipe, recipeName })[0].title.includes("吃这个"));
  }
});

test("manual audience selection applies to copy topics without guessing from the recipe name", () => {
  const input = { ...recipe, recipeName: "宝宝南瓜蒸蛋" };
  assert.ok(!generateRecipeCopy({ ...input, audienceType: "general" })[0].hashtags.includes("#宝宝辅食"));
  assert.ok(generateRecipeCopy({ ...input, audienceType: "fitness-light-meal" })[0].hashtags.includes("#轻食"));
  assert.ok(generateRecipeCopy({ ...recipe, audienceType: "baby-food" })[0].hashtags.includes("#宝宝辅食"));
});

test("semicolons split ingredients only outside parenthetical notes", () => {
  const [copy] = generateRecipeCopy({ ...recipe, ingredients: "葱 2 根（1 根爆香；1 根装饰）；盐 2g" });
  assert.match(copy.body, /- 葱 2 根（1 根爆香；1 根装饰）\n- 盐 2g/);
});

test("plain text file includes the full copy and a UTF-8 BOM", () => {
  const file = createRecipeCopyFile(recipe)!;
  assert.equal(file.fileName, "鸡胸藜麦轻食碗_小红书文案.txt");
  assert.equal(file.content.charCodeAt(0), 0xfeff);
  assert.deepEqual([...Buffer.from(file.content).subarray(0, 3)], [0xef, 0xbb, 0xbf]);
  for (const copy of generateRecipeCopy(recipe)) {
    assert.ok(file.content.includes(copy.style));
    assert.ok(file.content.includes(copy.title));
    assert.ok(file.content.includes(copy.body));
    assert.ok(file.content.includes(copy.hashtags.join(" ")));
  }
  assert.doesNotMatch(file.content, /封面图 Prompt|跨图一致性规则|\[object Object\]|undefined/);
});

test("new recipes produce fresh file names and content", () => {
  const first = createRecipeCopyFile(recipe)!;
  const second = createRecipeCopyFile({ recipeName: "南瓜蒸蛋", ingredients: "南瓜 80g", steps: "南瓜蒸软" })!;
  assert.notEqual(first.fileName, second.fileName);
  assert.ok(!second.content.includes("鸡胸"));
  assert.ok(second.content.includes("南瓜 80g"));
});

test("empty and partial inputs do not invent ingredients, steps, or timing", () => {
  assert.deepEqual(generateRecipeCopy({ ...recipe, recipeName: " \n " }), []);
  assert.equal(createRecipeCopyFile({ ...recipe, recipeName: " " }), null);
  for (const copy of generateRecipeCopy({ recipeName: "家常菜", ingredients: "", steps: "" })) {
    assert.doesNotMatch(copy.body, /食材准备|制作步骤|克|分钟|\d|undefined/);
  }
  const copies = generateRecipeCopy({ recipeName: "蒸蛋", ingredients: "鸡蛋 1个", steps: "" });
  assert.ok(copies.every((copy) => !copy.body.includes("制作步骤") && copy.body.includes("鸡蛋 1个")));
});

test("multiline, decimal, and semicolon input stays readable", () => {
  const copies = generateRecipeCopy({ recipeName: " 蒸蛋\r\n 做法 ", ingredients: "鸡蛋 1个；盐 1.5g\r\n温水 100ml", steps: "1. 加入盐 1.5g；2. 蒸制 10 分钟" });
  for (const copy of copies) {
    assert.ok(copy.title.includes("蒸蛋 做法"));
    assert.ok(copy.body.includes("- 盐 1.5g"));
    assert.ok(copy.body.includes("1. 加入盐 1.5g\n2. 蒸制 10 分钟"));
  }
});

test("file names are safe across desktop platforms and bounded in length", () => {
  for (const recipeName of ['../食谱:/\\?*<>|"', "...", "CON", "食谱".repeat(100), "\u{1f35a}".repeat(100), "菜谱\u0000"]) {
    const file = createRecipeCopyFile({ ...recipe, recipeName })!;
    assert.ok(file.fileName.endsWith("_小红书文案.txt"));
    assert.doesNotMatch(file.fileName, /[<>:"/\\|?*\u0000-\u001f\u007f]/);
    assert.ok(!file.fileName.startsWith("."));
    assert.ok(Buffer.byteLength(file.fileName) < 255);
  }
});
