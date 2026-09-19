import React from 'react';
import { Star, MessageSquarePlus, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, CONTACT_INFO } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-100/70 px-3 py-1 rounded-full">
            Parent Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Fredoka',sans-serif] mt-2">
            What Parents Say About Us
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Real experiences from families who love our slides, trampolines, pretend village, and birthday party celebrations.
          </p>
        </div>

        {/* 3 Clean Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-violet-200 transition-colors"
            >
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 font-['Fredoka',sans-serif]">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-slate-500">{t.role}</p>
                </div>
                <span className="text-[10px] text-violet-600 font-semibold bg-violet-50 px-2 py-0.5 rounded-md">
                  {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to write a review */}
        <div className="mt-10 text-center">
          <a
            href={CONTACT_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-violet-200 transition-all"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Visited Slide &amp; Glide? Add a Google Review</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
