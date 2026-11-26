import { splitRecipeSteps, type RecipePromptInput } from "./prompts";
import { buildBrandCopyLine, buildBrandFileNote } from "./brand-integration";

type RecipeCopyInput = Pick<RecipePromptInput, "recipeName" | "ingredients" | "steps" | "brandIntegration" | "audienceType">;

export type RecipeCopy = {
  style: string;
  title: string;
  body: string;
  hashtags: string[];
};

export type RecipeCopyFile = {
  fileName: string;
  content: string;
};

function isDrinkRecipe(recipeName: string): boolean {
  return /(?:茶|饮|果汁|咖啡|拿铁|奶昔|饮品|饮料|气泡水)(?:配方|做法)?(?:$|[（(])/.test(recipeName);
}

function getTopicTags(input: RecipeCopyInput): string[] {
  const content = `${input.recipeName} ${input.ingredients}`;
  if (input.audienceType === "baby-food" || (!input.audienceType && /宝宝|辅食|月龄|幼儿|儿童/.test(content))) return ["宝宝辅食", "辅食制作"];
  if (input.audienceType === "fitness-light-meal" || (!input.audienceType && /轻食|健身|减脂|沙拉|鸡胸|藜麦|低脂/.test(content))) return ["轻食", "轻食搭配"];
  if (isDrinkRecipe(input.recipeName)) return ["自制饮品", "饮品配方"];
  if (/猎奇|创意|反差/.test(input.recipeName)) return ["创意料理", "创意食谱"];
  if (/西餐|意面|披萨|牛排|烩饭|pasta|steak|pizza/i.test(input.recipeName)) return ["西餐", "西餐食谱"];
  if (/甜品|蛋糕|布丁|慕斯|饼干/.test(input.recipeName)) return ["自制甜品", "甜品食谱"];
  return ["家常菜", "料理记录"];
}

function splitIngredients(value: string): string[] {
  const items: string[] = [];
  let start = 0;
  let parentheses = 0;
  for (let index = 0; index < value.length; index += 1) {
    const char = value[index];
    if (char === "（" || char === "(") parentheses += 1;
    if (char === "）" || char === ")") parentheses = Math.max(0, parentheses - 1);
    if (char === "\n" || (parentheses === 0 && (char === "；" || char === ";"))) {
      items.push(value.slice(start, index).trim());
      start = index + 1;
      parentheses = 0;
    }
  }
  items.push(value.slice(start).trim());
  return items.filter(Boolean);
}

export function generateRecipeCopy(input: RecipeCopyInput): RecipeCopy[] {
  const recipeName = input.recipeName.replace(/\s+/g, " ").trim();
  if (!recipeName) return [];

  const ingredients = splitIngredients(input.ingredients);
  const steps = splitRecipeSteps(input.steps)
    .map((step) => step.replace(/^(?:\d+[.、)）](?!\d)|第[一二三四五六七八九十\d]+步[：:]?)\s*/, "").trim())
    .filter(Boolean);
  const recipeSections = [
    ingredients.length ? `食材准备\n${ingredients.map((line) => `- ${line}`).join("\n")}` : "",
    steps.length ? `制作步骤\n${steps.map((step, index) => `${index + 1}. ${step}`).join("\n")}` : ""
  ].filter(Boolean);
  const dishTag = Array.from(recipeName.replace(/[^\p{L}\p{N}]/gu, "")).slice(0, 24).join("");
  const commonTags = [dishTag, ...getTopicTags({ ...input, recipeName }), "菜谱分享", "今天吃什么", "在家做饭"].filter(Boolean);
  const isDrink = isDrinkRecipe(recipeName);
  const brandLine = buildBrandCopyLine(input.brandIntegration, `${recipeName}\n${input.ingredients}\n${input.steps}`);
  if (brandLine) {
    const position = input.brandIntegration?.kind === "ingredient" && ingredients.length ? 1 : recipeSections.length;
    recipeSections.splice(position, 0, brandLine);
  }

  const drafts = [
    {
      style: "日常分享风",
      title: `${recipeName}，今天就${isDrink ? "喝" : "吃"}这个`,
      opening: `今天的菜单里，想给${recipeName}留个位置。\n日常${isDrink ? "喝点" : "吃点"}什么，有时候不用想得太复杂，从一道想尝试的配方开始就好。`,
      closing: "先把这份配方记下来，下次想换换菜单时，就多一个选择。",
      tag: "日常菜单"
    },
    {
      style: "实用教程风",
      title: `${recipeName}｜食材和做法整理好了`,
      opening: `${recipeName}的配方笔记。${steps.length ? "\n制作顺序整理在下面，动手时可以逐条对照。" : ingredients.length ? "\n把食材清单放在手边，准备时方便逐项对照。" : ""}`,
      closing: steps.length ? "制作时留意每一步的处理方式，按配方里的顺序完成。" : "把它加入下一次的料理备选清单。",
      tag: "食谱笔记"
    },
    {
      style: "食欲种草风",
      title: `${recipeName}，给${isDrink ? "日常饮品" : "餐桌"}换个花样`,
      opening: `${isDrink ? "下一杯" : "下一餐"}的灵感有了：${recipeName}。\n喜欢这个搭配的话，不妨把它放进待做清单，给自己的菜单添一点新鲜感。`,
      closing: `这次的菜单主角，就留给${recipeName}。`,
      tag: "美食灵感"
    }
  ];

  return drafts.map((draft) => ({
    style: draft.style,
    title: draft.title,
    body: [draft.opening, ...recipeSections, draft.closing].join("\n\n"),
    hashtags: [...new Set([...commonTags, draft.tag])].map((tag) => `#${tag}`)
  }));
}

export function createRecipeCopyFile(input: RecipeCopyInput): RecipeCopyFile | null {
  const copies = generateRecipeCopy(input);
  if (!copies.length) return null;

  const recipeName = input.recipeName.replace(/\s+/g, " ").trim();
  const safeName = Array.from(recipeName.replace(/[<>:"/\\|?*\u0000-\u001f\u007f]/g, "_")
    .replace(/^[. ]+|[. ]+$/g, "")).slice(0, 56).join("") || "菜谱";
  const sections = copies.map((copy, index) => [
    `${index + 1}. ${copy.style}`,
    `标题：${copy.title}`,
    `正文：\n${copy.body}`,
    `话题：${copy.hashtags.join(" ")}`
  ].join("\n\n"));
  const brandNote = buildBrandFileNote(input.brandIntegration);

  return {
    fileName: `${safeName}_小红书文案.txt`,
    // The UTF-8 BOM keeps Chinese text readable in desktop text editors.
    content: `\uFEFF小红书文案｜${recipeName}\n\n${sections.join("\n\n====================\n\n")}${brandNote ? `\n\n====================\n\n${brandNote}` : ""}\n`
  };
}
