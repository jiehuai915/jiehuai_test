function closePageDetailModal() {
  const modal = document.querySelector("#detailModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function initPageTermPopups() {
  if (window.initTermPopups) window.initTermPopups();

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-detail]")) closePageDetailModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePageDetailModal();
  });
}

initPageTermPopups();
