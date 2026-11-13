import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

    const variants = {
      primary:
        "bg-[#0E7058] text-white hover:bg-[#09503E] shadow-sm hover:shadow",
      secondary:
        "bg-[#0B131F] text-white hover:bg-[#162233] shadow-sm",
      outline:
        "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400",
      ghost:
        "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
    };

    const sizes = {
      sm: "h-9 px-3.5 text-xs rounded-md",
      md: "h-11 px-5 text-sm rounded-lg",
      lg: "h-13 px-7 text-base rounded-lg font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
