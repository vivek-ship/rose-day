const lines = {
  intro: "Ready for a sweet little adventure?",
  path: "Follow me. I know a special spot.",
  gift: "We made it! Tap the gift box.",
  reveal: "Every memory with you blooms brighter.",
};

export function updateGuide(scene) {
  const speech = document.getElementById("speech");
  if (speech && lines[scene]) {
    speech.textContent = lines[scene];
  }
}
