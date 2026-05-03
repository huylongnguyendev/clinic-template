import { RiMenu4Fill } from "@remixicon/react";
import Button from "../ui/Button";
import { useAppStore } from "@lavaz/store";
import { store } from "#/store/store";

export default function MenuToggle() {
  const [, { setIsOpenMenu }] = useAppStore(store.menu, (s) => s);
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={setIsOpenMenu}
      className="md:hidden"
    >
      <RiMenu4Fill />
    </Button>
  );
}
