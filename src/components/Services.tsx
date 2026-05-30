"use client";

import React from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { Dumbbell, Target, ShieldAlert, Sparkles, Flame, Users, Apple } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const programs = [
    {
      icon: <Dumbbell className="w-5 h-5 text-[#CCFF00]" />,
      title: "Muscle Building Training",
      tag: "Hypertrophy split",
      desc: "Scientific progressive overload splits designed to trigger muscular adaptations, size gains, and clean muscular density.",
      message: "Hi MK Muscle Gym! I'd like to inquire about the Muscle Building Program in DHA Karachi.",
    },
    {
      icon: <Flame className="w-5 h-5 text-[#00E5FF]" />,
      title: "Fat Loss Programs",
      tag: "Metabolic conditioning",
      desc: "High-intensity circuits combined with strict fat-oxidation strength structures to accelerate lean fat reduction.",
      message: "Hi MK Muscle Gym! I'd like to get details about your weight loss and fat reduction programs.",
    },
    {
      icon: <Target className="w-5 h-5 text-[#D1A751]" />,
      title: "Strength Training",
      tag: "Power & Force",
      desc: "Focus on compound powerlifting mechanics, central nervous system conditioning, and lifting milestones.",
      message: "Hi MK Muscle Gym! I am interested in your Strength Training and powerlifting setups.",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-[#CCFF00]" />,
      title: "Functional Fitness",
      tag: "Athletic mobility",
      desc: "Improve dynamic core stability, kinetic mobility, posture correction, and full-body movement range.",
      message: "Hi MK Muscle Gym! Can you share details about your Functional Fitness and core conditioning classes?",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#00E5FF]" />,
      title: "Cardio & Conditioning",
      tag: "VO2 Max & Stamina",
      desc: "Maximize cardiovascular capacity and endurance output through targeted heart-rate zone protocols.",
      message: "Hi MK Muscle Gym! I want to understand more about your Cardio and endurance conditioning programs.",
    },
    {
      icon: <Users className="w-5 h-5 text-[#D1A751]" />,
      title: "Personal Training (PT)",
      tag: "1-on-1 Coach Mentoring",
      desc: "Dedicated personal trainers (Coach Shamim & Fatima) providing custom schedules and rep-by-rep biomechanical execution.",
      message: "Hi MK Muscle Gym! I want to hire a personal trainer. I am interested in Coach Shamim or Coach Fatima for 1-on-1 PT.",
    },
    {
      icon: <Apple className="w-5 h-5 text-[#CCFF00]" />,
      title: "Diet & Nutrition Guidance",
      tag: "Custom Meal Layouts",
      desc: "Precision macronutrient calculations and high-compliance, sustainable meal plans matching your lifting targets.",
      message: "Hi MK Muscle Gym! Do you provide personalized nutrition mapping and macro meal plans with memberships?",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 20 },
    },
  };

  return (
    <section id="services" className="relative py-24 bg-brand-dark overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#CCFF00]/1 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#CCFF00] font-display font-black text-xs uppercase tracking-widest mb-3">
            Elite Fitness Menu
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight text-white uppercase mb-4">
            Our Elite Programs
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#CCFF00] to-[#00E5FF] mx-auto mb-6" />
          <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            Every body demands a different stimulus. We construct target-specific pathways that utilize advanced sports science to optimize your kinetic progression.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((prog, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Card
                borderAccent="none"
                hoverGlow="volt"
                className="h-full flex flex-col justify-between"
              >
                <div className="flex flex-col gap-5">
                  {/* Icon & Tag */}
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      {prog.icon}
                    </div>
                    <span className="text-[10px] font-sans font-semibold tracking-wider text-zinc-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full uppercase">
                      {prog.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2.5 uppercase tracking-wide">
                      {prog.title}
                    </h3>
                    <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>
                </div>

                {/* WhatsApp Action */}
                <div className="pt-6 mt-6 border-t border-white/5">
                  <Button
                    variant="glass"
                    size="sm"
                    href={`https://wa.me/923351225538?text=${encodeURIComponent(prog.message)}`}
                    isExternal={true}
                    className="w-full"
                  >
                    Inquire Program
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
