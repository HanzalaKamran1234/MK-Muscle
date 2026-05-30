"use client";

import React from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Image from "next/image";
import { MessageSquare, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Trainers() {
  const coaches = [
    {
      id: "shamim",
      name: "Coach Shamim",
      role: "Head Coach & Transformation Specialist",
      image: "/images/trainer_shamim.jpg",
      tags: ["Body Recomposition", "Strength & Powerlifting", "Contest Prep", "Progressive Overload"],
      quote: "Iron never lies. Every single rep in this air-conditioned space is a direct statement of who you want to become.",
      rating: "5.0 Rating in Reviews",
      message: "Hi MK Muscle Gym! I'd like to book a personal training assessment session with Coach Shamim.",
    },
    {
      id: "fatima",
      name: "Coach Fatima",
      role: "Female Fitness & Nutrition Specialist",
      image: "/images/trainer_fatima.png",
      tags: ["HIIT & Fat Loss", "Nutrition & Macros", "Functional Performance", "Posture Correction"],
      quote: "Transformation is not just a physical shift. It is a complete mental rebuild. I will ensure your form is absolute.",
      rating: "5.0 Rating in Reviews",
      message: "Hi MK Muscle Gym! I am interested in personal training options with Coach Fatima.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section id="trainers" className="relative py-24 bg-brand-obsidian overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#D1A751]/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#CCFF00] font-display font-black text-xs uppercase tracking-widest mb-3">
            Elite Leadership
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight text-white uppercase mb-4">
            Meet Our Pro Coaches
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#CCFF00] to-[#00E5FF] mx-auto mb-6" />
          <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            Highly praised by members in reviews for their strict biomechanics, exceptional support, and high-energy motivation. They are here to guide your journey.
          </p>
        </div>

        {/* Coaches Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {coaches.map((coach) => (
            <motion.div key={coach.id} variants={cardVariants}>
              <Card
                borderAccent="gold"
                hoverGlow="gold"
                className="h-full flex flex-col justify-between !p-5 relative"
              >
                <div className="flex flex-col gap-6">
                  {/* Photo Frame with zoom effect */}
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-white/10 group">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Google Rating Badge */}
                    <div className="absolute top-3 left-3 bg-brand-obsidian/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#D1A751]/30 flex items-center gap-1.5">
                      <Star size={12} fill="#D1A751" className="text-[#D1A751]" />
                      <span className="text-[10px] font-sans font-extrabold text-[#D1A751] uppercase tracking-wide">
                        {coach.rating}
                      </span>
                    </div>

                    {/* Trainer name card overlay */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-wide">
                        {coach.name}
                      </h3>
                      <p className="text-zinc-400 font-sans text-xs mt-0.5">
                        {coach.role}
                      </p>
                    </div>
                  </div>

                  {/* Quote Frame */}
                  <blockquote className="border-l-2 border-[#D1A751] pl-3.5 my-1 text-zinc-300 font-sans italic text-xs leading-relaxed">
                    &quot;{coach.quote}&quot;
                  </blockquote>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {coach.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-sans font-bold tracking-wider text-zinc-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Consult Button */}
                <div className="pt-6 mt-6 border-t border-white/5">
                  <Button
                    variant="gold"
                    size="md"
                    href={`https://wa.me/923351225538?text=${encodeURIComponent(coach.message)}`}
                    isExternal={true}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={16} />
                    <span>Train With {coach.name.split(" ")[1]}</span>
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
