import { createState } from "./state.js";
import { updateGuide } from "./guide.js";
import { startWind } from "./effects/wind.js";
import { startPetals } from "./effects/petals.js";
import { setupAudio } from "./effects/audio.js";
import { preloadAssets } from "./utils/preload.js";
import { showScene } from "./utils/helpers.js";
import { setupIntro } from "./scenes/intro.js";
import { setupPath } from "./scenes/path.js";
import { setupGift } from "./scenes/gift.js";
import { setupReveal } from "./scenes/reveal.js";

const state = createState();
const audio = setupAudio();

preloadAssets();
startWind();
startPetals();

setupIntro(state, audio);
setupPath(state);
setupGift(state);
setupReveal(state);

state.onChange((scene) => {
  showScene(scene);
  updateGuide(scene);
});
