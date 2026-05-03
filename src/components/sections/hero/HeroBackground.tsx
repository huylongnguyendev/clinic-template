import heroBackgroundImg from "#/assets/bg/abstract-bg-3.webp";

export const HeroBackground = () => {
  return (
    <div className="absolute size-full top-0 left-0 -z-10">
      <img
        src={heroBackgroundImg}
        alt="hero-background-image"
        width={1920}
        height={1080}
        className="absolute size-full object-contain grayscale opacity-20 mix-blend-multiply"
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `radial-gradient(circle, transparent 0%, var(--background) 80%)`,
        }}
      />
      <div className="absolute inset-0 z-20 backdrop-blur-[1px] pointer-events-none" />
    </div>
  );
};
