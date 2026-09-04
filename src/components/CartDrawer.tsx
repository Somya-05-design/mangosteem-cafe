"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, Trash2, ArrowRight, CheckCircle2 } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, clearCart, subtotal, totalItems } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isCartOpen) return null;

  const tax = Math.round(subtotal * 0.05);
  const deliveryFee = subtotal > 500 || subtotal === 0 ? 0 : 40;
  const grandTotal = subtotal + tax + deliveryFee;

  const handleCheckout = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      setOrderPlaced(false);
      setIsCartOpen(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div
        className="w-full max-w-md bg-[#FAF5EE] h-full shadow-2xl flex flex-col justify-between p-6 overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-coffee-border pb-4">
          <div className="flex items-center gap-2">
            <h3 className="font-serif text-2xl font-bold text-coffee-dark">Your Order</h3>
            <span className="bg-coffee-amber/20 text-coffee-amber text-xs font-bold px-2.5 py-0.5 rounded-full">
              {totalItems} items
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-coffee-dark hover:text-coffee-amber rounded-full hover:bg-black/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        {orderPlaced ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mb-4 animate-bounce" />
            <h4 className="font-serif text-2xl font-bold text-coffee-dark mb-2">Order Confirmed!</h4>
            <p className="text-coffee-textMuted text-sm">
              Your freshly roasted order is being prepared by our baristas at Mangosteem Cafe.
            </p>
          </div>
        ) : cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
            <div className="w-20 h-20 rounded-full bg-coffee-amber/10 flex items-center justify-center text-3xl mb-4">
              ☕
            </div>
            <h4 className="font-serif text-xl font-bold text-coffee-dark mb-1">Your cart is empty</h4>
            <p className="text-coffee-textMuted text-xs mb-6">
              Add your favorite roasts, desserts, or snacks to get started.
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="bg-coffee-amber text-white text-xs font-semibold px-6 py-2.5 rounded-full"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
            {cart.map(({ item, quantity }) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-coffee-border shadow-sm"
              >
                <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-coffee-border">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-bold text-coffee-dark text-sm truncate">{item.name}</h4>
                  <p className="text-xs text-coffee-amber font-semibold">₹{item.price}</p>
                </div>
                <div className="flex items-center gap-2 bg-coffee-cream px-2 py-1 rounded-full border border-coffee-border">
                  <button
                    onClick={() => updateQuantity(item.id, quantity - 1)}
                    className="text-coffee-dark hover:text-coffee-amber p-1"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-bold text-coffee-dark w-4 text-center">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, quantity + 1)}
                    className="text-coffee-dark hover:text-coffee-amber p-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-600 p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Footer Totals & Checkout */}
        {cart.length > 0 && !orderPlaced && (
          <div className="border-t border-coffee-border pt-4 space-y-2">
            <div className="flex justify-between text-xs text-coffee-textMuted">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-xs text-coffee-textMuted">
              <span>Taxes (5% GST)</span>
              <span>₹{tax}</span>
            </div>
            <div className="flex justify-between text-xs text-coffee-textMuted">
              <span>Delivery Fee</span>
              <span>{deliveryFee === 0 ? <span className="text-emerald-600 font-bold">FREE</span> : `₹${deliveryFee}`}</span>
            </div>
            <div className="flex justify-between text-base font-serif font-bold text-coffee-dark pt-2 border-t border-coffee-border">
              <span>Total Amount</span>
              <span className="text-coffee-amber">₹{grandTotal}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full mt-4 flex items-center justify-center gap-2 bg-coffee-amber hover:bg-coffee-amberDark text-white font-semibold py-3.5 rounded-full transition-all duration-300 shadow-lg"
            >
              <span>Place Order (₹{grandTotal})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
