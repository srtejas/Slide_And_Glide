import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Navigation, Copy, Check } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

export const ContactSection: React.FC = () => {
  const [copiedPhoneText, setCopiedPhoneText] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyPhone = (numberToCopy: string) => {
    navigator.clipboard.writeText(numberToCopy);
    setCopiedPhoneText(numberToCopy);
    setTimeout(() => setCopiedPhoneText(null), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-100/70 px-3 py-1 rounded-full">
            Contact &amp; Visit Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Fredoka',sans-serif] mt-2">
            Get in Touch With Slide &amp; Glide
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            For walk-in entry inquiries, birthday party reservations, or school trips, reach out to our Bangalore team directly.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Phone & WhatsApp (Reveal not needed - displayed directly) */}
          <div className="p-6 rounded-2xl border-2 border-violet-100 bg-violet-50/40 flex flex-col justify-between hover:border-violet-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center mb-4 shadow-sm shadow-violet-200">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base font-['Fredoka',sans-serif]">
                Phone &amp; WhatsApp
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Direct inquiries &amp; party bookings in Bangalore, India
              </p>
              
              {/* Phone numbers displayed directly without Arena Hotline label */}
              <div className="mt-4 space-y-2.5">
                {CONTACT_INFO.phones.map((p, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xl border border-violet-200 shadow-2xs flex items-center justify-between gap-2">
                    <span className="text-sm sm:text-base font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
                      {p.display}
                    </span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={`tel:${p.raw}`}
                        className="py-1.5 px-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center gap-1 transition-colors"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call</span>
                      </a>
                      <button
                        onClick={() => handleCopyPhone(p.display)}
                        className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-colors"
                        aria-label={`Copy ${p.display}`}
                        title="Copy phone number"
                      >
                        {copiedPhoneText === p.display ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-violet-100 flex flex-col gap-2">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-violet-200 transition-colors min-h-[42px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${CONTACT_INFO.phone1Raw}`}
                  className="py-2 px-1 text-center rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-1 border border-slate-200 transition-colors min-h-[40px]"
                >
                  <Phone className="w-3 h-3 text-slate-500" />
                  <span>Call 9739780837</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone2Raw}`}
                  className="py-2 px-1 text-center rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-1 border border-slate-200 transition-colors min-h-[40px]"
                >
                  <Phone className="w-3 h-3 text-slate-500" />
                  <span>Call 9945958367</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="p-6 rounded-2xl border-2 border-slate-100 bg-slate-50/60 flex flex-col justify-between hover:border-violet-200 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center mb-4 shadow-sm shadow-pink-200">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base font-['Fredoka',sans-serif]">
                Email Us
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Official inquiries &amp; customer support
              </p>
              
              {/* Direct email link and address display */}
              <div className="mt-4 p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <div className="text-[11px] font-bold text-pink-700 uppercase tracking-wider">
                  Official Email:
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm font-bold text-slate-900 hover:text-violet-600 break-all transition-colors block mt-0.5"
                  title="Send email to Slide & Glide"
                >
                  {CONTACT_INFO.email}
                </a>
                <div className="flex items-center gap-2 mt-2.5">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex-1 py-1.5 px-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Mail className="w-3 h-3" />
                    <span>Send Email</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="py-1.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors min-h-[42px]"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Card 3: Google Location (Click below wording removed) */}
          <div className="p-6 rounded-2xl border-2 border-slate-100 bg-slate-50/60 flex flex-col justify-between hover:border-violet-200 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-sm shadow-emerald-200">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base font-['Fredoka',sans-serif]">
                Google Location
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Find us on Google Maps (Bangalore)
              </p>
              
              {/* "Click below" wording removed */}
              <div className="mt-4 p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                  Location &amp; Directions:
                </div>
                <p className="mt-0.5 text-xs text-slate-600 leading-relaxed font-semibold">
                  Turn-by-turn Google Maps navigation directly to our indoor arena in Bangalore.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <a
                href={CONTACT_INFO.googleListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-violet-200 transition-colors min-h-[42px]"
              >
                <Navigation className="w-4 h-4" />
                <span>Navigate via Google Maps</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
