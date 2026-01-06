"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface ExpandableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary";
  label: string;
}

export function ExpandableButton({
  className,
  href,
  variant = "primary",
  label,
  ...props
}: ExpandableButtonProps) {
  const isPrimary = variant === "primary";

  // Configuration for variants
  // Primary: Dark BG, Gold Icon BG -> Hover: Gold BG (via expansion), Dark Text
  // Secondary: Gold BG, White Icon BG -> Hover: White BG (via expansion), Dark Text

  const baseClasses = "group relative inline-flex items-center gap-3 overflow-hidden rounded-full pl-6 pr-2 py-2 font-semibold transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95";

  const variantClasses = isPrimary
    ? "bg-[#C9A24D] text-[#1C1C1C]"
    : "bg-[#1C1C1C] text-white";

  // The expanding circle (Icon BG)
  // Absolute positioned, starts as circle behind icon, scales up on hover
  const circleClasses = cn(
    "absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full transition-all duration-500 ease-out group-hover:scale-[25] z-0",
    isPrimary ? "bg-[#1C1C1C]" : "bg-[#C9A24D]"
  );

  // Icon Container
  // Must be z-10 to stay on top
  const iconContainerClasses = cn(
    "relative z-10 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-white",
    // In primary: icon starts in Gold bg (which is the expanding circle), so transparent here? 
    // Actually, if we use the expanding circle as the icon BG, we don't need a separate bg here unless we want it to look different initially.
    // Let's rely on the absolute circle for the background.
  );

  // Content (Label)
  // Must be z-10 to stay on top
  const labelClasses = cn(
    "relative z-10 transition-colors duration-300",
    isPrimary ? "group-hover:text-white" : "group-hover:text-[#1C1C1C]"
  );

  const Icon = ChevronRight;

  const content = (
    <>
      <span className={labelClasses}>{label}</span>
      {/* Expanding Background Circle - positioned relative to the container but visually behind icon */}
      <div className={circleClasses} />

      <div className={iconContainerClasses}>
        <Icon className={cn(
          "w-5 h-5 transition-colors duration-300",
          // Primary: Icon on Dark (expanded). Needs to be Light/Gold? Matches text.
          // Secondary: Icon on Gold (expanded). Needs to be Dark.
          // Primary: Icon (Gold) on Dark Circle. -> Hover: Icon (Accent) on White BG.
          // Secondary: Icon (Dark) on Gold Circle. -> Hover: Icon (Accent) on White BG.
          isPrimary ? "text-accent group-hover:text-accent" : "text-secondary group-hover:text-accent"
        )} />
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, variantClasses, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseClasses, variantClasses, className)} {...props}>
      {content}
    </button>
  );
}
