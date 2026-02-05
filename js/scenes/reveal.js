const photos = [
  "assets/images/photos/img1.jpg",
  "assets/images/photos/img2.jpg",
  "assets/images/photos/img3.jpg",
];

export function setupReveal(state) {
  const frame = document.querySelector(".gallery__frame img");
  const prev = document.querySelector('[data-action="prev"]');
  const next = document.querySelector('[data-action="next"]');
  const restart = document.querySelector('[data-action="restart"]');

  if (!frame) {
    return;
  }

  let index = 0;

  const update = () => {
    frame.src = photos[index];
  };

  prev?.addEventListener("click", () => {
    index = (index - 1 + photos.length) % photos.length;
    update();
  });

  next?.addEventListener("click", () => {
    index = (index + 1) % photos.length;
    update();
  });

  restart?.addEventListener("click", () => {
    index = 0;
    update();
    state.go("intro");
  });

  update();
}
