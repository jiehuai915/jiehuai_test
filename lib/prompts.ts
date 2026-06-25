import {
  analyzeRecipeNutrition,
  type AudienceType,
  type NutritionSummary
} from "./nutrition";

export type ArtStyleId =
  | "cinematic-surreal-animation"
  | "hand-drawn-fantasy-animation"
  | "chinese-watercolor"
  | "retro-comic"
  | "soft-3d-clay"
  | "magazine-collage-journal"
  | "commercial-food-photography";

type ArtStyle = {
  id: ArtStyleId;
  name: string;
  description: string;
  bestFor: string;
};

export type RecipePromptInput = {
  recipeName: string;
  ingredients: string;
  steps: string;
  flexibleTitle: string;
  flexibleDescription: string;
  styleId: ArtStyleId;
};

export type RecipePrompts = {
  cover: string;
  ingredients: string;
  steps: string;
  flexible: string;
};

export const ART_STYLES: ArtStyle[] = [
  {
    id: "cinematic-surreal-animation",
    name: "日系超现实光影动画风",
    description:
      "手绘水彩感 2D 动画质感，清透光影，高色彩饱和度，通透流体，电影感但控制光斑密度",
    bestFor: "清爽饮品、冰品、果茶、甜汤、带有透明液体或冰块的菜谱"
  },
  {
    id: "hand-drawn-fantasy-animation",
    name: "手绘奇幻动画风",
    description: "自然质感，温暖色调，童话感场景，柔和笔触，轻量奇幻装饰",
    bestFor: "童话感甜品、节日饮品、创意菜"
  },
  {
    id: "chinese-watercolor",
    name: "国风水彩插画风",
    description: "宣纸肌理，淡彩晕染，留白构图，东方餐桌美学，背景清雅克制",
    bestFor: "中式汤品、茶饮、养生粥、传统菜"
  },
  {
    id: "retro-comic",
    name: "复古漫画风",
    description: "粗线条，半色调网点，高对比色彩，动感构图，但主体边界必须清晰",
    bestFor: "街头小吃、炸物、辣味料理、重口味菜"
  },
  {
    id: "soft-3d-clay",
    name: "轻拟物 3D 黏土风",
    description:
      "柔软 3D 黏土质感，圆润造型，低饱和糖果色，明亮柔和灯光，食物可爱但保持可识别",
    bestFor: "儿童餐、甜品、可爱主题、亲子食谱、节日小点心"
  },
  {
    id: "magazine-collage-journal",
    name: "杂志拼贴手账风",
    description:
      "杂志拼贴排版，纸张纹理，剪贴边缘，轻复古印刷质感，手账式标注与灵感板构图",
    bestFor: "社媒封面、菜谱合集、教程灵感图、打卡内容、步骤概览"
  },
  {
    id: "commercial-food-photography",
    name: "商业美食摄影风",
    description: "真实质感，浅景深，自然光，高清细节，突出卖相，背景弱化",
    bestFor: "菜单商品图、外卖平台、正式菜谱封面"
  }
];

type PromptContext = {
  recipeName: string;
  ingredients: string;
  steps: string;
  flexibleTitle: string;
  flexibleDescription: string;
  style: ArtStyle;
  audienceType: AudienceType;
  nutritionSummary: NutritionSummary;
};

export function generateRecipePrompts(input: RecipePromptInput): RecipePrompts {
  const recipeName = input.recipeName.trim();

  if (!recipeName) {
    return {
      cover: "",
      ingredients: "",
      steps: "",
      flexible: ""
    };
  }

  const nutritionSummary = analyzeRecipeNutrition({
    recipeName,
    ingredients: input.ingredients,
    steps: input.steps
  });
  const context: PromptContext = {
    recipeName,
    ingredients: normalizeMultilineText(input.ingredients),
    steps: normalizeMultilineText(input.steps),
    flexibleTitle: input.flexibleTitle.trim(),
    flexibleDescription: normalizeMultilineText(input.flexibleDescription),
    style: getArtStyle(input.styleId),
    audienceType: nutritionSummary.audienceType,
    nutritionSummary
  };

  return {
    cover: buildCoverPrompt(context),
    ingredients: buildIngredientsPrompt(context),
    steps: buildStepsPrompt(context),
    flexible: buildFlexiblePrompt(context)
  };
}

