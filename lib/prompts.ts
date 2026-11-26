import type { AudienceType } from "./nutrition";
import { buildBrandVisualRule, getBrandIntegration, type BrandIntegration } from "./brand-integration";

export type ArtStyleId =
  | "cinematic-surreal-animation"
  | "hand-drawn-fantasy-animation"
  | "chinese-watercolor"
  | "retro-comic"
  | "soft-3d-clay"
  | "magazine-collage-journal"
  | "commercial-food-photography"
  | "natural-light-photography"
  | "colored-pencil"
  | "monochrome-line-art"
  | "needle-felt"
  | "low-poly-3d"
  | "flat-infographic"
  | "pixel-art";

export const ART_STYLE_GROUPS = ["写实摄影", "手绘插画", "立体手作", "平面设计"] as const;

type ArtStyle = {
  id: ArtStyleId;
  name: string;
  group: (typeof ART_STYLE_GROUPS)[number];
  description: string;
  bestFor: string;
};

// Preserve legacy callers; all modes now use the same general recipe flow.
export type RecipeMode = "general" | "curious" | "western";

export type RecipePromptItem = {
  id: string;
  title: string;
  content: string;
};

export type RecipeImageOptions = {
  includeCover: boolean;
  includeIngredients: boolean;
  includeSteps: boolean;
  includeFlexible: boolean;
  stepsPerImage: number | null;
  extraFlexible: { id: string; title: string; description: string }[];
  primarySupplementLast?: boolean;
};

export type SourceCard = {
  enabled: boolean;
  attribution: string;
  excerpt: string;
  context?: string;
};

