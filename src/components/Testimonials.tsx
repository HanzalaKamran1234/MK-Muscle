"use client";

import React from "react";
import Card from "./ui/Card";
import { Star, Quote, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "Hamza K.",
      location: "DHA Karachi",
      rating: 5,
      comment: "The absolute best gym in DHA Karachi hands down. Extremely clean and fully air-conditioned which is rare to see functioning so perfectly. The biomechanical targeted machine selection is incredible. Coach Shamim is highly motivational and knows sports science inside out!",
      theme: "Clean Air Conditioning & Machinery",
    },
    {
      name: "Sarah Khan",
      location: "Sunset Lane",
      rating: 5,
      comment: "I have been training under Coach Fatima for personal training. Her customized pelvic splits, form check-ins, and mobility posture guides are fantastic. The gym environment is highly supportive, safe, professional, and welcoming for female fitness enthusiasts.",
      theme: "Expert Female Coaching & Support",
    },
    {
      name: "Saad R.",
      location: "Phase 2 Ext",
      rating: 5,
      comment: "MK Muscle Gym has successfully established a high-morale, elite lifting culture. Excellent plate loading machinery, pristine atmosphere, clean air, and very supportive members. The direct WhatsApp consultation keeps you highly accountable.",
      theme: "Results-Driven Lifting Culture",
    },
    {
      name: "Zain M.",
      location: "DHA Karachi",
      rating: 5,
      comment: "Highly premium setup at Plot 18-C Sunset Lane. The barbell plate selections and target cable mechanics are elite level. Trainers are always active on the floor correcting your biomechanics. You will see visual results if you train here.",
      theme: "Premium Equipment & Guidance",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 18 },
    },
  };

  return (
    <section id="testimonials" className="relative py-24 bg-brand-obsidian overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#CCFF00]/1 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#CCFF00] font-display font-black text-xs uppercase tracking-widest mb-3">
            Member Feedback
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight text-white uppercase mb-4">
            5.0 Rated Gym Culture
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#CCFF00] to-[#00E5FF] mx-auto mb-6" />
          <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            Highly recommended by over 147+ verified local reviews. Read what our dedicated members say about our training splits, hygiene, machinery, and coach accountability.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {reviews.map((rev, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card
                borderAccent="none"
                hoverGlow="gold"
                className="h-full flex flex-col justify-between !p-6 md:!p-8 relative"
              >
                {/* Accent Quote Mark */}
                <div className="absolute right-6 top-6 text-white/[0.03] pointer-events-none">
                  <Quote size={80} />
                </div>

                <div className="flex flex-col gap-5 relative z-10">
                  {/* Star Rating & Theme */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4">
                    <div className="flex gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#D1A751" className="text-[#D1A751]" />
                      ))}
                    </div>
                    <span className="text-[9px] font-sans font-black text-[#D1A751] uppercase tracking-widest bg-[#D1A751]/10 border border-[#D1A751]/20 px-2.5 py-1 rounded">
                      {rev.theme}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-zinc-300 font-sans text-sm leading-relaxed">
                    &quot;{rev.comment}&quot;
                  </p>
                </div>

                {/* Reviewer Bio */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wide">
                      {rev.name}
                    </h4>
                    <span className="text-[10px] text-zinc-500 font-sans font-medium">
                      Member, {rev.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck size={14} />
                    <span className="text-[9px] font-sans font-extrabold uppercase tracking-wider">
                      Verified Google Review
                    </span>
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
