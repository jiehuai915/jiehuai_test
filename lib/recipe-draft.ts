import type { BrandIntegration } from "./brand-integration";
import type { AudienceType } from "./nutrition";
import { ART_STYLES, DEFAULT_ART_STYLE_ID, hasRecipeDetailsInName, type ArtStyleId, type RecipeImageOptions, type SourceCard } from "./prompts";

export const DRAFT_KEY = "recipe-prompt-assistant:draft:v1";
export const TAB_DRAFT_KEY = `${DRAFT_KEY}:tab`;
export const MAX_EXTRA_IMAGES = 100;

export type RecipeDraft = {
  recipeName: string;
  ingredients: string;
  steps: string;
  flexibleTitle: string;
  flexibleDescription: string;
  styleId: ArtStyleId;
  audienceType: AudienceType;
  sourceCard: SourceCard;
  brandIntegration: BrandIntegration;
  extraCount: number;
  extraImages: RecipeImageOptions["extraFlexible"];
};

export const EMPTY_DRAFT: RecipeDraft = {
  recipeName: "", ingredients: "", steps: "", flexibleTitle: "", flexibleDescription: "",
  styleId: DEFAULT_ART_STYLE_ID, audienceType: "general",
  sourceCard: { enabled: false, attribution: "", excerpt: "" },
  brandIntegration: { enabled: false, mode: "reserve", kind: "ingredient", productName: "", detail: "" },
  extraCount: 0, extraImages: []
};

export function isExtraCount(value: unknown): value is number {
  return typeof value === "number" && Number.isSafeInteger(value) && value >= 0 && value <= MAX_EXTRA_IMAGES;
}

function record(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" ? value as Record<string, unknown> : {};
}

