import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Photos', href: '#photos' },
    { label: 'Google Location', href: '#location' },
    { label: 'Google Reviews', href: '#reviews' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-violet-100 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* Logo matching the animated play area theme */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 p-0.5 shadow-sm shadow-violet-200 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <span className="font-black text-sm bg-gradient-to-br from-violet-600 to-pink-600 bg-clip-text text-transparent font-['Fredoka',sans-serif]">
                S&G
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-slate-900 tracking-tight font-['Fredoka',sans-serif] leading-none">
              Slide <span className="text-violet-600">&amp;</span> Glide
            </span>
            <span className="text-[10px] font-extrabold text-violet-600 uppercase tracking-wider mt-0.5">
              Jump, Play &amp; Celebrate!
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-violet-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Main Action Buttons themed in Animated Play Area Violet */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="text-xs font-bold text-slate-700 hover:text-violet-600 flex items-center gap-1.5 py-2 px-3 rounded-xl border border-slate-200 hover:border-violet-200 hover:bg-violet-50/50 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-violet-600" />
            <span>{CONTACT_INFO.phone}</span>
          </a>

          {/* Main navigation button in the animated play area theme colour */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-extrabold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 hover:from-violet-700 hover:via-purple-700 hover:to-pink-600 py-2 px-4 rounded-xl flex items-center gap-1.5 shadow-md shadow-violet-200 hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Hamburger & Quick CTA */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-extrabold text-white bg-violet-600 py-1.5 px-3 rounded-xl flex items-center gap-1 shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-violet-600"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-violet-100 px-4 py-4 space-y-2 text-sm font-semibold text-slate-700 animate-in fade-in duration-150">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-xl hover:bg-violet-50 hover:text-violet-700"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="py-2.5 text-center text-xs font-bold text-slate-800 bg-slate-100 rounded-xl flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-violet-600" />
              <span>Call: {CONTACT_INFO.phone}</span>
            </a>
            <a
              href={CONTACT_INFO.googleListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 text-center text-xs font-bold text-violet-700 border border-violet-200 bg-violet-50 rounded-xl flex items-center justify-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Google Location &amp; Directions</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
