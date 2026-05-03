import heroImage from "#/assets/health/staff-10.webp";
import { RiCalendarCheckFill, RiStarFill } from "@remixicon/react";

export const HeroImage = () => {
  return (
    <div className="w-full lg:w-1/2 py-4 h-full">
      <div className="relative h-100 lg:h-150 rounded-2xl overflow-hidden z-10">
        <img
          src={heroImage}
          alt="hero-expert-image"
          width={1028}
          height={1028}
          className="absolute size-full object-cover -z-10"
        />
        <div className="absolute top-[3%] right-[3%] flex items-center gap-4 p-3 bg-background rounded-xl">
          <div className="p-3 rounded-lg bg-primary/15 text-primary">
            <RiCalendarCheckFill />
          </div>
          <div className="space-y-3">
            <div className="space-y-0.5">
              <p className="text-sm">Lịch trống tiếp theo</p>
              <p className="font-bold">Hôm nay 2:30 PM</p>
            </div>
            <p className="text-xs text-accent-foreground font-semibold">
              Dr. Sarah Johnson
            </p>
          </div>
        </div>
        <div className="absolute bottom-[3%] left-[3%] p-4 rounded-xl text-center bg-background space-y-2">
          <ul className="flex items-center gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={"star-" + index}>
                <RiStarFill size={20} />
              </li>
            ))}
          </ul>
          <p className="text-xl font-bold">4.9/5</p>
          <p className="text-xs text-accent-foreground">1,234 Reviews</p>
        </div>
      </div>
    </div>
  );
};
