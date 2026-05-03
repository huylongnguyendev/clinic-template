import HeaderBot from "./HeaderBot";
import HeaderTop from "./HeaderTop";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <HeaderTop />
      <HeaderBot />
    </header>
  );
}