export type RecipePromptInput = {
  recipeName: string;
  ingredients: string;
  steps: string;
  flexibleTitle: string;
  flexibleDescription: string;
  styleId: ArtStyleId;
  audienceType?: AudienceType;
  // Kept for legacy callers; covers no longer display nutrition information.
  showNutritionBadge?: boolean;
  mode?: RecipeMode;
  brandIntegration?: BrandIntegration;
  sourceCard?: SourceCard;
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
    group: "手绘插画",
    description:
      "清透的 2D 动画背景美术，通透流体与有层次的明亮光影，色彩鲜明但控制光斑密度；保持二维绘制感，不混用摄影镜头或 3D 模型质感",
    bestFor: "清爽饮品、冰品、果茶、甜汤、带有透明液体或冰块的菜谱"
  },
  {
    id: "hand-drawn-fantasy-animation",
    name: "手绘奇幻动画风",
    group: "手绘插画",
    description: "童话绘本式 2D 手绘，粉彩与不透明水粉笔触，温暖配色，柔和轮廓，少量故事感环境；以可见手绘笔触区别于摄影与光影动画，不添加虚构食材",
    bestFor: "童话感甜品、节日饮品、创意菜"
  },
  {
    id: "chinese-watercolor",
    name: "国风水彩插画风",
    group: "手绘插画",
    description: "宣纸肌理，水墨勾线与淡彩湿画晕染，轻透色层与留白构图，东方餐桌美学；保持纸上水彩媒介，不混用油亮摄影材质或立体模型",
    bestFor: "中式汤品、茶饮、养生粥、传统菜"
  },
  {
    id: "retro-comic",
    name: "复古漫画风",
    group: "平面设计",
    description: "粗墨线轮廓，半色调印刷网点，少量高对比专色，漫画式动感构图；保持平面印刷质感，不使用真实摄影或光滑 3D 渲染，主体边界清晰",
    bestFor: "街头小吃、炸物、辣味料理、重口味菜"
  },
  {
    id: "soft-3d-clay",
    name: "轻拟物 3D 黏土风",
    group: "立体手作",
    description:
      "哑光软黏土 3D 模型，圆润形体，轻微手工压痕，柔和接触阴影与低饱和糖果色；食物造型可辨认，不混用真实食品表皮、毛毡纤维或镜面塑料",
    bestFor: "儿童餐、甜品、可爱主题、亲子食谱、节日小点心"
  },
  {
    id: "magazine-collage-journal",
    name: "杂志拼贴手账风",
    group: "平面设计",
    description:
      "真实食物剪贴与纸片拼贴组合，清晰剪裁边缘，轻微纸层投影，杂志版式和手账式标注；装饰克制，步骤图保持顺序可读，不堆叠无关贴纸",
    bestFor: "社媒封面、菜谱合集、教程灵感图、打卡内容、步骤概览"
  },
  {
    id: "commercial-food-photography",
    name: "商业美食摄影风",
    group: "写实摄影",
    description: "专业商业食物摄影，受控侧光与柔光，高分辨率真实食材纹理，精致摆盘与适度浅景深；食物主体完整清楚，不使用插画描边或模型材质",
    bestFor: "菜单商品图、外卖平台、正式菜谱封面"
  },
  {
    id: "natural-light-photography",
    name: "自然光家常摄影风",
    group: "写实摄影",
    description: "窗边柔和自然光，生活化俯拍或平视，真实家常分量与朴素餐具，低对比自然色彩，食物与操作细节清楚；不过度商业修饰，不混用插画或 3D 模型",
    bestFor: "日常家常菜、早餐、便当、轻食、烘焙记录"
  },
  {
    id: "colored-pencil",
    name: "彩铅食谱插画风",
    group: "手绘插画",
    description: "纸上彩色铅笔绘制，可见细密排线、叠色与纸纹，柔和色彩，保留食材轮廓和切面细节；不使用水彩晕染、摄影景深或立体渲染",
    bestFor: "家庭食谱、烘焙、蔬果、亲子料理、温馨早餐"
  },
  {
    id: "monochrome-line-art",
    name: "黑白线描食谱风",
    group: "手绘插画",
    description: "白底黑墨线稿，清晰轮廓与少量排线明暗，食材结构准确，留白充足；仅用黑白灰，不添加彩色填充、摄影纹理或厚重阴影",
    bestFor: "简洁菜谱、食材清单、步骤教程、可打印食谱"
  },
  {
    id: "needle-felt",
    name: "羊毛毡手作风",
    group: "立体手作",
    description: "以羊毛毡模型表现可识别的食物造型，可见细密短绒纤维与针毡手作纹理，柔和棚拍光和接触阴影；不用光滑黏土或真实食品表皮材质",
    bestFor: "可爱甜品、亲子食谱、节日点心、童趣料理"
  },
  {
    id: "low-poly-3d",
    name: "低多边形 3D 风",
    group: "立体手作",
    description: "低多边形 3D 几何建模，清楚可见的平面切面与硬朗转折，简洁色块，正交视角与柔和投影；保留食物识别特征，不使用圆润黏土、毛绒纤维或写实贴图",
    bestFor: "创意料理、几何甜点、趣味便当、游戏感食谱"
  },
  {
    id: "flat-infographic",
    name: "扁平信息图风",
    group: "平面设计",
    description: "二维矢量感扁平图形，有限色板，几何化但可辨认的食物轮廓，清晰网格和独立文字区；不使用渐变、摄影纹理或 3D 阴影，不增加输入以外的数据和标签",
    bestFor: "步骤教程、轻食搭配、食材比例、清晰易读的菜谱"
  },
  {
    id: "pixel-art",
    name: "复古像素游戏风",
    group: "平面设计",
    description: "复古游戏像素美术，可见方形像素网格、阶梯状边缘、有限色板与少量像素抖动；食物造型可辨认，不使用平滑渐变、抗锯齿插画或真实摄影，中文标注独立清晰排版",
    bestFor: "趣味食谱、创意料理、游戏主题、节日小食"
  }
];

type PromptContext = {
  recipeName: string;
  ingredients: string;
  steps: string;
  flexibleTitle: string;
  flexibleDescription: string;
  style: ArtStyle;
  stepCount: number;
  audienceType: AudienceType;
  stepPage?: { index: number; total: number };
};

export function hasRecipeDetailsInName(recipeName: string): boolean {
  return /[\r\n]/.test(recipeName.trim())
    || /(?:食材(?:清单|准备)?|处理食材|配料|制作步骤|烹饪步骤|制作方法|步骤|做法)\s*[:：]/.test(recipeName)
    || /(?:1[.．、)）]|一、)\s*\p{Script=Han}[\s\S]*?(?:2[.．、)）]|二、)\s*\p{Script=Han}/u.test(recipeName)
    || /(?:[。；]\s*[^。；\s]+){2}/.test(recipeName);
}

