import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export const GradientText = ({ 
  children, 
  className,
  from = "from-purple-500",
  to = "to-cyan-500"
}: GradientTextProps) => {
  return (
    <span className={cn(
      "bg-clip-text text-transparent bg-gradient-to-r",
      from,
      to,
      className
    )}>
      {children}
    </span>
  );
};