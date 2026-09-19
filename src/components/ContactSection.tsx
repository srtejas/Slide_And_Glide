import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Navigation, ExternalLink, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

export const ContactSection: React.FC = () => {
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
            For walk-in entry inquiries, birthday party reservations, or school trips, reach out to our team directly.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Phone & WhatsApp */}
          <div className="p-6 rounded-2xl border-2 border-violet-100 bg-violet-50/40 flex flex-col justify-between hover:border-violet-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center mb-4 shadow-sm shadow-violet-200">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base font-['Fredoka',sans-serif]">
                Phone &amp; WhatsApp
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Direct inquiries &amp; party bookings in India
              </p>
              
              <div className="mt-4">
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="text-base font-extrabold text-slate-900 hover:text-violet-600 transition-colors block"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-violet-100 flex flex-col gap-2">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-violet-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="w-full py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>Direct Call</span>
              </a>
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
                Official inquiries &amp; feedback
              </p>
              
              <div className="mt-4">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm font-bold text-slate-900 hover:text-violet-600 break-all transition-colors block"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Slide%20%26%20Glide%20Inquiry`}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Card 3: Google Location */}
          <div className="p-6 rounded-2xl border-2 border-slate-100 bg-slate-50/60 flex flex-col justify-between hover:border-violet-200 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-sm shadow-emerald-200">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base font-['Fredoka',sans-serif]">
                Google Location
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Find us on Google Maps
              </p>
              
              <p className="mt-4 text-xs text-slate-600 leading-relaxed font-semibold">
                Click below to get turn-by-turn navigation directly to our arena location.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <a
                href={CONTACT_INFO.googleListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-violet-200 transition-colors"
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
