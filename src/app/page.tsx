import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Trainers from "@/components/Trainers";
import Transformations from "@/components/Transformations";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Membership from "@/components/Membership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-obsidian">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Main Page Sections in Logical Sequence */}
      <main className="flex-1">
        {/* Hero Banner */}
        <Hero />

        {/* Brand Context & Ratings */}
        <About />

        {/* 6 Key Premium Highlights */}
        <WhyChooseUs />

        {/* 7 Specific Fitness Services */}
        <Services />

        {/* Trainer Shamim & Fatima Profile Cards */}
        <Trainers />

        {/* Biometric Transformation Dashboards */}
        <Transformations />

        {/* Real Gym Photo Lightbox Gallery */}
        <Gallery />

        {/* Tiers Comparison & Passes */}
        <Membership />

        {/* 5-Star Verified Google Reviews Carousel */}
        <Testimonials />

        {/* Iframe Maps, Open Hours & Dynamic Lead WhatsApp Form */}
        <Contact />
      </main>

      {/* 3. Brand Footer */}
      <Footer />
    </div>
  );
}

