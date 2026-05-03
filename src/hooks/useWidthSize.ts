import { useEffect, useState } from "react";

export function useWidthSize() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    document.addEventListener("resize", handleResize);
    return () => document.removeEventListener("resize", handleResize);
  }, [setWidth]);

  return width;
}
