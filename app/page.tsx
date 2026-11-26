"use client";

import { useEffect, useRef, useState, type ClipboardEvent } from "react";
import {
  ART_STYLES,
  ART_STYLE_GROUPS,
  type RecipePromptItem,
  type RecipeImageOptions,
  type ArtStyleId,
  type SourceCard,
  generateRecipePromptItems,
  getRecipeImageCount,
  hasRecipeDetailsInName,
  recommendArtStyle
} from "@/lib/prompts";
import { createRecipeCopyFile, type RecipeCopyFile } from "@/lib/recipe-copy";
import type { BrandIntegration } from "@/lib/brand-integration";
import type { AudienceType } from "@/lib/nutrition";
import { DRAFT_KEY, TAB_DRAFT_KEY, EMPTY_DRAFT, MAX_EXTRA_IMAGES, isExtraCount, parsePastedRecipe, pasteConflicts, pasteStartsNewRecipe, readDraftWorkspace, type RecipeDraft } from "@/lib/recipe-draft";

const AUDIENCE_OPTIONS: { value: AudienceType; label: string }[] = [
  { value: "general", label: "通用" },
  { value: "baby-food", label: "儿童辅食" },
  { value: "fitness-light-meal", label: "健身轻食" }
];

const SAMPLE_RECIPE = {
  recipeName: "夏日椰芒冻冻茶",
  ingredients:
    "芒果 80g\n椰奶 100ml\n茉莉绿茶 150ml\n白凉粉 10g\n白砂糖 20g\n冰块 适量",
  steps:
    "1. 将白凉粉与白砂糖加入热水中搅拌溶解，倒入容器冷藏至凝固成果冻\n2. 将芒果切成小块备用\n3. 将茉莉绿茶放凉备用\n4. 将凝固好的果冻切块放入杯中\n5. 加入芒果块与冰块\n6. 倒入椰奶与茉莉绿茶混合液\n7. 轻轻搅拌即可饮用",
  flexibleTitle: "冻冻制作",
  flexibleDescription:
    "白凉粉与白砂糖加入热水中搅拌溶解，倒入容器冷藏至凝固成果冻，再切成小块备用"
};

