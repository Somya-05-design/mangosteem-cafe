"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { MENU_ITEMS, MenuItem } from '@/data/menuData';
import { useCart } from '@/context/CartContext';
import { Plus, ArrowRight } from 'lucide-react';

const CATEGORIES = ['All Menu', 'Snacks', 'Dessert', 'Cold drinks', 'Coffee'] as const;

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Menu');
  const { addToCart, setIsCartOpen } = useCart();

  const filteredItems = selectedCategory === 'All Menu'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 bg-coffee-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-coffee-dark text-center tracking-tight mb-10">
          Explore Our Menu
        </h2>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3 mb-14">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-coffee-amber text-white shadow-md'
                    : 'bg-white text-coffee-dark border border-coffee-border hover:border-coffee-amber'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-coffee-card rounded-3xl p-6 border border-coffee-border shadow-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold text-coffee-textMuted tracking-wider uppercase mb-1 block">
                  • {item.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-coffee-dark mb-1">
                  {item.name}
                </h3>
                <div className="font-serif text-lg font-bold text-coffee-dark mb-4">
                  ₹{item.price}
                </div>
              </div>

              {/* Rounded Dish Image Container */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border-2 border-white shadow-sm mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(item)}
                className="w-10 h-10 rounded-full bg-coffee-amber hover:bg-coffee-amberDark text-white flex items-center justify-center shadow-md hover:scale-110 transition-all duration-300 cursor-pointer"
                aria-label={`Add ${item.name} to cart`}
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => setIsCartOpen(true)}
            className="inline-flex items-center gap-2 bg-coffee-amber hover:bg-coffee-amberDark text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>VIEW ALL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
