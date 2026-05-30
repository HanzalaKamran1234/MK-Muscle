"use client";

import React from "react";
import Card from "./ui/Card";
import Image from "next/image";
import { CheckCircle2, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    "Vibrant, fully air-conditioned facility",
    "Elite biomechanically targeted machines",
    "Active WhatsApp personalized progress tracking",
    "Supportive community of like-minded achievers",
  ];

  return (
    <section id="about" className="relative py-24 bg-brand-dark overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#CCFF00]/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Brand Context */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Overtitle */}
              <div className="inline-block text-[#CCFF00] font-display font-black text-xs uppercase tracking-widest mb-4">
                Elite Physical Culture
              </div>

              {/* Title */}
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight text-white mb-6 uppercase">
                A Premium Evolution of <br />
                <span className="text-gold-gradient text-glow-gold">DHA Karachi Fitness</span>
              </h2>

              {/* Description */}
              <p className="text-zinc-300 font-sans text-base leading-relaxed mb-6">
                Located at the premium junction of Plot No. 18-C, Sunset Lane, Phase 2 Extension, **MK Muscle Gym** is DHA Karachi&apos;s answer to standard corporate gyms. We don&apos;t just lease space; we orchestrate lifelong body and confidence transformations.
              </p>

              <p className="text-zinc-400 font-sans text-sm leading-relaxed mb-8">
                Founded on the pillars of absolute discipline, scientific instruction, and client support, our gym provides an energetic, air-conditioned environment. We cater to goal-driven individuals who demand high-quality equipment, expert guidance, and an environment optimized for peak training output.
              </p>

              {/* Key Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#CCFF00] shrink-0" />
                    <span className="text-sm font-sans font-medium text-zinc-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats highlights */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
                <div>
                  <div className="flex items-center gap-1.5 font-display font-black text-3xl text-white">
                    <span>147</span>
                    <span className="text-[#CCFF00] text-xl">+</span>
                  </div>
                  <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-bold mt-1">
                    5-Star Reviews
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 font-display font-black text-3xl text-white">
                    <span>100</span>
                    <span className="text-[#D1A751] text-xl">%</span>
                  </div>
                  <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-bold mt-1">
                    AC Training Area
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 font-display font-black text-3xl text-white">
                    <span>5.0</span>
                    <span className="text-yellow-500 text-lg">★</span>
                  </div>
                  <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-bold mt-1">
                    Google Rating
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Collage with real reception desk */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square w-full max-w-md mx-auto"
            >
              {/* Outer Glow Background */}
              <div className="absolute inset-0 bg-[#D1A751]/5 blur-3xl rounded-full pointer-events-none" />

              {/* Reception Photo Card */}
              <div className="absolute top-0 right-0 w-[92%] h-[92%] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/images/gym_reception.jpg"
                  alt="MK Muscle Gym Reception with gold 3D logo sign"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                {/* Overlaid Location Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-obsidian/85 backdrop-blur-md p-3.5 rounded-xl border border-white/5 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#D1A751]/20 text-[#D1A751]">
                    <Award size={18} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xs text-white uppercase tracking-wider">
                      Official Front Desk
                    </div>
                    <div className="font-sans text-[10px] text-zinc-400">
                      Sunset Lane, Phase 2 Ext, DHA Karachi
                    </div>
                  </div>
                </div>
              </div>

              {/* Offset Decorative Trust Badge */}
              <div className="absolute bottom-2 left-2 z-20">
                <Card
                  borderAccent="gold"
                  hoverGlow="gold"
                  className="!p-4 bg-brand-obsidian/95 backdrop-blur-md border border-[#D1A751]/30 max-w-[190px] shadow-2xl shadow-black/80"
                >
                  <div className="flex flex-col gap-1.5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-xs">★</span>
                      ))}
                    </div>
                    <div className="font-display font-black text-sm text-white">
                      100% Verified
                    </div>
                    <div className="text-[10px] text-zinc-400 leading-normal">
                      &quot;Finest machines, clean vibe, extremely supportive coaches.&quot;
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
