import assert from "node:assert/strict";
import test from "node:test";
import {
  ART_STYLES,
  ART_STYLE_CHOICES,
  ART_STYLE_GROUPS,
  generateRecipePromptItems,
  generateRecipePrompts,
  getRecipeImageCount,
  hasRecipeDetailsInName,
  recommendArtStyle,
  recommendSelectableArtStyle,
  type RecipeImageOptions,
  type RecipeMode,
  type RecipePromptInput
} from "../lib/prompts";

const recipe: RecipePromptInput = {
  recipeName: "鸡胸藜麦轻食碗",
  ingredients: "鸡胸肉 120g\n藜麦 50g\n西兰花 100g\n鸡蛋 1个",
  steps: "1. 鸡胸肉切块\n2. 蒸制 15 分钟\n3. 藜麦煮 20 分钟\n4. 西兰花焯熟\n5. 鸡蛋煮熟\n6. 鸡蛋切开\n7. 藜麦装盘\n8. 放入蔬菜\n9. 放入鸡肉和鸡蛋",
  flexibleTitle: "摆盘",
  flexibleDescription: "按输入用量摆放食材",
  styleId: "commercial-food-photography"
};

function imageOptions(count: number): RecipeImageOptions {
  return {
    includeCover: true,
    includeIngredients: true,
    includeSteps: true,
    includeFlexible: true,
    stepsPerImage: null,
    extraFlexible: Array.from({ length: count }, (_, index) => ({
      id: `extra-${index}`,
      title: `补充图 ${index + 1}`,
      description: `展示原有食材的第 ${index + 1} 个细节`
    }))
  };
}

test("14 styles have unique IDs and belong to four populated groups", () => {
  assert.equal(ART_STYLES.length, 14);
  assert.equal(new Set(ART_STYLES.map((style) => style.id)).size, 14);
  assert.equal(ART_STYLE_GROUPS.length, 4);
  for (const group of ART_STYLE_GROUPS) {
    assert.ok(ART_STYLES.some((style) => style.group === group));
  }
  for (const style of ART_STYLES) {
    assert.ok(ART_STYLE_GROUPS.includes(style.group));
  }
  for (const id of [
    "cinematic-surreal-animation", "hand-drawn-fantasy-animation", "chinese-watercolor",
    "retro-comic", "soft-3d-clay", "magazine-collage-journal", "commercial-food-photography"
  ]) {
    assert.ok(ART_STYLES.some((style) => style.id === id));
  }
});

test("the picker exposes five distinct common styles and only two extras", () => {
  assert.deepEqual(ART_STYLE_CHOICES.map(({ styles }) => styles.map(({ id }) => id)), [
    ["natural-light-photography", "cinematic-surreal-animation", "chinese-watercolor", "soft-3d-clay", "magazine-collage-journal"],
    ["colored-pencil", "retro-comic"]
  ]);
  assert.ok(ART_STYLE_CHOICES.flatMap(({ styles }) => styles).every(({ id }) => ART_STYLES.some((style) => style.id === id)));
});

test("picker recommendations never select retired presets or apply studio lighting automatically", () => {
  const cases = [
    ["奶油蘑菇鸡肉焗饭", "natural-light-photography"],
    ["像素游戏蛋糕", "retro-comic"],
    ["羊毛毡甜点", "soft-3d-clay"],
    ["几何慕斯", "soft-3d-clay"],
    ["黑白线描食谱", "colored-pencil"],
    ["扁平信息图食谱", "magazine-collage-journal"]
  ];
  for (const [recipeName, expected] of cases) {
    assert.equal(recommendSelectableArtStyle({ recipeName, ingredients: "", steps: "" }), expected);
  }
  assert.equal(recommendSelectableArtStyle({ ...recipe, audienceType: "fitness-light-meal" }), "natural-light-photography");
});

test("collage keeps paper edges and labels inside step panels", () => {
  const prompts = generateRecipePrompts({ ...recipe, styleId: "magazine-collage-journal" });
  assert.match(prompts.steps, /剪贴边缘和纸纹只作陪衬，不跨步骤分格/);
  assert.doesNotMatch(prompts.cover, /不跨步骤分格/);
});

for (const style of ART_STYLES) {
  test(`${style.id}: the chosen medium is applied to every image`, () => {
    const prompts = generateRecipePromptItems({ ...recipe, styleId: style.id }, imageOptions(2));
    assert.equal(prompts.length, 6);
    for (const prompt of prompts) {
      assert.ok(prompt.content.includes(style.name));
      assert.ok(prompt.content.includes(style.description));
      assert.ok(prompt.content.includes("跨图一致性规则"));
      assert.ok(!prompt.content.includes("菜谱模式："));
    }
    assert.ok(!prompts[0].content.includes("细节：强调真实材质"));
  });
}

