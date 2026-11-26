import assert from "node:assert/strict";
import test from "node:test";
import { type BrandIntegration } from "../lib/brand-integration";
import { generateRecipePromptItems, generateRecipePrompts, type RecipeImageOptions, type RecipePromptInput } from "../lib/prompts";
import { createRecipeCopyFile, generateRecipeCopy } from "../lib/recipe-copy";

const recipe: RecipePromptInput = {
  recipeName: "椰奶茶",
  ingredients: "椰奶 100ml\n茉莉茶 150ml",
  steps: "1. 茉莉茶放凉\n2. 倒入椰奶\n3. 搅拌均匀",
  flexibleTitle: "上桌",
  flexibleDescription: "展示成品茶饮和杯子",
  styleId: "natural-light-photography"
};
const integration: BrandIntegration = {
  enabled: true, mode: "reserve", kind: "ingredient", productName: "", detail: ""
};

test("disabled integration preserves prompts and TXT exactly", () => {
  const disabled = { ...recipe, brandIntegration: { ...integration, enabled: false, productName: "不应露出" } };
  assert.deepEqual(generateRecipePromptItems(disabled), generateRecipePromptItems(recipe));
  assert.deepEqual(createRecipeCopyFile(disabled), createRecipeCopyFile(recipe));
});

test("each integration type affects exactly one appropriate inner image", () => {
  for (const [kind, target] of [["ingredient", "ingredients"], ["cookware", "steps"], ["pairing", "flexible"]] as const) {
    const input = { ...recipe, brandIntegration: { ...integration, kind } };
    const prompts = generateRecipePromptItems(input);
    assert.equal(prompts.length, 4);
    assert.equal(prompts.filter((item) => item.content.includes("场景融入：")).length, 1);
    assert.ok(prompts.find((item) => item.id === target)!.content.includes("当前为无品牌预留"));
    assert.ok(prompts.find((item) => item.id === target)!.content.includes("合作产品优先位于画面中部"));
    assert.ok(prompts.find((item) => item.id === target)!.content.includes("不被其他物体遮挡，不裁切到画外"));
    assert.equal(prompts[0].content, generateRecipePromptItems(recipe)[0].content);
    for (const item of prompts) assert.ok(item.content.endsWith("比例为 3:4。"));
    assert.equal(generateRecipePrompts(input)[target], prompts.find((item) => item.id === target)!.content);
  }
});

test("split steps get one scene, excluded target images never shift onto covers", () => {
  const options: RecipeImageOptions = {
    includeCover: true, includeIngredients: false, includeSteps: true,
    includeFlexible: false, stepsPerImage: 1, extraFlexible: []
  };
  const input = { ...recipe, brandIntegration: { ...integration, kind: "cookware" as const } };
  const prompts = generateRecipePromptItems(input, options);
  assert.equal(prompts.length, 4);
  assert.deepEqual(prompts.filter((item) => item.content.includes("场景融入：")).map((item) => item.id), ["steps-1"]);
  assert.ok(generateRecipePromptItems({ ...recipe, brandIntegration: integration }, options)
    .every((item) => !item.content.includes("场景融入：")));
  assert.ok(generateRecipePromptItems(input, { ...options, includeSteps: false })
    .every((item) => !item.content.includes("场景融入：")));
});

test("reserve copy stays publishable and keeps production notes outside all three drafts", () => {
  const input = { ...recipe, brandIntegration: { ...integration, productName: "上次的品牌", detail: "椰奶放在取用位置" } };
  assert.deepEqual(generateRecipeCopy(input), generateRecipeCopy(recipe));
  const file = createRecipeCopyFile(input)!;
  assert.ok(file.content.includes("拍摄备注（不属于正文）"));
  assert.ok(file.content.includes("椰奶放在取用位置"));
  assert.ok(!file.content.includes("上次的品牌"));
  assert.ok(!generateRecipePromptItems(input).some((item) => item.content.includes("上次的品牌")));
});

test("product copy includes supplied facts once, with no invented reviews or title ads", () => {
  const input = { ...recipe, brandIntegration: {
    ...integration, mode: "product" as const, productName: "测试椰奶", detail: "这次用来调茶底，和放凉的茉莉茶混合。"
  } };
  for (const copy of generateRecipeCopy(input)) {
    assert.equal(copy.body.split("测试椰奶").length - 1, 1);
    assert.ok(copy.body.includes(input.brandIntegration.detail));
    assert.ok(!copy.title.includes("测试椰奶"));
    assert.ok(copy.hashtags.every((tag) => !tag.includes("测试椰奶")));
    assert.doesNotMatch(copy.body, /亲测|一直在用|零添加|放心吃|闭眼入|购买/);
    assert.ok(copy.body.indexOf("测试椰奶") < copy.body.indexOf("制作步骤"));
    for (const ingredient of recipe.ingredients.split("\n")) assert.ok(copy.body.includes(ingredient));
  }
  const file = createRecipeCopyFile(input)!;
  assert.ok(file.content.includes("发布备注（不属于正文）"));
  const prompts = generateRecipePromptItems(input);
  assert.equal(prompts.filter((item) => item.content.includes("测试椰奶")).length, 1);
  assert.ok(prompts[1].content.includes("没有包装参考时不杜撰"));
});

test("products already named in the recipe do not get a second introduction", () => {
  const input = { ...recipe, ingredients: "测试椰奶 100ml\n茉莉茶 150ml", brandIntegration: {
    ...integration, mode: "product" as const, productName: "测试椰奶", detail: "和放凉的茉莉茶混合。"
  } };
  for (const copy of generateRecipeCopy(input)) {
    assert.equal(copy.body.split("测试椰奶").length - 1, 1);
    assert.ok(copy.body.includes(input.brandIntegration.detail));
  }
});

test("full supplied sentences are preserved without an extra product introduction", () => {
  const input = { ...recipe, brandIntegration: {
    ...integration, mode: "product" as const, productName: "测试椰奶", detail: "茶底用测试椰奶和茉莉茶混合。"
  } };
  for (const copy of generateRecipeCopy(input)) {
    assert.equal(copy.body.split("测试椰奶").length - 1, 1);
    assert.ok(copy.body.includes(input.brandIntegration.detail));
  }
});

test("partial input never invents ingredient or cooking scenes", () => {
  for (const kind of ["ingredient", "cookware"] as const) {
    const input = { ...recipe, ingredients: "", steps: "", brandIntegration: { ...integration, kind } };
    assert.ok(generateRecipePromptItems(input).every((item) => !item.content.includes("场景融入：")));
  }
  const emptyProduct = { ...recipe, brandIntegration: { ...integration, mode: "product" as const, productName: "  " } };
  assert.deepEqual(generateRecipePromptItems(emptyProduct), generateRecipePromptItems(recipe));
  assert.deepEqual(createRecipeCopyFile(emptyProduct), createRecipeCopyFile(recipe));
});
