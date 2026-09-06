import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { CartDrawer } from '@/components/CartDrawer';
import { ReservationModal } from '@/components/ReservationModal';

export const metadata: Metadata = {
  title: 'Mangosteem Cafe — Freshly Brewed Coffee & Roastery',
  description: 'Mangosteem Cafe: Premium freshly roasted coffee, artisan pastries, handcrafted drinks, and cozy cafe atmosphere in Indore.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-coffee-cream selection:bg-coffee-amber selection:text-white">
        <CartProvider>
          {children}
          <CartDrawer />
          <ReservationModal />
        </CartProvider>
      </body>
    </html>
  );
}


// mockup data 
//mock data 2 