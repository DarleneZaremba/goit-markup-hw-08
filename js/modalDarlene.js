// LINKS

const modalClose = document.querySelector(`[data-modal-close]`);
const modalOpen = document.querySelector(`[data-modal-open]`);
const backdrop = document.querySelector(".backdrop");

modalOpen.addEventListener("click", toggleOnOpenHandler);
modalClose.addEventListener("click", toggleOnOpenHandler);
backdrop.addEventListener("click", closeByBackdropClick);

function toggleOnOpenHandler(event) {
  backdrop.classList.toggle("is-hidden");
}

function closeByBackdropClick(event) {
  if (event.currentTarget === event.target) {
    backdrop.classList.add("is-hidden");
  }
}
