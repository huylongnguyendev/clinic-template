import { createBox } from "@lavaz/store";

const initialState = false;

export const menuBox = createBox(initialState, (set) => ({
  setIsOpenMenu: () => set((prev) => !prev),
  setCloseMenu: () => set((prev) => (prev = false)),
})).create();
