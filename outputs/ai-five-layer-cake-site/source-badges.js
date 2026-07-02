function renderSourceBadges() {
  const registry = window.sourceRegistry || [];
  const byId = new Map(registry.map((source) => [source.id, source]));
  const inPages = window.location.pathname.includes("/pages/");
  const sourcePage = inPages ? "sources.html" : "pages/sources.html";

  document.querySelectorAll("[data-source-ids]").forEach((root) => {
    const ids = root.dataset.sourceIds.split(",").map((id) => id.trim()).filter(Boolean);
    root.innerHTML = ids.map((id) => {
      const source = byId.get(id);
      if (!source) {
        return `<span class="source-badge missing">Missing source: ${id}</span>`;
      }
      const quality = window.getSourceQuality ? window.getSourceQuality(source) : source.confidence;
      const qualityClass = window.getSourceQualityClass ? window.getSourceQualityClass(source) : "";
      return `<a class="source-badge ${qualityClass}" href="${sourcePage}#${source.id}" title="${source.type} · ${source.confidence} · ${source.note}">${source.publisher} · ${quality}</a>`;
    }).join("");
  });
}

renderSourceBadges();
