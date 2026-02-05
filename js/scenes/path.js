export function setupPath(state) {
  const followButton = document.querySelector('[data-action="follow"]');
  if (!followButton) {
    return;
  }
  followButton.addEventListener("click", () => state.go("gift"));
}
