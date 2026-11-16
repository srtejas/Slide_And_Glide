import React, { useState, useRef, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Copy,
  Check,
  ExternalLink,
  MapPin,
  Instagram,
  Youtube,
} from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phonePopoverOpen, setPhonePopoverOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Play Sessions', href: '#play-sessions' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Parties', href: '#parties' },
    { label: 'Photos', href: '#photos' },
    { label: 'Blog', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Location', href: '#location' },
  ];

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

  const handleCopyPhone = (numberToCopy: string) => {
    navigator.clipboard.writeText(numberToCopy);
    setCopiedText(numberToCopy);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-violet-100 shadow-xs">
      {/* Desktop Top Utility Strip: Location, Phone, WhatsApp, Instagram, YouTube Ready to Click */}
      <div className="hidden md:block bg-gradient-to-r from-violet-950 via-purple-950 to-indigo-950 text-slate-100 text-[11px] border-b border-violet-900/60">
        <div className="max-w-6xl mx-auto px-6 py-1.5 flex items-center justify-between gap-4">
          <a
            href={CONTACT_INFO.googleListingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-200 hover:text-amber-300 font-semibold transition-colors truncate"
            title="Open Slide & Glide Location on Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span className="truncate">
              S N Arcade, Annapoorneshwari Nagar, Nagarabhavi • Open Daily 11 AM – 9 PM
            </span>
          </a>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
              className="inline-flex items-center gap-1 text-white hover:text-amber-300 font-bold transition-colors"
              title={`Call ${CONTACT_INFO.primaryPhone}`}
            >
              <Phone className="w-3 h-3 text-violet-300" />
              <span>{CONTACT_INFO.primaryPhone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200 font-bold transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-pink-300 hover:text-pink-200 font-bold transition-colors"
            >
              <Instagram className="w-3 h-3" />
              <span>Instagram</span>
            </a>
            <a
              href={CONTACT_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-red-300 hover:text-red-200 font-bold transition-colors"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-6xl mx-auto px-2.5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-2">
        {/* Brand Logo + Name */}
        <a href="#" className="flex items-center gap-1.5 sm:gap-2 group min-w-0 shrink">
          <img
            src={IMAGES.logo}
            alt="Slide & Glide Mascot Logo"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl object-contain shadow-xs shrink-0 group-hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col min-w-0">
            <span className="text-sm sm:text-xl font-black text-slate-900 tracking-tight font-['Fredoka',sans-serif] leading-tight truncate">
              Slide <span className="text-violet-600">&amp;</span> Glide
            </span>
            <span className="hidden sm:block text-[10px] font-extrabold text-violet-600 uppercase tracking-wider leading-none truncate">
              Jump, Play &amp; Celebrate!
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-violet-600 transition-colors py-1 relative whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Tablet/Desktop Compact Nav + Action Buttons */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          {/* Quick Circular Social & Location Icons on Desktop */}
          <a
            href={CONTACT_INFO.googleListingUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Maps Location"
            title="Location on Google Maps"
            className="w-8 h-8 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 flex items-center justify-center transition-colors"
          >
            <MapPin className="w-4 h-4" />
          </a>

          <a
            href={CONTACT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @slideandglideplayzone"
            title="Follow on Instagram"
            className="w-8 h-8 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 border border-pink-200 flex items-center justify-center transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href={CONTACT_INFO.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Channel"
            title="Watch on YouTube"
            className="w-8 h-8 rounded-full bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 flex items-center justify-center transition-colors"
          >
            <Youtube className="w-4 h-4" />
          </a>

          {/* Call button with click reveal popover */}
          <div className="relative" ref={popoverRef}>
            <button
              onClick={() => setPhonePopoverOpen(!phonePopoverOpen)}
              className={`text-xs font-bold flex items-center gap-1.5 py-2 px-3 rounded-xl border transition-all ${
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

            {phonePopoverOpen && (
              <div className="absolute right-0 mt-2 w-72 p-3.5 bg-white rounded-2xl border border-violet-100 shadow-xl shadow-violet-100/50 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="space-y-2">
                  {CONTACT_INFO.phones.map((p, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <span className="text-sm font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
                        {p.display}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <a
                          href={`tel:${p.raw}`}
                          className="p-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center justify-center transition-colors"
                          title={`Call ${p.display}`}
                          aria-label={`Call ${p.display}`}
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                        <button
                          onClick={() => handleCopyPhone(p.display)}
                          className="p-1.5 bg-white hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-bold border border-slate-200 transition-colors"
                          title="Copy number"
                          aria-label={`Copy ${p.display}`}
                        >
                          {copiedText === p.display ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 mt-2 text-center">
                  Open 7 days a week from 11:00 AM to 9:00 PM for walk-ins and families.
                </p>
              </div>
            )}
          </div>

          {/* WhatsApp button */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-extrabold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 hover:from-violet-700 hover:via-purple-700 hover:to-pink-600 py-2 px-3.5 rounded-xl flex items-center gap-1.5 shadow-md shadow-violet-200 hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Header Controls: Circular Quick-Click Icons (Location, Call, Instagram, YouTube, WhatsApp) + Menu */}
        <div className="flex items-center gap-1 sm:gap-1.5 md:hidden shrink-0">
          <a
            href={CONTACT_INFO.googleListingUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Google Maps Location"
            title="Location"
            className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center active:scale-95 transition-transform"
          >
            <MapPin className="w-4 h-4" />
          </a>

          <a
            href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
            aria-label={`Call ${CONTACT_INFO.primaryPhone}`}
            title={`Call ${CONTACT_INFO.primaryPhone}`}
            className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center active:scale-95 transition-transform"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          <a
            href={CONTACT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center active:scale-95 transition-transform"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href={CONTACT_INFO.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Channel"
            title="YouTube"
            className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center active:scale-95 transition-transform"
          >
            <Youtube className="w-4 h-4" />
          </a>

          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-700 hover:text-violet-600 rounded-xl border border-slate-200 hover:bg-slate-100 h-8 w-8 flex items-center justify-center transition-colors ml-0.5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-violet-600" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-violet-100 px-4 py-4 space-y-3 text-sm font-semibold text-slate-700 animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Menu Links */}
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

          {/* Clickable Address & Location */}
          <a
            href={CONTACT_INFO.googleListingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 rounded-xl bg-rose-50/70 border border-rose-200 text-xs text-slate-800"
          >
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900">Tap for Google Maps Directions</p>
                <p className="text-[11px] text-slate-600 mt-0.5">{CONTACT_INFO.address}</p>
              </div>
            </div>
          </a>

          {/* Call options */}
          <div className="p-3 bg-violet-50 rounded-2xl border border-violet-200 space-y-2">
            {CONTACT_INFO.phones.map((p, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-2 p-2.5 bg-white rounded-xl border border-violet-100"
              >
                <span className="text-sm font-black text-slate-900 font-['Fredoka',sans-serif]">
                  {p.display}
                </span>
                <div className="flex items-center gap-1.5">
                  <a
                    href={`tel:${p.raw}`}
                    className="p-2 text-xs font-extrabold text-white bg-violet-600 hover:bg-violet-700 rounded-lg flex items-center justify-center shadow-xs min-h-[38px] min-w-[38px]"
                    title={`Call ${p.display}`}
                    aria-label={`Call ${p.display}`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => handleCopyPhone(p.display)}
                    className="p-2 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg min-h-[38px] min-w-[38px] flex items-center justify-center"
                    title="Copy number"
                    aria-label={`Copy ${p.display}`}
                  >
                    {copiedText === p.display ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Social & Maps Buttons */}
          <div className="pt-1 flex flex-col gap-2">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-xs font-extrabold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center gap-2 shadow-sm min-h-[42px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us Directly</span>
            </a>

            <div className="grid grid-cols-3 gap-2">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-center text-xs font-bold text-pink-700 hover:bg-pink-50 rounded-xl border border-pink-200 flex items-center justify-center gap-1 min-h-[38px]"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href={CONTACT_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-center text-xs font-bold text-red-600 hover:bg-red-50 rounded-xl border border-red-200 flex items-center justify-center gap-1 min-h-[38px]"
              >
                <Youtube className="w-3.5 h-3.5" />
                <span>YouTube</span>
              </a>
              <a
                href={CONTACT_INFO.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-center text-xs font-black text-amber-700 hover:bg-amber-50 rounded-xl border border-amber-300 flex items-center justify-center gap-1 min-h-[38px]"
              >
                <span className="px-1 py-0.2 rounded bg-amber-200 text-amber-900 text-[9px] font-black leading-none">
                  JD
                </span>
                <span>Justdial</span>
              </a>
            </div>

            <a
              href={CONTACT_INFO.googleListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 text-center text-xs font-bold text-slate-600 hover:text-violet-700 hover:bg-slate-50 rounded-xl flex items-center justify-center gap-1.5 min-h-[38px]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Google Maps Location &amp; Directions</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
