import React from 'react';
import { Star, MapPin, ExternalLink, Navigation, CheckCircle2, MessageSquarePlus } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

export const GoogleLocationReviews: React.FC = () => {
  return (
    <section id="location" className="py-14 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-100/70 px-3 py-1 rounded-full">
            Google Business &amp; Location
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Fredoka',sans-serif] mt-2">
            Find Us on Google Maps
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Easily navigate to Slide &amp; Glide in Bangalore by scanning our QR code or opening Google Maps directly.
          </p>
        </div>

        {/* Interactive Google Showcase Card */}
        <div id="reviews" className="rounded-3xl border-2 border-violet-100 bg-gradient-to-b from-violet-50/50 to-white p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Google QR Card (faithful to user's uploaded flyer) */}
            <div className="md:col-span-5 flex justify-center">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md text-center max-w-[240px] w-full">
                
                {/* Google Logo text */}
                <div className="text-lg font-black tracking-tight font-['Fredoka',sans-serif] mb-0.5">
                  <span className="text-blue-600">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-amber-500">o</span>
                  <span className="text-blue-600">g</span>
                  <span className="text-emerald-500">l</span>
                  <span className="text-red-500">e</span>
                </div>
                
                <p className="text-[11px] font-bold text-slate-700 mb-2.5">
                  Check us out on Google
                </p>

                {/* QR Code Container with Google colored gradient border */}
                <a
                  href={CONTACT_INFO.googleListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 rounded-xl bg-gradient-to-tr from-blue-500 via-red-500 to-amber-400 hover:opacity-95 transition-opacity"
                  title="Click or scan to view Google listing"
                >
                  <div className="bg-white p-2 rounded-lg flex flex-col items-center">
                    
                    {/* SVG QR Code */}
                    <svg viewBox="0 0 100 100" className="w-32 h-32 text-slate-900" fill="currentColor">
                      {/* Detection corners */}
                      <rect x="5" y="5" width="28" height="28" rx="3" fill="currentColor" />
                      <rect x="9" y="9" width="20" height="20" rx="2" fill="white" />
                      <rect x="13" y="13" width="12" height="12" rx="1" fill="currentColor" />

                      <rect x="67" y="5" width="28" height="28" rx="3" fill="currentColor" />
                      <rect x="71" y="9" width="20" height="20" rx="2" fill="white" />
                      <rect x="75" y="13" width="12" height="12" rx="1" fill="currentColor" />

                      <rect x="5" y="67" width="28" height="28" rx="3" fill="currentColor" />
                      <rect x="9" y="71" width="20" height="20" rx="2" fill="white" />
                      <rect x="13" y="75" width="12" height="12" rx="1" fill="currentColor" />

                      {/* Dots pattern */}
                      <rect x="38" y="8" width="5" height="5" />
                      <rect x="48" y="14" width="5" height="5" />
                      <rect x="56" y="8" width="5" height="5" />
                      <rect x="38" y="24" width="5" height="5" />
                      <rect x="50" y="22" width="5" height="5" />

                      <rect x="8" y="38" width="5" height="5" />
                      <rect x="20" y="44" width="5" height="5" />
                      <rect x="28" y="38" width="5" height="5" />
                      <rect x="14" y="52" width="5" height="5" />

                      {/* Center Google G Emblem */}
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

                    <p className="mt-1 text-[11px] font-black text-slate-900 font-['Fredoka',sans-serif]">
                      Slide &amp; Glide
                    </p>
                  </div>
                </a>

                <p className="mt-2 text-[10px] text-slate-500 font-semibold">
                  Scan with your phone camera
                </p>

              </div>
            </div>

            {/* Right: Location Details & CTAs */}
            <div className="md:col-span-7 space-y-4">
              
              {/* Star Rating */}
              <div className="flex items-center gap-1.5">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-extrabold text-slate-900 text-sm">5.0 Star Rating</span>
                <span className="text-xs text-slate-400">• Verified on Google</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Fredoka',sans-serif]">
                Slide &amp; Glide Children’s Play Arena &amp; Event Venue
              </h3>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    Direct Google Location (Bangalore): <a href={CONTACT_INFO.googleListingUrl} target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline font-bold">maps.app.goo.gl/zLi3pC3UZUMYc77M7</a>
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ample parking &amp; easy accessibility for strollers &amp; families in Bangalore</span>
                </p>
              </div>

              {/* Action Buttons in Theme */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={CONTACT_INFO.googleListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-violet-200 transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open Google Location &amp; Directions</span>
                </a>

                <a
                  href={CONTACT_INFO.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageSquarePlus className="w-4 h-4 text-violet-600" />
                  <span>Add a Google Review</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
