import React from 'react';
import { 
  Sparkles, 
  Baby, 
  Compass, 
  Clock, 
  ShieldCheck
} from 'lucide-react';
import { SERVICES_LIST, CONTACT_INFO } from '../data/siteData';

export const ServicesAndParties: React.FC = () => {
  return (
    <section id="services" className="py-8 sm:py-12 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading: Target Keywords */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100/90 border border-violet-200 text-violet-800 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span>Play Experiences &amp; Zones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
            Play Experiences in Nagarabhavi
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            From everyday walk-in fun at our <strong>soft play area for kids</strong> to a dedicated <strong>toddler play area in Nagarabhavi</strong>, trampolines, and active weekend adventures.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {SERVICES_LIST.map((service) => {
            const getIcon = () => {
              if (service.id === 'soft-play') return <Compass className="w-5 h-5 text-violet-600" />;
              if (service.id === 'toddler-play') return <Baby className="w-5 h-5 text-pink-600" />;
              if (service.id === 'trampoline-play') return <Sparkles className="w-5 h-5 text-amber-600" />;
              return <Clock className="w-5 h-5 text-emerald-600" />;
            };

            const getBg = () => {
              if (service.id === 'soft-play') return 'bg-violet-50 border-violet-200';
              if (service.id === 'toddler-play') return 'bg-pink-50 border-pink-200';
              if (service.id === 'trampoline-play') return 'bg-amber-50 border-amber-200';
              return 'bg-emerald-50 border-emerald-200';
            };

            return (
              <div 
                key={service.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`p-2 rounded-xl border ${getBg()} shrink-0`}>
                      {getIcon()}
                    </div>
                    <span className="text-[11px] font-bold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-100">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Daily Sanitized • Open 11 AM - 9 PM</span>
                  </span>
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-violet-600 hover:text-violet-700 inline-flex items-center gap-1"
                  >
                    <span>Inquire Now</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
