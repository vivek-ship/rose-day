const PETAL_COUNT = 24;

export function startPetals() {
  const canvas = document.querySelector(".petals");
  if (!canvas) {
    return () => {};
  }
  const ctx = canvas.getContext("2d");
  const petals = [];

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const spawnPetal = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 8 + Math.random() * 12,
    speed: 0.6 + Math.random() * 1.2,
    drift: -0.6 + Math.random() * 1.2,
    rotation: Math.random() * Math.PI,
  });

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach((petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rotation);
      ctx.fillStyle = "rgba(255, 105, 150, 0.6)";
      ctx.beginPath();
      ctx.ellipse(0, 0, petal.size, petal.size * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      petal.y += petal.speed;
      petal.x += petal.drift;
      petal.rotation += 0.01;

      if (petal.y > canvas.height + 20) {
        petal.y = -20;
        petal.x = Math.random() * canvas.width;
      }
      if (petal.x > canvas.width + 20) {
        petal.x = -20;
      }
      if (petal.x < -20) {
        petal.x = canvas.width + 20;
      }
    });

    requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < PETAL_COUNT; i += 1) {
    petals.push(spawnPetal());
  }

  requestAnimationFrame(draw);

  return () => {
    window.removeEventListener("resize", resize);
  };
}
