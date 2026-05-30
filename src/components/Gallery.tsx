"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = [
    {
      src: "/images/gym_floor.jpg",
      title: "Main Training Space",
      category: "Gym Floor & Machinery",
      desc: "Fully air-conditioned spacious gym floor equipped with targeted biomechanical select machines, barbell decks, and heavy bags.",
    },
    {
      src: "/images/gym_reception.jpg",
      title: "Lounge & Reception",
      category: "Front Desk Lobby",
      desc: "Modern matte black vertical-slat reception counter showcasing our signature gold metallic 3D MK Gym emblem.",
    },
    {
      src: "/images/gym_plates.jpg",
      title: "Precision Plate Racks",
      category: "Free Weights Zone",
      desc: "High-capacity Olympic plates and barbell setups arranged cleanly for rapid split progressive overloading.",
    },
    {
      src: "/images/gym_curls.jpg",
      title: "Dynamic Curls Practice",
      category: "Personal Training",
      desc: "Focus curls execution showing mirror alignment and supportive biomechanics checking under coach advice.",
    },
    {
      src: "/images/gym_lateral_raises.jpg",
      title: "Side Lateral Raising",
      category: "Athletic Conditioning",
      desc: "Precision lateral raising splits executed in front of massive full-length checking mirrors to monitor perfect range of motion.",
    },
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-brand-obsidian overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#CCFF00]/1 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#CCFF00] font-display font-black text-xs uppercase tracking-widest mb-3">
            Real Environment
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight text-white uppercase mb-4">
            Step Inside MK Muscle
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#CCFF00] to-[#00E5FF] mx-auto mb-6" />
          <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            Take a visual tour of our professional, clean, and results-driven training facility located in Sunset Lane, DHA Karachi. Authentic spaces, professional environment.
          </p>
        </div>

        {/* Gallery Grid - Creative Masonry-like grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[240px] md:auto-rows-[280px]">
          {images.map((img, index) => {
            // Apply different grid spans to create a modern premium masonry feel
            let gridClasses = "md:col-span-2";
            if (index === 0) gridClasses = "md:col-span-4 md:row-span-2"; // Featured main floor
            if (index === 1) gridClasses = "md:col-span-2 md:row-span-2"; // Front desk vertical
            if (index === 2) gridClasses = "md:col-span-2";
            if (index === 3) gridClasses = "md:col-span-2";
            if (index === 4) gridClasses = "md:col-span-2";

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setLightboxIndex(index)}
                className={`relative rounded-xl overflow-hidden border border-white/5 cursor-pointer shadow-lg group ${gridClasses}`}
              >
                {/* Image */}
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-brand-obsidian/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Hover Caption Details */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 z-10 transition-transform duration-300">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] font-sans font-black text-[#CCFF00] uppercase tracking-widest bg-[#CCFF00]/10 border border-[#CCFF00]/20 px-2 py-0.5 rounded mb-2 inline-block">
                      {img.category}
                    </span>
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-white uppercase tracking-wide">
                      {img.title}
                    </h3>
                    <p className="text-[10px] text-zinc-400 font-sans leading-normal mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                      {img.desc}
                    </p>
                  </div>
                </div>

                {/* Corner Maximize Icon */}
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-brand-obsidian/85 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-zinc-300 hover:text-white">
                  <Maximize2 size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal Carousel */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-[#050507]/98 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors z-50 cursor-pointer focus:outline-none"
            >
              <X size={20} />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors z-40 cursor-pointer focus:outline-none hidden sm:block"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors z-40 cursor-pointer focus:outline-none hidden sm:block"
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox Card Area */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-brand-obsidian border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] md:aspect-auto md:w-3/5 min-h-[300px] md:min-h-[450px]">
                <Image
                  src={images[lightboxIndex].src}
                  alt={images[lightboxIndex].title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Text / Details Frame */}
              <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-brand-dark border-t md:border-t-0 md:border-l border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles size={14} className="text-[#CCFF00]" />
                    <span className="text-[10px] font-sans font-black text-[#CCFF00] uppercase tracking-wider">
                      {images[lightboxIndex].category}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-white uppercase tracking-wide mb-3">
                    {images[lightboxIndex].title}
                  </h3>

                  <p className="text-sm font-sans text-zinc-400 leading-relaxed">
                    {images[lightboxIndex].desc}
                  </p>
                </div>

                {/* Footer specs */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-sans text-zinc-500 font-bold">
                    IMAGE {lightboxIndex + 1} of {images.length}
                  </span>
                  <div className="flex sm:hidden gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-lg bg-white/5 border border-white/5 text-zinc-400 hover:text-white"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-lg bg-white/5 border border-white/5 text-zinc-400 hover:text-white"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
