"use client";

import React from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';

export const StorySection: React.FC = () => {
  const bulletPoints = [
    'Premium beans, expertly roasted',
    'Crafted fresh, every day',
    'Cozy space, great coffee',
    'Rich flavor in every sip'
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-coffee-cream">
      <div className="max-w-6xl mx-auto">
        {/* Top Story Block */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-coffee-dark tracking-tight">
            More Than
          </h2>
          <p className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-coffee-dark font-medium mt-1">
            Just Coffee
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center mb-20">
          {/* Cafe Interior Photo */}
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl border border-coffee-border">
            <Image
              src="/images/cafe_story.png"
              alt="Warm Ambient Cafe Counter & Seating"
              fill
              className="object-cover"
            />
          </div>

          {/* Story Text & Bullets */}
          <div className="flex flex-col justify-center">
            <p className="text-coffee-textMuted text-base sm:text-lg leading-relaxed mb-8">
              At MangoSteem Cafe, coffee is a daily ritual crafted with passion. We source premium beans from renowned origins and roast them in-house to unlock rich flavors. Every cup brings warmth, comfort, and a memorable experience.
            </p>

            <ul className="space-y-4">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-3 text-coffee-dark font-semibold text-base sm:text-lg">
                  <span className="text-coffee-amber flex-shrink-0 text-xl">♥</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-coffee-border mb-12" />

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-coffee-border">
          <div className="pt-4 md:pt-0">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-dark">50+</h3>
            <p className="text-coffee-textMuted text-xs sm:text-sm font-medium mt-1">Drinks on Menu</p>
          </div>
          <div className="pt-4 md:pt-0">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-dark">2</h3>
            <p className="text-coffee-textMuted text-xs sm:text-sm font-medium mt-1">Stores @ Indore</p>
          </div>
          <div className="pt-4 md:pt-0">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-dark">1,000+</h3>
            <p className="text-coffee-textMuted text-xs sm:text-sm font-medium mt-1">Happy Customers</p>
          </div>
          <div className="pt-4 md:pt-0">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-dark">Est.</h3>
            <p className="text-coffee-textMuted text-xs sm:text-sm font-medium mt-1">2011</p>
          </div>
        </div>
      </div>
    </section>
  );
};
