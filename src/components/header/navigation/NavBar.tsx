import { navList } from "#/data/navigation.data";
import { cn } from "#/lib/utils";
import { useAppStore } from "@lavaz/store";
import { NavItem } from "./NavItem";
import { store } from "#/store/store";
import { Button } from "#/components/ui/Button";
import { RiCloseLargeFill } from "@remixicon/react";
import { useClickOutside } from "#/hooks/useClickOutside";
import { useCallback, useRef } from "react";
import { useWidthSize } from "#/hooks/useWidthSize";

export const NavBar = () => {
  const [isOpenMenu, { setIsOpenMenu, setCloseMenu }] = useAppStore(
    store.menu,
    (s) => s,
  );
  const navRef = useRef<HTMLUListElement | null>(null);
  useClickOutside(navRef, isOpenMenu, setIsOpenMenu);

  const width = useWidthSize();

  const handleSelectNavItem = useCallback(() => {
    if (width < 768) setCloseMenu();
  }, [width]);

  return (
    <>
      <div
        className={cn(
          "absolute -top-1000 left-0 z-50 w-full h-dvh bg-background/80 backdrop-blur-xs transition-smooth md:hidden",
          isOpenMenu && "top-0",
        )}
      />
      <nav
        ref={navRef}
        className={cn(
          "max-md:fixed -top-350 left-1/2 z-50 max-md:-translate-1/2 max-md:p-4 max-md:w-9/12 max-md:h-[calc(100dvh-320px)] max-md:shadow-xl max-md:space-y-8 max-md:bg-background rounded-lg transition-smooth",
          isOpenMenu && "max-md:top-1/2",
        )}
      >
        <Button
          variant="ghost"
          size="icon"
          danger
          onClick={setIsOpenMenu}
          className="flex ms-auto md:hidden"
        >
          <RiCloseLargeFill />
        </Button>
        <ul className="md:flex items-center max-md:space-y-4">
          {navList.map((nav) => (
            <li key={nav.key} className="md:px-2 lg:px-3">
              <NavItem item={nav} onSelect={handleSelectNavItem} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
