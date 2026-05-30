"use client";

import React from "react";
import Button from "./ui/Button";
import { ArrowRight, Star, Shield, Wind, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollToTrial = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#contact");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 18 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-obsidian"
    >
      {/* Real Gym Photo Backdrop with Advanced Gradient Overlays */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/gym_floor.jpg')",
        }}
      >
        {/* Dynamic Dark Gradients to pop typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-obsidian via-brand-obsidian/85 to-brand-obsidian/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-transparent to-brand-obsidian/45" />
      </div>

      {/* Subtle Floating Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#D1A751]/5 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <Sparkles size={14} className="text-[#CCFF00]" />
            <span className="font-display font-bold text-xs uppercase tracking-widest text-zinc-300">
              DHA Karachi&apos;s Premier Transformation Gym
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-5xl sm:text-6xl md:text-7.5xl leading-[1.05] tracking-tight text-white mb-6 uppercase"
          >
            Build Your <br />
            <span className="text-volt-gradient text-glow-volt">Strongest</span> <br />
            Version
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-zinc-300 font-sans font-normal leading-relaxed mb-8 max-w-xl"
          >
            Experience a modern, fully air-conditioned fitness ecosystem at Sunset Lane. Reconstruct your body with elite biomechanical machines and Karachi&apos;s finest trainers.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16"
          >
            <Button
              variant="volt"
              size="lg"
              href="https://wa.me/923351225538?text=Hi%20MK%20Muscle%20Gym!%20I%20want%20to%20join%20and%20avail%20the%20membership%20special%20offers."
              isExternal={true}
              glow={true}
              className="group"
            >
              <span>Join MK Muscle Now</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#contact"
              onClick={handleScrollToTrial}
            >
              Book Free Trial
            </Button>
          </motion.div>

          {/* Stats Overlay Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl border-t border-white/10 pt-8"
          >
            {/* Stat 1 */}
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-[#D1A751]/10 border border-[#D1A751]/20 text-[#D1A751] shrink-0 mt-0.5">
                <Star size={20} fill="#D1A751" />
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl tracking-tight text-white flex items-center gap-1.5">
                  5.0 <span className="text-xs text-zinc-400 font-normal">/ 5.0</span>
                </div>
                <div className="text-xs text-zinc-400 font-medium font-sans">
                  147+ Verified Google Reviews
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00] shrink-0 mt-0.5">
                <Shield size={20} />
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl tracking-tight text-white">
                  Elite Setup
                </div>
                <div className="text-xs text-zinc-400 font-medium font-sans">
                  Biomechanical Correct Machines
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-start gap-3.5 col-span-2 md:col-span-1 border-t border-white/5 md:border-t-0 pt-4 md:pt-0">
              <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0 mt-0.5">
                <Wind size={20} />
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl tracking-tight text-white">
                  Fully AC
                </div>
                <div className="text-xs text-zinc-400 font-medium font-sans">
                  Chilled, Comfortable Workouts
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Visual Accent Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent opacity-30" />
    </section>
  );
}
