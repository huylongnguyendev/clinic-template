import { HeroSection } from "#/components/sections/hero/HeroSection";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="">
      <HeroSection />
    </div>
  );
}
