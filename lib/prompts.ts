export type ArtStyleId =
  | "cinematic-surreal-animation"
  | "japanese-fresh-animation"
  | "hand-drawn-fantasy-animation"
  | "chinese-watercolor"
  | "retro-comic"
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
  styleId: ArtStyleId;
};

export type RecipePrompts = {
  cover: string;
  ingredients: string;
  steps: string;
  sauce: string;
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
    id: "japanese-fresh-animation",
    name: "日系清新动画风",
    description: "明亮自然光，柔和色彩，干净构图，温暖治愈氛围，低噪声背景",
    bestFor: "家常菜、儿童餐、治愈系甜点、轻食"
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
  style: ArtStyle;
};

export function generateRecipePrompts(input: RecipePromptInput): RecipePrompts {
  const recipeName = input.recipeName.trim();

  if (!recipeName) {
    return {
      cover: "",
      ingredients: "",
      steps: "",
      sauce: ""
    };
  }

  const context: PromptContext = {
    recipeName,
    ingredients: normalizeMultilineText(input.ingredients),
    steps: normalizeMultilineText(input.steps),
    style: getArtStyle(input.styleId)
  };

  return {
    cover: buildCoverPrompt(context),
    ingredients: buildIngredientsPrompt(context),
    steps: buildStepsPrompt(context),
    sauce: buildSaucePrompt(context)
  };
}

export function recommendArtStyle(input: {
  recipeName: string;
  ingredients: string;
  steps: string;
}): ArtStyle {
  const content = `${input.recipeName} ${input.ingredients} ${input.steps}`;

  if (/[冰|冻|果茶|奶茶|椰|芒|西瓜|柠|茶|饮|汤|汁]/.test(content)) {
    return getArtStyle("cinematic-surreal-animation");
  }

  if (/[茶|粥|汤|银耳|薏米|红豆|绿豆|桂花|莲子|山药]/.test(content)) {
    return getArtStyle("chinese-watercolor");
  }

  if (/[炸|烤|辣|麻辣|烧烤|汉堡|薯条|小吃]/.test(content)) {
    return getArtStyle("retro-comic");
  }

  if (/[儿童|便当|早餐|轻食|沙拉|蛋糕|布丁]/.test(content)) {
    return getArtStyle("japanese-fresh-animation");
  }

  return getArtStyle("commercial-food-photography");
}

function buildCoverPrompt(context: PromptContext): string {
  return [
    `【封面图 Prompt】`,
    `标题结构：画面正上方正中央显示「${context.recipeName}」，标题字体与菜谱内容有关联，${getTitleDecoration(context.recipeName)}；标题清晰可读，不遮挡主体。`,
    `风格描述：${context.style.name}；${context.style.description}。优先保证主体清晰，控制粒子、光斑和装饰密度，避免画面过闪。`,
    `主体描述：成品「${context.recipeName}」作为唯一视觉主角，摆放在画面中心偏下位置，轮廓明确，层次清楚，食材质感可辨认；人物如出现只能作为远景或侧后方辅助，不可抢视觉焦点。`,
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
    `主体描述：视觉化呈现用户提供的制作步骤：${context.steps || "用户未提供步骤，画面不得自行编造制作流程"}。将步骤拆解为 3-4 个连续动作画面，动作顺序必须符合用户输入，不更改制作逻辑。`,
    `环境描述：使用清晰的厨房台面、杯具、锅具或容器环境，中景视角，能同时看清手部动作、食材状态和容器变化。`,
    `细节：每个动作旁用黑色手写体标注对应中文步骤；只在最后一步添加一个点睛标签「大功告成！」；人物只允许出现手部或局部辅助动作；画面必须包含一个不抢主体的小姜饼人彩蛋。`,
    `参数：完整中文 Prompt，动作清晰，步骤可读，比例为 3:4。`
  ].join("\n");
}

function buildSaucePrompt(context: PromptContext): string {
  return [
    `【酱汁/汤底图 Prompt】`,
    `标题结构：画面正上方正中央显示「酱汁汤底」，标题字体与液体、调味或容器内容有关联，可融入流体线条、汤勺、杯壁水滴或轻微搅拌纹理；标题清晰可读。`,
    `风格描述：${context.style.name}；${context.style.description}。画面保持干净，强调液体层次和调味质感，避免过度反光。`,
    `主体描述：只呈现用户提供食材中与酱汁、汤底、调味、液体或蘸料有关的内容：${context.ingredients || "用户未提供相关内容，画面不得自行添加酱汁或调味品"}。如果用户输入中没有明确酱汁或汤底，则以“未提供酱汁/汤底信息”的可视化备忘标签呈现，不编造额外配方。`,
    `环境描述：使用简洁料理台、透明杯、调味碗或小锅作为辅助环境，背景弱化，不能抢主体。`,
    `细节：表现液体透明度、浓稠度、分层、气泡或搅拌痕迹；所有可见调味元素必须来自用户输入；画面必须包含一个不抢主体的小姜饼人彩蛋。`,
    `参数：完整中文 Prompt，严格忠于用户输入，不添加未提及调味或辅料，比例为 3:4。`
  ].join("\n");
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
