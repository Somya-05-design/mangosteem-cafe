"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { COFFEE_VARIETIES } from '@/data/menuData';
import { useCart } from '@/context/CartContext';
import { Plus } from 'lucide-react';

export const CoffeeShowcase: React.FC = () => {
  const [selectedId, setSelectedId] = useState('cappuccino');
  const { addToCart } = useCart();

  const currentCoffee = COFFEE_VARIETIES.find((c) => c.id === selectedId) || COFFEE_VARIETIES[3];

  return (
    <section className="bg-coffee-dark text-white py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Category Pill Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-16">
          {COFFEE_VARIETIES.map((variety) => {
            const isActive = variety.id === selectedId;
            return (
              <button
                key={variety.id}
                onClick={() => setSelectedId(variety.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-coffee-amber text-white shadow-lg shadow-coffee-amber/30 scale-105'
                    : 'bg-white text-coffee-dark hover:bg-gray-100 hover:text-coffee-dark'
                }`}
              >
                {variety.name}
              </button>
            );
          })}
        </div>

        {/* Main Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Product Image */}
          <div className="relative aspect-[4/5] max-w-[420px] mx-auto w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src={currentCoffee.image}
              alt={currentCoffee.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Right Column: Title, Description, Price, CTA */}
          <div className="flex flex-col items-start justify-center max-w-lg mx-auto md:mx-0">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              {currentCoffee.title}
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal mb-8">
              {currentCoffee.description}
            </p>

            {/* Price with Rupee symbol */}
            <div className="flex items-baseline gap-1 text-4xl sm:text-5xl font-serif font-bold text-white mb-8">
              <span className="text-coffee-amber text-3xl font-sans">₹</span>
              <span>{currentCoffee.price}</span>
            </div>

            {/* Add to Cart CTA */}
            <button
              onClick={() =>
                addToCart({
                  id: currentCoffee.id,
                  name: currentCoffee.title,
                  category: 'Coffee',
                  price: currentCoffee.price,
                  image: currentCoffee.image,
                  description: currentCoffee.description,
                })
              }
              className="inline-flex items-center gap-3 bg-coffee-amber hover:bg-coffee-amberDark text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
            >
              <span>ADD TO CART</span>
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