test("legacy mode values all use the general recipe flow", () => {
  const expected = generateRecipePrompts(recipe);
  for (const mode of ["general", "curious", "western"] as RecipeMode[]) {
    assert.deepEqual(generateRecipePrompts({ ...recipe, mode }), expected);
    assert.equal(recommendArtStyle({ ...recipe, mode }).id, recommendArtStyle(recipe).id);
  }
});

test("custom image counts preserve all input steps and unique prompt IDs", () => {
  for (const count of [0, 1, 3, 10, 15]) {
    const options = imageOptions(count);
    const prompts = generateRecipePromptItems(recipe, options);
    assert.equal(prompts.length, 4 + count);
    assert.equal(getRecipeImageCount(recipe.steps, options), 4 + count);
    assert.equal(new Set(prompts.map((prompt) => prompt.id)).size, prompts.length);
    const steps = prompts.find((prompt) => prompt.id === "steps-1")!.content;
    for (const step of ["鸡胸肉切块", "15 分钟", "20 分钟", "西兰花焯熟", "鸡蛋煮熟",
      "鸡蛋切开", "藜麦装盘", "放入蔬菜", "放入鸡肉和鸡蛋"]) {
      assert.ok(steps.includes(step));
    }
  }
  assert.equal(generateRecipePromptItems(recipe).length, 4);
});

test("covers omit quantities and nutrition data for every style and audience", () => {
  const recipes: RecipePromptInput[] = [
    { ...recipe, audienceType: "fitness-light-meal" },
    { ...recipe, recipeName: "宝宝南瓜蒸蛋", ingredients: "南瓜 80g\n鸡蛋 1个\n温水 100ml", audienceType: "baby-food" },
    { ...recipe, recipeName: "苹果汁", ingredients: "苹果 200g\n水 100ml" },
    { ...recipe, recipeName: "家常菜", ingredients: "未知食材 适量" }
  ];
  for (const style of ART_STYLES) {
    for (const input of recipes) {
      const styledInput = { ...input, styleId: style.id };
      const prompts = generateRecipePromptItems(styledInput);
      assert.ok(prompts[0].content.includes("封面不展示食材克数、重量、用量、热量、卡路里或其他营养数值"));
      assert.ok(prompts[0].content.includes("不添加营养角标、营养图标或数据表格"));
      assert.doesNotMatch(prompts[0].content, /每\s*100\s*g|kcal|\d+\s*(?:g|克|ml|千卡)|仅封面可用简洁图标/i);
      for (const prompt of prompts) {
        assert.ok(!prompt.content.includes("估算 / 每100g"));
      }
      assert.equal(generateRecipePrompts(styledInput).cover, prompts[0].content);
      for (const showNutritionBadge of [true, false]) {
        assert.deepEqual(generateRecipePromptItems({ ...styledInput, showNutritionBadge }), prompts);
      }
    }
  }
});

test("default and general rules ignore audience keywords in every generated image", () => {
  const cases = [
    { recipeName: "奶油蘑菇鸡肉焗饭", ingredients: "鸡腿肉 200g\n熟米饭 300g", steps: "混合后加芝士焗烤" },
    { recipeName: "番茄虾滑粉丝煲", ingredients: "虾仁 250g\n番茄 350g", steps: "剁成虾泥，再下锅煮熟" },
    { recipeName: "肉末蒸蛋", ingredients: "鸡蛋 2个", steps: "拌匀蛋液，蒸熟" },
    { recipeName: "红枣米糊", ingredients: "大米 50g", steps: "红枣与米煮透后打糊" },
    { recipeName: "香煎手指食物拼盘", ingredients: "土豆 200g", steps: "切条后煎熟" },
    { recipeName: "宝宝南瓜蒸蛋", ingredients: "南瓜 80g", steps: "南瓜蒸熟后压泥" },
    { recipeName: "鸡胸藜麦轻食碗", ingredients: "低脂鸡胸肉 120g", steps: "分成健身餐的分量" },
    { recipeName: "南瓜蒸蛋", ingredients: "宝宝辅食米粉 10g", steps: "拌匀后蒸熟" },
    { recipeName: "鸡蛋鸡肉碗", ingredients: "鸡腿肉 200g", steps: "切成适合宝宝月龄的大小" }
  ];

  for (const input of cases) {
    assert.notEqual(recommendArtStyle(input).id, "soft-3d-clay", input.recipeName);
    for (const options of [undefined, { ...imageOptions(1), stepsPerImage: 1 }]) {
      const defaultPrompts = generateRecipePromptItems({ ...recipe, ...input }, options);
      assert.deepEqual(generateRecipePromptItems({ ...recipe, ...input, audienceType: "general" }, options), defaultPrompts);
      for (const prompt of defaultPrompts) {
        assert.doesNotMatch(prompt.content, /受众重点：/, `${input.recipeName}: ${prompt.id}`);
        assert.doesNotMatch(prompt.content, /\n\n/, `${input.recipeName}: ${prompt.id}`);
      }
    }
  }
});

