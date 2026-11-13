import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "emerald" | "dark" | "amber" | "neutral";
}

export function Badge({
  className,
  variant = "neutral",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    emerald: "bg-[#EBF6F2] text-[#0E7058] border border-[#CDEAE0]",
    dark: "bg-[#0B131F] text-white border border-[#162233]",
    amber: "bg-amber-50 text-amber-800 border border-amber-200",
    neutral: "bg-white/90 text-slate-700 border border-slate-200/80 backdrop-blur-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
