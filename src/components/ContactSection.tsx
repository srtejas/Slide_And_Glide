import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Clock,
  Copy,
  Check,
  Instagram,
  Youtube,
  MapPin,
  Send,
  CheckCircle2,
  Navigation,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ContactSection: React.FC = () => {
  const [copiedPhoneText, setCopiedPhoneText] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    topic: 'General / Play Session Enquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');
  const [waUrl, setWaUrl] = useState('');

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

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Contact Us: ${contactForm.topic} - ${contactForm.name || 'Parent Enquiry'}`;
    const body = `Hi Slide & Glide Team,

I would like to reach out regarding: ${contactForm.topic}

--- CONTACT DETAILS ---
• Name: ${contactForm.name}
• Phone / WhatsApp: ${contactForm.phone}
• Email: ${contactForm.email || 'Not provided'}

--- MESSAGE ---
${contactForm.message}

Warm regards,
${contactForm.name}`;

    const generatedMailto = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const waMessage = `Hi Slide & Glide! My name is ${contactForm.name} (${contactForm.phone}). Topic: ${contactForm.topic}. ${contactForm.message}`;
    const generatedWa = `https://wa.me/919538678201?text=${encodeURIComponent(waMessage)}`;

    setMailtoUrl(generatedMailto);
    setWaUrl(generatedWa);
    window.location.href = generatedMailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-10 sm:py-14 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-100/80 px-3 py-1 rounded-full">
            Contact Us &amp; Quick Connect
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Fredoka',sans-serif] mt-2">
            Contact Slide &amp; Glide
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Walk-ins welcome every day from 11:00 AM to 9:00 PM. Call, WhatsApp, visit our location, or send us an email below.
          </p>
        </div>

        {/* 3-Card Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Direct Phone Numbers */}
          <div className="p-4 sm:p-5 rounded-2xl border border-violet-200/80 bg-white flex flex-col justify-between shadow-2xs">
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

              <div className="space-y-2 mt-3">
                {CONTACT_INFO.phones.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-1.5"
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <a
                        href={`tel:${p.raw}`}
                        className="text-xs font-black text-slate-900 hover:text-violet-600 font-['Fredoka',sans-serif] tracking-tight transition-colors truncate"
                      >
                        {p.display}
                      </a>
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          p.isPrimary
                            ? 'bg-violet-100 text-violet-800'
                            : 'bg-slate-200/80 text-slate-600'
                        }`}
                      >
                        {p.isPrimary ? 'Primary' : 'Alt'}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyPhone(p.display)}
                      className="p-1 bg-white hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-200 text-xs transition-colors shrink-0"
                      aria-label={`Copy ${p.display}`}
                      title="Copy phone number"
                    >
                      {copiedPhoneText === p.display ? (
                        <Check className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100">
              <a
                href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors min-h-[36px]"
                title="Call Primary Number"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Primary ({CONTACT_INFO.primaryPhone})</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp, Social Channels & Email */}
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-pink-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm font-['Fredoka',sans-serif]">
                    WhatsApp, Social &amp; Email
                  </h3>
                  <p className="text-[11px] text-slate-400">Ready to click</p>
                </div>
              </div>

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
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1 bg-white hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-200 text-xs transition-colors shrink-0"
                    aria-label="Copy email address"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-3 h-3 text-emerald-600" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-colors min-h-[36px]"
              >
                <WhatsAppIcon className="w-4 h-4" />
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
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={CONTACT_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-colors min-h-[36px]"
                >
                  <Youtube className="w-3.5 h-3.5" />
                  <span>YouTube</span>
                </a>
                <a
                  href={CONTACT_INFO.justdialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-colors min-h-[36px]"
                >
                  <span className="px-1 py-0.5 rounded bg-black/10 text-[10px] font-black leading-none">
                    JD
                  </span>
                  <span>Justdial</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Location & Arena Hours */}
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm font-['Fredoka',sans-serif]">
                    Location &amp; Arena Hours
                  </h3>
                  <p className="text-[11px] text-slate-400">Open 7 days a week</p>
                </div>
              </div>

              <div className="space-y-2 mt-3 text-xs">
                <div className="p-2 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                  <span className="font-semibold text-slate-600">Monday – Sunday</span>
                  <span className="font-bold text-slate-900">11:00 AM – 9:00 PM</span>
                </div>
                <a
                  href={CONTACT_INFO.googleListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2.5 bg-rose-50/70 hover:bg-rose-50 rounded-xl border border-rose-200 transition-colors"
                >
                  <div className="flex items-start gap-1.5 text-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                    <span className="text-[11px] font-semibold leading-snug">
                      {CONTACT_INFO.address}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
              <a
                href={CONTACT_INFO.googleListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors min-h-[36px]"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open Google Maps Directions</span>
              </a>
              <div className="text-[10px] text-slate-500 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
                <span className="text-emerald-700 font-bold">✓ Cleaned every day</span>
                <span>•</span>
                <span className="text-violet-700 font-bold">✓ 24/7 CCTV</span>
                <span>•</span>
                <span>Free street parking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us Email Form */}
        <div className="bg-white rounded-3xl p-5 sm:p-8 border border-violet-200 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-['Fredoka',sans-serif]">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Have a question about walk-in play sessions, discounted family membership plans, or event bookings? Fill out the form below to email our team.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-violet-50/80 border border-violet-200 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 font-['Fredoka',sans-serif]">
                  Message ready to send
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1">
                  Your email client has been opened with your message. You can also click below to reopen the email or send it directly via WhatsApp.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 pt-1">
                <a
                  href={mailtoUrl}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Email App</span>
                </a>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Send on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-300 transition-colors"
                >
                  Edit Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={contactForm.name}
                    onChange={handleFormChange}
                    placeholder="e.g. Karthik Sharma"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={contactForm.phone}
                    onChange={handleFormChange}
                    placeholder="e.g. +91 97397 80837"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleFormChange}
                    placeholder="you@example.com"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Enquiry Topic
                  </label>
                  <select
                    name="topic"
                    value={contactForm.topic}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-slate-50/50"
                  >
                    <option value="General / Play Session Enquiry">General / Play Session Enquiry</option>
                    <option value="Discounted Membership Plans">Discounted Family &amp; Child Membership Plans</option>
                    <option value="Birthday Party & Event Venue">Birthday Party &amp; Event Venue</option>
                    <option value="School / Playgroup Visit">School / Playgroup Visit</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    required
                    value={contactForm.message}
                    onChange={handleFormChange}
                    placeholder="Tell us your question, preferred date, or membership interest..."
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                <p className="text-[11px] text-slate-500 text-center sm:text-left">
                  We usually respond within 2–4 hours during operating hours (11:00 AM – 9:00 PM).
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email Enquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
