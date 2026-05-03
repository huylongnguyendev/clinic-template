import { useCountUp } from "#/hooks/useCountUp";
import { cn } from "#/lib/utils";

interface CountUpProps {
  from?: number;
  value: number;
  delay?: number;
  duration?: number;
  className?: string;
  label: string;
  suffix?: string;
}

export const CountUp = ({
  value,
  delay = 0,
  duration = 2000,
  from = 0,
  className,
  label,
  suffix,
}: CountUpProps) => {
  const { count, setElementRef } = useCountUp(value, from, duration, delay);
  return (
    <div ref={setElementRef} className={cn("", className)}>
      <p className="text-3xl text-primary font-bold">
        {count}
        {suffix}
      </p>
      <p className="text-sm text-accent-foreground font-semibold">{label}</p>
    </div>
  );
};
