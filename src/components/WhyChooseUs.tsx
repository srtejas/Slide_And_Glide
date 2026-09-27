import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Footprints, 
  Wind, 
  HeartHandshake, 
  CheckCircle2, 
  Activity, 
  Brain, 
  Users, 
  Heart,
  MessageCircle,
  Phone
} from 'lucide-react';
import { DEVELOPMENT_PILLARS, HYGIENE_STANDARDS, CONTACT_INFO } from '../data/siteData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-8 sm:py-12 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100/80 border border-violet-200 text-violet-800 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span>The Slide &amp; Glide Promise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
            Slide &amp; Glide: Why Choose Us?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Where 100% screen-free active fun meets whole-child developmental growth and spotless, hospital-grade daily cleanliness.
          </p>
        </div>

        {/* Cleanliness & Hygiene Spotlight Card */}
        <div className="mb-10 rounded-2xl sm:rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/40 p-5 sm:p-7 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-emerald-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-wider uppercase text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                  Cleanliness &amp; Hygiene Priority
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-['Fredoka',sans-serif] mt-0.5">
                  Sanitized Daily for Safe, Worry-Free Play
                </h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 md:max-w-md leading-relaxed">
              As parents ourselves, hygiene is our non-negotiable benchmark. We deep clean and disinfect our arena daily using child-safe, non-toxic hospital-grade sanitizers before every play session.
            </p>
          </div>

          {/* 6 Hygiene Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-5">
            {HYGIENE_STANDARDS.map((item, idx) => {
              const icons = [
                <Sparkles key="1" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />,
                <ShieldCheck key="2" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />,
                <Footprints key="3" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />,
                <Wind key="4" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />,
                <HeartHandshake key="5" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />,
                <CheckCircle2 key="6" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />,
              ];

              return (
                <div 
                  key={idx} 
                  className="p-3.5 rounded-xl bg-white border border-emerald-100/90 shadow-2xs hover:border-emerald-300 transition-colors flex items-start gap-2.5"
                >
                  <div className="p-1.5 rounded-lg bg-emerald-50 shrink-0">
                    {icons[idx % icons.length]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-['Fredoka',sans-serif]">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Developmental Pillars from Official Poster */}
        <div className="mb-10">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-100/70 px-3 py-0.5 rounded-full">
              Holistic Child Development
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-['Fredoka',sans-serif] mt-1.5">
              The 4 Pillars of Slide &amp; Glide Play
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5 max-w-xl mx-auto">
              Every play zone is purposefully designed to nurture physical strength, cognitive problem solving, social teamwork, and emotional confidence.
            </p>
          </div>

          {/* 4 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {DEVELOPMENT_PILLARS.map((pillar) => {
              const pillarIcon = 
                pillar.id === 'physical' ? <Activity className="w-4 h-4" /> :
                pillar.id === 'cognitive' ? <Brain className="w-4 h-4" /> :
                pillar.id === 'social' ? <Users className="w-4 h-4" /> :
                <Heart className="w-4 h-4" />;

              return (
                <div 
                  key={pillar.id}
                  className={`rounded-2xl border ${pillar.borderColor} ${pillar.lightBg} p-4 sm:p-5 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow`}
                >
                  <div>
                    {/* Header with Icon */}
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className={`w-8 h-8 rounded-xl ${pillar.iconColor} text-white flex items-center justify-center shrink-0 shadow-2xs`}>
                        {pillarIcon}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 font-['Fredoka',sans-serif] truncate">
                          {pillar.title}
                        </h4>
                        <span className={`text-[10px] font-bold ${pillar.accentText} block truncate`}>
                          {pillar.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <div className="space-y-1.5 mt-3 pt-3 border-t border-slate-200/60 text-xs">
                      {pillar.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-1.5 text-slate-700">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${pillar.accentText} shrink-0 mt-0.5`} />
                          <span className="text-[11px] leading-tight">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action CTA Card without image */}
        <div className="rounded-2xl sm:rounded-3xl border border-violet-100 bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-950 text-white p-6 sm:p-8 shadow-md">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-pink-300 bg-white/10 px-3 py-1 rounded-full">
              Ready for Smiles &amp; Boundless Energy?
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-['Fredoka',sans-serif] tracking-tight">
              Experience Slide &amp; Glide in Bangalore Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
              Walk-ins are open every day from 10:00 AM to 9:00 PM. Host your child’s dream birthday party or enjoy relaxed everyday indoor play.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Inquiries</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone1Raw}`}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-violet-300" />
                <span>Call {CONTACT_INFO.phone1}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
