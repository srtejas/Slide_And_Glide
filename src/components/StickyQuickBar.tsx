import React from 'react';
import { Phone, MapPin, MessageCircle, Instagram, Youtube, CalendarCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

export const StickyQuickBar: React.FC = () => {
  return (
    <nav
      aria-label="Quick Contact and Location Actions"
      className="fixed bottom-0 inset-x-0 z-50 bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 text-white border-t border-white/15 shadow-[0_-4px_20px_rgba(15,23,42,0.2)]"
    >
      <div className="max-w-5xl mx-auto px-1 sm:px-4">
        <div className="grid grid-cols-5 sm:grid-cols-6 items-stretch">
          {/* Call / Phone Number */}
          <a
            href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
            className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 py-2 px-1 text-white hover:bg-white/15 active:bg-white/20 transition-colors"
            title={`Call ${CONTACT_INFO.primaryPhone}`}
          >
            <span className="w-7 h-7 rounded-lg bg-white text-violet-700 flex items-center justify-center shadow-2xs shrink-0">
              <Phone className="w-4 h-4" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold leading-tight text-center truncate max-w-full">
              <span className="sm:hidden">Call</span>
              <span className="hidden sm:inline">{CONTACT_INFO.primaryPhone}</span>
            </span>
          </a>

          {/* Location / Google Maps */}
          <a
            href={CONTACT_INFO.googleListingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 py-2 px-1 text-white hover:bg-white/15 active:bg-white/20 transition-colors"
            title="Open Location on Google Maps"
          >
            <span className="w-7 h-7 rounded-lg bg-white text-rose-600 flex items-center justify-center shadow-2xs shrink-0">
              <MapPin className="w-4 h-4" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold leading-tight text-center">
              Location
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 py-2 px-1 text-white hover:bg-white/15 active:bg-white/20 transition-colors"
            title="Chat on WhatsApp"
          >
            <span className="w-7 h-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-2xs shrink-0">
              <MessageCircle className="w-4 h-4" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold leading-tight text-center">
              WhatsApp
            </span>
          </a>

          {/* Instagram */}
          <a
            href={CONTACT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 py-2 px-1 text-white hover:bg-white/15 active:bg-white/20 transition-colors"
            title="Follow on Instagram @slideandglideplayzone"
          >
            <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-2xs shrink-0">
              <Instagram className="w-4 h-4" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold leading-tight text-center">
              Instagram
            </span>
          </a>

          {/* YouTube */}
          <a
            href={CONTACT_INFO.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 py-2 px-1 text-white hover:bg-white/15 active:bg-white/20 transition-colors"
            title="Watch Slide & Glide on YouTube"
          >
            <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-2xs shrink-0">
              <Youtube className="w-4 h-4" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold leading-tight text-center">
              YouTube
            </span>
          </a>

          {/* Party Enquiry (visible on sm+ / web) */}
          <a
            href="#party-enquiry"
            className="hidden sm:flex flex-row items-center justify-center gap-1.5 py-2 px-1 text-white hover:bg-white/15 active:bg-white/20 transition-colors"
            title="Birthday Party Enquiry"
          >
            <span className="w-7 h-7 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center shadow-2xs shrink-0">
              <CalendarCheck className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold leading-tight text-center">
              Enquiry
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};
