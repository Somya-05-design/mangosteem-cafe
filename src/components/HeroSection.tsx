"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const HeroSection: React.FC = () => {
  const { setIsCartOpen } = useCart();

  return (
    <section id="home" className="relative pt-12 pb-20 overflow-hidden">
      {/* Background Decorative Ribbon SVG */}
      <div className="absolute inset-0 pointer-events-none opacity-40 flex items-center justify-center">
        <svg
          viewBox="0 0 1000 600"
          className="w-full h-full max-w-5xl"
          fill="none"
          stroke="#E5D6C5"
          strokeWidth="3"
        >
          <path d="M100,300 C250,100 350,500 500,300 C650,100 750,500 900,300" strokeDasharray="8 8" />
          <path d="M150,200 C300,50 450,450 600,200 C750,-50 900,400 950,250" />
          <path d="M50,400 C200,600 400,100 600,400 C800,700 950,200 980,350" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Main Serif Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-coffee-dark tracking-tight mb-12 drop-shadow-sm">
          Freshly Brewed Coffee
        </h1>

        {/* 3 Arched / Rounded Coffee Visuals in Overlapping Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 lg:gap-8 max-w-5xl mx-auto">
          {/* Left Card */}
          <div className="relative w-full max-w-[280px] md:max-w-[270px] lg:max-w-[310px] aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white transform md:-rotate-2 transition-transform duration-500 hover:rotate-0 hover:scale-105">
            <Image
              src="/images/hero_1.png"
              alt="Artisan Latte Art in Speckled Ceramic Cup"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <span className="text-[11px] font-semibold tracking-wider text-amber-200 uppercase">Single Origin</span>
              <p className="text-white font-serif font-bold text-lg leading-tight">Artisan Roast</p>
            </div>
          </div>

          {/* Center Card (Elevated & Prominent) */}
          <div className="relative w-full max-w-[310px] md:max-w-[300px] lg:max-w-[350px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white z-20 transform md:-translate-y-4 transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/hero_2.png"
              alt="Porcelain Cup Cappuccino with Cocoa Dusting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 bg-coffee-amber/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
              ★ House Signature
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-left">
              <span className="text-xs font-semibold tracking-wider text-amber-200 uppercase">In-House Blend</span>
              <p className="text-white font-serif font-bold text-xl leading-tight">Golden Microfoam</p>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative w-full max-w-[280px] md:max-w-[270px] lg:max-w-[310px] aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 transition-transform duration-500 hover:rotate-0 hover:scale-105">
            <Image
              src="/images/hero_3.png"
              alt="Mocha Coffee Drink with Latte Heart"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <span className="text-[11px] font-semibold tracking-wider text-amber-200 uppercase">Rich & Velvety</span>
              <p className="text-white font-serif font-bold text-lg leading-tight">Chocolate Mocha</p>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="inline-flex items-center gap-2 bg-coffee-dark hover:bg-coffee-espresso text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <span>Explore Fresh Roasts</span>
            <ArrowRight className="w-5 h-5 text-coffee-amber" />
          </button>
        </div>
      </div>
    </section>
  );
};
