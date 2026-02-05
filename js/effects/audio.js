export function setupAudio() {
  const audio = document.getElementById("bg-music");
  if (!audio) {
    return;
  }
  audio.volume = 0.4;

  const tryPlay = () => {
    audio.play().catch(() => {
      // Ignore autoplay restrictions.
    });
  };

  return { audio, tryPlay };
}
