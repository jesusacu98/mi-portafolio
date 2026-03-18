import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
        {
          "border-transparent bg-foreground text-background hover:bg-foreground/80": variant === "default",
          "border-transparent bg-muted text-foreground hover:bg-muted/80": variant === "secondary",
          "text-foreground": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
