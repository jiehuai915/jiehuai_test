import assert from "node:assert/strict";
import test from "node:test";
import { EMPTY_DRAFT, MAX_EXTRA_IMAGES, isExtraCount, parsePastedRecipe, pasteConflicts, readDraftWorkspace, readRecipeDraft } from "../lib/recipe-draft";
import { generateRecipePromptItems } from "../lib/prompts";

test("pasted recipe sections go to their own fields and keep notes and attribution", () => {
  const recipe = parsePastedRecipe(`## 名称
栗子炒鸡
## **食材（2人份）**
- 去壳板栗 180g
- 鸡腿 600g
## 制作步骤
1. 煮熟板栗
2. 与鸡腿同煨
## TIPS
少翻动板栗
## 最后一张出处页填写
**人物 / 作品出处**
袁枚《随园食单》
**原文摘录：**「先将栗子煮熟，同笋下之。」`);
  assert.deepEqual(recipe, {
    recipeName: "栗子炒鸡", ingredients: "去壳板栗 180g\n鸡腿 600g", steps: "1. 煮熟板栗\n2. 与鸡腿同煨",
    flexibleTitle: "制作贴士", flexibleDescription: "少翻动板栗",
    sourceCard: { enabled: true, attribution: "袁枚《随园食单》", excerpt: "「先将栗子煮熟，同笋下之。」" }
  });
  const prompts = generateRecipePromptItems({ ...EMPTY_DRAFT, ...recipe });
  assert.doesNotMatch(prompts[0].content, /180g|煮熟板栗|少翻动板栗/);
  assert.match(prompts[1].content, /去壳板栗 180g/);
  assert.match(prompts[2].content, /煮熟板栗/);
  assert.equal(prompts[3].id, "source-card");
});

test("unstructured or ambiguous paste remains untouched, including a partial source", () => {
  for (const text of ["奶油焗饭", "奶油焗饭\n先炒再烤", "食材：米饭\n步骤：烤熟", "米饭\n食材：米\n步骤：煮熟\n出处页\n原文摘录：未知"]) {
    assert.equal(parsePastedRecipe(text), null);
  }
  assert.deepEqual(parsePastedRecipe("焦香酿香菇处理食材：香菇去蒂。调制内馅：加入鸡肉。"), {
    recipeName: "焦香酿香菇", steps: "处理食材：香菇去蒂。调制内馅：加入鸡肉。"
  });
});

test("paste requires confirmation before replacing existing draft content", () => {
  const draft = { ...EMPTY_DRAFT, recipeName: "米饭", ingredients: "米", steps: "煮熟" };
  assert.equal(pasteConflicts(draft, { recipeName: "米饭", ingredients: "米" }), false);
  assert.equal(pasteConflicts(draft, { recipeName: "米饭", steps: "炒香" }), true);
  assert.equal(pasteConflicts(draft, { recipeName: "炒饭" }), true);
  assert.equal(pasteConflicts(EMPTY_DRAFT, { recipeName: "炒饭", steps: "炒熟" }), false);
  const oldSource = { ...EMPTY_DRAFT, sourceCard: { enabled: true, attribution: "旧出处", excerpt: "旧摘录" } };
  assert.equal(pasteConflicts(oldSource, { recipeName: "炒饭", steps: "炒熟" }), true);
});

test("restoring a draft keeps optional details, including inactive extra images", () => {
  const draft = {
    ...EMPTY_DRAFT, recipeName: "红烧鱼", styleId: "colored-pencil", audienceType: "baby-food",
    sourceCard: { enabled: true, attribution: "出处", excerpt: "原文" },
    brandIntegration: { enabled: true, mode: "product", kind: "cookware", productName: "砂锅", detail: "小火焖" },
    extraCount: 0, extraImages: [{ id: "extra-1", title: "切面", description: "展示特写" }]
  };
  assert.deepEqual(readRecipeDraft(JSON.stringify(draft)), draft);
  assert.deepEqual(readDraftWorkspace(JSON.stringify({ draft, previous: { ...EMPTY_DRAFT, recipeName: "米饭" } })), {
    draft, previous: { ...EMPTY_DRAFT, recipeName: "米饭" }
  });
  assert.deepEqual(readDraftWorkspace(JSON.stringify(draft)), { draft, previous: null });
  assert.deepEqual(readRecipeDraft("{ invalid"), EMPTY_DRAFT);
  assert.deepEqual(readRecipeDraft(JSON.stringify({ extraCount: 1e8, extraImages: null, styleId: "unknown", steps: [] })), EMPTY_DRAFT);
  assert.equal(isExtraCount(MAX_EXTRA_IMAGES), true);
  assert.equal(isExtraCount(MAX_EXTRA_IMAGES + 1), false);
});

test("new drafts use natural light and saved photography or retired styles stay intact", () => {
  assert.equal(readDraftWorkspace(null).draft.styleId, "natural-light-photography");
  for (const styleId of ["commercial-food-photography", "pixel-art", "needle-felt"]) {
    const draft = readDraftWorkspace(JSON.stringify({ draft: { recipeName: "焗饭", styleId } })).draft;
    assert.equal(draft.styleId, styleId);
    const cover = generateRecipePromptItems(draft)[0].content;
    assert.doesNotMatch(cover, /受众重点：/);
  }
});

test("the standard set assigns an explicit useful fourth prompt without another input", () => {
  const prompts = generateRecipePromptItems({ ...EMPTY_DRAFT, recipeName: "米饭" });
  assert.equal(prompts.length, 4);
  assert.equal(prompts[3].title, "成品细节 Prompt");
  assert.match(prompts[3].content, /展示成品的质地、层次与摆盘/);
});