export function generateRecipePrompts(input: RecipePromptInput): RecipePrompts {
  const items = generateRecipePromptItems(input);
  if (items.length === 0) {
    return {
      cover: "",
      ingredients: "",
      steps: "",
      flexible: ""
    };
  }

  return {
    cover: items[0].content,
    ingredients: items[1].content,
    steps: items[2].content,
    flexible: items[3].content
  };
}

function createPromptContext(input: RecipePromptInput): PromptContext {
  return {
    recipeName: input.recipeName.trim(),
    ingredients: normalizeMultilineText(input.ingredients),
    steps: normalizeMultilineText(input.steps),
    stepCount: splitRecipeSteps(input.steps).length,
    flexibleTitle: input.flexibleTitle.trim(),
    flexibleDescription: normalizeMultilineText(input.flexibleDescription),
    style: getArtStyle(input.styleId),
    audienceType: input.audienceType ?? "general"
  };
}

function getStepGroups(steps: string, stepsPerImage: number | null): string[][] {
  const items = splitRecipeSteps(steps);
  if (stepsPerImage === null) return [items];
  const size = Number.isFinite(stepsPerImage) ? Math.max(1, Math.min(6, Math.floor(stepsPerImage))) : 4;
  if (items.length === 0) return [[]];
  const groups: string[][] = [];
  for (let index = 0; index < items.length; index += size) {
    groups.push(items.slice(index, index + size));
  }
  return groups;
}

export function getRecipeImageCount(steps: string, options?: RecipeImageOptions): number {
  if (!options) return 4;
  return Number(options.includeCover) + Number(options.includeIngredients)
    + (options.includeSteps ? getStepGroups(steps, options.stepsPerImage).length : 0)
    + Number(options.includeFlexible) + options.extraFlexible.length;
}

export function generateRecipePromptItems(input: RecipePromptInput, options?: RecipeImageOptions): RecipePromptItem[] {
  if (!input.recipeName.trim() || hasRecipeDetailsInName(input.recipeName)) return [];
  const context = createPromptContext(input);
  if (!options) {
    return applyBrandIntegration([
      { id: "cover", title: "封面 Prompt", content: buildCoverPrompt(context) },
      { id: "ingredients", title: "食材 Prompt", content: buildIngredientsPrompt(context) },
      { id: "steps", title: "步骤 Prompt", content: buildStepsPrompt(context) },
      buildPrimarySupplementPrompt(context, input.sourceCard)
    ], input);
  }
  const items: RecipePromptItem[] = [];
  if (options.includeCover) items.push({ id: "cover", title: "封面 Prompt", content: buildCoverPrompt(context) });
  if (options.includeIngredients) items.push({ id: "ingredients", title: "食材 Prompt", content: buildIngredientsPrompt(context) });
  if (options.includeSteps) {
    const groups = getStepGroups(input.steps, options.stepsPerImage);
    groups.forEach((group, index) => {
      const title = groups.length === 1 ? "步骤 Prompt" : `步骤 ${index + 1}/${groups.length} Prompt`;
      items.push({
        id: `steps-${index + 1}`,
        title,
        content: buildStepsPrompt({ ...context, steps: group.join("；"), stepCount: group.length, stepPage: { index: index + 1, total: groups.length } })
      });
    });
  }
  const primary = options.includeFlexible ? buildPrimarySupplementPrompt(context, input.sourceCard) : null;
  if (primary && !options.primarySupplementLast) items.push(primary);
  options.extraFlexible.forEach((item, index) => {
    const title = item.title.trim() || `补充图 ${index + 1}`;
    items.push({ id: item.id, title: `${title} Prompt`, content: buildFlexiblePrompt({ ...context, flexibleTitle: title, flexibleDescription: normalizeMultilineText(item.description) }) });
  });
  if (primary && options.primarySupplementLast) items.push(primary);
  return applyBrandIntegration(items, input);
}

function buildPrimarySupplementPrompt(context: PromptContext, sourceCard?: SourceCard): RecipePromptItem {
  if (sourceCard?.enabled) {
    return {
      id: "source-card",
      title: "出处彩蛋 Prompt",
      content: buildSourceCardPrompt(context, sourceCard)
    };
  }

  const title = context.flexibleTitle || (context.flexibleDescription ? "灵活补充图" : "成品细节");
  const description = context.flexibleDescription || "近距离展示成品的质地、层次与摆盘，不添加未提供的食材或步骤";
  return { id: "flexible", title: `${title} Prompt`, content: buildFlexiblePrompt({ ...context, flexibleTitle: title, flexibleDescription: description }) };
}

