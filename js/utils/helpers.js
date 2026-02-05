export function showScene(scene) {
  document.querySelectorAll("[data-scene]").forEach((section) => {
    const isActive = section.dataset.scene === scene;
    section.hidden = !isActive;
  });
}
