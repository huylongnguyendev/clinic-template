import { MenuToggle } from "#/components/toggle/MenuToggle";
import { ThemeSwitch } from "#/components/toggle/ThemeSwitch";

export const OthersBar = () => {
  return (
    <div className="flex items-center gap-3">
      <ThemeSwitch />
      <MenuToggle />
    </div>
  );
};
