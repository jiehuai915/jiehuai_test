export type BrandIntegration = {
  enabled: boolean;
  mode: "reserve" | "product";
  kind: "ingredient" | "cookware" | "pairing";
  productName: string;
  detail: string;
};

export function getBrandIntegration(value?: BrandIntegration): BrandIntegration | null {
  if (!value?.enabled) return null;
  const productName = value.productName.replace(/\s+/g, " ").trim();
  if (value.mode === "product" && !productName) return null;
  return { ...value, productName, detail: value.detail.trim() };
}

export function buildBrandVisualRule(integration: BrandIntegration): string {
  const scenes = {
    ingredient: "沿用原食材图的备料场景，将对应产品及相关食材安排在画面中部的自然取用位置，量杯、原料与操作痕迹围绕它衔接；包装完整可辨，与其他食材共同组成备料现场",
    cookware: "从本图已有的制作动作中选择真正需要器具的环节，将正在使用的器具安排在画面中部，保留手部操作、食材变化和生活痕迹，操作动作避开关键标识；不为了露出产品改动做法",
    pairing: "沿用本图原有内容，在画面中部组织成品与配餐的上桌关系；明确提供了餐搭产品时，让产品靠近成品且完整可辨，不改变菜谱本身的食材与步骤"
  };
  return [
    "场景融入：本组仅此图安排一个合作场景，合作产品优先位于画面中部，与菜品或实际制作动作共同形成视觉重点，其他图片不重复安排产品露出。",
    integration.mode === "reserve"
      ? "当前为无品牌预留：只优化原有场景的构图与取用关系，不虚构品牌、包装、商标或额外食材；画面应像完整的日常菜谱，不出现空白广告框或占位产品。"
      : `本次产品：${integration.productName}。它是用户补充的场景信息；食材类仅对应原清单中已有的食材，厨具类仅服务已有动作，餐搭类仅作为配餐。品牌名至多在一个自然可见位置出现一次；没有包装参考时不杜撰包装文字、认证或商标，准确包装与标识应在后期使用真实素材。`,
    scenes[integration.kind],
    integration.detail ? `用户提供的场景细节：${integration.detail}` : "",
    "露出方式：保持所选画风、原有标题和跨图一致性；产品主体完整可辨，包装正面或关键标识自然朝向镜头且清楚可见，不被其他物体遮挡，不裁切到画外；大小与真实使用场景相称，不遮住菜品、步骤或标题。无品牌预留时，沿用相关原食材或器具组织中部构图，不凭空生成产品。保持自然用光，不添加独立产品特写、聚光底座、卖点贴纸、品牌大标题、购买口令、价格或重复标识。原图食材标注保留通用名称。不得虚构亲测经历、口感结论、营养功效、适龄承诺或安全背书；不在图片上写合作招募、广告位或虚位以待。"
  ].filter(Boolean).join("\n");
}

export function buildBrandCopyLine(value?: BrandIntegration, existingContent = ""): string {
  const integration = getBrandIntegration(value);
  if (!integration || integration.mode !== "product") return "";
  const { productName, detail, kind } = integration;
  if (existingContent.includes(productName)) return detail.includes(productName) ? "" : detail;
  if (detail.includes(productName)) return detail;
  if (detail) return `${productName}，${detail}`;
  const sentence = kind === "pairing"
    ? `这次上桌，还搭配了${productName}。`
    : `这次用的是${productName}。`;
  return sentence;
}

export function buildBrandFileNote(value?: BrandIntegration): string {
  const integration = getBrandIntegration(value);
  if (!integration) return "";
  if (integration.mode === "product") {
    return "发布备注（不属于正文）\n如本篇为商业合作，请按平台要求标注商业合作。文案中的使用细节需与实际拍摄一致。";
  }
  const notes = {
    ingredient: "食材图沿用原有备料场景，在画面中部为相关食材组织自然的取用位置；实际合作时用对应产品替换原食材包装，产品完整、关键标识清楚可见。",
    cookware: "在一道原有制作步骤中，将正在使用的器具安排在画面中部，让产品和关键标识清楚可见；实际合作时替换该器具，不额外编造操作。",
    pairing: "补充图在画面中部组织成品与餐搭的位置，维持一餐的生活感；有明确的配餐产品后再加入画面，产品完整、关键标识清楚可见。"
  };
  return `拍摄备注（不属于正文）\n${notes[integration.kind]}\n预留阶段不编写品牌推荐语，图片不显示合作招募或广告占位文字。${integration.detail ? `\n场景细节：${integration.detail}` : ""}`;
}
