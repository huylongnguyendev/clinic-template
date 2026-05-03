import { createBox } from "@lavaz/store";

const initialState = false;

export const themeBox = createBox(initialState, (set) => ({
  setTheme: () => set((prev) => !prev),
}))
  .persist("theme")
  .create();
