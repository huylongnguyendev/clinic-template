import { useEffect, useState } from "react";

export function useHeightSize() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setHeight(window.scrollY);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [setHeight]);

  return height;
}