function string(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export function readRecipeDraft(raw: string | null): RecipeDraft {
  if (!raw) return EMPTY_DRAFT;
  let parsed: Record<string, unknown>;
  try {
    parsed = record(JSON.parse(raw));
  } catch {
    return EMPTY_DRAFT;
  }

  return normalizeRecipeDraft(parsed);
}

function normalizeRecipeDraft(parsed: Record<string, unknown>): RecipeDraft {
  const source = record(parsed.sourceCard);
  const brand = record(parsed.brandIntegration);
  const extraImages = Array.isArray(parsed.extraImages) ? parsed.extraImages.slice(0, MAX_EXTRA_IMAGES).map((value, index) => {
    const image = record(value);
    return { id: `extra-${index + 1}`, title: string(image.title), description: string(image.description) };
  }) : [];
  return {
    recipeName: string(parsed.recipeName), ingredients: string(parsed.ingredients), steps: string(parsed.steps),
    flexibleTitle: string(parsed.flexibleTitle), flexibleDescription: string(parsed.flexibleDescription),
    styleId: ART_STYLES.find(({ id }) => id === parsed.styleId)?.id ?? EMPTY_DRAFT.styleId,
    audienceType: parsed.audienceType === "baby-food" || parsed.audienceType === "fitness-light-meal" ? parsed.audienceType : "general",
    sourceCard: { enabled: source.enabled === true, attribution: string(source.attribution), excerpt: string(source.excerpt) },
    brandIntegration: {
      enabled: brand.enabled === true, mode: brand.mode === "product" ? "product" : "reserve",
      kind: brand.kind === "cookware" || brand.kind === "pairing" ? brand.kind : "ingredient",
      productName: string(brand.productName), detail: string(brand.detail)
    },
    extraCount: isExtraCount(parsed.extraCount) ? Math.min(parsed.extraCount, extraImages.length) : 0, extraImages
  };
}

export function readDraftWorkspace(raw: string | null): { draft: RecipeDraft; previous: RecipeDraft | null } {
  if (!raw) return { draft: EMPTY_DRAFT, previous: null };
  try {
    const parsed = record(JSON.parse(raw));
    if (!parsed.draft) return { draft: normalizeRecipeDraft(parsed), previous: null };
    return {
      draft: normalizeRecipeDraft(record(parsed.draft)),
      previous: parsed.previous ? normalizeRecipeDraft(record(parsed.previous)) : null
    };
  } catch {
    return { draft: EMPTY_DRAFT, previous: null };
  }
}

type PastedRecipe = Pick<RecipeDraft, "recipeName"> & Partial<Pick<RecipeDraft, "ingredients" | "steps" | "flexibleTitle" | "flexibleDescription" | "sourceCard">>;
type Section = "name" | "ingredients" | "steps" | "tips" | "attribution" | "excerpt" | "source";

const SECTIONS: Record<string, Section> = {
  "名称": "name", "菜名": "name", "菜谱名称": "name", "饮品名": "name",
  "食材": "ingredients", "食材清单": "ingredients", "食材准备": "ingredients", "配料": "ingredients",
  "制作步骤": "steps", "烹饪步骤": "steps", "制作方法": "steps", "步骤": "steps", "做法": "steps",
  "tips": "tips", "小贴士": "tips", "制作贴士": "tips",
  "最后一张出处页填写": "source", "出处页": "source", "人物 / 作品出处": "attribution", "原文摘录": "excerpt"
};

export function parsePastedRecipe(value: string): PastedRecipe | null {
  const text = value.trim();
  const lines = text.split(/\r?\n/).filter((line) => line.trim());
  if (!lines.length) return null;
  if (lines.length === 1) {
    const flattened = text.match(/^([^：:。；]{2,60}?)(处理食材\s*[:：].+)$/);
    if (!flattened) return null;
    const recipeName = flattened[1].trim();
    return recipeName && !hasRecipeDetailsInName(recipeName) ? { recipeName, steps: flattened[2] } : null;
  }

  const sections: Partial<Record<Section, string[]>> = {};
  const lead: string[] = [];
  let section: Section | undefined;
  for (const rawLine of lines) {
    const line = rawLine.trim();
    const heading = line.replace(/^#{1,6}\s+/, "").replace(/\*\*/g, "").trim();
    const match = heading.match(/^([^:：()（）]+?)(?:[（(][^）)]*[）)])?(?:\s*[:：]\s*(.+)?)?$/);
    const next = match && Object.hasOwn(SECTIONS, match[1].trim().toLowerCase()) ? SECTIONS[match[1].trim().toLowerCase()] : undefined;
    if (next) {
      section = next;
      const payload = match?.[2]?.trim();
      (sections[next] ??= []).push(...(payload ? [payload] : []));
    } else if (section) {
      (sections[section] ??= []).push(line);
    } else {
      lead.push(heading);
    }
  }

  const nameLines = sections.name ?? lead;
  const recipeName = nameLines[0];
  const ingredients = sections.ingredients?.join("\n").replace(/^[-*•]\s+/gm, "").trim();
  const steps = sections.steps?.join("\n").trim();
  if (nameLines.length !== 1 || (sections.name && lead.length) || !recipeName || hasRecipeDetailsInName(recipeName)
      || (!ingredients && !steps) || (!sections.name && !(ingredients && steps))) return null;

  const tips = sections.tips?.join("\n").trim();
  const attribution = sections.attribution?.join("\n").trim();
  const excerpt = sections.excerpt?.join("\n").trim();
  if (sections.source?.length || ((sections.source || sections.attribution || sections.excerpt) && (!attribution || !excerpt))) return null;

  return {
    recipeName,
    ...(ingredients ? { ingredients } : {}),
    ...(steps ? { steps } : {}),
    ...(tips ? { flexibleTitle: "制作贴士", flexibleDescription: tips } : {}),
    ...(attribution && excerpt ? { sourceCard: { enabled: true, attribution, excerpt } } : {})
  };
}

export function pasteConflicts(draft: RecipeDraft, pasted: PastedRecipe): boolean {
  const fields = ["recipeName", "ingredients", "steps", "flexibleTitle", "flexibleDescription"] as const;
  return pasteStartsNewRecipe(draft, pasted)
    || fields.some((field) => Boolean(pasted[field] && draft[field].trim() && pasted[field] !== draft[field]))
    || Boolean(pasted.sourceCard && (draft.sourceCard.attribution || draft.sourceCard.excerpt)
      && (draft.sourceCard.attribution !== pasted.sourceCard.attribution || draft.sourceCard.excerpt !== pasted.sourceCard.excerpt));
}

export function pasteStartsNewRecipe(draft: RecipeDraft, pasted: PastedRecipe): boolean {
  const title = draft.recipeName.trim();
  if (title) return title !== pasted.recipeName;
  return Boolean(draft.sourceCard.enabled || draft.sourceCard.attribution || draft.sourceCard.excerpt
    || draft.brandIntegration.enabled || draft.brandIntegration.productName || draft.brandIntegration.detail
    || draft.flexibleTitle || draft.flexibleDescription || draft.extraImages.some((image) => image.title || image.description));
}
