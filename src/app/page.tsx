"use client";

import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { CoffeeShowcase } from '@/components/CoffeeShowcase';
import { StorySection } from '@/components/StorySection';
import { PopularFlavors } from '@/components/PopularFlavors';
import { MenuSection } from '@/components/MenuSection';
import { DeliveryBanner } from '@/components/DeliveryBanner';
import { Testimonials } from '@/components/Testimonials';
import { GallerySection } from '@/components/GallerySection';
import { HoursLocation } from '@/components/HoursLocation';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <CoffeeShowcase />
      <StorySection />
      <PopularFlavors />
      <MenuSection />
      <DeliveryBanner />
      <Testimonials />
      <GallerySection />
      <HoursLocation />
      <Footer />
    </main>
  );
}
