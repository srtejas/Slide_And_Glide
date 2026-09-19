import React from 'react';
import { MessageCircle, Phone, MapPin, Heart, Sparkles, Star, Users, Brain, Activity } from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../data/siteData';

export const HeroAbout: React.FC = () => {
  return (
    <section id="about" className="bg-white py-8 sm:py-14 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Animated Play Area Banner Image */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-violet-100 shadow-lg shadow-violet-100/50 bg-violet-50 mb-8 sm:mb-12">
          <img
            src={IMAGES.banner}
            alt="Slide & Glide Animated Play Area - Indoor Children Play Arena"
            className="w-full h-auto min-h-[190px] max-h-[480px] object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-violet-100 shadow-md flex items-center gap-1.5 text-xs font-bold text-violet-900 z-10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Open in Bangalore</span>
          </div>
        </div>

        {/* Brand Heading & Tagline */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span>Premier Indoor Children’s Play Arena &amp; Event Venue</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-['Fredoka',sans-serif]">
            Slide <span className="text-violet-600">&amp;</span> Glide
          </h1>
          
          <p className="mt-1.5 text-lg sm:text-2xl font-black text-violet-600 uppercase tracking-wide font-['Fredoka',sans-serif]">
            Jump, Play &amp; Celebrate!
          </p>

          {/* About Context - Exact user specifications */}
          <div className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed space-y-4 text-left sm:text-center">
            <p>
              <strong>Slide &amp; Glide</strong> is a premier indoor children’s play arena and event venue designed for kids to <strong>jump, play, dance, and celebrate</strong>. Featuring vibrant play zones, soft-play structures, trampoline, interactive ball pits, and dedicated party spaces, it offers a safe, fun, and engaging environment for everyday recreation, birthday parties, and family gatherings.
            </p>
            <p className="text-sm sm:text-base text-slate-500">
              This facility helps kids develop <strong>motor skills</strong>, <strong>hand-eye coordination</strong>, and <strong>stimuli to different shapes and sizes</strong>. It is also a place to make friendship and bond at a very young age.
            </p>
          </div>

          {/* 4 Developmental Pillars Pills */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="p-3.5 rounded-2xl bg-violet-50/70 border border-violet-100 flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Motor Skills</h4>
                <p className="text-[11px] text-slate-500">Climbing &amp; agility</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-pink-50/70 border border-pink-100 flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-pink-600 text-white flex items-center justify-center shrink-0">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Hand-Eye Focus</h4>
                <p className="text-[11px] text-slate-500">Reflexes &amp; balance</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-100 flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Shapes &amp; Sizes</h4>
                <p className="text-[11px] text-slate-500">Sensory exploration</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Early Friendships</h4>
                <p className="text-[11px] text-slate-500">Social bonding</p>
              </div>
            </div>
          </div>

          {/* Quick Action CTAs themed in Animated Play Area Violet */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 hover:from-violet-700 hover:via-purple-700 hover:to-pink-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-violet-200 hover:shadow-lg transition-all min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors min-h-[44px]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>

            <a
              href={CONTACT_INFO.googleListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-violet-50 hover:bg-violet-100 text-violet-800 font-bold text-sm border border-violet-200 flex items-center justify-center gap-2 transition-colors"
            >
              <MapPin className="w-4 h-4 text-violet-600" />
              <span>Google Location</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
