import { CountUp } from "#/components/CountUp";
import { Badge } from "#/components/ui/Badge";
import { Button } from "#/components/ui/Button";
import { statsDataList } from "#/data/stats-data.data";
import { trustBadgeList } from "#/data/trust-badge.data";
import { RiPhoneFill } from "@remixicon/react";
import { Link } from "@tanstack/react-router";

export const HeroContent = () => {
  return (
    <div className="w-full lg:w-1/2 py-4">
      <div className="space-y-6">
        <ul className="flex flex-wrap items-center gap-3">
          {trustBadgeList.map((item) => (
            <li key={item.key}>
              <Badge>
                <item.icon />
                {item.label}
              </Badge>
            </li>
          ))}
        </ul>
        <h1 className="text-[56px] text-balance font-bold font-heading leading-[67.2px]">
          Chất lượng Y tế{" "}
          <span className="text-primary underline">Vượt trội</span> – Chăm sóc
          Bằng sự <span className="text-primary underline">Thấu cảm</span>
        </h1>
        <p className="text-[18px] text-accent-foreground text-balance font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>

      <ul className="flex items-center gap-4 lg:gap-5 mt-8">
        {statsDataList.map((item, index) => (
          <li key={item.key}>
            <CountUp
              label={item.label}
              value={item.value}
              suffix={item.suffix}
              delay={(index + 1) * 100}
            />
          </li>
        ))}
      </ul>

      <div className="mt-6 mb-8">
        <Link to="/appointment" title="appointment">
          <Button size="xl">Đặt lịch ngay</Button>
        </Link>
      </div>
      <div className="flex items-center gap-6 p-4 border border-primary rounded-xl bg-background">
        <div className="inline-flex justify-center items-center p-3 rounded-full bg-primary text-primary-foreground">
          <RiPhoneFill size={24} />
        </div>
        <div className="font-semibold">
          <span className="text-sm text-accent-foreground">
            Đường dây nóng khẩn cấp
          </span>
          <p className="text-xl">+1 (555) 911-2468</p>
        </div>
      </div>
    </div>
  );
};
