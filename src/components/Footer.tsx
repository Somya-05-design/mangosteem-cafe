"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Coffee } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-cream pt-16 pb-0 relative overflow-hidden border-t border-coffee-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Brand Title */}
        <div className="inline-flex flex-col items-center mb-8">
          <span className="font-serif italic text-xs tracking-widest text-coffee-textMuted uppercase mb-2">~ The ~</span>
          <div className="flex items-center justify-center py-1">
            <Image
              src="/images/logo.png"
              alt="Mangosteem Logo"
              width={260}
              height={60}
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </div>
          <p className="font-serif text-xs font-bold text-coffee-dark mt-1 flex items-center gap-1.5 justify-center tracking-widest uppercase">
            <span>Cafe Indore</span>
          </p>
        </div>

        {/* Nav Links */}
        <div className="flex items-center justify-center flex-wrap gap-8 text-xs sm:text-sm font-bold tracking-wider text-coffee-dark mb-8">
          <Link href="#home" className="hover:text-coffee-amber transition-colors">
            HOME
          </Link>
          <Link href="#menu" className="hover:text-coffee-amber transition-colors">
            MENU
          </Link>
          <Link href="#home" className="hover:text-coffee-amber transition-colors">
            OUR STORY
          </Link>
          <Link href="#gallery" className="hover:text-coffee-amber transition-colors">
            GALLERY
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {['f', '📷', 'in'].map((icon, i) => (
            <button
              key={i}
              className="w-10 h-10 rounded-xl border border-coffee-amber text-coffee-amber hover:bg-coffee-amber hover:text-white font-bold text-sm flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="Social Link"
            >
              {icon === 'f' ? 'f' : icon === '📷' ? 'ig' : 'in'}
            </button>
          ))}
        </div>

        <p className="text-xs text-coffee-textMuted mb-6">
          © {new Date().getFullYear()} Mangosteem Cafe Indore. Crafted with passion & fresh brews.
        </p>
      </div>

      {/* Roasted Coffee Bean Pattern Bar Along Base */}
      <div className="w-full relative h-16 sm:h-24 bg-gradient-to-r from-[#2A150D] via-[#1F0E08] to-[#2A150D] overflow-hidden flex items-center justify-center shadow-inner">
        <div className="flex items-center justify-around w-full opacity-80 select-none">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="w-6 h-10 sm:w-8 sm:h-12 bg-[#3A1E13] rounded-full border-2 border-[#160A06] transform rotate-45 shadow-md flex items-center justify-center"
            >
              <div className="w-0.5 h-6 sm:h-8 bg-[#160A06] rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
