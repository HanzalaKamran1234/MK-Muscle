"use client";

import React from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { Check, ShieldCheck, Sparkles, MessageSquare, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Membership() {
  const tiers = [
    {
      name: "1-Month Core Pass",
      tagline: "Start your momentum",
      price: "PKR 5,000",
      period: "Monthly",
      isPopular: false,
      features: [
        "Chilled Air-Conditioned Access",
        "Full select machinery access",
        "Locker & shower facilities",
        "Initial machine orientation",
        "Supportive workout community",
      ],
      color: "none" as const,
      message: "Hi MK Muscle Gym! I'd like to sign up for your 1-Month Core Pass. Please let me know how to proceed with payment and registration.",
    },
    {
      name: "3-Month Momentum Pack",
      tagline: "Perfect for real progression",
      price: "PKR 13,500",
      period: "Save 10%",
      isPopular: true,
      features: [
        "All Core Pass inclusions",
        "Personalized training split layout",
        "Biomechanical form orientation",
        "Basic nutrition macro consult",
        "Progress check-ins under coaches",
      ],
      color: "volt" as const,
      message: "Hi MK Muscle Gym! I am interested in your 3-Month Momentum Pack. Let me know the special membership discount options.",
    },
    {
      name: "6-Month Transformation Pack",
      tagline: "Ultimate lifestyle adaptation",
      price: "PKR 24,000",
      period: "Save 20%",
      isPopular: false,
      features: [
        "All Momentum Pack inclusions",
        "Complete structural nutrition macro mapping",
        "Dedicated posture & mobility correction splits",
        "Active WhatsApp metric progress check-in",
        "Highest priority trainer support on gym floor",
      ],
      color: "gold" as const,
      message: "Hi MK Muscle Gym! I want to commit to the 6-Month Transformation Pack. Please share detail schedules and trainer pairing options.",
    },
  ];

  return (
    <section id="pricing" className="relative py-24 bg-brand-dark overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#D1A751]/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#CCFF00] font-display font-black text-xs uppercase tracking-widest mb-3">
            Membership Passes
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight text-white uppercase mb-4">
            Select Your Pass
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#CCFF00] to-[#00E5FF] mx-auto mb-6" />
          <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            Transparent value, zero hidden signup fees. Commit to a structured package to unlock progressive health adaptations and join Karachi&apos;s finest gym.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-16">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full flex"
            >
              <Card
                borderAccent={tier.color}
                hoverGlow={tier.color}
                className={`w-full flex flex-col justify-between relative !p-6 md:!p-8 ${
                  tier.isPopular ? "border-[#CCFF00]/40 shadow-[0_0_30px_rgba(204,255,0,0.05)] bg-[#0e1017]/95" : ""
                }`}
              >
                {/* Popular Ribbon Tag */}
                {tier.isPopular && (
                  <div className="absolute top-4 right-4 bg-[#CCFF00] text-black text-[9px] font-sans font-black uppercase tracking-widest px-2.5 py-1 rounded-md flex items-center gap-1 shadow-md">
                    <Sparkles size={10} />
                    <span>Highly Popular</span>
                  </div>
                )}

                <div>
                  {/* Name & Tagline */}
                  <h3 className="font-display font-black text-lg text-white uppercase tracking-wide">
                    {tier.name}
                  </h3>
                  <p className="text-zinc-500 font-sans text-xs mt-1">
                    {tier.tagline}
                  </p>

                  {/* Pricing Frame */}
                  <div className="my-6 flex items-baseline gap-1.5">
                    <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-xs text-zinc-500 font-sans font-bold uppercase">
                      / {tier.period}
                    </span>
                  </div>

                  {/* Features Checklist */}
                  <ul className="flex flex-col gap-3.5 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={16} className="text-[#CCFF00] shrink-0 mt-0.5" />
                        <span className="text-xs text-zinc-300 font-sans font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct WhatsApp Call Action */}
                <div className="pt-6 border-t border-white/5">
                  <Button
                    variant={tier.isPopular ? "volt" : "glass"}
                    size="md"
                    href={`https://wa.me/923351225538?text=${encodeURIComponent(tier.message)}`}
                    isExternal={true}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={16} />
                    <span>Sign Up on WhatsApp</span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Action Call Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glassmorphism max-w-3xl mx-auto rounded-xl p-6 md:p-8 border border-white/10 shadow-lg text-center flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div className="text-left">
            <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <ShieldCheck className="text-[#D1A751]" size={20} />
              <span>Start Your Fitness Journey Today</span>
            </h3>
            <p className="text-zinc-400 font-sans text-xs leading-relaxed max-w-md">
              Need custom durations, multiple family packages, or direct corporate splits? Let us design the perfect plan for your goals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Button
              variant="volt"
              size="sm"
              href="https://wa.me/923351225538?text=Hi%20MK%20Muscle!%20I'd%20like%20to%20get%20a%20custom%20membership%20pricing%20consultation."
              isExternal={true}
              className="flex gap-2"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Chat</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              href="tel:+923351225538"
              className="flex gap-2"
            >
              <Phone size={14} />
              <span>Call Now</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
