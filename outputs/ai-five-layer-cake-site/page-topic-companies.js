function getTopicCompanyQuality(source) {
  if (window.getSourceQuality) return window.getSourceQuality(source);
  if (!source) return "待核验";
  return source.quality || source.confidence || "研究参考";
}

function getTopicCompanySourceSummary(company) {
  const registry = window.sourceRegistry || [];
  const byId = new Map(registry.map((source) => [source.id, source]));
  const sources = (company.sourceIds || []).map((id) => byId.get(id)).filter(Boolean);
  if (!sources.length) return "来源待补强";
  const quality = [...new Set(sources.map(getTopicCompanyQuality))].join(" / ");
  return `${quality} · ${sources.length} 条`;
}

function getTopicCompanyDisplayName(company) {
  const chineseAlias = (company.aliases || []).find((alias) => /[\u3400-\u9fff]/.test(alias) && !/^\d/.test(alias));
  const isAhShare = /\.(SZ|SS|HK)$/i.test(company.ticker || "");
  return isAhShare && chineseAlias ? chineseAlias : company.name;
}

function renderTopicCompanyCard(company) {
  const displayName = getTopicCompanyDisplayName(company);
  const aliases = [...new Set([company.name, ...(company.aliases || [])])].filter((item) => item && item !== displayName);
  return `
    <article class="company-card topic-company-card">
      <header>
        <div>
          <span class="status-chip">${company.status}</span>
          <h3>${displayName}</h3>
          ${aliases.length ? `<p class="company-aliases">${aliases.slice(0, 3).join(" · ")}</p>` : ""}
        </div>
        <strong class="ticker">${company.ticker}</strong>
      </header>
      <div class="company-meta">
        ${(company.layers || []).map((item) => `<span>${item}</span>`).join("")}
        ${(company.chains || []).map((item) => `<span>${item}</span>`).join("")}
      </div>
      <div class="company-scoreline">
        <span>AI 暴露度：<strong>${company.aiExposure || "中"}</strong></span>
        <span>风险等级：<strong>${company.riskRating || "中"}</strong></span>
      </div>
      <p class="company-moat-summary">${company.moat}</p>
      <details class="company-details">
        <summary>详情</summary>
        <dl class="company-fields">
          <div><dt>受益逻辑</dt><dd>${company.beneficiary}</dd></div>
          <div><dt>关键风险</dt><dd>${company.risks}</dd></div>
          <div><dt>代表产品</dt><dd>${(company.products || []).join(" / ")}</dd></div>
          <div><dt>来源质量</dt><dd>${getTopicCompanySourceSummary(company)}</dd></div>
        </dl>
      </details>
    </article>
  `;
}

function renderTopicCompanies() {
  const companies = window.companyCards || [];
  const byName = new Map();
  companies.forEach((company) => {
    [company.name, company.ticker, ...(company.aliases || [])].forEach((key) => {
      if (key) byName.set(String(key).toLowerCase(), company);
    });
  });

  document.querySelectorAll("[data-topic-companies]").forEach((root) => {
    const keys = root.dataset.topicCompanies.split(",").map((item) => item.trim()).filter(Boolean);
    const matched = [];
    const missing = [];
    keys.forEach((key) => {
      const company = byName.get(key.toLowerCase());
      if (company && !matched.includes(company)) {
        matched.push(company);
      } else if (!company) {
        missing.push(key);
      }
    });

    root.innerHTML = `
      <div class="company-grid topic-company-grid">
        ${matched.map(renderTopicCompanyCard).join("")}
      </div>
      ${missing.length ? `<p class="empty-state"><strong>未找到公司数据</strong>${missing.join(" / ")}</p>` : ""}
    `;
  });
}

renderTopicCompanies();
