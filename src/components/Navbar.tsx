import React, { useState, useRef, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Copy, Check, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phonePopoverOpen, setPhonePopoverOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Streamlined navigation links: reduced from 6 cluttered items to 4 clean items
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Photos', href: '#photos' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  // Close popover on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setPhonePopoverOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPhonePopoverOpen(false);
      }
    };

    if (phonePopoverOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [phonePopoverOpen]);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CONTACT_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-violet-100 shadow-xs">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
        
        {/* Logo matching animated play area theme */}
        <a href="#" className="flex items-center gap-2 group min-w-0 shrink">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 p-0.5 shadow-sm shadow-violet-200 group-hover:scale-105 transition-transform shrink-0">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <span className="font-black text-xs sm:text-sm bg-gradient-to-br from-violet-600 to-pink-600 bg-clip-text text-transparent font-['Fredoka',sans-serif]">
                S&amp;G
              </span>
            </div>
          </div>
          <div className="flex flex-col truncate">
            <span className="text-lg sm:text-xl font-black text-slate-900 tracking-tight font-['Fredoka',sans-serif] leading-tight truncate">
              Slide <span className="text-violet-600">&amp;</span> Glide
            </span>
            <span className="text-[9px] sm:text-[10px] font-extrabold text-violet-600 uppercase tracking-wider leading-none truncate">
              Jump, Play &amp; Celebrate!
            </span>
          </div>
        </a>

        {/* Desktop Navigation - Streamlined 4 menu options */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-violet-600 transition-colors py-1 relative"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons: Phone number only appears when clicked */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* Call button with click reveal popover */}
          <div className="relative" ref={popoverRef}>
            <button
              onClick={() => setPhonePopoverOpen(!phonePopoverOpen)}
              className={`text-xs font-bold flex items-center gap-1.5 py-2 px-3.5 rounded-xl border transition-all ${
                phonePopoverOpen
                  ? 'bg-violet-50 text-violet-700 border-violet-300 ring-2 ring-violet-200'
                  : 'text-slate-700 hover:text-violet-700 border-slate-200 hover:border-violet-200 hover:bg-violet-50/50'
              }`}
              aria-expanded={phonePopoverOpen}
              aria-label="Call Slide & Glide"
            >
              <Phone className="w-3.5 h-3.5 text-violet-600" />
              <span>Call Us</span>
            </button>

            {/* Click-revealed Phone Dropdown Card */}
            {phonePopoverOpen && (
              <div className="absolute right-0 mt-2 w-64 p-3.5 bg-white rounded-2xl border border-violet-100 shadow-xl shadow-violet-100/50 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-violet-600 mb-1">
                  Arena Hotline &amp; Bookings
                </div>
                <div className="text-base font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
                  {CONTACT_INFO.phone}
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 mb-3">
                  Open 7 days a week for walk-ins and party reservations.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="py-2 px-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="py-2 px-2.5 bg-slate-100 hover:bg-violet-50 text-slate-700 hover:text-violet-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Main WhatsApp navigation button in the animated play area theme */}
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

        {/* Mobile-Friendly Header Controls */}
        <div className="flex items-center gap-1.5 md:hidden">
          
          {/* Quick Call Button on Mobile Header */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 sm:px-3 sm:py-1.5 text-slate-700 hover:text-violet-700 bg-slate-100 hover:bg-violet-50 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors min-h-[38px]"
            aria-label="Call options"
          >
            <Phone className="w-4 h-4 text-violet-600" />
            <span className="hidden sm:inline">Call</span>
          </button>

          {/* WhatsApp Button */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-extrabold text-white bg-gradient-to-r from-violet-600 to-pink-500 py-1.5 px-2.5 sm:px-3 rounded-xl flex items-center gap-1 shadow-xs min-h-[38px]"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-violet-600 rounded-xl hover:bg-slate-100 min-h-[40px] min-w-[40px] flex items-center justify-center transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-violet-600" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Responsive Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-violet-100 px-4 py-4 space-y-3 text-sm font-semibold text-slate-700 animate-in fade-in slide-in-from-top-2 duration-150">
          
          {/* Streamlined Menu Links */}
          <div className="grid grid-cols-2 gap-1.5 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-violet-50 hover:text-violet-700 text-slate-800 text-center font-bold text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Arena Hotline & Call options directly visible in mobile menu */}
          <div className="pt-2 border-t border-slate-100">
            <div className="p-3 bg-violet-50 rounded-2xl border border-violet-200">
              <div className="text-[11px] font-bold text-violet-700 uppercase tracking-wider">
                Slide &amp; Glide Arena Hotline:
              </div>
              <div className="text-lg font-black text-slate-900 font-['Fredoka',sans-serif] my-1">
                {CONTACT_INFO.phone}
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="py-2.5 text-center text-xs font-extrabold text-white bg-violet-600 hover:bg-violet-700 rounded-xl flex items-center justify-center gap-1.5 shadow-sm min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Dial Now</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="py-2.5 text-center text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center gap-1.5 min-h-[44px]"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Number'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Direct WhatsApp & Google Location Buttons */}
          <div className="pt-1 flex flex-col gap-2">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-xs font-extrabold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center gap-2 shadow-sm min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us Directly</span>
            </a>

            <a
              href={CONTACT_INFO.googleListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 text-center text-xs font-bold text-slate-600 hover:text-violet-700 hover:bg-slate-50 rounded-xl flex items-center justify-center gap-1.5 min-h-[40px]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Google Maps Location &amp; Directions (Bangalore)</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
};
