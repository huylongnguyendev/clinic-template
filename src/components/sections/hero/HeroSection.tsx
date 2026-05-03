import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export const HeroSection = () => {
  return (
    <section className="relative flex max-lg:flex-col gap-6 w-full h-[calc(100dvh-92px)]">
      <HeroBackground />
      <HeroContent />
      <HeroImage />
    </section>
  );
};
