"use client";

import React from "react";
import Card from "./ui/Card";
import { Wind, Dumbbell, Users, Target, Heart, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Wind className="w-6 h-6 text-[#00E5FF]" />,
      title: "Clean & Air-Conditioned Space",
      desc: "Train in absolute comfort. Chilled climate control, continuous ventilation, and extreme daily hygiene checks to ensure optimal lung power.",
      accent: "volt" as const,
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-[#D1A751]" />,
      title: "Modern Targeted Machinery",
      desc: "Equipped with specialized biomechanically correct full-body load selectors. Focus tension exactly on the muscle, minimizing joint stress.",
      accent: "gold" as const,
    },
    {
      icon: <Users className="w-6 h-6 text-[#CCFF00]" />,
      title: "Expert Trainer Support",
      desc: "Direct access to Karachi's top coaches (Coach Shamim and Fatima) known for high energy, motivational reinforcement, and strict biomechanical form correction.",
      accent: "volt" as const,
    },
    {
      icon: <Target className="w-6 h-6 text-[#D1A751]" />,
      title: "Personalized Workout Guidance",
      desc: "No guess work. Receive customized training split formats and targeted cardio protocols constructed around your individual structural goals.",
      accent: "gold" as const,
    },
    {
      icon: <Heart className="w-6 h-6 text-[#00E5FF]" />,
      title: "Supportive Gym Community",
      desc: "A warm, high-morale, result-focused family. Train alongside professionals, athletes, and transformation-seekers in a highly motivating space.",
      accent: "volt" as const,
    },
    {
      icon: <Trophy className="w-6 h-6 text-[#CCFF00]" />,
      title: "Results-Driven Culture",
      desc: "We prioritize progressive overloading, physical adaptations, and nutritional habits. Our metric is your physical transformation.",
      accent: "volt" as const,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 18 },
    },
  };

  return (
    <section id="why-us" className="relative py-24 bg-brand-obsidian overflow-hidden">
      {/* Visual Accent Ambient Blur */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00E5FF]/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#CCFF00] font-display font-black text-xs uppercase tracking-widest mb-3">
            Why MK Muscle
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight text-white uppercase mb-4">
            Built for Elite Performance
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#CCFF00] to-[#00E5FF] mx-auto mb-6" />
          <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            Standard gyms lease access to iron. MK Muscle engineers an entire high-morale, elite athletic habitat carefully optimized for your ultimate mental and physical peak.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Card
                borderAccent={feature.accent}
                hoverGlow={feature.accent}
                className="h-full flex flex-col justify-between"
              >
                <div className="flex flex-col gap-6">
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-3 uppercase tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