test("selected audience rules apply even when the name has no matching keywords", () => {
  const baby: RecipePromptInput = {
    ...recipe,
    recipeName: "南瓜蒸蛋",
    ingredients: "南瓜 80g\n鸡蛋 1个",
    steps: "南瓜蒸熟压成泥，与蛋液混合蒸熟",
    styleId: "colored-pencil",
    audienceType: "baby-food"
  };
  const babyPrompts = generateRecipePromptItems(baby);
  assert.equal(recommendArtStyle(baby).id, "soft-3d-clay");
  assert.ok(babyPrompts.every((prompt) => prompt.content.includes("受众重点：这是儿童辅食内容")));
  assert.ok(babyPrompts.every((prompt) => prompt.content.includes("彩铅食谱插画风")));
  assert.match(babyPrompts[0].content, /仅封面可用小标签/);
  assert.ok(babyPrompts.slice(1).every((prompt) => !prompt.content.includes("仅封面可用小标签")));

  const fitness = { ...baby, recipeName: "宝宝南瓜蒸蛋", audienceType: "fitness-light-meal" } as const;
  assert.equal(recommendArtStyle(fitness).id, "commercial-food-photography");
  const fitnessPrompts = generateRecipePromptItems(fitness, imageOptions(1));
  assert.equal(fitnessPrompts.length, 5);
  assert.ok(fitnessPrompts.every((prompt) =>
    prompt.content.includes("受众重点：这是健身减脂轻食内容")));
  assert.ok(fitnessPrompts.every((prompt) => !prompt.content.includes("这是儿童辅食内容")));
});

test("cover title wording does not infer decorations from the recipe name", () => {
  const titleRules = ["奶油蘑菇鸡肉焗饭", "排骨汤", "柠檬果汁", "焦葱萝卜肥牛卷"].map((recipeName) =>
    generateRecipePrompts({ ...recipe, recipeName }).cover.split("\n")[1].replace(`「${recipeName}」`, "「菜名」"));
  assert.equal(new Set(titleRules).size, 1);
  assert.doesNotMatch(titleRules[0], /奶泡|茶汤涟漪|水果切片|气泡/);
});

test("cover titles use Chinese only when the recipe name includes English", () => {
  const prompts = generateRecipePromptItems({
    ...recipe,
    recipeName: "Pasta Carbonara｜奶油培根意面"
  });
  const cover = prompts[0].content;

  assert.ok(cover.includes("只显示中文菜名「奶油培根意面」"));
  assert.ok(cover.includes("不出现英文菜名、英文副标题、英文标签或其他英文文字"));
  assert.ok(!cover.includes("Pasta Carbonara"));
});

test("recipe instructions pasted into the dish name do not generate prompts", () => {
  const recipeNames = [
    "焦香土豆肉末酿香菇处理食材：香菇洗净去蒂。调制内馅：土豆压成泥。",
    "焦香土豆肉末酿香菇\n食材：香菇 8朵\n制作步骤：去蒂，填入肉馅",
    "酿香菇1. 香菇去蒂2. 填入肉馅",
    "奶油焗饭\n先炒再烤",
    "酿香菇。香菇去蒂。填入肉馅。"
  ];

  for (const recipeName of recipeNames) {
    const input = { ...recipe, recipeName };
    assert.equal(hasRecipeDetailsInName(recipeName), true);
    assert.deepEqual(generateRecipePromptItems(input), []);
    assert.deepEqual(generateRecipePromptItems(input, imageOptions(1)), []);
    assert.deepEqual(generateRecipePrompts(input), { cover: "", ingredients: "", steps: "", flexible: "" });
  }
});

