import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Baby, 
  Compass, 
  Clock, 
  ShieldCheck,
  PartyPopper,
  Gamepad2,
  CheckCircle2,
  Phone,
  MessageCircle,
  Calendar,
  Gift,
  Users,
  Music,
  MapPin
} from 'lucide-react';
import { SERVICES_LIST, BIRTHDAY_PACKAGES, BIRTHDAY_PERKS, CONTACT_INFO, IMAGES } from '../data/siteData';

export const ServicesAndParties: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'play' | 'parties'>('play');

  // Handle URL hash changes (e.g. #birthdays or #parties opens the birthday tab)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#birthdays' || hash === '#parties' || hash === '#birthday') {
        setActiveTab('parties');
      } else if (hash === '#services' || hash === '#play' || hash === '#play-experiences') {
        setActiveTab('play');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="services" className="py-8 sm:py-14 bg-slate-50/70 border-b border-slate-200/80 relative">
      {/* Anchor targets for hash navigation */}
      <span id="play-experiences" className="sr-only" />
      <span id="birthdays" className="sr-only" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 border border-violet-200 text-violet-800 text-xs font-bold mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span>Play Experiences &amp; Celebrations</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
            Play Experiences &amp; Birthday Parties in Nagarabhavi
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From daily walk-in adventures at our <strong>soft play area for kids</strong> and dedicated <strong>toddler play area in Nagarabhavi</strong> to unforgettable <strong>kids birthday party packages</strong>.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs max-w-md w-full">
            <button
              type="button"
              onClick={() => setActiveTab('play')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'play'
                  ? 'bg-violet-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Play Experiences</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('parties')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all relative ${
                activeTab === 'parties'
                  ? 'bg-violet-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <PartyPopper className="w-4 h-4 text-amber-300" />
              <span>Birthday Parties</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ml-1 ${
                activeTab === 'parties' ? 'bg-amber-400 text-violet-950' : 'bg-amber-100 text-amber-800'
              }`}>
                Venue
              </span>
            </button>
          </div>
        </div>

        {/* TAB 1: PLAY EXPERIENCES */}
        {activeTab === 'play' && (
          <div className="space-y-6">
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

            {/* Teaser switch to Birthday Tab */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-pink-50 to-violet-50 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <PartyPopper className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-['Fredoka',sans-serif]">
                    Looking for a Kids Birthday Party Venue in Nagarabhavi?
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    We host private birthday celebrations with unlimited slides, party music, cake cutting, and games.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('parties')}
                className="shrink-0 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>View Birthday Packages</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: BIRTHDAY PARTIES */}
        {activeTab === 'parties' && (
          <div className="space-y-6">
            
            {/* Birthday Venue Spotlight Banner */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-xs overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left: Text & Key Highlights */}
                <div className="lg:col-span-7 space-y-3.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200">
                    <Gift className="w-3.5 h-3.5 text-amber-600" />
                    <span>Kids Birthday Party Venue in Nagarabhavi</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
                    Celebrate Magical Birthdays at Slide &amp; Glide
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Say goodbye to boring parties! Give your child and their friends an unforgettable day filled with bouncy trampolines, multi-level soft slides, ball pits, and a dedicated cake cutting space. <strong>Parents relax while kids have pure active fun!</strong>
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <div className="p-2.5 rounded-xl bg-violet-50/70 border border-violet-100 flex items-center gap-2">
                      <Users className="w-4 h-4 text-violet-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-800">Dedicated Cake Space</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100 flex items-center gap-2">
                      <Music className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-800">Party Music &amp; Ambience</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-800">Sanitized &amp; Supervised</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-pink-50/70 border border-pink-100 flex items-center gap-2">
                      <Gift className="w-4 h-4 text-pink-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-800">Free Socks for Birthday Kid</span>
                    </div>
                  </div>

                  {/* Quick CTAs */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={CONTACT_INFO.whatsappBirthdayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire Birthday on WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${CONTACT_INFO.phone1Raw}`}
                      className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-300 flex items-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-violet-600" />
                      <span>Call {CONTACT_INFO.phone1}</span>
                    </a>
                  </div>
                </div>

                {/* Right: Authentic Real Birthday Photo */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 group">
                    <img 
                      src={IMAGES.party} 
                      alt="Kids celebrating birthday party at Slide and Glide Nagarabhavi" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white">
                        <p className="text-xs font-bold">Joyful Celebrations at Slide &amp; Glide</p>
                        <p className="text-[11px] text-white/80">3rd Floor, S N Arcade, Nagarabhavi</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 3 Birthday Party Packages */}
            <div>
              <div className="text-center max-w-xl mx-auto mb-5">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-['Fredoka',sans-serif]">
                  Birthday Party Packages for Kids
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Choose the package that fits your celebration. Custom adjustments and add-ons available upon enquiry.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                {BIRTHDAY_PACKAGES.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`bg-white rounded-2xl p-5 border flex flex-col justify-between transition-all ${
                      pkg.badge === 'Best Value'
                        ? 'border-violet-300 shadow-md ring-2 ring-violet-500/20'
                        : 'border-slate-200 shadow-2xs hover:border-slate-300'
                    }`}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          pkg.badge === 'Best Value'
                            ? 'bg-violet-600 text-white'
                            : pkg.badge === 'VIP Exclusive'
                            ? 'bg-amber-100 text-amber-900 border border-amber-200'
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {pkg.badge}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {pkg.tag}
                        </span>
                      </div>

                      {/* Title & Duration */}
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 font-['Fredoka',sans-serif]">
                        {pkg.name}
                      </h4>
                      <p className="text-xs text-violet-700 font-semibold mt-0.5 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{pkg.duration}</span>
                      </p>

                      <p className="text-xs text-slate-500 mt-2 italic bg-slate-50 p-2 rounded-xl border border-slate-100">
                        {pkg.highlight}
                      </p>

                      {/* Features List */}
                      <ul className="mt-4 space-y-2 text-xs text-slate-600">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Action */}
                    <div className="mt-5 pt-3 border-t border-slate-100">
                      <a
                        href={CONTACT_INFO.whatsappBirthdayUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                          pkg.badge === 'Best Value'
                            ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-xs'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                        }`}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Perks Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {BIRTHDAY_PERKS.map((perk, pIdx) => (
                <div key={pIdx} className="p-3 bg-white rounded-xl border border-slate-200 text-center">
                  <h5 className="text-xs font-bold text-slate-900">{perk.title}</h5>
                  <p className="text-[11px] text-slate-500 mt-0.5">{perk.desc}</p>
                </div>
              ))}
            </div>

            {/* Bottom Inquire Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-violet-900 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="text-sm sm:text-base font-bold font-['Fredoka',sans-serif]">
                  Ready to Book or Check Availability?
                </h4>
                <p className="text-xs text-violet-200 mt-0.5">
                  Call our team or enquire directly at reception. Open daily 11:00 AM – 9:00 PM.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={`tel:${CONTACT_INFO.phone1Raw}`}
                  className="px-3.5 py-2 rounded-xl bg-white text-slate-900 font-extrabold text-xs flex items-center gap-1.5 hover:bg-violet-50 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-violet-600" />
                  <span>Call {CONTACT_INFO.phone1}</span>
                </a>
                <a
                  href={CONTACT_INFO.whatsappBirthdayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-emerald-500 text-white font-extrabold text-xs flex items-center gap-1.5 hover:bg-emerald-600 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
