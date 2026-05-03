import { cn } from "#/lib/utils";
import type { INavItem } from "#/types/navigation.type";
import { Link } from "@tanstack/react-router";
import { memo } from "react";

interface NavItemProps {
  item: INavItem;
  onSelect?: () => void;
}

export const NavItem = memo(function NavItem({ item, onSelect }: NavItemProps) {
  return (
    <Link
      to={item.href}
      activeProps={{ className: "text-primary" }}
      onClick={onSelect}
      className="relative py-2.5 font-semibold font-sub transition-smooth hover:text-primary group"
    >
      {({ isActive }) => (
        <>
          {item.lable}
          <div
            className={cn(
              "absolute bottom-0 left-0 w-0 h-1 bg-primary transition-smooth group-hover:w-full",
              isActive && "w-full",
            )}
          />
        </>
      )}
    </Link>
  );
});
