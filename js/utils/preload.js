const fallbackBackground = "linear-gradient(180deg, #ffeef2, #fff7ef)";

export function preloadAssets() {
  const grassLayer = document.querySelector(".grass-layer");
  if (!grassLayer) {
    return;
  }

  const image = new Image();
  image.src = "assets/images/background/grass-loop.webp";
  image.onerror = () => {
    grassLayer.style.background = fallbackBackground;
  };
}