export function recommendArtStyle(input: {
  recipeName: string;
  ingredients: string;
  steps: string;
}): ArtStyle {
  const content = `${input.recipeName} ${input.ingredients} ${input.steps}`;

  if (/(宝宝|辅食|月龄|幼儿|儿童|米糊|蒸蛋|手指食物)/.test(content)) {
    return getArtStyle("soft-3d-clay");
  }

  if (/(减脂|健身|轻食|低卡|高蛋白|沙拉|鸡胸肉|鸡胸|燕麦|藜麦|低脂)/.test(content)) {
    return getArtStyle("commercial-food-photography");
  }

  if (/[冰|冻|果茶|奶茶|椰|芒|西瓜|柠|茶|饮|汤|汁]/.test(content)) {
    return getArtStyle("cinematic-surreal-animation");
  }

  if (/[茶|粥|汤|银耳|薏米|红豆|绿豆|桂花|莲子|山药]/.test(content)) {
    return getArtStyle("chinese-watercolor");
  }

  if (/[炸|烤|辣|麻辣|烧烤|汉堡|薯条|小吃]/.test(content)) {
    return getArtStyle("retro-comic");
  }

  if (/[合集|封面|手账|拼贴|教程|打卡|灵感|菜单]/.test(content)) {
    return getArtStyle("magazine-collage-journal");
  }

  if (/[便当|早餐|蛋糕|布丁]/.test(content)) {
    return getArtStyle("soft-3d-clay");
  }

  return getArtStyle("commercial-food-photography");
}

function buildCoverPrompt(context: PromptContext): string {
  return [
    `【封面图 Prompt】`,
    `标题结构：画面正上方正中央显示「${context.recipeName}」，标题字体与菜谱内容有关联，${getTitleDecoration(context.recipeName)}；标题清晰可读，不遮挡主体。`,
    `风格描述：${context.style.name}；${context.style.description}。优先保证主体清晰，控制粒子、光斑和装饰密度，避免画面过闪。`,
    `主体描述：成品「${context.recipeName}」作为唯一视觉主角，摆放在画面中心偏下位置，轮廓明确，层次清楚，食材质感可辨认；人物如出现只能作为远景或侧后方辅助，不可抢视觉焦点。`,
    buildNutritionVisualRule(context),
    buildAudienceVisualRule(context, "cover"),
    buildConsistencyRule(context),
    `环境描述：背景保持弱化和简洁，使用低对比环境色衬托主体，不出现与菜谱无关的辅料或道具。`,
    `细节：强调真实材质、食材层次、自然光影和适度高光；冷饮可表现少量冷凝水与冰感，热食可表现轻微热气；画面必须包含一个不抢主体的小姜饼人彩蛋。`,
    `参数：完整中文 Prompt，主体清晰，背景弱化，比例为 3:4。`
  ].join("\n");
}

function buildIngredientsPrompt(context: PromptContext): string {
  return [
    `【食材图 Prompt】`,
    `标题结构：画面正上方正中央显示「食材准备」，标题字体与食材内容有关联，可融入小份量食材、气泡、水滴、餐具或木纹元素；标题清晰可读。`,
    `风格描述：${context.style.name}；${context.style.description}。整体干净、可读、少噪声，避免过度炫光。`,
    `主体描述：严格完整呈现用户提供的所需食材：${context.ingredients || "用户未提供食材，画面不得自行添加未提及食材"}。食材按类别分区摆放，层次清楚，大小关系自然，每种食材都能被识别。`,
    buildAudienceVisualRule(context, "ingredients"),
    buildConsistencyRule(context),
    `环境描述：使用简洁桌面或料理台作为背景，背景纹理弱化，不能抢食材主体。`,
    `细节：在食材旁使用黑色手写体中文名称标注，严禁使用指向线；强调食材的新鲜度、形状、颜色和材质差异；画面必须包含一个不遮挡食材的小姜饼人彩蛋。`,
    `参数：完整中文 Prompt，严格忠于用户食材，不添加未提及辅料，比例为 3:4。`
  ].join("\n");
}

