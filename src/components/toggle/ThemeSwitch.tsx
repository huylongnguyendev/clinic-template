import { Button } from "../ui/Button";
import { RiMoonClearLine, RiSunLine } from "@remixicon/react";
import { cn } from "#/lib/utils";
import { useAppStore } from "@lavaz/store";
import { store } from "#/store/store";

export const ThemeSwitch = () => {
  const [theme, { setTheme }] = useAppStore(store.theme, (s) => s);
  return (
    <Button
      variant="outline"
      size="icon-sm"
      onClick={setTheme}
      className={cn(
        theme
          ? "border-blue-400 text-blue-400"
          : "border-orange-400 text-orange-400",
      )}
    >
      {theme ? <RiMoonClearLine /> : <RiSunLine />}
    </Button>
  );
};
