import React from 'react';
import {
  PartyPopper,
  Gift,
  Users,
  Music,
  ShieldCheck,
  Utensils,
  Coffee,
  Clock,
  CheckCircle2,
  MessageCircle,
  Phone,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { BIRTHDAY_PACKAGES, BIRTHDAY_PERKS, CONTACT_INFO, IMAGES } from '../data/siteData';
import { PartyEnquiryForm } from './PartyEnquiryForm';

export const PartiesSection: React.FC = () => {
  return (
    <section
      id="parties"
      className="py-10 sm:py-16 bg-gradient-to-b from-amber-50/40 via-white to-violet-50/40 border-b border-slate-200/80 relative scroll-mt-16"
    >
      {/* Anchor targets for backward-compatible hash navigation */}
      <span id="birthdays" className="sr-only" />
      <span id="party-packages" className="sr-only" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold mb-3">
            <PartyPopper className="w-3.5 h-3.5 text-amber-600" />
            <span>Parties • Kids Birthday Party Venue Nagarabhavi</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight leading-tight">
            Birthday Party Venue &amp; Small Event Hall in Nagarabhavi
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
            Looking for a premium birthday party hall near Nagarbhavi? Slide &amp; Glide offers customizable, hassle-free birthday party packages for kids up to 10 years old.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Conveniently located for families searching for <strong>birthday party halls near Annapoorneshwari Nagar</strong> or a cheerful <strong>small event venue with catering</strong> support in West Bangalore — featuring our <strong>kids play zone with café</strong> refreshments, decorated cake space, and stress-free party hosting.
          </p>
        </div>

        {/* Birthday Venue Spotlight Banner */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-amber-200/80 shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: Copy & Event Highlights */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 text-violet-900 text-xs font-bold border border-violet-200">
                <Gift className="w-3.5 h-3.5 text-violet-600" />
                <span>Customizable Celebrations • Ages 1–10 Years</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
                Stress-Free Birthdays &amp; Small Events with Catering Support
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Say goodbye to cramped living rooms and noisy restaurants! As a dedicated <strong>kids birthday party venue Nagarbhavi</strong> families trust, we handle play supervision, festive balloon setup, cake table arrangement, and <strong>small event venue with catering</strong> &amp; snack-serving coordination so parents can genuinely relax.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="p-2.5 rounded-xl bg-violet-50/70 border border-violet-100 flex items-center gap-2">
                  <Users className="w-4 h-4 text-violet-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Dedicated Cake &amp; Seating Zone</span>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100 flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Catering &amp; Café Food Options</span>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">CCTV Monitored &amp; Cleaned Daily</span>
                </div>
                <div className="p-2.5 rounded-xl bg-pink-50/70 border border-pink-100 flex items-center gap-2">
                  <Music className="w-4 h-4 text-pink-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Party Music &amp; Free Kid Socks</span>
                </div>
              </div>

              {/* Location & Café strip */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-slate-700">
                <span className="inline-flex items-center gap-1 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-violet-600" />
                  Near Annapoorneshwari Nagar &amp; Nagarabhavi 2nd Stage
                </span>
                <span className="inline-flex items-center gap-1 font-semibold">
                  <Coffee className="w-3.5 h-3.5 text-amber-600" />
                  Kids Play Zone with Café &amp; Parent Lounge
                </span>
              </div>

              {/* Quick CTAs */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
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
                  href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-300 flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-violet-600" />
                  <span>Call {CONTACT_INFO.primaryPhone}</span>
                </a>
                <a
                  href="#party-enquiry"
                  className="px-4 py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold text-xs border border-amber-300 flex items-center gap-1.5 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Fill Enquiry Form</span>
                </a>
              </div>
            </div>

            {/* Right: Authentic Birthday & Party Area Photos */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-4/3 group">
                <img
                  src={IMAGES.party}
                  alt="Kids birthday party venue in Nagarabhavi at Slide and Glide party area"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="450"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="text-xs font-bold">Birthday Party Hall &amp; Cake Zone</p>
                    <p className="text-[11px] text-white/85">Annapoorneshwari Nagar, Nagarabhavi</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-16/10 group">
                  <img
                    src={IMAGES.birthday}
                    alt="Birthday celebrations at Slide and Glide near Annapoorneshwari Nagar"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex flex-col justify-center">
                  <span className="text-[11px] font-black text-amber-900 uppercase tracking-wide">
                    Private &amp; Semi-Private
                  </span>
                  <p className="text-[11px] text-amber-800 mt-0.5 leading-snug">
                    Flexible weekday &amp; weekend party slots for 10 to 40+ guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Birthday Party Packages */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-5">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-['Fredoka',sans-serif]">
              Customizable Kids Birthday Party Packages (Ages 1–10 Years)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Ideal for intimate toddler birthdays, school friend celebrations, and small family events with catering in West Bangalore.
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
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        pkg.badge === 'Best Value'
                          ? 'bg-violet-600 text-white'
                          : pkg.badge === 'VIP Exclusive'
                          ? 'bg-amber-100 text-amber-900 border border-amber-200'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">{pkg.tag}</span>
                  </div>

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

                  <ul className="mt-4 space-y-2 text-xs text-slate-600">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <a
                    href={CONTACT_INFO.whatsappBirthdayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {BIRTHDAY_PERKS.map((perk, pIdx) => (
            <div key={pIdx} className="p-3.5 bg-white rounded-xl border border-slate-200 text-center shadow-2xs">
              <h5 className="text-xs font-bold text-slate-900">{perk.title}</h5>
              <p className="text-[11px] text-slate-500 mt-0.5">{perk.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Party Enquiry Form */}
        <PartyEnquiryForm />

        {/* Bottom Inquire Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-violet-900 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold font-['Fredoka',sans-serif]">
              Ready to Book Your Birthday Party Hall near Nagarbhavi?
            </h4>
            <p className="text-xs text-violet-200 mt-0.5">
              Call our team or visit S N Arcade, Annapoorneshwari Nagar (open daily 11:00 AM – 9:00 PM) to tour the party space.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
              className="px-3.5 py-2 rounded-xl bg-white text-slate-900 font-extrabold text-xs flex items-center gap-1.5 hover:bg-violet-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-violet-600" />
              <span>Call {CONTACT_INFO.primaryPhone}</span>
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
    </section>
  );
};
