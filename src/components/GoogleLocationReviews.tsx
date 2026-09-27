import React from 'react';
import { MapPin, Navigation, CheckCircle2, MessageSquarePlus } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

export const GoogleLocationReviews: React.FC = () => {
  return (
    <section id="location" className="py-6 sm:py-8 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Compact Heading */}
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-100/70 px-3 py-0.5 rounded-full">
            Google Business &amp; Location
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-['Fredoka',sans-serif] mt-1.5">
            Find Us on Google Maps
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Scan our QR code or tap below for turn-by-turn directions to our indoor arena in Bangalore.
          </p>
        </div>

        {/* Compact Google Showcase Card */}
        <div id="reviews" className="rounded-2xl border border-violet-100 bg-gradient-to-b from-violet-50/40 to-white p-4 sm:p-6 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            
            {/* Left: Compact Google QR Card */}
            <div className="md:col-span-4 flex justify-center">
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs text-center max-w-[190px] w-full">
                
                {/* Google Logo text */}
                <div className="text-base font-black tracking-tight font-['Fredoka',sans-serif]">
                  <span className="text-blue-600">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-amber-500">o</span>
                  <span className="text-blue-600">g</span>
                  <span className="text-emerald-500">l</span>
                  <span className="text-red-500">e</span>
                </div>
                
                <p className="text-[10px] font-bold text-slate-600 mb-1.5">
                  Scan for Google Maps
                </p>

                {/* QR Code Container */}
                <a
                  href={CONTACT_INFO.googleListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-1.5 rounded-lg bg-gradient-to-tr from-blue-500 via-red-500 to-amber-400 hover:opacity-95 transition-opacity"
                  title="Click or scan to view Google listing"
                >
                  <div className="bg-white p-1 rounded flex flex-col items-center">
                    <svg viewBox="0 0 100 100" className="w-24 h-24 text-slate-900" fill="currentColor">
                      <rect x="5" y="5" width="28" height="28" rx="3" fill="currentColor" />
                      <rect x="9" y="9" width="20" height="20" rx="2" fill="white" />
                      <rect x="13" y="13" width="12" height="12" rx="1" fill="currentColor" />

                      <rect x="67" y="5" width="28" height="28" rx="3" fill="currentColor" />
                      <rect x="71" y="9" width="20" height="20" rx="2" fill="white" />
                      <rect x="75" y="13" width="12" height="12" rx="1" fill="currentColor" />

                      <rect x="5" y="67" width="28" height="28" rx="3" fill="currentColor" />
                      <rect x="9" y="71" width="20" height="20" rx="2" fill="white" />
                      <rect x="13" y="75" width="12" height="12" rx="1" fill="currentColor" />

                      <rect x="38" y="8" width="5" height="5" />
                      <rect x="48" y="14" width="5" height="5" />
                      <rect x="56" y="8" width="5" height="5" />
                      <rect x="38" y="24" width="5" height="5" />
                      <rect x="50" y="22" width="5" height="5" />

                      <rect x="8" y="38" width="5" height="5" />
                      <rect x="20" y="44" width="5" height="5" />
                      <rect x="28" y="38" width="5" height="5" />
                      <rect x="14" y="52" width="5" height="5" />

                      <circle cx="50" cy="50" r="14" fill="white" />
                      <circle cx="50" cy="50" r="11" fill="#4285F4" />
                      <text x="50" y="55" textAnchor="middle" fill="white" fontSize="13" fontWeight="900" fontFamily="sans-serif">G</text>

                      <rect x="70" y="38" width="5" height="5" />
                      <rect x="80" y="44" width="5" height="5" />
                      <rect x="68" y="52" width="5" height="5" />
                      <rect x="84" y="54" width="5" height="5" />

                      <rect x="38" y="70" width="5" height="5" />
                      <rect x="48" y="78" width="5" height="5" />
                      <rect x="56" y="72" width="5" height="5" />
                      <rect x="72" y="70" width="5" height="5" />
                      <rect x="82" y="80" width="5" height="5" />
                    </svg>

                    <p className="text-[10px] font-black text-slate-900 font-['Fredoka',sans-serif] mt-0.5">
                      Slide &amp; Glide
                    </p>
                  </div>
                </a>

                <p className="mt-1 text-[9px] text-slate-400 font-semibold">
                  Scan with camera
                </p>
              </div>
            </div>

            {/* Right: Location Details & CTAs */}
            <div className="md:col-span-8 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Fredoka',sans-serif]">
                Slide &amp; Glide Children’s Play Arena &amp; Event Venue
              </h3>

              <div className="space-y-1.5 text-xs text-slate-600">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Bangalore, Karnataka, India</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ample parking &amp; easy stroller accessibility for families</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-wrap gap-2.5">
                <a
                  href={CONTACT_INFO.googleListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors min-h-[38px]"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Google Maps</span>
                </a>

                <a
                  href={CONTACT_INFO.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-200 flex items-center justify-center gap-1.5 transition-colors min-h-[38px]"
                >
                  <MessageSquarePlus className="w-3.5 h-3.5 text-violet-600" />
                  <span>Add Google Review</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
