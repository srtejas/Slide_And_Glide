import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { SEO_FAQ_ITEMS, CONTACT_INFO } from '../data/siteData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-8 sm:py-12 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100/90 border border-violet-200 text-violet-800 text-xs font-bold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-violet-600" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
            Kids Activities in Nagarabhavi: Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Quick answers about our location in Nagarbhavi, age suitability (1–10 years), party inquiries, socks requirement, free street parking, and timings.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {SEO_FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-violet-300 bg-violet-50/40 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 font-['Fredoka',sans-serif]">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg transition-transform ${isOpen ? 'bg-violet-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-violet-100/80 mt-1">
                    <p className="pt-2">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Card */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-violet-50 to-pink-50 border border-violet-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-bold text-slate-900 font-['Fredoka',sans-serif]">
              Have a specific question about your visit or entry timings?
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Our team is ready to help you plan the best weekend or weekday play experience in Nagarabhavi.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone1Raw}`}
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-200 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-violet-600" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
