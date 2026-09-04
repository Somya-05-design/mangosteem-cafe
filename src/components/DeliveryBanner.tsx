"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Coffee, Truck, Award } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const DeliveryBanner: React.FC = () => {
  const { setIsCartOpen } = useCart();

  return (
    <section className="bg-coffee-dark text-white py-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Delivery Barista Image */}
        <div className="relative aspect-[4/4] max-w-[380px] mx-auto md:mx-0 w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <Image
            src="/images/delivery_barista.png"
            alt="Smiling Delivery Barista with Drink Carrier"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-start justify-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Coffee Cravings? <br />
            <span className="font-serif font-bold text-coffee-amber">We've Got You Covered</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
            Order your favorite drinks and treats for quick delivery within our service area. Fresh ingredients, careful packaging, and dependable delivery—every single time.
          </p>

          <button
            onClick={() => setIsCartOpen(true)}
            className="inline-flex items-center gap-2 bg-coffee-amber hover:bg-coffee-amberDark text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:scale-105 mb-10"
          >
            <span>ORDER NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* 3 Guarantee Badges */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-coffee-amber" />
              <span>Freshly Prepared</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-coffee-amber" />
              <span>Reliable Local Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-coffee-amber" />
              <span>Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
