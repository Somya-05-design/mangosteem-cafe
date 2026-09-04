"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/data/menuData';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Sarah Mitchell in center

  return (
    <section className="py-20 px-4 sm:px-6 bg-coffee-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-coffee-dark text-center tracking-tight mb-14">
          What Our Regulars Say
        </h2>

        {/* Big Card Container */}
        <div className="bg-coffee-card rounded-[40px] p-8 sm:p-12 border border-coffee-border shadow-warm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-coffee-border">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={t.id}
                className={`pt-6 md:pt-0 px-4 flex flex-col items-center text-center ${
                  t.featured ? 'md:scale-105' : 'opacity-85'
                }`}
              >
                {/* Avatar */}
                <div
                  className={`relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 ${
                    t.featured ? 'border-coffee-amber ring-4 ring-coffee-amber/20' : 'border-coffee-border'
                  }`}
                >
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>

                {/* Stars */}
                <div className="flex items-center justify-center gap-1 text-coffee-amber mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-coffee-textDark text-xs sm:text-sm leading-relaxed mb-4 italic font-normal min-h-[60px]">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Customer Name */}
                <h4 className="font-serif font-bold text-coffee-dark text-base sm:text-lg">
                  {t.name}
                </h4>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <span className="w-2.5 h-2.5 rounded-full bg-coffee-amber" />
            <span className="w-2 h-2 rounded-full bg-coffee-border" />
            <span className="w-2 h-2 rounded-full bg-coffee-border" />
            <span className="w-2 h-2 rounded-full bg-coffee-border" />
          </div>
        </div>
      </div>
    </section>
  );
};
