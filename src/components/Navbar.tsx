"use client";

import React, { useState, useEffect } from "react";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Services", href: "#services" },
    { name: "Trainers", href: "#trainers" },
    { name: "Pricing", href: "#pricing" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#08080a]/90 backdrop-blur-md py-4 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="block">
              <Logo variant="hybrid" height={45} showText={true} />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-display font-medium text-sm tracking-wide text-zinc-300 hover:text-[#CCFF00] transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#CCFF00] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+923351225538"
                className="flex items-center gap-2 text-sm text-zinc-300 hover:text-[#D1A751] font-display font-semibold transition-colors mr-2"
              >
                <Phone size={16} className="text-[#D1A751]" />
                <span>+92 335 1225538</span>
              </a>
              <Button
                variant="volt"
                size="sm"
                href="https://wa.me/923351225538?text=Hi%20MK%20Muscle%20Gym!%20I%20am%20interested%20in%20joining%20and%20booking%20a%20free%20trial%20session."
                isExternal={true}
                glow={true}
              >
                Join Now
              </Button>
            </div>

            {/* Mobile Menu Toggle button */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="https://wa.me/923351225538?text=Hi%20MK%20Muscle!"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.713-1.465L0 24zm6.753-2.617l.363.216c1.472.873 3.12 1.332 4.803 1.333 5.485 0 9.948-4.467 9.952-9.957.002-2.66-1.033-5.159-2.91-7.04C16.342 3.854 13.843 2.817 11.2 2.817c-5.487 0-9.951 4.468-9.955 9.958-.001 1.794.47 3.543 1.365 5.097l.237.414-1.01 3.694 3.782-.99z" />
                </svg>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[77px] z-40 lg:hidden glassmorphism border-b border-white/5 p-6 shadow-2xl flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-display font-medium text-lg text-zinc-300 hover:text-[#CCFF00] py-1.5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="h-[1px] bg-white/5 my-1" />

            <div className="flex flex-col gap-4">
              <a
                href="tel:+923351225538"
                className="flex items-center justify-center gap-2 text-zinc-300 font-display font-semibold py-2 hover:text-[#D1A751] transition-colors"
              >
                <Phone size={18} className="text-[#D1A751]" />
                <span>+92 335 1225538</span>
              </a>
              <Button
                variant="volt"
                size="lg"
                href="https://wa.me/923351225538?text=Hi%20MK%20Muscle%20Gym!%20I%20am%20interested%20in%20joining%20and%20booking%20a%20free%20trial%20session."
                isExternal={true}
                className="w-full"
              >
                Start Free Trial
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
