"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  href?: string;
  variant?: "volt" | "gold" | "outline" | "glass" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  id?: string;
  isExternal?: boolean;
  glow?: boolean;
}

export default function Button({
  children,
  onClick,
  href,
  variant = "volt",
  size = "md",
  className = "",
  id,
  isExternal = false,
  glow = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-display font-bold uppercase tracking-wider rounded-lg transition-all duration-300 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-3",
  };

  const variantStyles = {
    volt: "bg-[#CCFF00] text-black hover:bg-[#b5e000] focus:ring-[#CCFF00] border border-transparent shadow-neon-volt",
    gold: "bg-gold-gradient text-black hover:brightness-110 focus:ring-[#D1A751] border border-transparent shadow-neon-gold",
    outline:
      "border-2 border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00] focus:ring-[#CCFF00]",
    glass:
      "glassmorphism text-white border border-white/10 hover:border-[#D1A751] hover:text-[#D1A751] focus:ring-[#D1A751]",
    dark:
      "bg-[#14161f] text-zinc-300 border border-white/5 hover:border-white/10 hover:text-white hover:bg-[#1c1f2c] focus:ring-white/20",
  };

  const glowStyles = glow
    ? variant === "gold"
      ? "after:absolute after:inset-0 after:rounded-lg after:bg-[#D1A751] after:opacity-0 after:blur-md hover:after:opacity-30 after:transition-opacity after:duration-300 relative"
      : "after:absolute after:inset-0 after:rounded-lg after:bg-[#CCFF00] after:opacity-0 after:blur-md hover:after:opacity-30 after:transition-opacity after:duration-300 relative"
    : "";

  const buttonContent = (
    <span className="relative z-10 flex items-center justify-center gap-inherit">
      {children}
    </span>
  );

  const motionProps = {
    whileHover: { scale: 1.03, y: -1 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 15 },
  };

  if (href) {
    if (isExternal) {
      return (
        <motion.a
          id={id}
          href={href}
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${glowStyles} ${className}`}
          {...motionProps}
        >
          {buttonContent}
        </motion.a>
      );
    }
    return (
      <motion.a
        id={id}
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${glowStyles} ${className}`}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      id={id}
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${glowStyles} ${className}`}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
}
