"use client";

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { X, Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';

export const ReservationModal: React.FC = () => {
  const { isReservationOpen, setIsReservationOpen } = useCart();
  const [confirmed, setConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: '2026-09-05',
    time: '05:00 PM',
  });

  if (!isReservationOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
      setIsReservationOpen(false);
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in">
      <div className="bg-[#FAF5EE] max-w-md w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-coffee-border relative">
        <button
          onClick={() => setIsReservationOpen(false)}
          className="absolute top-5 right-5 p-2 text-coffee-dark hover:text-coffee-amber rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4 animate-bounce" />
            <h3 className="font-serif text-2xl font-bold text-coffee-dark mb-2">Table Reserved!</h3>
            <p className="text-coffee-textMuted text-sm">
              We look forward to hosting you at Mangosteem Cafe, Indore on {formData.date} at {formData.time}.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <span className="font-serif italic text-xs tracking-widest text-coffee-amber uppercase">Experience The Roastery</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-coffee-dark mt-1">Book a Table</h3>
              <p className="text-coffee-textMuted text-xs mt-1">Reserve a cozy corner for your next coffee date or meeting</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-coffee-dark mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Mitchell"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-coffee-border bg-white text-coffee-dark text-sm focus:outline-none focus:border-coffee-amber"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-coffee-dark mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 999 9784 8383"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-coffee-border bg-white text-coffee-dark text-sm focus:outline-none focus:border-coffee-amber"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-coffee-dark mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-coffee-border bg-white text-coffee-dark text-xs focus:outline-none focus:border-coffee-amber"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-coffee-dark mb-1">Time</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-coffee-border bg-white text-coffee-dark text-xs focus:outline-none focus:border-coffee-amber"
                  >
                    <option>09:00 AM</option>
                    <option>11:30 AM</option>
                    <option>02:00 PM</option>
                    <option>05:00 PM</option>
                    <option>07:30 PM</option>
                    <option>09:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-coffee-dark mb-1">Number of Guests</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-coffee-border bg-white text-coffee-dark text-sm focus:outline-none focus:border-coffee-amber"
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3-4 Guests</option>
                  <option>5-8 Guests (Group Table)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-coffee-amber hover:bg-coffee-amberDark text-white font-semibold py-3.5 rounded-full transition-all duration-300 shadow-md text-sm"
              >
                Confirm Reservation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