function buildStepsPrompt(context: PromptContext): string {
  return [
    `【步骤图 Prompt】`,
    `标题结构：画面正上方正中央显示「制作步骤」，标题字体与制作动作有关联，可融入搅拌轨迹、蒸汽、水滴、容器轮廓或食材切面元素；标题清晰可读。`,
    `风格描述：${context.style.name}；${context.style.description}。画面以直观动作为核心，光效克制，背景弱化。`,
    `主体描述：视觉化呈现用户提供的制作步骤：${context.steps || "用户未提供步骤，画面不得自行编造制作流程"}。将步骤拆解为 3-4 个连续动作画面，动作顺序必须符合用户输入，不更改制作逻辑；最后一步的成品外观必须与封面图中的成品保持一致。`,
    buildAudienceVisualRule(context, "steps"),
    buildConsistencyRule(context),
    `环境描述：使用清晰的厨房台面、杯具、锅具或容器环境，中景视角，能同时看清手部动作、食材状态和容器变化。`,
    `细节：每个动作旁用黑色手写体标注对应中文步骤；只在最后一步添加一个点睛标签「大功告成！」；人物只允许出现手部或局部辅助动作；画面必须包含一个不抢主体的小姜饼人彩蛋。`,
    `参数：完整中文 Prompt，动作清晰，步骤可读，比例为 3:4。`
  ].join("\n");
}

function buildFlexiblePrompt(context: PromptContext): string {
  const title = context.flexibleTitle || "灵活补充图";
  const description =
    context.flexibleDescription ||
    "用户未提供灵活图说明，画面不得自行编造额外制作环节或未提及内容";

  return [
    `【${title} Prompt】`,
    `标题结构：画面正上方正中央显示「${title}」，标题字体必须与该环节内容有关联，可融入与动作、食材、器具或液体状态相关的元素；标题清晰可读，不遮挡主体。`,
    `风格描述：${context.style.name}；${context.style.description}。画面保持干净，优先保证主体清晰，避免过度炫光和装饰噪声。`,
    `主体描述：围绕「${title}」这个灵活补充环节进行视觉化呈现：${description}。画面必须忠于用户输入，不添加未提及的辅料、器具或制作逻辑；如果该环节会影响成品，变化结果必须能自然衔接到步骤图最后一步和封面图成品。`,
    buildAudienceVisualRule(context, "flexible"),
    buildConsistencyRule(context),
    `环境描述：根据该环节选择简洁的料理台、案板、容器、锅具、杯具或操作台环境；背景弱化，不能抢主体。`,
    `细节：突出该环节最关键的动作、食材状态和材质变化，例如揉面、醒发、调酱、腌制、裹粉、摆盘或冷藏成型；人物只允许作为手部或局部辅助动作出现；画面必须包含一个不抢主体的小姜饼人彩蛋。`,
    `参数：完整中文 Prompt，适合作为独立的一张补充流程图，比例为 3:4。`
  ].join("\n");
}

function buildNutritionVisualRule(
  context: PromptContext
): string {
  const nutrition = context.nutritionSummary;

  if (!nutrition.hasNutrition) {
    return "营养信息：食材重量或营养库暂未匹配，封面不展示具体营养数值，也不要编造热量、蛋白质、碳水、脂肪或膳食纤维数值。";
  }

  const compactNutritionText = nutrition.per100Text.replace("营养估算角标：", "");

  if (context.audienceType === "fitness-light-meal") {
    return `营养信息：仅在封面图右上角加入一个简洁营养角标，最多显示 2 行；角标内容只保留「估算 / 每100g」「${compactNutritionText}」。`;
  }

  if (context.audienceType === "baby-food") {
    return `营养信息：仅在封面图右上角加入一个小型「估算营养」角标，最多显示 2 行；角标内容只保留「估算 / 每100g」「${compactNutritionText}」。`;
  }

  return `营养信息：如画面空间允许，仅在封面图右上角以低优先级小字显示一个简洁角标，内容只保留「估算 / 每100g」「${compactNutritionText}」。`;
}

