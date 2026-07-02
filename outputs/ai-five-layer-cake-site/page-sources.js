function buildSourceFilters(sources) {
  const types = Array.from(new Set(sources.map((source) => source.type))).sort((a, b) => a.localeCompare(b, "zh-CN"));
  const confidence = Array.from(new Set(sources.map((source) => `可信度：${source.confidence}`)));
  const quality = Array.from(new Set(sources.map((source) => `质量：${getSourceQuality(source)}`)));
  return ["全部", ...quality, ...types, ...confidence];
}

function renderSourceFilters(sources) {
  const root = document.querySelector("#sourceFilters");
  if (!root) return;
  root.innerHTML = buildSourceFilters(sources)
    .map((filter, index) => `<button class="terminal-filter ${index === 0 ? "active" : ""}" type="button" data-filter="${filter}">${filter}</button>`)
    .join("");
}

function sourceMatchesFilter(source, filter) {
  if (filter === "全部") return true;
  if (filter.startsWith("质量：")) return getSourceQuality(source) === filter.replace("质量：", "");
  if (filter.startsWith("可信度：")) return source.confidence === filter.replace("可信度：", "");
  return source.type === filter;
}

function renderSources(sources, query = "", filter = "全部") {
  const root = document.querySelector("#sourceIndexGrid");
  const summary = document.querySelector("#sourceSummary");
  if (!root) return;
  const normalized = query.trim().toLowerCase();
  const visible = sources.filter((source) => {
    const haystack = `${source.title} ${source.publisher} ${source.type} ${source.date} ${source.confidence} ${getSourceQuality(source)} ${source.usedFor.join(" ")} ${source.note}`.toLowerCase();
    return sourceMatchesFilter(source, filter) && (!normalized || haystack.includes(normalized));
  });

  if (summary) summary.innerHTML = `<strong>${visible.length}</strong><span> / ${sources.length} 条来源</span>`;
  root.innerHTML = visible.map((source) => `
    <article class="source-index-card" id="${source.id}">
      <header>
        <span>${source.type}</span>
        <strong class="${getSourceQualityClass(source)}">${getSourceQuality(source)}</strong>
      </header>
      <h3>${source.title}</h3>
      <p>${source.publisher} · ${source.date}</p>
      <p><strong>可信度：</strong>${source.confidence}</p>
      <p>${source.note}</p>
      <div class="company-meta">${source.usedFor.map((item) => `<span>${item}</span>`).join("")}</div>
      <a class="chain-detail-link" href="${source.url}" target="_blank" rel="noreferrer">打开来源</a>
    </article>
  `).join("");
}

function initSourcesPage() {
  const sources = window.sourceRegistry || [];
  let query = "";
  let activeFilter = "全部";
  renderSourceFilters(sources);
  renderSources(sources, query, activeFilter);

  document.querySelector("#sourceSearchInput")?.addEventListener("input", (event) => {
    query = event.target.value;
    renderSources(sources, query, activeFilter);
  });

  document.querySelector("#sourceFilters")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    document.querySelectorAll("#sourceFilters .terminal-filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderSources(sources, query, activeFilter);
  });
}

initSourcesPage();