function applyBrandIntegration(items: RecipePromptItem[], input: RecipePromptInput): RecipePromptItem[] {
  const integration = getBrandIntegration(input.brandIntegration);
  if (!integration) return items;
  const target = integration.kind === "pairing"
    ? items.find((item) => item.id === "flexible") ?? items.find((item) => item.id.startsWith("extra-"))
    : items.find((item) => {
      if (integration.kind === "ingredient") return item.id === "ingredients" && input.ingredients.trim();
      return (item.id === "steps" || item.id.startsWith("steps-")) && input.steps.trim();
    });
  // Omit the scene if the relevant image was excluded; never move it onto the cover.
  if (!target) return items;
  return items.map((item) => {
    if (item.id !== target.id) return item;
    const lines = item.content.split("\n");
    lines.splice(lines.length - 1, 0, buildBrandVisualRule(integration));
    return { ...item, content: lines.join("\n") };
  });
}

export function recommendArtStyle(input: {
  recipeName: string;
  ingredients: string;
  steps: string;
  audienceType?: AudienceType;
  mode?: RecipeMode;
}): ArtStyle {
  if (input.audienceType === "baby-food") return getArtStyle("soft-3d-clay");
  if (input.audienceType === "fitness-light-meal") return getArtStyle("commercial-food-photography");

  const content = `${input.recipeName} ${input.ingredients} ${input.steps}`;

  const explicitStyles: { pattern: RegExp; id: ArtStyleId }[] = [
    { pattern: /像素|pixel|8-bit/i, id: "pixel-art" },
    { pattern: /低多边形|low.poly|几何/i, id: "low-poly-3d" },
    { pattern: /羊毛毡|毛毡|needle.felt/i, id: "needle-felt" },
    { pattern: /彩铅|colored.pencil/i, id: "colored-pencil" },
    { pattern: /黑白线描|线描|line.art/i, id: "monochrome-line-art" },
    { pattern: /扁平|信息图|infographic/i, id: "flat-infographic" },
    { pattern: /家常|家常菜|自然光|日常记录/, id: "natural-light-photography" }
  ];
  const explicitStyle = explicitStyles.find(({ pattern }) => pattern.test(content));
  if (explicitStyle) return getArtStyle(explicitStyle.id);

  if (/(冰饮|冰品|冻冻|果茶|奶茶|椰|芒果|西瓜|柠檬|饮品|果汁)/.test(content)) {
    return getArtStyle("cinematic-surreal-animation");
  }

  if (/(茶|粥|汤|银耳|薏米|红豆|绿豆|桂花|莲子|山药)/.test(content)) {
    return getArtStyle("chinese-watercolor");
  }

  if (/(猎奇|反差|创意搭配|炸|辣|麻辣|烧烤|汉堡|薯条|小吃)/.test(content)) {
    return getArtStyle("retro-comic");
  }

  if (/(合集|手账|拼贴|打卡|灵感)/.test(content)) {
    return getArtStyle("magazine-collage-journal");
  }

  if (/(便当|早餐|蛋糕|布丁)/.test(content)) {
    return getArtStyle("soft-3d-clay");
  }

  return getArtStyle("commercial-food-photography");
}

function buildCoverPrompt(context: PromptContext): string {
  const coverTitle = getCoverTitle(context.recipeName);

  return [
    `【封面图 Prompt】`,
    `标题结构：画面正上方正中央只显示中文菜名「${coverTitle}」，不出现英文菜名、英文副标题、英文标签或其他英文文字；标题字体与所选画风相协调，清晰可读，不遮挡主体。`,
    `风格描述：${context.style.name}；${context.style.description}。优先保证主体清晰，控制粒子、光斑和装饰密度，避免画面过闪。`,
    `主体描述：成品「${coverTitle}」作为唯一视觉主角，摆放在画面中心偏下位置，轮廓明确，层次清楚，食材质感可辨认；人物如出现只能作为远景或侧后方辅助，不可抢视觉焦点。`,
    `信息限制：封面不展示食材克数、重量、用量、热量、卡路里或其他营养数值，不添加营养角标、营养图标或数据表格；食材用量仅在食材图中标注，封面以菜名和成品为主。`,
    buildAudienceVisualRule(context, "cover"),
    buildConsistencyRule(context, coverTitle),
    `环境描述：背景保持弱化和简洁，使用低对比环境色衬托主体，不出现与菜谱无关的辅料或道具。`,
    `细节：严格使用所选画风的材质与明暗语言表现食材层次，不强制使用写实摄影光影；冷饮可表现少量冷凝水与冰感，热食可表现轻微热气；画面必须包含一个不抢主体的小姜饼人彩蛋。`,
    `参数：完整中文 Prompt，主体清晰，背景弱化，比例为 3:4。`
  ].filter(Boolean).join("\n");
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
  ].filter(Boolean).join("\n");
}