test("a separated recipe keeps the title and method on their own images", () => {
  const input = {
    ...recipe,
    recipeName: "焦香土豆肉末酿香菇",
    ingredients: "香菇 8朵\n土豆 120g\n猪肉末 100g",
    steps: "处理食材：香菇洗净去蒂\n调制内馅：土豆压成泥，拌入猪肉末\n填入香菇，焖至猪肉末熟透"
  };
  const [cover, ingredients, steps, flexible] = generateRecipePromptItems(input);

  assert.match(cover.content, /只显示中文菜名「焦香土豆肉末酿香菇」/);
  assert.doesNotMatch(cover.content, /香菇洗净去蒂|调制内馅|120g/);
  assert.match(ingredients.content, /土豆 120g/);
  assert.match(steps.content, /香菇洗净去蒂.*调制内馅/);
  assert.doesNotMatch(flexible.content, /调制内馅/);
  assert.equal(hasRecipeDetailsInName("Pasta Carbonara｜奶油培根意面（两人份）"), false);
});

test("a source card replaces the final flexible image with a celebrity-safe closing prompt", () => {
  const prompts = generateRecipePromptItems({
    ...recipe,
    recipeName: "东坡羹",
    sourceCard: {
      enabled: true,
      attribution: "苏轼《东坡羹颂》",
      excerpt: "不用鱼肉五味，有自然之甘。"
    }
  });
  const sourceCard = prompts[3];

  assert.equal(sourceCard.title, "出处彩蛋 Prompt");
  assert.ok(sourceCard.content.includes("不用鱼肉五味，有自然之甘。"));
  assert.ok(sourceCard.content.includes("苏轼《东坡羹颂》"));
  assert.ok(sourceCard.content.includes("不画人物肖像、身影、签名、粉丝元素、队徽或专属服饰"));
  assert.ok(sourceCard.content.includes("画面不显示标题"));
  assert.ok(!sourceCard.content.includes("这一口有来处"));
  assert.ok(!sourceCard.content.includes("家庭复刻版"));
  assert.ok(!sourceCard.content.includes("灵活补充图"));
});

test("ingredient amounts and cooking measurements remain intact outside covers", () => {
  for (const options of [undefined, imageOptions(3)]) {
    const prompts = generateRecipePromptItems(recipe, options);
    const ingredients = prompts.find((prompt) => prompt.id === "ingredients")!.content;
    for (const amount of ["120g", "50g", "100g", "1个"]) {
      assert.ok(ingredients.includes(amount));
      assert.ok(!prompts[0].content.includes(amount));
    }
    const steps = prompts.find((prompt) => prompt.id.startsWith("steps"))!.content;
    assert.ok(steps.includes("15 分钟"));
    assert.ok(steps.includes("20 分钟"));
  }
});

test("the UI can place the source card after extras without reordering legacy output", () => {
  const input = { ...recipe, sourceCard: { enabled: true, attribution: "出处", excerpt: "摘录" } };
  const options = imageOptions(2);
  assert.equal(generateRecipePromptItems(input, options)[3].id, "source-card");
  assert.deepEqual(generateRecipePromptItems(input, { ...options, primarySupplementLast: true }).slice(3).map(({ id }) => id),
    ["extra-0", "extra-1", "source-card"]);
  assert.equal(generateRecipePromptItems(recipe, { ...options, primarySupplementLast: true }).at(-1)?.id, "flexible");
});

test("style recommendations match whole phrases instead of individual characters", () => {
  const cases = [
    ["夏日椰芒冻冻茶", "cinematic-surreal-animation"],
    ["番茄牛肉汤", "chinese-watercolor"],
    ["黄油意面", "commercial-food-photography"],
    ["像素游戏蛋糕", "pixel-art"],
    ["几何慕斯", "low-poly-3d"],
    ["羊毛毡甜点", "needle-felt"],
    ["彩铅食谱", "colored-pencil"],
    ["黑白线描食谱", "monochrome-line-art"],
    ["扁平信息图食谱", "flat-infographic"],
    ["家常番茄炒蛋", "natural-light-photography"]
  ];
  for (const [recipeName, expected] of cases) {
    assert.equal(recommendArtStyle({ recipeName, ingredients: "", steps: "" }).id, expected);
  }
  assert.notEqual(recommendArtStyle({ recipeName: "黑白芝麻糊", ingredients: "", steps: "" }).id,
    "monochrome-line-art");
});

test("empty recipes still produce no prompts", () => {
  assert.deepEqual(generateRecipePromptItems({ ...recipe, recipeName: " " }), []);
});
