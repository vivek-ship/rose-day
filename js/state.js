const scenes = ["intro", "path", "gift", "reveal"];

export function createState() {
  let current = "intro";
  const listeners = new Set();

  const emit = () => listeners.forEach((listener) => listener(current));

  return {
    get current() {
      return current;
    },
    go(next) {
      if (!scenes.includes(next)) {
        return;
      }
      current = next;
      emit();
    },
    onChange(listener) {
      listeners.add(listener);
      listener(current);
      return () => listeners.delete(listener);
    },
  };
}
