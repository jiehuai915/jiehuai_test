"use client";

import { useState } from "react";
import {
  ART_STYLES,
  type RecipePrompts,
  type ArtStyleId,
  generateRecipePrompts,
  recommendArtStyle
} from "@/lib/prompts";

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
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [flexibleTitle, setFlexibleTitle] = useState("灵活补充图");
  const [flexibleDescription, setFlexibleDescription] = useState("");
  const [styleId, setStyleId] = useState<ArtStyleId>(ART_STYLES[0].id);
  const [prompts, setPrompts] = useState<RecipePrompts | null>(null);
  const [copiedTitle, setCopiedTitle] = useState("");
  const selectedStyle = ART_STYLES.find((style) => style.id === styleId);

  function handleGenerate() {
    setPrompts(
      generateRecipePrompts({
        recipeName,
        ingredients,
        steps,
        flexibleTitle,
        flexibleDescription,
        styleId
      })
    );
  }

  function handleRecommendStyle() {
    const recommendedStyle = recommendArtStyle({
      recipeName,
      ingredients,
      steps
    });

    setStyleId(recommendedStyle.id);
  }

  function handleUseSample() {
    setRecipeName(SAMPLE_RECIPE.recipeName);
    setIngredients(SAMPLE_RECIPE.ingredients);
    setSteps(SAMPLE_RECIPE.steps);
    setFlexibleTitle(SAMPLE_RECIPE.flexibleTitle);
    setFlexibleDescription(SAMPLE_RECIPE.flexibleDescription);
    setStyleId(
      recommendArtStyle({
        recipeName: SAMPLE_RECIPE.recipeName,
        ingredients: SAMPLE_RECIPE.ingredients,
        steps: SAMPLE_RECIPE.steps
      }).id
    );
    setPrompts(null);
    setCopiedTitle("");
  }

  async function handleCopyPrompt(title: string, content: string) {
    try {
      await navigator.clipboard.writeText(content);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = content;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopiedTitle(title);
    window.setTimeout(() => setCopiedTitle(""), 1600);
  }

  const promptItems = prompts
    ? [
        ["封面 Prompt", prompts.cover],
        ["食材 Prompt", prompts.ingredients],
        ["步骤 Prompt", prompts.steps],
        [`${flexibleTitle || "灵活补充图"} Prompt`, prompts.flexible]
      ]
    : [];

  return (
    <main className="app-shell">
      <section className="workspace-header">
        <div>
          <p className="eyebrow">Recipe Prompt Assistant</p>
          <h1>菜谱提示词生成助手</h1>
        </div>
        <button className="secondary-button" type="button" onClick={handleUseSample}>
          填入示例
        </button>
      </section>

      <section className="workspace-grid">
        <form className="input-panel" onSubmit={(event) => event.preventDefault()}>
          <div className="field-group">
            <label htmlFor="recipeName">菜名 / 饮品名</label>
            <input
              id="recipeName"
              value={recipeName}
              onChange={(event) => setRecipeName(event.target.value)}
              placeholder="例如：夏日椰芒冻冻茶"
            />
          </div>

          <div className="field-group">
            <label htmlFor="ingredients">食材</label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(event) => setIngredients(event.target.value)}
              placeholder="每行一个食材，例如：芒果 80g"
              rows={8}
            />
          </div>

          <div className="field-group">
            <label htmlFor="steps">制作步骤</label>
            <textarea
              id="steps"
              value={steps}
              onChange={(event) => setSteps(event.target.value)}
              placeholder="按顺序输入步骤，系统会保持制作逻辑"
              rows={9}
            />
          </div>

          <div className="field-group">
            <label htmlFor="flexibleTitle">灵活图名称</label>
            <input
              id="flexibleTitle"
              value={flexibleTitle}
              onChange={(event) => setFlexibleTitle(event.target.value)}
              placeholder="例如：和面、酱汁调制、腌制、摆盘"
            />
          </div>

          <div className="field-group">
            <label htmlFor="flexibleDescription">灵活图说明</label>
            <textarea
              id="flexibleDescription"
              value={flexibleDescription}
              onChange={(event) => setFlexibleDescription(event.target.value)}
              placeholder="描述这张补充图要表现的环节，例如：面粉加水揉成光滑面团，盖上保鲜膜醒发"
              rows={5}
            />
          </div>

          <div className="style-row">
            <div className="field-group">
              <label htmlFor="artStyle">绘画风格</label>
              <select
                id="artStyle"
                value={styleId}
                onChange={(event) => setStyleId(event.target.value as ArtStyleId)}
              >
                {ART_STYLES.map((style) => (
                  <option key={style.id} value={style.id}>
                    {style.name}
                  </option>
                ))}
              </select>
            </div>
            <button className="secondary-button" type="button" onClick={handleRecommendStyle}>
              推荐风格
            </button>
          </div>

          {selectedStyle && (
            <p className="style-note">
              当前风格适合：{selectedStyle.bestFor}
            </p>
          )}

          <button className="primary-button" type="button" onClick={handleGenerate}>
            生成四张图 Prompt
          </button>
        </form>

        <section className="output-panel">
          <div className="output-heading">
            <div>
              <p className="eyebrow">Structured Prompts</p>
              <h2>生成结果</h2>
            </div>
            <span>4 组</span>
          </div>

          {promptItems.length === 0 ? (
            <div className="empty-state">
              输入菜谱后生成封面、食材、步骤、灵活补充图四类结构化中文 Prompt。
            </div>
          ) : (
            <div className="prompt-list">
              {promptItems.map(([title, content]) => (
                <article className="prompt-block" key={title}>
                  <div className="prompt-block-header">
                    <h3>{title}</h3>
                    <button
                      className="copy-button"
                      type="button"
                      onClick={() => handleCopyPrompt(title, content)}
                    >
                      {copiedTitle === title ? "已复制" : "复制"}
                    </button>
                  </div>
                  <pre>{content}</pre>
                </article>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
