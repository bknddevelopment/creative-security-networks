import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  neon?: boolean;
}

export function GlassCard({ children, className, hover = false, neon = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl backdrop-blur-xl bg-glass-white border border-glass-border",
        "shadow-glass overflow-hidden",
        hover && "transition-all duration-500 hover:shadow-glow-lg hover:border-cyber/50 hover:-translate-y-1",
        neon && "shadow-neon border-cyber/30",
        className
      )}
    >
      {neon && (
        <div className="absolute inset-0 bg-gradient-to-br from-cyber/10 via-transparent to-neon-blue/10 pointer-events-none" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}