function buildAudienceVisualRule(
  context: PromptContext,
  promptType: "cover" | "ingredients" | "steps" | "flexible"
): string {
  if (context.audienceType === "baby-food") {
    if (promptType === "steps" || promptType === "flexible") {
      return "受众重点：这是儿童辅食内容，突出软烂、细腻、易吞咽、少盐少糖和充分熟化的处理方式；需要避免整颗坚果、大块硬质食材、过黏拉丝或可能造成噎食的形态；本图不要添加儿童辅食小标签、营养角标或额外提示文案。";
    }

    if (promptType === "cover") {
      return "受众重点：这是儿童辅食内容，画面要传达适龄、温和、安全和食材新鲜感；仅封面可用小标签表现「少盐少糖」「质地细腻」「软烂易吞咽」，避免过度调味、尖锐餐具和危险小硬块。";
    }

    return "受众重点：这是儿童辅食内容，画面要传达适龄、温和、安全和食材新鲜感，避免过度调味、尖锐餐具和危险小硬块；本图不要添加儿童辅食小标签、营养角标或额外提示文案。";
  }

  if (context.audienceType === "fitness-light-meal") {
    if (promptType === "steps" || promptType === "flexible") {
      return "受众重点：这是健身减脂轻食内容，突出低油烹饪、清晰分量、蛋白质来源、蔬菜比例和主食来源；避免厚重酱汁、油炸质感和高油高糖暗示；本图不要添加营养标签、健康图标或额外提示文案。";
    }

    if (promptType === "cover") {
      return "受众重点：这是健身减脂轻食内容，画面要突出高蛋白、低负担、蔬菜充足和餐盘结构清楚；仅封面可用简洁图标表现蛋白质、碳水、脂肪和膳食纤维，不要让营养标签遮挡食物。";
    }

    return "受众重点：这是健身减脂轻食内容，画面要突出高蛋白、低负担、蔬菜充足和餐盘结构清楚；本图不要添加营养标签、健康图标或额外提示文案。";
  }

  return "受众重点：保持通用菜谱表达，营养信息只作为辅助参考，不要把画面强行做成儿童辅食或健身减脂主题。";
}


function buildConsistencyRule(context: PromptContext): string {
  return `跨图一致性规则：本图必须与同一组菜谱的封面图、食材图、步骤图和灵活补充图保持一致；统一使用「${context.recipeName}」的同一套食材清单、成品形态、主要颜色、器皿/餐具、摆盘方向、光线色温、线条质感和画风；不得把食物画成另一种菜品，不得改变关键食材的颜色、形状、数量关系和最终呈现方式；食材准备图中出现的食材必须能在步骤图和封面成品中对应出现；步骤图最后一步的成品必须与封面图成品看起来是同一份食物。`;
}

function getArtStyle(styleId: ArtStyleId): ArtStyle {
  return ART_STYLES.find((style) => style.id === styleId) ?? ART_STYLES[0];
}

function normalizeMultilineText(value: string): string {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("；");
}

function getTitleDecoration(recipeName: string): string {
  if (recipeName.includes("汤") || recipeName.includes("饮")) {
    return "可融入清透水纹、少量气泡、冰块、水滴和流体线条";
  }

  if (recipeName.includes("茶") || recipeName.includes("奶")) {
    return "可融入茶汤涟漪、奶泡、杯缘光斑和柔和蒸汽";
  }

  if (recipeName.includes("果") || recipeName.includes("汁")) {
    return "可融入水果切片、果肉色块、少量气泡和清爽水滴";
  }

  return "可融入与菜品或饮品相关的食材、器皿、手绘线条和少量光斑";
}
