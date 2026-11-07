import React from 'react';
import { CONTACT_INFO, IMAGES } from '../data/siteData';
import { Phone, Mail, MapPin, MessageCircle, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Brand with Mascot Logo */}
          <div className="flex items-center gap-3">
            <img
              src={IMAGES.logo}
              alt="Slide & Glide Logo"
              className="w-12 h-12 rounded-xl object-contain bg-white/10 p-1"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="font-black text-white text-base font-['Fredoka',sans-serif] block">
                Slide &amp; Glide
              </span>
              <p className="text-[11px] text-violet-400 font-bold uppercase tracking-wider">
                Jump, Play &amp; Celebrate!
              </p>
            </div>
          </div>

          {/* Quick Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a
              href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors py-1"
            >
              <Phone className="w-3.5 h-3.5 text-violet-400" />
              <span>Call Primary ({CONTACT_INFO.primaryPhone})</span>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors py-1"
            >
              <Mail className="w-3.5 h-3.5 text-violet-400" />
              <span>Email Us</span>
            </a>

            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors py-1"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>Instagram @slideandglideplayzone</span>
            </a>

            <a
              href={CONTACT_INFO.googleListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors py-1"
            >
              <MapPin className="w-3.5 h-3.5 text-violet-400" />
              <span>Google Maps</span>
            </a>

            <a
              href="#blog"
              className="flex items-center gap-1.5 text-violet-400 hover:text-violet-300 font-bold transition-colors py-1"
            >
              <span>Play &amp; Parenting Blog</span>
            </a>
          </div>

        </div>

        {/* Blog Post Quick Navigation */}
        <div className="py-4 border-b border-slate-800 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-slate-400">
          <span className="font-bold text-slate-300">Featured Parent Guides:</span>
          <a href="#blog/best-birthday-party-place-why-do-birthdays-here-nagarabhavi" className="text-amber-300 hover:text-amber-200 font-bold transition-colors">
            🎂 Best Birthday Party Place &amp; Why Celebrate Here
          </a>
          <span>•</span>
          <a href="#blog/weekends-time-pass-in-nagarbhavi-bangalore-kids-play-area" className="text-violet-300 hover:text-violet-200 font-bold transition-colors">
            🚀 Weekends Time Pass in Nagarbhavi
          </a>
          <span>•</span>
          <a href="#blog/benefits-of-indoor-playgrounds-for-child-development" className="hover:text-violet-300 transition-colors">
            Benefits of Indoor Playgrounds
          </a>
          <span>•</span>
          <a href="#blog/essential-safety-tips-for-indoor-kids-playgrounds" className="hover:text-violet-300 transition-colors">
            Playground Safety Checklist
          </a>
          <span>•</span>
          <a href="#blog/top-things-to-look-for-in-an-indoor-play-area" className="hover:text-violet-300 transition-colors">
            Choosing an Indoor Play Area
          </a>
          <span>•</span>
          <a href="#blog/how-to-plan-the-ultimate-kids-birthday-party-at-an-indoor-play-area" className="hover:text-violet-300 transition-colors">
            Kids Birthday Planning Checklist
          </a>
          <span>•</span>
          <a href="#blog/why-screen-free-play-is-crucial-for-modern-kids" className="hover:text-violet-300 transition-colors">
            Screen-Free Play Benefits
          </a>
        </div>

        {/* Trust & Safety Highlights Strip */}
        <div className="py-3 border-b border-slate-800 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300 text-center">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span>✨</span> Cleaned &amp; Sanitized Every Day
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 text-violet-400">
            <span>📹</span> 24/7 CCTV Monitored Play Arena
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 text-amber-400">
            <span>🧦</span> Socks Mandatory
          </span>
        </div>

        {/* SEO Tagline / Keyword summary */}
        <div className="py-4 border-b border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
          <span>Indoor Kids Play Area in Nagarabhavi</span>
          <span>•</span>
          <span>Kids Play Area Near Me</span>
          <span>•</span>
          <span>Kids Birthday Party Venue in Nagarabhavi</span>
          <span>•</span>
          <span>Birthday Party Packages for Kids</span>
          <span>•</span>
          <span>Soft Play Area for Kids</span>
          <span>•</span>
          <span>Toddler Play Area in Nagarabhavi</span>
          <span>•</span>
          <span>Weekend Activities for Kids in Bangalore</span>
        </div>

        {/* Bottom copyright & address */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div className="text-center sm:text-left space-y-0.5">
            <p className="text-slate-400 font-medium">{CONTACT_INFO.address}</p>
            <p>© {new Date().getFullYear()} Slide &amp; Glide. All rights reserved.</p>
          </div>
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 py-1"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>
        </div>

      </div>
    </footer>
  );
};
