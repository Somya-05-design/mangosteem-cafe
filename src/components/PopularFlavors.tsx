"use client";

import React from 'react';
import Image from 'next/image';
import { POPULAR_FLAVORS } from '@/data/menuData';
import { useCart } from '@/context/CartContext';
import { Plus } from 'lucide-react';

export const PopularFlavors: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-20 px-4 sm:px-6 bg-coffee-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-coffee-dark text-center tracking-tight mb-16">
          Popular Flavors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POPULAR_FLAVORS.map((item) => (
            <div
              key={item.id}
              className="relative bg-coffee-card rounded-[32px] p-8 pt-10 text-center border border-coffee-border shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center"
            >
              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1 text-coffee-amber mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-bold text-coffee-dark mb-2">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-coffee-textMuted text-xs sm:text-sm font-normal mb-6 min-h-[36px]">
                {item.description}
              </p>

              {/* Price */}
              <div className="font-serif text-2xl sm:text-3xl font-bold text-coffee-dark mb-6">
                ₹{item.price}
              </div>

              {/* Circular Product Image */}
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md mb-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating + Button */}
              <button
                onClick={() => addToCart(item)}
                className="w-12 h-12 rounded-full bg-coffee-amber hover:bg-coffee-amberDark text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer"
                aria-label={`Add ${item.name} to cart`}
              >
                <Plus className="w-6 h-6" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
