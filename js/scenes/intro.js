export function setupIntro(state, audio) {
  const startButton = document.querySelector('[data-action="start"]');
  if (!startButton) {
    return;
  }
  startButton.addEventListener("click", () => {
    audio?.tryPlay();
    state.go("path");
  });
}