export default function HomePage() {
  const [draft, setDraft] = useState<RecipeDraft>(EMPTY_DRAFT);
  const [restored, setRestored] = useState(false);
  const [draftSave, setDraftSave] = useState<"saved" | "separate" | "failed">("failed");
  const lastSaved = useRef<string | null | undefined>(undefined);
  const [undoDraft, setUndoDraft] = useState<RecipeDraft | null>(null);
  const [pendingPaste, setPendingPaste] = useState<ReturnType<typeof parsePastedRecipe>>(null);
  const [replaceFromBlank, setReplaceFromBlank] = useState(false);
  const [confirmNew, setConfirmNew] = useState(false);
  const [previousStyle, setPreviousStyle] = useState<ArtStyleId | null>(null);
  const [styleFeedback, setStyleFeedback] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [generated, setGenerated] = useState<{
    draft: RecipeDraft;
    prompts: RecipePromptItem[];
    copyFile: RecipeCopyFile;
  } | null>(null);
  const [feedback, setFeedback] = useState<{ result: typeof generated; id: string; message: string } | null>(null);
  const [expandedPrompts, setExpandedPrompts] = useState<string[]>(["cover"]);
  const [customCount, setCustomCount] = useState(false);
  const { recipeName, ingredients, steps, flexibleTitle, flexibleDescription, sourceCard, brandIntegration, styleId, audienceType, extraCount, extraImages } = draft;
  const imageOptions: RecipeImageOptions = {
    includeCover: true,
    includeIngredients: true,
    includeSteps: true,
    includeFlexible: true,
    stepsPerImage: null,
    primarySupplementLast: true,
    extraFlexible: extraImages.slice(0, extraCount)
  };
  const imageCount = getRecipeImageCount(steps, extraCount ? imageOptions : undefined);
  const recipeNameHasDetails = hasRecipeDetailsInName(recipeName);
  const recoverablePaste = recipeNameHasDetails ? parsePastedRecipe(recipeName) : null;
  const [firstTitle, ...titleLines] = recipeName.trim().split(/\r?\n/);
  const manualSplit = firstTitle && titleLines.length > 0 && !hasRecipeDetailsInName(firstTitle)
    ? { recipeName: firstTitle.trim(), steps: titleLines.join("\n").trim() } : null;
  const hasRecipeInput = Boolean(recipeName.trim() || ingredients.trim() || steps.trim());
  const hasDraft = hasRecipeInput || Boolean(flexibleTitle || flexibleDescription || sourceCard.attribution || sourceCard.excerpt
    || brandIntegration.productName || brandIntegration.detail || extraImages.some((image) => image.title || image.description));
  const imageSummary = [extraCount ? `${imageCount} 张` : "", sourceCard.enabled ? "出处页" : "",
    audienceType === "general" ? "" : AUDIENCE_OPTIONS.find(({ value }) => value === audienceType)?.label,
    brandIntegration.enabled ? "品牌融入" : ""].filter(Boolean).join(" · ");

  useEffect(() => {
    try {
      const shared = localStorage.getItem(DRAFT_KEY);
      const tab = sessionStorage.getItem(TAB_DRAFT_KEY);
      lastSaved.current = tab && tab !== shared ? undefined : shared;
      const saved = readDraftWorkspace(tab ?? shared);
      setDraft((current) => current === EMPTY_DRAFT ? saved.draft : current);
      setUndoDraft(saved.previous);
    } catch {
      // Editing still works when browser storage is unavailable.
    }
    setRestored(true);
  }, []);

  useEffect(() => {
    if (!restored) return;
    try {
      const shared = localStorage.getItem(DRAFT_KEY);
      const next = JSON.stringify({ draft, previous: undoDraft });
      if (shared !== lastSaved.current && shared !== next) {
        sessionStorage.setItem(TAB_DRAFT_KEY, next);
        setDraftSave("separate");
        return;
      }
      if (shared !== next) localStorage.setItem(DRAFT_KEY, next);
      lastSaved.current = next;
      sessionStorage.removeItem(TAB_DRAFT_KEY);
      setDraftSave("saved");
    } catch {
      setDraftSave("failed");
    }
  }, [draft, undoDraft, restored]);

  useEffect(() => {
    if (!feedback) return;
    const timer = window.setTimeout(() => setFeedback(null), 2600);
    return () => window.clearTimeout(timer);
  }, [feedback]);

  function updateDraft(changes: Partial<RecipeDraft>) {
    setDraft((current) => ({ ...current, ...changes }));
    setSubmitError("");
  }

  function setSourceCard(value: SourceCard | ((current: SourceCard) => SourceCard)) {
    updateDraft({ sourceCard: typeof value === "function" ? value(sourceCard) : value });
  }

  function replaceDraft(next: RecipeDraft) {
    if (hasDraft || !undoDraft) setUndoDraft(draft);
    setDraft(next);
    setPendingPaste(null);
    setConfirmNew(false);
    setCustomCount(false);
    setPreviousStyle(null);
    setStyleFeedback("");
    setSubmitError("");
  }

  function applyRecipePaste(pasted: NonNullable<typeof pendingPaste>, currentName = recipeName) {
    setConfirmNew(false);
    if (pasteConflicts({ ...draft, recipeName: currentName }, pasted)) {
      setPendingPaste(pasted);
      setReplaceFromBlank(!currentName);
    }
    else replaceDraft({ ...draft, ...pasted });
  }

  function handleNamePaste(event: ClipboardEvent<HTMLTextAreaElement>) {
    const pasted = parsePastedRecipe(event.clipboardData.getData("text/plain"));
    if (!pasted) return;
    event.preventDefault();
    applyRecipePaste(pasted);
  }

  function adoptTabDraft() {
    try {
      const shared = localStorage.getItem(DRAFT_KEY);
      lastSaved.current = shared;
      setUndoDraft(readDraftWorkspace(shared).draft);
    } catch {
      setDraftSave("failed");
    }
  }

  function handleGenerate() {
    if (recipeNameHasDetails || pendingPaste) return;
    if (!recipeName.trim()) return setSubmitError("请填写菜名。");
    if (brandIntegration.enabled && brandIntegration.mode === "product" && !brandIntegration.productName.trim()) return setSubmitError("请填写合作产品名称。");
    if (sourceCard.enabled && (!sourceCard.attribution.trim() || !sourceCard.excerpt.trim())) return setSubmitError("请填写出处和原文摘录。");
    const prompts = generateRecipePromptItems(draft, extraCount ? imageOptions : undefined);
    const copyFile = createRecipeCopyFile(draft);
    if (!copyFile || !prompts.length) return;

    setGenerated({
      draft,
      prompts,
      copyFile
    });
    setFeedback(null);
  }

  function handleDownloadCopy() {
    if (!generated) return;
    const url = URL.createObjectURL(new Blob([generated.copyFile.content], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = generated.copyFile.fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setFeedback({ result: generated, id: "download", message: "已发起下载" });
  }

  function handleRecommendStyle() {
    const recommendedStyle = recommendArtStyle({
      recipeName,
      ingredients,
      steps,
      audienceType
    });

    if (previousStyle) {
      updateDraft({ styleId: previousStyle });
      setPreviousStyle(null);
      setStyleFeedback("已恢复原画风");
    } else if (recommendedStyle.id !== styleId) {
      setPreviousStyle(styleId);
      updateDraft({ styleId: recommendedStyle.id });
      setStyleFeedback("已应用推荐画风");
    } else {
      setStyleFeedback("当前已是推荐画风");
    }
  }

  function handleUseSample() {
    replaceDraft({ ...EMPTY_DRAFT, ...SAMPLE_RECIPE });
  }

  async function handleCopyPrompt(id: string, content: string) {
    let copied = false;
    try {
      await navigator.clipboard.writeText(content);
      copied = true;
    } catch {
      const focused = document.activeElement;
      const textarea = document.createElement("textarea");
      textarea.value = content;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      textarea.readOnly = true;
      document.body.appendChild(textarea);
      try {
        textarea.focus({ preventScroll: true });
        textarea.select();
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      } finally {
        textarea.remove();
        if (focused instanceof HTMLElement) focused.focus({ preventScroll: true });
      }
    }
    if (!copied) setExpandedPrompts((current) => current.includes(id) ? current : [...current, id]);
    setFeedback({ result: generated, id, message: copied ? "已复制" : "无法复制，可选中下方文字" });
  }

  const promptItems = generated?.prompts ?? [];
  const activeFeedback = feedback?.result === generated ? feedback : null;

  function handleExtraCountChange(count: number) {
    if (!isExtraCount(count)) return;
    const additions = Array.from({ length: Math.max(0, count - extraImages.length) }, (_, index) => ({
      id: `extra-${extraImages.length + index + 1}`, title: "", description: ""
    }));
    updateDraft({ extraCount: count, extraImages: additions.length ? [...extraImages, ...additions] : extraImages });
  }

  return (
    <main className="app-shell">
      <section className="workspace-header">
        <div>
          <p className="eyebrow">Recipe Prompt Assistant</p>
          <h1>菜谱提示词生成助手</h1>
        </div>
        <div className="header-actions">
          {restored && !hasDraft && <button className="secondary-button" type="button" onClick={handleUseSample}>填入示例</button>}
          {hasDraft && !confirmNew && <button className="secondary-button" type="button" onClick={() => {
            setPendingPaste(null);
            setConfirmNew(true);
          }}>新建菜谱</button>}
          {confirmNew && <>
            <button className="secondary-button" type="button" onClick={() => replaceDraft({ ...EMPTY_DRAFT, styleId })}>清空并新建</button>
            <button className="secondary-button" type="button" onClick={() => setConfirmNew(false)}>取消</button>
          </>}
          {undoDraft && !confirmNew && <button className="secondary-button" type="button" onClick={() => {
            setDraft(undoDraft);
            setUndoDraft(draft);
            setPendingPaste(null);
            setCustomCount(false);
            setPreviousStyle(null);
            setStyleFeedback("");
            setSubmitError("");
          }}>恢复上一份</button>}
        </div>
      </section>

      <section className="workspace-grid">
        <form className="input-panel" onInvalid={(event) => {
          const details = (event.target as HTMLElement).closest("details");
          if (details) details.open = true;
        }} onSubmit={(event) => {
          event.preventDefault();
          handleGenerate();
        }}>
          <div className="field-group">
            <label htmlFor="recipeName">菜名 / 饮品名</label>
            <textarea
              id="recipeName"
              className="recipe-name-input"
              rows={titleLines.length > 0 ? 4 : 1}
              value={recipeName}
              onChange={(event) => updateDraft({ recipeName: event.target.value })}
              onPaste={handleNamePaste}
              placeholder="菜名，或粘贴整份菜谱"
              required
              aria-invalid={recipeNameHasDetails || undefined}
              aria-describedby={recipeNameHasDetails ? "recipeNameError" : undefined}
            />
            {recipeNameHasDetails && <>
              <p className="field-error" id="recipeNameError" role="alert">
                {recoverablePaste || manualSplit ? "这段内容包含多行或做法。" : "菜名里混入了食材或步骤。请只保留菜名，其余内容放到对应的栏里。"}
              </p>
              {recoverablePaste && !pendingPaste && <button className="secondary-button" type="button"
                onClick={() => applyRecipePaste(recoverablePaste, "")}>拆分到对应栏</button>}
              {!recoverablePaste && manualSplit && !pendingPaste && <button className="secondary-button" type="button"
                onClick={() => applyRecipePaste(manualSplit, "")}>首行作菜名，其余作步骤</button>}
            </>}
            {pendingPaste && <div className="inline-actions" role="group" aria-label="替换草稿">
              <button className="secondary-button" type="button" onClick={() => {
                const isNewRecipe = pasteStartsNewRecipe({ ...draft, recipeName: replaceFromBlank ? "" : recipeName }, pendingPaste);
                replaceDraft({ ...(isNewRecipe ? { ...EMPTY_DRAFT, styleId } : draft), ...pendingPaste });
              }}>用粘贴内容替换草稿</button>
              <button className="secondary-button" type="button" onClick={() => setPendingPaste(null)}>取消</button>
            </div>}
          </div>

          <div className="field-group">
            <label htmlFor="ingredients">食材</label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(event) => updateDraft({ ingredients: event.target.value })}
              placeholder="每行一个食材，例如：芒果 80g"
              rows={5}
            />
          </div>

          <div className="field-group">
            <label htmlFor="steps">制作步骤</label>
            <textarea
              id="steps"
              value={steps}
              onChange={(event) => updateDraft({ steps: event.target.value })}
              placeholder="例如：1. 洗净切好"
              rows={5}
            />
          </div>

          <div className="style-row">
            <div className="field-group">
              <label htmlFor="artStyle">绘画风格</label>
              <select id="artStyle" value={styleId} onChange={(event) => {
                updateDraft({ styleId: event.target.value as ArtStyleId });
                setPreviousStyle(null);
                setStyleFeedback("");
              }}>
                {ART_STYLE_GROUPS.map((group) => (
                  <optgroup key={group} label={group}>
                    {ART_STYLES.filter((style) => style.group === group).map((style) => (
                      <option key={style.id} value={style.id}>{style.name}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            {(hasRecipeInput || previousStyle) && (
              <button className="secondary-button" type="button" onClick={handleRecommendStyle}>
                {previousStyle ? "撤销推荐" : "推荐风格"}
              </button>
            )}
          </div>
          {styleFeedback && <p className="quiet-status" role="status">{styleFeedback}</p>}

          <details className="advanced-settings">
            <summary>更多设置{imageSummary && <span>{imageSummary}</span>}</summary>
            <div className="advanced-fields">
              <div className="field-group">
                <label htmlFor="extraImageCount">额外补充图</label>
                <select id="extraImageCount" value={customCount || extraCount > 10 ? "custom" : String(extraCount)} onChange={(event) => {
                  const choice = event.target.value;
                  setCustomCount(choice === "custom");
                  if (choice !== "custom") handleExtraCountChange(Number(choice));
                }}>
                  <option value="0">不追加 · 共 4 张</option>
                  {Array.from({ length: 10 }, (_, index) => {
                    const count = index + 1;
                    return <option value={count} key={count}>追加 {count} 张 · 共 {4 + count} 张</option>;
                  })}
                  <option value="custom">自定义数量</option>
                </select>
              </div>
              {(customCount || extraCount > 10) && <div className="field-group">
                <label htmlFor="customExtraCount">追加张数（最多 {MAX_EXTRA_IMAGES} 张）</label>
                <input id="customExtraCount" type="number" min={0} max={MAX_EXTRA_IMAGES} step={1} value={extraCount}
                  onChange={(event) => handleExtraCountChange(Number(event.target.value))} />
              </div>}
              <fieldset className="choice-group">
                <legend>最后一张图</legend>
                <div className="segmented-options">
                  <label>
                    <input type="radio" name="lastImage" checked={!sourceCard.enabled}
                      onChange={() => setSourceCard((current) => ({ ...current, enabled: false }))} />
                    <span>成品补充图</span>
                  </label>
                  <label>
                    <input type="radio" name="lastImage" checked={sourceCard.enabled}
                      onChange={() => setSourceCard((current) => ({ ...current, enabled: true }))} />
                    <span>名人出处页</span>
                  </label>
                </div>

                {sourceCard.enabled ? (
                  <div className="image-options">
                    <div className="field-group">
                      <label htmlFor="sourceAttribution">人物 / 作品出处</label>
                      <input id="sourceAttribution" value={sourceCard.attribution} required
                        placeholder="例如：苏轼《东坡羹颂》"
                        onChange={(event) => setSourceCard((current) => ({ ...current, attribution: event.target.value }))} />
                    </div>
                    <div className="field-group">
                      <label htmlFor="sourceExcerpt">原文摘录</label>
                      <textarea id="sourceExcerpt" value={sourceCard.excerpt} rows={3} required
                        placeholder="输入已核实的原文短摘"
                        onChange={(event) => setSourceCard((current) => ({ ...current, excerpt: event.target.value }))} />
                    </div>
                  </div>
                ) : (
                  <details className="optional-detail">
                    <summary>自定补充图{(flexibleTitle || flexibleDescription) && <span>已填写</span>}</summary>
                    <div className="image-options">
                    <div className="field-group">
                      <label htmlFor="flexibleTitle">灵活图名称</label>
                      <input
                        id="flexibleTitle"
                        value={flexibleTitle}
                        onChange={(event) => updateDraft({ flexibleTitle: event.target.value })}
                        placeholder="例如：和面、酱汁调制、腌制、摆盘"
                      />
                    </div>
                    <div className="field-group">
                      <label htmlFor="flexibleDescription">灵活图说明</label>
                      <textarea
                        id="flexibleDescription"
                        value={flexibleDescription}
                        onChange={(event) => updateDraft({ flexibleDescription: event.target.value })}
                        placeholder="描述这张补充图要表现的环节，例如：面粉加水揉成光滑面团，盖上保鲜膜醒发"
                        rows={5}
                      />
                    </div>
                    </div>
                  </details>
                )}
              </fieldset>

              {extraCount > 0 && (
                <section className="supplement-section" aria-label="补充图明细">
                  {imageOptions.extraFlexible.map((item, index) => (
                    <div className="supplement-fields" key={item.id}>
                      <h3>补充图 {index + 1}</h3>
                      <div className="field-group">
                        <label htmlFor={`${item.id}-title`}>补充图 {index + 1} 名称</label>
                        <input id={`${item.id}-title`} value={item.title} placeholder="例如：酱汁质地、成品切面"
                          onChange={(event) => {
                            const title = event.target.value;
                            updateDraft({ extraImages: extraImages.map((extra) => extra.id === item.id ? { ...extra, title } : extra) });
                          }} />
                      </div>
                      <div className="field-group">
                        <label htmlFor={`${item.id}-description`}>补充图 {index + 1} 说明</label>
                        <textarea id={`${item.id}-description`} value={item.description} rows={3}
                          placeholder="描述这张图要表现的内容"
                          onChange={(event) => {
                            const description = event.target.value;
                            updateDraft({ extraImages: extraImages.map((extra) => extra.id === item.id ? { ...extra, description } : extra) });
                          }} />
                      </div>
                    </div>
                  ))}
                </section>
              )}

              <fieldset className="choice-group brand-options">
                <legend>品牌融入</legend>
                <label className="brand-toggle">
                  <input type="checkbox" checked={brandIntegration.enabled}
                    onChange={(event) => updateDraft({ brandIntegration: { ...brandIntegration, enabled: event.target.checked } })} />
                  <span>加入合作场景</span>
                </label>
                {brandIntegration.enabled && (
                  <div className="image-options">
                    <div className="field-group">
                      <label htmlFor="brandMode">合作阶段</label>
                      <select id="brandMode" value={brandIntegration.mode}
                        onChange={(event) => updateDraft({ brandIntegration: { ...brandIntegration, mode: event.target.value as BrandIntegration["mode"] } })}>
                        <option value="reserve">预留合作场景</option>
                        <option value="product">已有合作产品</option>
                      </select>
                    </div>
                    <div className="field-group">
                      <label htmlFor="brandKind">融入类型</label>
                      <select id="brandKind" value={brandIntegration.kind}
                        onChange={(event) => updateDraft({ brandIntegration: { ...brandIntegration, kind: event.target.value as BrandIntegration["kind"] } })}>
                        <option value="ingredient">食材 · 备料场景</option>
                        <option value="cookware">厨具 · 制作场景</option>
                        <option value="pairing">餐搭 · 上桌场景</option>
                      </select>
                    </div>
                    {brandIntegration.mode === "product" && (
                      <div className="field-group">
                        <label htmlFor="brandProduct">品牌 / 产品名称（必填）</label>
                      <input id="brandProduct" value={brandIntegration.productName} required
                          placeholder="例如：本次使用的椰奶、奶锅或餐搭饮品"
                        onChange={(event) => updateDraft({ brandIntegration: { ...brandIntegration, productName: event.target.value } })} />
                      </div>
                    )}
                    <div className="field-group">
                      <label htmlFor="brandDetail">{brandIntegration.mode === "reserve" ? "场景细节（选填）" : "实际用法 / 使用感受（选填）"}</label>
                      <textarea id="brandDetail" rows={3} value={brandIntegration.detail}
                        placeholder={brandIntegration.mode === "reserve" ? "例如：椰奶放在画面中部，量杯放在旁边，保留备料时的生活感" : "例如：这次用来调椰奶茶底，和放凉的茉莉茶混合"}
                        onChange={(event) => updateDraft({ brandIntegration: { ...brandIntegration, detail: event.target.value } })} />
                    </div>
                  </div>
                )}
              </fieldset>

              <fieldset className="choice-group">
                <legend>内容规则</legend>
                <div className="segmented-options">
                  {AUDIENCE_OPTIONS.map(({ value, label }) => (
                    <label key={value}>
                      <input type="radio" name="audienceType" value={value}
                        checked={audienceType === value} onChange={() => updateDraft({ audienceType: value })} />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

            </div>
          </details>

          {submitError && <p className="field-error" role="alert">{submitError}</p>}
          <button className="primary-button" type="submit" disabled={recipeNameHasDetails || Boolean(pendingPaste)}>
            生成 {imageCount} 张提示词
          </button>
          {generated && generated.draft === draft && <p className="quiet-status" role="status">已生成 {promptItems.length} 张 · <a href="#recipe-results">查看结果</a></p>}
          {restored && hasDraft && <p className="quiet-status">{draftSave === "saved" ? "草稿已保存在本机" : draftSave === "separate"
            ? "另一窗口有更新；本窗口草稿仅保留到关闭标签页" : "本机草稿未能保存"}</p>}
          {draftSave === "separate" && <button className="secondary-button" type="button" onClick={adoptTabDraft}>保存本窗口草稿 · 保留另一份</button>}
        </form>

        <section className="output-panel" id="recipe-results" aria-label="生成结果" tabIndex={-1}>
          <div className="output-heading">
            <div>
              <h2>{generated?.draft.recipeName.trim() || "生成结果"}</h2>
              {generated && <p className="quiet-status" role="status">{generated.draft === draft ? "已生成" : "草稿已修改 · 显示上次结果"}</p>}
            </div>
            <div className="output-actions">
              {generated && <>
                <button className="secondary-button" type="button" onClick={handleDownloadCopy}>
                  下载小红书文案
                </button>
                <span>{promptItems.length} 张</span>
              </>}
            </div>
          </div>

          {activeFeedback?.id === "download" && <p className="quiet-status download-status" role="status">{activeFeedback.message}</p>}
          {promptItems.length === 0 ? (
            <div className="empty-state">
              暂无生成结果
            </div>
          ) : (
            <div className="prompt-list">
              {promptItems.map(({ id, title, content }, index) => {
                const expanded = expandedPrompts.includes(id);
                const copyStatus = activeFeedback?.id === id ? activeFeedback.message : "";
                return (
                <article className="prompt-block" key={id}>
                  <div className="prompt-block-header">
                    <h3><button className="prompt-toggle" type="button" aria-expanded={expanded}
                      aria-controls={`prompt-${id}`} onClick={() => setExpandedPrompts((current) => expanded
                        ? current.filter((value) => value !== id) : [...current, id])}>
                      <span>{index + 1}. {title.replace(/ Prompt$/, "")}</span>
                      <span className="prompt-chevron" aria-hidden="true">⌄</span>
                    </button></h3>
                    <button
                      className="copy-button"
                      type="button"
                      aria-label={`${copyStatus === "已复制" ? "已复制" : "复制"} ${title.replace(/ Prompt$/, "")}`}
                      onClick={() => handleCopyPrompt(id, content)}
                    >
                      {copyStatus === "已复制" ? "已复制" : "复制"}
                    </button>
                  </div>
                  <p className={`quiet-status copy-status${!copyStatus || copyStatus === "已复制" ? " sr-only" : ""}`} role="status">{copyStatus}</p>
                  <pre id={`prompt-${id}`} hidden={!expanded}>{content}</pre>
                </article>
                );
              })}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
