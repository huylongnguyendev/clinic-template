import { store } from "#/store/store";
import { useAppStore } from "@lavaz/store";
import { useEffect } from "react";

export function useThemeSwitch() {
  const [theme] = useAppStore(store.theme, (s) => s);

  useEffect(() => {
    const root = document.documentElement;

    if (theme) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [theme]);
}
