"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "ghost";

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm md:text-base",
  lg: "h-12 px-8 text-base",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--gradient-pill)] text-background shadow-[0_12px_30px_rgba(255,45,146,0.45)] hover:shadow-[0_18px_38px_rgba(255,45,146,0.55)]",
  secondary:
    "bg-white/10 text-white border border-white/20 hover:bg-white/15",
  ghost: "text-white/70 hover:text-white",
};

interface ButtonLinkProps extends PropsWithChildren {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  ariaLabel?: string;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  showArrow = false,
  ariaLabel,
  children,
}: ButtonLinkProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex"
    >
      <Link
        href={href}
        aria-label={ariaLabel}
        className={clsx(
          "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70",
          sizeStyles[size],
          variantStyles[variant],
        )}
      >
        {children}
        {showArrow ? (
          <ArrowUpRight className="h-4 w-4 shrink-0 text-current" />
        ) : null}
      </Link>
    </motion.div>
  );
}
