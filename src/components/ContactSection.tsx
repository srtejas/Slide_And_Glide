import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Clock, Copy, Check, Instagram } from 'lucide-react';
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
    <section id="contact" className="py-6 sm:py-8 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Compact Heading */}
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-100/70 px-3 py-0.5 rounded-full">
            Direct Inquiries &amp; Bookings
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-['Fredoka',sans-serif] mt-1.5">
            Contact Slide &amp; Glide
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Walk-ins welcome every day. Reach out directly for entry details, timings, or group visits.
          </p>
        </div>

        {/* Minimalist 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1: Direct Phone Numbers */}
          <div className="p-4 rounded-2xl border border-violet-200/80 bg-white flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm font-['Fredoka',sans-serif]">
                    Phone Numbers
                  </h3>
                  <p className="text-[11px] text-slate-400">Direct arena calls</p>
                </div>
              </div>

              {/* Number Rows */}
              <div className="space-y-2 mt-3">
                {CONTACT_INFO.phones.map((p, idx) => (
                  <div key={idx} className="p-2 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-1.5">
                    <a
                      href={`tel:${p.raw}`}
                      className="text-xs font-black text-slate-900 hover:text-violet-600 font-['Fredoka',sans-serif] tracking-tight transition-colors"
                    >
                      {p.display}
                    </a>
                    <button
                      onClick={() => handleCopyPhone(p.display)}
                      className="p-1 bg-white hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-200 text-xs transition-colors shrink-0"
                      aria-label={`Copy ${p.display}`}
                      title="Copy phone number"
                    >
                      {copiedPhoneText === p.display ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100">
              <a
                href={`tel:${CONTACT_INFO.phone1Raw}`}
                className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors min-h-[36px]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Card 2: Email & WhatsApp */}
          <div className="p-4 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-pink-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm font-['Fredoka',sans-serif]">
                    Email &amp; WhatsApp
                  </h3>
                  <p className="text-[11px] text-slate-400">Online support</p>
                </div>
              </div>

              {/* Email display with copy */}
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 mt-3">
                <span className="text-[10px] font-bold text-pink-700 uppercase tracking-wider block">
                  Official Email:
                </span>
                <div className="flex items-center justify-between gap-1 mt-0.5">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-xs font-bold text-slate-900 hover:text-violet-600 truncate transition-colors"
                    title={CONTACT_INFO.email}
                  >
                    {CONTACT_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 bg-white hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-200 text-xs transition-colors shrink-0"
                    aria-label="Copy email address"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-colors min-h-[36px]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-colors min-h-[36px]"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram @slideandglideplayzone</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-full py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Card 3: Arena Timings & Days */}
          <div className="p-4 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm font-['Fredoka',sans-serif]">
                    Arena Hours
                  </h3>
                  <p className="text-[11px] text-slate-400">Open 7 days a week</p>
                </div>
              </div>

              <div className="space-y-2 mt-3 text-xs">
                <div className="p-2 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                  <span className="font-semibold text-slate-600">Monday – Sunday</span>
                  <span className="font-bold text-slate-900">11:00 AM – 9:00 PM</span>
                </div>
                <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center gap-1.5 text-emerald-800 text-[11px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>Walk-ins welcome every day • 11 AM - 9 PM</span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 space-y-1">
              <p className="text-[11px] text-slate-700 font-semibold leading-tight">
                📍 {CONTACT_INFO.shortAddress}
              </p>
              <div className="text-[10px] text-slate-500 flex flex-wrap items-center justify-between gap-1">
                <span>Socks required (bring or buy here)</span>
                <span>•</span>
                <span>Free street parking</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
