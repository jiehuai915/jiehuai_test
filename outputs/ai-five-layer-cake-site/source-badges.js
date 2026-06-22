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
      return `<a class="source-badge" href="${sourcePage}#${source.id}" title="${source.note}">${source.publisher} · ${source.confidence}</a>`;
    }).join("");
  });
}

renderSourceBadges();
