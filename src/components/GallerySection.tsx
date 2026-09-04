"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { GALLERY_IMAGES } from '@/data/menuData';
import { ArrowRight, X, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 bg-coffee-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-coffee-dark text-center tracking-tight mb-2">
          Life @ The
        </h2>
        <p className="font-serif italic text-3xl sm:text-4xl text-coffee-dark font-medium text-center mb-14">
          Mangosteem Cafe
        </p>

        {/* 6-Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img.src)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-coffee-border"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white">
                <ZoomIn className="w-6 h-6 text-coffee-amber" />
                <span className="text-sm font-semibold">{img.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <button
            onClick={() => setActiveImage(GALLERY_IMAGES[0].src)}
            className="inline-flex items-center gap-2 bg-coffee-amber hover:bg-coffee-amberDark text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>SEE MORE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-3 text-white hover:text-coffee-amber rounded-full bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
          >
            <Image src={activeImage} alt="Enlarged gallery photo" fill className="object-cover" />
          </div>
        </div>
      )}
    </section>
  );
};
