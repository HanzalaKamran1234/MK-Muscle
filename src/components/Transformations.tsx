"use client";

import React, { useState } from "react";
import Card from "./ui/Card";
import { ArrowRightLeft, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Transformations() {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      name: "Hamza K. (DHA Karachi)",
      category: "Body Recomposition",
      duration: "16 Weeks split",
      coach: "Coach Shamim",
      quote: "Under Shamim's supervision, my entire training split changed. The AC environment at Sunset Lane made training heavy in humid summers totally viable. The visual changes speak for themselves.",
      metrics: [
        { label: "Body Weight", before: "92 kg", after: "81 kg", change: "-11 kg" },
        { label: "Body Fat", before: "24%", after: "12%", change: "-12%" },
        { label: "Muscle Mass", before: "36 kg", after: "40 kg", change: "+4 kg" },
      ],
      progress: 88,
      tags: ["Muscle Growth", "Ab Defined", "Heavy Compounds"],
    },
    {
      name: "Zainab M. (Sunset Lane)",
      category: "Athletic Strength & Posture Rebuild",
      duration: "12 Weeks split",
      coach: "Coach Fatima",
      quote: "I struggled with back stiffness and poor posture. Fatima redesigned my lifting splits, focusing heavily on core stability and hinge movements. My deadlift skyrocketed and my chronic pain is gone.",
      metrics: [
        { label: "Deadlift 1RM", before: "40 kg", after: "95 kg", change: "+55 kg" },
        { label: "Plank Hold", before: "45 sec", after: "3:30 min", change: "+2:45 min" },
        { label: "Posture Index", before: "Poor", after: "Excellent", change: "APT Corrected" },
      ],
      progress: 95,
      tags: ["Spine Rehab", "Core Power", "Glute Activation"],
    },
    {
      name: "Saad R. (Phase 2 Ext)",
      category: "Metabolic Fat Loss Rebirth",
      duration: "24 Weeks split",
      coach: "MK Fitness Team",
      quote: "MK Muscle's results-driven community is real. The culture and high energy keep you disciplined. I lost 27kg of fat and completely reclaimed my cardiovascular health.",
      metrics: [
        { label: "Body Weight", before: "108 kg", after: "81 kg", change: "-27 kg" },
        { label: "Waist Size", before: "40 inches", after: "32 inches", change: "-8 inches" },
        { label: "VO2 Max", before: "32 ml/kg", after: "48 ml/kg", change: "+16 ml/kg" },
      ],
      progress: 100,
      tags: ["Calorie Deficit", "Metcon Circuits", "Lifestyle Rebirth"],
    },
  ];

  return (
    <section id="transformations" className="relative py-24 bg-brand-dark overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00E5FF]/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#CCFF00] font-display font-black text-xs uppercase tracking-widest mb-3">
            Real Proof
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight text-white uppercase mb-4">
            Transformation Stories
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#CCFF00] to-[#00E5FF] mx-auto mb-6" />
          <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            Witness the physical conversions achieved in our training facility. No generic overlays, just raw discipline, expert guidance, and biometric results.
          </p>
        </div>

        {/* Tab Selector Links */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {stories.map((story, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStory(idx)}
              className={`px-5 py-2.5 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all duration-300 border focus:outline-none ${
                activeStory === idx
                  ? "bg-[#CCFF00] text-black border-transparent shadow-neon-volt"
                  : "bg-white/5 border-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {story.category}
            </button>
          ))}
        </div>

        {/* Story Board Layout */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card borderAccent="gold" className="!p-8 bg-brand-obsidian/90">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Side: Story Details */}
                <div className="md:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Header tags */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-sans font-extrabold tracking-wider bg-[#D1A751]/10 border border-[#D1A751]/20 text-[#D1A751] px-2.5 py-1 rounded-full uppercase">
                        {stories[activeStory].duration}
                      </span>
                      <span className="text-[10px] font-sans font-extrabold tracking-wider bg-white/5 border border-white/5 text-zinc-400 px-2.5 py-1 rounded-full uppercase">
                        Coach: {stories[activeStory].coach}
                      </span>
                    </div>

                    {/* Member Name */}
                    <h3 className="font-display font-extrabold text-2xl text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                      <span>{stories[activeStory].name}</span>
                      <Sparkles size={18} className="text-[#CCFF00]" />
                    </h3>

                    {/* Emotional Testimonial Quote */}
                    <blockquote className="text-zinc-300 font-sans italic text-sm leading-relaxed mb-6 border-l-2 border-[#CCFF00]/40 pl-4 py-1">
                      &quot;{stories[activeStory].quote}&quot;
                    </blockquote>

                    {/* Target tags */}
                    <div className="flex flex-wrap gap-2 mb-6 md:mb-0">
                      {stories[activeStory].tags.map((tag, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1 text-[9px] font-sans font-extrabold tracking-widest text-[#CCFF00] uppercase"
                        >
                          <CheckCircle2 size={10} />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Biometric Stats Cards */}
                <div className="md:col-span-5 bg-white/[0.02] border border-white/5 rounded-xl p-5 md:p-6 shadow-inner">
                  <div className="flex items-center gap-2 mb-5 pb-3 border-b border-white/5">
                    <TrendingUp size={16} className="text-[#D1A751]" />
                    <span className="font-display font-bold text-xs uppercase tracking-wider text-zinc-300">
                      Biometric Performance Shift
                    </span>
                  </div>

                  {/* Metrics List */}
                  <div className="flex flex-col gap-4">
                    {stories[activeStory].metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col gap-1.5">
                        <div className="flex justify-between text-xs font-sans">
                          <span className="text-zinc-500 font-medium">{metric.label}</span>
                          <span className="text-[#CCFF00] font-bold">{metric.change}</span>
                        </div>
                        <div className="flex items-center justify-between bg-brand-obsidian border border-white/5 p-2.5 rounded-lg">
                          <div className="text-[10px] text-zinc-500 font-bold uppercase">
                            Before: <span className="text-zinc-400 font-normal normal-case">{metric.before}</span>
                          </div>
                          <ArrowRightLeft size={10} className="text-zinc-600" />
                          <div className="text-[10px] text-zinc-500 font-bold uppercase">
                            After: <span className="text-white font-extrabold normal-case">{metric.after}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
