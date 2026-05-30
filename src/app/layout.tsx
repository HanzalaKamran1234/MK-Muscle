import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MK Muscle Gym | Elite Fitness Center & Gym in DHA Karachi",
  description: "Experience the ultimate transformation at MK Muscle Gym (Sunset Lane, DHA Karachi). Top-tier equipment, air-conditioned spaces, professional trainer support (Coach Shamim & Fatima), and a result-driven fitness community. Book your free trial today!",
  keywords: [
    "MK Muscle Gym",
    "Gym in DHA Karachi",
    "Best gym in Karachi",
    "Sunset Lane Gym",
    "Fitness center Karachi",
    "Personal trainer Karachi",
    "Trainer Shamim",
    "Trainer Fatima",
    "Weight loss program Karachi",
    "Muscle building Karachi",
    "Premium fitness Karachi"
  ],
  authors: [{ name: "MK Muscle Gym" }],
  openGraph: {
    title: "MK Muscle Gym | Elite Fitness & Personal Training in DHA Karachi",
    description: "Transform your body and mind in a premium, high-energy, air-conditioned space with top-tier equipment and expert coaching. 5.0 Rated with 147+ reviews.",
    type: "website",
    locale: "en_US",
    siteName: "MK Muscle Gym",
  },
  twitter: {
    card: "summary_large_image",
    title: "MK Muscle Gym | Elite Fitness Center in DHA Karachi",
    description: "Your strongest version starts here. Elite equipment, air-conditioned training facility, and expert coaches Shamim & Fatima.",
  },
  icons: {
    icon: "/icon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#08080a] text-zinc-100 font-sans selection:bg-[#CCFF00] selection:text-black">
        {children}
      </body>
    </html>
  );
}

