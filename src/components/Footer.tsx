import React from 'react';
import { CONTACT_INFO, IMAGES } from '../data/siteData';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

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
              className="w-10 h-10 rounded-xl object-contain bg-white/10 p-0.5"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="font-black text-white text-base font-['Fredoka',sans-serif]">
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
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors py-1"
            >
              <Phone className="w-3.5 h-3.5 text-violet-400" />
              <span>Call Us</span>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors py-1"
            >
              <Mail className="w-3.5 h-3.5 text-violet-400" />
              <span>Email Us</span>
            </a>

            <a
              href={CONTACT_INFO.googleListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors py-1"
            >
              <MapPin className="w-3.5 h-3.5 text-violet-400" />
              <span>Bangalore Google Maps</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Slide &amp; Glide. Bangalore, India. All rights reserved.</p>
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
