export function startWind() {
  const layers = document.querySelectorAll(".grass-layer");
  if (!layers.length) {
    return () => {};
  }
  let frame = 0;
  let raf;

  const animate = () => {
    frame += 0.005;
    const offset = Math.sin(frame) * 8;
    layers.forEach((layer, index) => {
      const depth = index + 1;
      layer.style.backgroundPosition = `${50 + offset / depth}% bottom`;
    });
    raf = requestAnimationFrame(animate);
  };

  raf = requestAnimationFrame(animate);
  return () => cancelAnimationFrame(raf);
}
