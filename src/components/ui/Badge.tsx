import { cn } from "#/lib/utils";

const variantBadge = {
  default: "text-primary bg-primary/10 border-transparent",
  fill: "text-primary-foreground bg-primary border-transparent",
  outline: "text-primary bg-primary/10 border-primary",
};

const sizeBadge = {
  sm: "px-2 py-1 text-sm [&_svg]:size-3",
  md: "px-6 py-2 [&_svg]:size-5",
};

interface BadgeProps {
  children?: React.ReactNode;
  className?: string;
  size?: keyof typeof sizeBadge;
  variant?: keyof typeof variantBadge;
}

export const Badge = ({
  children,
  className,
  size = "md",
  variant = "default",
}: BadgeProps) => {
  return (
    <label
      className={cn(
        "inline-flex justify-center items-center gap-1 border rounded-full font-semibold",
        sizeBadge[size],
        variantBadge[variant],
        className,
      )}
    >
      {children}
    </label>
  );
};
