import { createStore } from "@lavaz/store";
import { menuBox } from "./boxes/menu.box";

export const store = createStore({
  menu: menuBox,
});