export function splitRecipeSteps(steps: string): string[] {
  return steps
    .split(/\r?\n|[；;。]|(?:^|\s+)(?:\d+[.、)）](?!\d)|第[一二三四五六七八九十\d]+步[：:]?)/)
    .map((step) => step.trim())
    .filter(Boolean);
}

export function recommendFlexibleImage(input: {
  recipeName: string;
  ingredients: string;
  steps: string;
  mode?: RecipeMode;
}): { title: string; description: string } | null {
  if (!input.recipeName.trim() || !input.steps.trim()) return null;
  const content = `${input.recipeName} ${input.steps}`;
  if (/(蒸蛋|蛋羹|米糊|辅食|宝宝|果泥|菜泥)/.test(content)) {
    return { title: "质地展示", description: "展示输入菜谱实际完成后的食物质地与切面，忠于制作步骤中的细腻度和颗粒大小，不额外改变制作方式或添加适龄承诺。" };
  }
  if (/(轻食|健身|减脂|沙拉)/.test(content)) {
    return { title: "装盘分区", description: "将输入食材中的蛋白质来源、蔬菜与主食按实际用量分区摆放，展示成品餐盘结构，不编造比例或添加营养标签。" };
  }
  const candidates = [
    { pattern: /揉面|和面|醒发/, title: "面团状态" },
    { pattern: /调酱|酱汁|料汁/, title: "酱汁调制" },
    { pattern: /腌制|腌渍/, title: "腌制过程" },
    { pattern: /冷藏|凝固|成型/, title: "冷藏成型" }
  ];
  for (const candidate of candidates) {
    const step = splitRecipeSteps(input.steps).find((item) => candidate.pattern.test(item));
    if (step) return { title: candidate.title, description: `聚焦这个已提供的环节：${step}。展示关键动作与食材状态，保留原有时间和温度，不添加额外食材或步骤。` };
  }
  return { title: "成品质地", description: "近距离展示输入菜谱的成品外观、食材层次与摆盘，沿用原有食材和制作结果，不添加额外环节。" };
}

function buildStepsPrompt(context: PromptContext): string {
  const isLastPage = !context.stepPage || context.stepPage.index === context.stepPage.total;
  const title = context.stepPage && context.stepPage.total > 1 ? `制作步骤 ${context.stepPage.index}/${context.stepPage.total}` : "制作步骤";
  const layout = context.stepCount === 0
    ? "未提供步骤，不生成动作分格，也不编造制作流程。"
    : `安排 ${Math.min(context.stepCount, 6)} 个连续动作画面${context.stepCount > 6 ? "，仅合并相邻且可连贯呈现的动作，全部原始步骤必须在分格或对应文字中有所体现" : "，按输入步骤逐格呈现，不凑格或添加动作"}；保留用户提供的时间、温度和关键状态，不编造数值。`;
  return [
    `【${title}图 Prompt】`,
    `标题结构：画面正上方正中央显示「${title}」，标题字体与制作动作有关联，可融入搅拌轨迹、蒸汽、水滴、容器轮廓或食材切面元素；标题清晰可读。`,
    `风格描述：${context.style.name}；${context.style.description}。画面以直观动作为核心，光效克制，背景弱化。`,
    `主体描述：视觉化呈现用户提供的制作步骤：${context.steps || "用户未提供步骤，画面不得自行编造制作流程"}。${layout}动作顺序必须符合用户输入，不更改制作逻辑；${isLastPage ? "最后一步的成品外观必须与同组封面成品保持一致" : "本图仅呈现当前阶段的食材状态，自然衔接下一张步骤图，不提前呈现成品"}。`,
    buildAudienceVisualRule(context, "steps"),
    buildConsistencyRule(context),
    `环境描述：使用清晰的厨房台面、杯具、锅具或容器环境，中景视角，能同时看清手部动作、食材状态和容器变化。`,
    `细节：每个动作旁用黑色手写体标注对应中文步骤；${isLastPage && context.stepCount > 0 ? "只在最后一步添加一个点睛标签「大功告成！」" : "本图不添加完成标签"}；人物只允许出现手部或局部辅助动作；画面必须包含一个不抢主体的小姜饼人彩蛋。`,
    `参数：完整中文 Prompt，动作清晰，步骤可读，比例为 3:4。`
  ].filter(Boolean).join("\n");
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
  ].filter(Boolean).join("\n");
}

