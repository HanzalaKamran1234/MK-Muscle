"use client";

import React from "react";

interface LogoProps {
  variant?: "gold" | "graphic" | "hybrid";
  className?: string;
  height?: number;
  showText?: boolean;
}

export default function Logo({
  variant = "hybrid",
  className = "",
  height = 50,
  showText = true,
}: LogoProps) {
  // SVG proportions: 300x120 for landscape, 150x150 for square
  const width = showText ? height * 3.2 : height * 1.2;

  return (
    <div
      className={`relative flex items-center select-none ${className}`}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <svg
        viewBox={showText ? "0 0 320 100" : "0 0 120 100"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Premium 3D Metallic Gold Gradient */}
          <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFAD4" />
            <stop offset="25%" stopColor="#D1A751" />
            <stop offset="45%" stopColor="#A88134" />
            <stop offset="65%" stopColor="#ECCC84" />
            <stop offset="85%" stopColor="#9C772C" />
            <stop offset="100%" stopColor="#5E4313" />
          </linearGradient>

          {/* Soft 3D Glow Filter for Premium Gold Vibe */}
          <filter id="goldGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#875E1A" floodOpacity="0.4" />
            <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="#FFFAD4" floodOpacity="0.2" />
          </filter>

          {/* Bold White/Sporty Gradient */}
          <linearGradient id="logoSport" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>

          {/* Energy Volt Gradient */}
          <linearGradient id="logoVolt" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#CCFF00" />
            <stop offset="100%" stopColor="#00E5FF" />
          </linearGradient>
        </defs>

        {/* 1. EMBEDDED VECTOR PATHS FOR "M" AND "K" */}
        <g
          filter={variant === "gold" || variant === "hybrid" ? "url(#goldGlow)" : undefined}
          fill={
            variant === "gold" || variant === "hybrid"
              ? "url(#logoGold)"
              : "url(#logoSport)"
          }
        >
          {/* Letter M with Flexed Bicep in left leg */}
          {/* This path outlines the bold M and shapes the left inner leg as a flexing bicep silhouette */}
          <path
            d="M 12 15 
               C 12 15, 23 13, 26 18
               C 27.5 20.5, 24.5 24, 21.5 26.5
               C 18.5 29, 14 36.5, 14 47.5
               C 14 55, 17 64, 24.5 68.5
               C 26.5 69.7, 28 69.5, 29 67.5
               C 30.5 64.5, 25 58, 25 51
               C 25 43, 30.5 35.5, 36.5 29.5
               C 40.5 25.5, 42.5 20.5, 42.5 15.5
               L 54 15.5
               L 54 75
               L 41.5 75
               L 41.5 33.5
               L 31.5 75
               L 20.5 75
               L 12.5 36.5
               L 12.5 75
               L 1 75
               L 1 15
               Z"
          />

          {/* Letter K with Flexed Bicep in right leg */}
          {/* Outlines K with custom bicep contour on the right leg */}
          <path
            d="M 59 15
               L 70.5 15
               L 70.5 40.5
               C 74.5 36.5, 78 30.5, 83.5 24.5
               C 86.5 21.5, 85 18, 88.5 15
               L 100 15
               L 81.5 46.5
               L 101.5 75
               L 88.5 75
               C 85 70, 77.5 59.5, 72.5 56.5
               C 70.5 55, 70.5 56.5, 70.5 59.5
               L 70.5 75
               L 59 75
               Z"
          />

          {/* Recreating Bicep Silhouettes inside M and K (Enhancement detail paths) */}
          <path
            d="M 12.5 45
               C 6 44, 2 34, 4.5 27
               C 6.5 22, 10.5 24.5, 12.5 27.5
               Z"
            opacity={variant === "graphic" ? "0.9" : "0.75"}
            fill={variant === "graphic" ? "#08080a" : "url(#logoGold)"}
          />
          <path
            d="M 94.5 48
               C 99 44, 102.5 35, 99.5 29
               C 97.5 25, 94.5 28.5, 93.5 32
               Z"
            opacity={variant === "graphic" ? "0.9" : "0.75"}
            fill={variant === "graphic" ? "#08080a" : "url(#logoGold)"}
          />
        </g>

        {/* 2. LOGO TEXT: "MK" AND "MUSCLE" */}
        {showText && (
          <g>
            {/* Bold Sporty "MK" Text on the right for clean alignment */}
            <text
              x="115"
              y="52"
              fill={variant === "graphic" ? "url(#logoSport)" : "url(#logoGold)"}
              fontFamily="var(--font-display)"
              fontWeight="900"
              fontSize="44"
              letterSpacing="-0.02em"
              filter={variant === "gold" || variant === "hybrid" ? "url(#goldGlow)" : undefined}
            >
              MK
            </text>

            {/* Subtext: "MUSCLE" in custom sports-styled look */}
            <text
              x="115"
              y="74"
              fill={variant === "graphic" ? "#A1A1AA" : "url(#logoGold)"}
              fontFamily="var(--font-display)"
              fontWeight="800"
              fontSize="20"
              letterSpacing="0.25em"
              opacity={variant === "graphic" ? "1" : "0.9"}
            >
              MUSCLE
            </text>

            {/* "GYM" in Volt Accent */}
            <rect x="250" y="58" width="55" height="18" rx="4" fill="url(#logoVolt)" />
            <text
              x="277.5"
              y="71"
              fill="#08080a"
              fontFamily="var(--font-display)"
              fontWeight="900"
              fontSize="11"
              letterSpacing="0.05em"
              textAnchor="middle"
            >
              DHA
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
