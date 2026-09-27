import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Heart, Sparkles, ChevronDown, ChevronUp, Users, Brain, Activity } from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../data/siteData';

export const HeroAbout: React.FC = () => {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section id="about" className="bg-white pt-6 pb-8 sm:pt-8 sm:pb-10 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Brand Header with Mascot Logo */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-2 mb-3 bg-violet-50 rounded-2xl border border-violet-100 shadow-xs">
            <img
              src={IMAGES.logo}
              alt="Slide & Glide Mascot Logo - Jump, Play & Celebrate!"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-sm hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex items-center justify-center gap-1.5 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>Bangalore's Premier Indoor Children’s Play Arena &amp; Event Venue</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-['Fredoka',sans-serif]">
            Slide <span className="text-violet-600">&amp;</span> Glide
          </h1>
          
          <p className="mt-1 text-base sm:text-xl font-black text-violet-600 uppercase tracking-wide font-['Fredoka',sans-serif]">
            Jump, Play &amp; Celebrate!
          </p>

          {/* About Context - Minimalist & focused */}
          <div className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            <p>
              <strong>Slide &amp; Glide</strong> is designed for kids to <strong>jump, play, dance, and celebrate</strong> in a safe, vibrant, and engaging environment. Featuring soft-play structures, trampolines, sensory ball pits, and private party spaces for everyday play, birthday parties, and family gatherings.
            </p>
          </div>

          {/* 4 Developmental Pillars - Ultra Compact Row */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl mx-auto text-left">
            <div className="p-2.5 rounded-xl bg-violet-50/70 border border-violet-100 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-violet-600 text-white flex items-center justify-center shrink-0">
                <Activity className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-900 truncate">Motor Skills</h4>
                <p className="text-[10px] text-slate-500 truncate">Agility &amp; climb</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-pink-50/70 border border-pink-100 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-pink-600 text-white flex items-center justify-center shrink-0">
                <Brain className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-900 truncate">Reflexes</h4>
                <p className="text-[10px] text-slate-500 truncate">Hand-eye balance</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-900 truncate">Sensory</h4>
                <p className="text-[10px] text-slate-500 truncate">Shapes &amp; sizes</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Users className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-900 truncate">Friendships</h4>
                <p className="text-[10px] text-slate-500 truncate">Social bonding</p>
              </div>
            </div>
          </div>

          {/* Quick Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 hover:from-violet-700 hover:to-pink-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md transition-all min-h-[40px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${CONTACT_INFO.phone1Raw}`}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors min-h-[40px]"
            >
              <Phone className="w-4 h-4" />
              <span>Call: 9739780837</span>
            </a>

            <a
              href={CONTACT_INFO.googleListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-violet-50 hover:bg-violet-100 text-violet-800 font-bold text-xs sm:text-sm border border-violet-200 flex items-center justify-center gap-1.5 transition-colors min-h-[40px]"
            >
              <MapPin className="w-4 h-4 text-violet-600" />
              <span>Google Directions</span>
            </a>
          </div>

        </div>

        {/* Minimalist Story & Purpose Accordion Card */}
        <div className="mt-8 bg-gradient-to-br from-violet-50/60 via-white to-pink-50/30 rounded-2xl p-4 sm:p-5 border border-violet-100 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-pink-600 text-white flex items-center justify-center shrink-0">
                <Heart className="w-3.5 h-3.5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 font-['Fredoka',sans-serif]">
                  Why We Started Slide &amp; Glide
                </h3>
                <p className="text-xs text-slate-500">
                  Founded by Bangalore parents to inspire active, 100% screen-free physical fun.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowFullStory(!showFullStory)}
              className="inline-flex items-center gap-1 text-xs font-bold text-violet-700 hover:text-violet-900 bg-white/80 hover:bg-white px-2.5 py-1 rounded-lg border border-violet-200 transition-colors self-start sm:self-auto shrink-0"
            >
              <span>{showFullStory ? 'Close story' : 'Read full story'}</span>
              {showFullStory ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Collapsible Story Body */}
          {showFullStory && (
            <div className="mt-3 pt-3 border-t border-violet-100 text-xs sm:text-sm text-slate-600 space-y-2.5 leading-relaxed">
              <p>
                As parents raising children in Bangalore, we watched our kids spending more time on phones, tablets, and TV screens. Between city traffic and unpredictable weather, finding a clean, active space where children could run, climb, and laugh without worry was nearly impossible.
              </p>
              <p>
                We founded <strong>Slide &amp; Glide</strong> to change that: a vibrant indoor arena where kids disconnect from screens and reconnect with pure joy—jumping high on trampolines, exploring multi-tiered slides, diving into sensory ball pits, and making lifelong friendships.
              </p>
              <p>
                Every corner is crafted with a parent’s eye for safety: hospital-grade cleanliness, rounded soft foam padding, and trained attendants.
              </p>
            </div>
          )}

          {/* 3 Core Highlights in compact format */}
          <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-violet-100">
            <div className="bg-white rounded-xl p-2 border border-violet-100 flex items-center gap-2">
              <span className="text-base">🏃‍♂️</span>
              <div className="min-w-0">
                <span className="text-xs font-bold text-slate-900 block truncate">100% Screen-Free</span>
                <span className="text-[10px] text-slate-500 block truncate">Active physical movement</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-2 border border-pink-100 flex items-center gap-2">
              <span className="text-base">🛡️</span>
              <div className="min-w-0">
                <span className="text-xs font-bold text-slate-900 block truncate">Hospital-Grade Safety</span>
                <span className="text-[10px] text-slate-500 block truncate">Sanitized soft-play foam</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-2 border border-amber-100 flex items-center gap-2">
              <span className="text-base">🎂</span>
              <div className="min-w-0">
                <span className="text-xs font-bold text-slate-900 block truncate">Birthday Parties</span>
                <span className="text-[10px] text-slate-500 block truncate">Hassle-free celebrations</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