function buildSourceCardPrompt(context: PromptContext, sourceCard: SourceCard): string {
  const attribution = normalizeMultilineText(sourceCard.attribution) || "用户未提供出处，画面不得编造作者、作品或年代";
  const excerpt = normalizeMultilineText(sourceCard.excerpt) || "用户未提供原文摘录，画面不得编造引文";

  return [
    `【出处彩蛋 Prompt】`,
    `版式规则：画面不显示标题、人物姓名标签、英文标题或其他装饰性大字；只保留原文和出处。`,
    `风格描述：${context.style.name}；${context.style.description}。作为整组菜谱的安静收尾页，保留与封面一致的色温、器皿和食物形态。`,
    `主体描述：以成品「${getCoverTitle(context.recipeName)}」的安静食物静物为主体，可在画面下方或侧边呈现小份成品、相关食材或餐具；中上部保留清晰文字区。`,
    `出处文字：准确呈现用户提供的原文摘录「${excerpt}」；署名／出处显示为「${attribution}」；不额外添加解释、年份、人物关系或其他说明。文字简洁可读，不堆成资料卡。`,
    `信息边界：这是一张出处彩蛋页，不是制作步骤图或人物海报；不画人物肖像、身影、签名、粉丝元素、队徽或专属服饰，不把来源中的“提到”“写下”“收录”擅自改写成“最爱”“亲授”或品牌推荐。`,
    buildConsistencyRule(context, getCoverTitle(context.recipeName)),
    `环境描述：使用干净的餐桌静物和现代菜谱排版感，可用一本合上的书或抽象纸张暗示阅读感；不伪造古籍扫描页，不使用卷轴、印章、泛黄破纸等套路化历史元素。`,
    `细节：食物仍需真实可辨，出处文字是第二视觉重点；不添加营养数据、克数、价格、合作标签或其他无关信息；画面必须包含一个不抢主体的小姜饼人彩蛋。`,
    `参数：完整中文 Prompt，信息层级清楚，适合作为最后一张出处彩蛋图，比例为 3:4。`
  ].join("\n");
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
      return "受众重点：这是健身减脂轻食内容，通过食物和摆盘突出清爽、蔬菜充足和餐盘结构清楚，不添加营养标签或营养图标。";
    }

    return "受众重点：这是健身减脂轻食内容，画面要突出高蛋白、低负担、蔬菜充足和餐盘结构清楚；本图不要添加营养标签、健康图标或额外提示文案。";
  }

  return "";
}


function buildConsistencyRule(context: PromptContext, recipeName = context.recipeName): string {
  return `跨图一致性规则：本图必须与同一组菜谱的其余图片保持一致；统一使用「${recipeName}」的同一套食材清单、成品形态、主要颜色、器皿/餐具、摆盘方向、光线色温、线条质感和画风；不得把食物画成另一种菜品，不得改变关键食材的颜色、形状、数量关系和最终呈现方式；食材在各图中保持对应，全部步骤图连续衔接，只有最后一张步骤图展示最终成品。`;
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

function getCoverTitle(recipeName: string): string {
  const chineseOnly = recipeName
    .replace(/[A-Za-z0-9][A-Za-z0-9 .,'’&/()\-]*/g, " ")
    .replace(/[|｜]/g, " ")
    .replace(/\s+/g, " ")
    .replace(/^[\s,，、:：;；—-]+|[\s,，、:：;；—-]+$/g, "")
    .trim();

  return chineseOnly || "本日食谱";
}
