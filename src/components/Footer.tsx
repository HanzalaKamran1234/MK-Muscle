"use client";

import React from "react";
import Logo from "./ui/Logo";
import { MapPin, Phone, MessageSquare, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-obsidian border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle bottom lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 bg-[#CCFF00]/1 blur-2xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="block w-fit">
              <Logo variant="hybrid" height={40} showText={true} />
            </a>
            <p className="text-xs text-zinc-500 font-sans leading-relaxed max-w-xs">
              DHA Karachi&apos;s premier high-morale transformation center. Empowering muscle adaptation, fat loss, and physical discipline under expert biomechanical coach guidance.
            </p>
            <div className="flex items-center gap-2 text-zinc-600">
              <ShieldCheck size={14} className="text-[#D1A751]" />
              <span className="text-[10px] font-sans font-extrabold uppercase tracking-wider">
                Official 5.0-Star Rated Gym Presence
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest mb-4">
              Quick Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "Home Base", href: "#home" },
                { name: "About Gym", href: "#about" },
                { name: "Why MK Muscle", href: "#why-us" },
                { name: "Our Services", href: "#services" },
                { name: "Elite Coaches", href: "#trainers" },
                { name: "Pricing Passes", href: "#pricing" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs text-zinc-400 hover:text-[#CCFF00] font-sans transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest mb-1">
              DHA Sunset Lane Hub
            </h4>

            <div className="flex flex-col gap-3 font-sans text-xs">
              {/* Address */}
              <div className="flex items-start gap-3 text-zinc-400">
                <MapPin size={14} className="text-[#D1A751] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Plot No. 18-C, 05 Sunset Lane, Phase 2 Extension, DHA, Karachi, Pakistan
                </span>
              </div>

              {/* Call */}
              <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                <Phone size={14} className="text-[#CCFF00] shrink-0" />
                <a href="tel:+923351225538">+92 335 1225538 (Voice Calls)</a>
              </div>

              {/* Text WhatsApp */}
              <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                <MessageSquare size={14} className="text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/923351225538?text=Hi%20MK%20Muscle%20Gym!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +92 335 1225538 (WhatsApp Active)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="h-[1px] bg-white/5 mb-8" />

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-sans text-zinc-600 font-bold uppercase tracking-wider text-center sm:text-left">
            © {currentYear} MK MUSCLE GYM. ALL RIGHTS RESERVED.
          </p>

          <p className="text-[10px] font-sans text-zinc-600 font-bold uppercase tracking-widest text-center sm:text-left flex items-center gap-1.5">
            <span>LOCATION: Sunset Lane Phase 2 Ext, DHA Karachi, Pakistan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
