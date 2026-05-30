"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: "volt" | "gold" | "none";
  borderAccent?: "volt" | "gold" | "none";
  onClick?: () => void;
  id?: string;
}

export default function Card({
  children,
  className = "",
  hoverGlow = "none",
  borderAccent = "none",
  onClick,
  id,
}: CardProps) {
  const borderStyles = {
    none: "border border-white/5",
    volt: "border border-[#CCFF00]/40",
    gold: "border border-[#D1A751]/40",
  };

  const hoverGlowStyles = {
    none: "",
    volt: "hover:border-[#CCFF00]/60 hover:shadow-[0_0_20px_rgba(204,255,0,0.1)] transition-all duration-300",
    gold: "hover:border-[#D1A751]/60 hover:shadow-[0_0_20px_rgba(209,167,81,0.1)] transition-all duration-300",
  };

  const cardContent = (
    <div
      id={id}
      onClick={onClick}
      className={`glassmorphism rounded-xl p-6 md:p-8 overflow-hidden relative group ${
        onClick ? "cursor-pointer" : ""
      } ${borderStyles[borderAccent]} ${hoverGlowStyles[hoverGlow]} ${className}`}
    >
      {/* Dynamic Background Glow Effect */}
      {hoverGlow !== "none" && (
        <div
          className={`absolute -right-16 -top-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl pointer-events-none ${
            hoverGlow === "gold" ? "bg-[#D1A751]" : "bg-[#CCFF00]"
          }`}
        />
      )}

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );

  if (onClick) {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
}
