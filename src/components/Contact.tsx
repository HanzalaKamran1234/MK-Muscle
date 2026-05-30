"use client";

import React, { useState } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { MapPin, Phone, MessageSquare, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "muscle-building",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e?: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your Name and Phone Number.");
      return;
    }

    setSubmitted(true);

    // Map goal key to readable label
    const goalsMap: { [key: string]: string } = {
      "muscle-building": "Muscle Building / Hypertrophy",
      "fat-loss": "Fat Loss & Shredding",
      strength: "Strength Training / Powerlifting",
      mobility: "Functional Mobility & Posture",
      "personal-training": "1-on-1 Personal Training",
    };

    const selectedGoal = goalsMap[formData.goal] || formData.goal;

    // Dynamically compile WhatsApp URL
    const message = `Hi MK Muscle Gym! My name is ${formData.name} (Phone: ${formData.phone}). I just submitted an inquiry on your website. My main fitness goal is: ${selectedGoal}. I'd like to book my free trial training session at Sunset Lane.`;
    const whatsappUrl = `https://wa.me/923351225538?text=${encodeURIComponent(message)}`;

    // Delay redirect slightly to show success animation
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setSubmitted(false);
      setFormData({ name: "", phone: "", goal: "muscle-building" });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 bg-brand-dark overflow-hidden">
      {/* Accent lighting blurs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#CCFF00]/1 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D1A751]/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Location & Info */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div>
              <div className="inline-block text-[#CCFF00] font-display font-black text-xs uppercase tracking-widest mb-3">
                Visit Us
              </div>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight text-white uppercase mb-4">
                Connect With Us
              </h2>
              <div className="w-20 h-[3px] bg-gradient-to-r from-[#CCFF00] to-[#00E5FF] mb-6" />
              <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
                We are conveniently located at the fitness hub of Sunset Lane, DHA Phase 2 Extension. Drop in for a tour of our air-conditioned facility or chat with Coach Shamim & Fatima directly.
              </p>
            </div>

            {/* Address & Hours Info Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Address card */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#D1A751] flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-wider mb-1">
                    Gym Location
                  </h4>
                  <p className="text-xs text-zinc-400 leading-normal font-sans">
                    Plot No. 18-C, 05 Sunset Ln,<br />
                    Phase 02 Extension, DHA,<br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

              {/* Timing card */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#CCFF00] flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-wider mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-xs text-zinc-400 leading-normal font-sans">
                    <strong className="text-white">Mon – Sat:</strong> 6:00 AM – 11:00 PM<br />
                    <strong className="text-white">Sunday:</strong> Closed / Maintenance
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact buttons */}
            <div className="flex flex-wrap gap-4 border-t border-white/5 pt-6">
              <a
                href="https://wa.me/923351225538?text=Hi%20MK%20Muscle!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-display font-bold text-xs uppercase tracking-wide hover:bg-emerald-500/20 transition-all duration-300"
              >
                <MessageSquare size={14} />
                <span>WhatsApp Active</span>
              </a>

              <a
                href="tel:+923351225538"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#D1A751]/10 border border-[#D1A751]/20 text-[#D1A751] font-display font-bold text-xs uppercase tracking-wide hover:bg-[#D1A751]/20 transition-all duration-300"
              >
                <Phone size={14} />
                <span>+92 335 1225538</span>
              </a>
            </div>

            {/* Responsive Google Maps Embed with Premium Styling */}
            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10 shadow-lg relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5794828131333!2d67.06584287515082!3d24.81014167795908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c5e8eb95b11%3A0x67dbad97732a3922!2sMK%20Muscle%20Gym!5e0!3m2!1sen!2spk!4v1717088902500!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(10%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D1A751]/40 rounded-xl pointer-events-none transition-colors duration-500" />
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card borderAccent="gold" hoverGlow="gold" className="!p-8 bg-brand-obsidian/95 shadow-2xl relative">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
                  <ShieldCheck size={18} className="text-[#CCFF00]" />
                  <span className="font-display font-extrabold text-xs uppercase tracking-wider text-zinc-300">
                    Book Free Trial Session
                  </span>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                      <ShieldCheck size={28} />
                    </div>
                    <h3 className="font-display font-black text-lg text-white uppercase tracking-wider mb-2">
                      Trial Request Logged!
                    </h3>
                    <p className="text-zinc-400 font-sans text-xs max-w-xs leading-normal">
                      Redirecting you to WhatsApp to instantly lock in your coach schedule slot with Shamim/Fatima...
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] font-sans font-extrabold text-zinc-500 uppercase tracking-widest">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Zain Ahmed"
                        className="w-full bg-[#14161f] border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#CCFF00] transition-colors"
                      />
                    </div>

                    {/* Phone input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-[10px] font-sans font-extrabold text-zinc-500 uppercase tracking-widest">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +92 300 1234567"
                        className="w-full bg-[#14161f] border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#CCFF00] transition-colors"
                      />
                    </div>

                    {/* Target Goal Selector */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="goal" className="text-[10px] font-sans font-extrabold text-zinc-500 uppercase tracking-widest">
                        Target Fitness Goal
                      </label>
                      <select
                        id="goal"
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className="w-full bg-[#14161f] border border-white/5 rounded-lg px-4 py-3 text-sm text-zinc-300 focus:outline-none focus:border-[#CCFF00] transition-colors appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 12px center",
                          backgroundSize: "16px",
                        }}
                      >
                        <option value="muscle-building">Muscle Building / Hypertrophy</option>
                        <option value="fat-loss">Fat Loss & Shredding</option>
                        <option value="strength">Strength Training & Compounds</option>
                        <option value="mobility">Functional Core & Posture</option>
                        <option value="personal-training">1-on-1 Personal Training (Shamim/Fatima)</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        variant="volt"
                        size="lg"
                        className="w-full flex items-center justify-center gap-2"
                        onClick={() => handleSubmit()}
                      >
                        <MessageSquare size={16} />
                        <span>Connect on WhatsApp</span>
                      </Button>
                    </div>

                    <div className="text-center">
                      <span className="text-[9px] text-zinc-600 font-sans font-bold uppercase tracking-wider">
                        ★ SECURE LEAD CHANNEL • DIRECT TRIAL LOCK ★
                      </span>
                    </div>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
