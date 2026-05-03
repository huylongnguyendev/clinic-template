import { createStore } from "@lavaz/store";
import { menuBox } from "./boxes/menu.box";
import { themeBox } from "./boxes/theme.box";

export const store = createStore({
  menu: menuBox,
  theme: themeBox,
});
