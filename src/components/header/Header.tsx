import { useHeightSize } from "#/hooks/useHeightSize";
import { cn } from "#/lib/utils";
import { HeaderBot } from "./HeaderBot";
import { HeaderTop } from "./HeaderTop";

export const Header = () => {
  const height = useHeightSize();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-smooth",
        height > 32 && "-top-8",
      )}
    >
      <HeaderTop />
      <HeaderBot />
    </header>
  );
};
