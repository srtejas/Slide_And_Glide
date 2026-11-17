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
  Tag,
  Coffee,
  Award,
} from 'lucide-react';
import { SERVICES_LIST, PLAY_PRICING_PLANS, CONTACT_INFO } from '../data/siteData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ServicesAndParties: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'play' | 'pricing'>('play');

  const scrollToParties = () => {
    const el = document.getElementById('parties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle URL hash changes (e.g. #pricing, #play-sessions, #parties, #birthdays)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (
        hash === '#birthdays' ||
        hash === '#parties' ||
        hash === '#birthday' ||
        hash === '#party-packages' ||
        hash === '#party-enquiry' ||
        hash === '#enquiry'
      ) {
        const targetId = hash.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(targetId) || document.getElementById('parties');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      } else if (
        hash === '#pricing' ||
        hash === '#rates' ||
        hash === '#session-rates' ||
        hash === '#package-rates'
      ) {
        setActiveTab('pricing');
      } else if (
        hash === '#services' ||
        hash === '#play' ||
        hash === '#play-sessions' ||
        hash === '#play-experiences'
      ) {
        setActiveTab('play');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="services" className="py-8 sm:py-14 bg-slate-50/70 border-b border-slate-200/80 relative">
      {/* Anchor targets for direct hash navigation and crawlable links */}
      <span id="play-sessions" className="sr-only" />
      <span id="play-experiences" className="sr-only" />
      <span id="pricing" className="sr-only" />
      <span id="session-rates" className="sr-only" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 border border-violet-200 text-violet-800 text-xs font-bold mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span>Play Zones, Café Lounge &amp; Package Rates</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
            Play Experiences &amp; Indoor Play Area Package Rates
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore our <strong>indoor playground Nagarabhavi 2nd stage</strong> featuring{' '}
            <strong>roleplay games for toddlers</strong>, a <strong>kids play zone with café</strong> seating, and transparent walk-in <strong>indoor play area package rates</strong> starting at ₹249.
          </p>
        </div>

        {/* 2-Tab Play & Rates Switcher + Direct Jump to Dedicated Parties Section */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs max-w-lg w-full">
            <button
              type="button"
              onClick={() => setActiveTab('play')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'play'
                  ? 'bg-violet-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Play Zones</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('pricing')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'pricing'
                  ? 'bg-violet-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Tag className="w-4 h-4" />
              <span>Package Rates</span>
            </button>

            <button
              type="button"
              onClick={scrollToParties}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-amber-800 hover:text-amber-950 hover:bg-amber-50 transition-all"
            >
              <PartyPopper className="w-4 h-4 text-amber-600" />
              <span>Parties ↓</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PLAY SESSIONS & EXPERIENCES */}
        {activeTab === 'play' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {SERVICES_LIST.map((service) => {
                const getIcon = () => {
                  if (service.id === 'soft-play') return <Compass className="w-5 h-5 text-violet-600" />;
                  if (service.id === 'toddler-play') return <Baby className="w-5 h-5 text-pink-600" />;
                  if (service.id === 'trampoline-play') return <Coffee className="w-5 h-5 text-amber-600" />;
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
                        <div className={`p-2 rounded-xl border ${getBg()} shrink-0`}>{getIcon()}</div>
                        <span className="text-[11px] font-bold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-100">
                          {service.tag}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{service.desc}</p>
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

            {/* Quick Links to Package Rates and Dedicated Parties Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveTab('pricing')}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-violet-300 text-left flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-bold">
                    <Tag className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Indoor Play Area Package Rates</p>
                    <p className="text-[11px] text-slate-500">Starts from ₹249 onwards</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-violet-600 group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button
                type="button"
                onClick={scrollToParties}
                className="p-4 rounded-2xl bg-white border border-amber-200 hover:border-amber-300 text-left flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <PartyPopper className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Kids Birthday Party Venue Nagarabhavi</p>
                    <p className="text-[11px] text-slate-500">Explore party packages &amp; catering venue ↓</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-600 group-hover:translate-y-0.5 transition-transform">↓</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: PRICING / INDOOR PLAY AREA PACKAGE RATES */}
        {activeTab === 'pricing' && (
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black border border-emerald-200">
                🏷️ Indoor Play Area Package Rates from ₹249 Onwards
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
                Transparent Play Session &amp; Package Rates
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Walk-ins open daily <strong>11:00 AM to 9:00 PM</strong> in West Bangalore. Every session includes 1 adult guardian entry and access to our <strong>kids play zone with café</strong> lounge.
              </p>
              <div className="inline-block p-2 rounded-xl bg-violet-50 border border-violet-100 text-[11px] sm:text-xs text-violet-900 font-semibold">
                👶 Ages 1–10 Years • Dedicated Soft Foam Zone &amp; Roleplay Games for Toddlers (1–3 Yrs)
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {PLAY_PRICING_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-white rounded-2xl p-5 border flex flex-col justify-between transition-all ${
                    plan.badge === 'Best Starting Value'
                      ? 'border-emerald-300 shadow-md ring-2 ring-emerald-500/20'
                      : plan.badge === 'Most Popular'
                      ? 'border-violet-300 shadow-md ring-2 ring-violet-500/20'
                      : 'border-slate-200 shadow-2xs hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          plan.badge === 'Best Starting Value'
                            ? 'bg-emerald-600 text-white'
                            : plan.badge === 'Most Popular'
                            ? 'bg-violet-600 text-white'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {plan.badge}
                      </span>
                      <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-md">
                        {plan.tag}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-['Fredoka',sans-serif]">
                      {plan.title}
                    </h4>

                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-black text-slate-900 font-['Fredoka',sans-serif]">
                        {plan.price}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">onwards</span>
                    </div>
                    <p className="text-[11px] font-bold text-emerald-700 mt-0.5">{plan.rateNote}</p>

                    <p className="text-xs text-violet-700 font-semibold mt-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{plan.duration}</span>
                    </p>

                    <p className="text-xs text-slate-500 mt-2 italic bg-slate-50 p-2 rounded-xl border border-slate-100">
                      {plan.highlight}
                    </p>

                    <ul className="mt-4 space-y-2 text-xs text-slate-600">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <a
                      href={CONTACT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                        plan.badge === 'Most Popular'
                          ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Discounted Family & Child Membership Plans Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-violet-50 to-pink-50 border border-violet-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider text-violet-700 bg-white px-2 py-0.5 rounded-md border border-violet-200 mb-1">
                    Save More on Every Visit
                  </span>
                  <h4 className="text-sm sm:text-base font-black text-slate-900 font-['Fredoka',sans-serif]">
                    Membership Plans for Frequently Visiting Children &amp; Families
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Visit often? We offer flexible <strong>membership plans for frequently visiting kids and families at highly discounted rates</strong>. Ask at our reception counter or message us on WhatsApp for membership options!
                  </p>
                </div>
              </div>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center gap-1.5 shrink-0 shadow-xs transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Ask About Memberships</span>
              </a>
            </div>

            {/* Transparent Policies Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <span className="text-xl">📹</span>
                <div>
                  <h5 className="text-xs font-bold text-slate-900">CCTV &amp; Daily Cleaned</h5>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Continuous CCTV monitoring and deep sanitization cleaning every day for parents’ peace of mind.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <span className="text-xl">🧦</span>
                <div>
                  <h5 className="text-xs font-bold text-slate-900">Socks Mandatory</h5>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Socks are mandatory for safety and hygiene. Bring your own or get a fresh pair at reception.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <span className="text-xl">☕</span>
                <div>
                  <h5 className="text-xs font-bold text-slate-900">Parent Café &amp; Seating</h5>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Relax in our kids play zone with café lounge, refreshments, and free Wi-Fi while kids play.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <span className="text-xl">🚗</span>
                <div>
                  <h5 className="text-xs font-bold text-slate-900">Free Street Parking</h5>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Plenty of free street parking around S N Arcade near Nagarabhavi 2nd Stage.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                <h4 className="text-sm font-bold font-['Fredoka',sans-serif]">
                  Have Questions on Indoor Play Area Package Rates or Group Entry?
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Call our front desk directly at {CONTACT_INFO.phone1} or message us on WhatsApp.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${CONTACT_INFO.phone1Raw}`}
                  className="px-3.5 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs flex items-center gap-1.5 hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-violet-600" />
                  <span>Call Us</span>
                </a>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
