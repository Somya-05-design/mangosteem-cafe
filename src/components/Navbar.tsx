"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, ArrowRight, Menu, X, Calendar } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { totalItems, setIsCartOpen, setIsReservationOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-40 px-4 sm:px-8 max-w-7xl mx-auto w-full transition-all duration-300">
      <nav
        className={`relative flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF5EE]/95 backdrop-blur-md border-[#E5D5C0] shadow-lg shadow-black/5'
            : 'bg-[#FAF5EE]/90 backdrop-blur-sm border-[#EFE5D5] shadow-sm'
        }`}
      >
        {/* Left Links */}
        <div className="hidden md:flex items-center gap-7 text-xs lg:text-sm font-semibold tracking-wider text-coffee-dark">
          <Link href="#home" className="hover:text-coffee-amber transition-colors">
            HOME
          </Link>
          <Link href="#menu" className="hover:text-coffee-amber transition-colors">
            MENU
          </Link>
          <Link href="#gallery" className="hover:text-coffee-amber transition-colors">
            GALLERY
          </Link>
        </div>

        {/* Center Logo */}
        <div className="flex items-center justify-center">
          <Link href="#home" className="flex items-center gap-1 group">
            <span className="font-serif italic font-bold text-2xl lg:text-3xl text-coffee-dark tracking-tight transition-transform group-hover:scale-105">
              Mangosteem
            </span>
            <span className="text-coffee-amber text-lg font-bold">♥</span>
          </Link>
        </div>

        {/* Right Links & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setIsReservationOpen(true)}
            className="text-xs lg:text-sm font-semibold tracking-wider text-coffee-dark hover:text-coffee-amber transition-colors cursor-pointer"
          >
            RESERVATION
          </button>
          <Link href="#hours" className="text-xs lg:text-sm font-semibold tracking-wider text-coffee-dark hover:text-coffee-amber transition-colors">
            CONTACT
          </Link>

          {/* Cart Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-coffee-dark hover:text-coffee-amber transition-colors"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-coffee-amber text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                {totalItems}
              </span>
            )}
          </button>

          {/* Order Now CTA */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="inline-flex items-center gap-2 bg-coffee-amber hover:bg-coffee-amberDark text-white text-xs lg:text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:translate-x-0.5"
          >
            <span>ORDER NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Action buttons */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-coffee-dark"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-coffee-amber text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-coffee-dark"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-5 bg-[#FAF5EE] border border-[#E5D5C0] rounded-3xl shadow-xl flex flex-col gap-4 text-center">
          <Link
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-coffee-dark hover:text-coffee-amber py-2"
          >
            HOME
          </Link>
          <Link
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-coffee-dark hover:text-coffee-amber py-2"
          >
            MENU
          </Link>
          <Link
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-coffee-dark hover:text-coffee-amber py-2"
          >
            GALLERY
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsReservationOpen(true);
            }}
            className="text-sm font-semibold text-coffee-dark hover:text-coffee-amber py-2"
          >
            RESERVATION
          </button>
          <Link
            href="#hours"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-coffee-dark hover:text-coffee-amber py-2"
          >
            CONTACT
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsCartOpen(true);
            }}
            className="flex items-center justify-center gap-2 bg-coffee-amber text-white py-3 rounded-full font-semibold shadow-md mt-2"
          >
            <span>ORDER NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
