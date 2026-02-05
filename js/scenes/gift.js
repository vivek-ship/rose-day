export function setupGift(state) {
  const box = document.querySelector('[data-action="open-gift"]');
  if (!box) {
    return;
  }

  const openGift = () => {
    box.classList.add("is-open");
    setTimeout(() => state.go("reveal"), 800);
  };

  box.addEventListener("click", openGift);
  box.addEventListener("keypress", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      openGift();
    }
  });
}
