"use client";

import React from 'react';
import { Clock, MapPin, Phone, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const HoursLocation: React.FC = () => {
  const { setIsReservationOpen } = useCart();

  return (
    <section id="hours" className="bg-coffee-dark text-white pt-20 pb-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2">
          We Are Open
        </h2>
        <p className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-gray-200 font-medium mb-12">
          Almost Always
        </p>

        {/* 3 Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12 text-center md:text-left">
          {/* Hours */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <Clock className="w-7 h-7 text-coffee-amber flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-white">Monday — Sunday</h4>
              <p className="text-xs text-gray-300 mt-0.5">7:30 AM – 10:00 PM</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <MapPin className="w-7 h-7 text-coffee-amber flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-white">Olympus near Mayank Blue</h4>
              <p className="text-xs text-gray-300 mt-0.5">Bicholi mardana, Indore</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <Phone className="w-7 h-7 text-coffee-amber flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-white">999 9784 8383</h4>
              <p className="text-xs text-gray-300 mt-0.5">+91 999 9784 8383</p>
            </div>
          </div>
        </div>

        {/* Visit Us CTA */}
        <button
          onClick={() => setIsReservationOpen(true)}
          className="inline-flex items-center gap-2 bg-coffee-amber hover:bg-coffee-amberDark text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:scale-105"
        >
          <span>VISIT US</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Decorative Illustrated Coffee Packs Along Bottom */}
      <div className="mt-16 flex items-center justify-center gap-4 sm:gap-6 overflow-hidden opacity-90 max-w-5xl mx-auto">
        {[
          { label: 'The MANGOSTEEM' },
          { label: 'The MANGOSTEEM' },
          { label: 'MANGOSTEEM' },
          { label: 'The MANGOSTEEM CAFE' },
          { label: 'The MANGOSTEEM' },
        ].map((pack, idx) => (
          <div
            key={idx}
            className="w-32 sm:w-44 h-28 sm:h-36 bg-[#8C6D58] rounded-t-3xl border-4 border-[#3D2319] flex flex-col items-center justify-between p-3 transform transition-transform hover:-translate-y-2"
          >
            <div className="w-12 h-6 bg-[#3D2319] rounded-full border border-white/20 flex items-center justify-center">
              <span className="text-amber-300 text-xs">♥</span>
            </div>
            <div className="text-center">
              <span className="font-serif italic text-[10px] text-amber-100 block">The</span>
              <span className="font-serif font-bold text-[11px] sm:text-xs text-white uppercase tracking-wider">{pack.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
