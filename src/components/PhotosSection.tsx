import React, { useState, useEffect, useRef } from 'react';
import { PHOTOS } from '../data/siteData';
import { ChevronLeft, ChevronRight, Maximize2, X, Pause, Play, Sparkles } from 'lucide-react';

export const PhotosSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<typeof PHOTOS[0] | null>(null);
  
  // Touch swipe handling for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-play interval
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PHOTOS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PHOTOS.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentPhoto = PHOTOS[currentIndex];

  const features = [
    { label: 'Multi-Level Soft Slides', icon: '🛝' },
    { label: 'Trampoline Jump Zone', icon: '🤸' },
    { label: 'Sensory Ball Pit', icon: '🎈' },
    { label: 'Pretend Play Town', icon: '🛒' },
    { label: 'Toddler Soft Play', icon: '🧸' },
    { label: '100% Screen-Free', icon: '🏃' },
    { label: 'Daily Sanitized', icon: '🧼' },
    { label: 'Open 11 AM - 9 PM', icon: '⏰' },
  ];

  return (
    <section id="photos" className="py-8 sm:py-12 bg-slate-50/80 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Compact Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100/80 border border-violet-200 text-violet-800 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span>Interactive Play Arena Carousel</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
            Explore Slide &amp; Glide Play Zones
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Swipe or use controls to tour our soft-play slides, trampoline beds, sensory ball pits, and creative pretend play towns.
          </p>
        </div>

        {/* Features & Amenities Ticker / Carousel Badges */}
        <div className="mb-6 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center justify-center gap-2 min-w-max mx-auto px-2">
            {features.map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs"
              >
                <span>{feat.icon}</span>
                <span>{feat.label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Main Carousel Card */}
        <div 
          className="relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-md overflow-hidden"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Visual Display */}
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden bg-slate-900">
            {PHOTOS.map((photo, idx) => (
              <div
                key={photo.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient shade for crisp readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              </div>
            ))}

            {/* Top Bar inside image */}
            <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
              <span className="pointer-events-auto bg-white/90 backdrop-blur-md text-violet-900 font-extrabold text-[11px] sm:text-xs px-3 py-1 rounded-lg shadow-sm border border-violet-100">
                {currentPhoto.category}
              </span>
              
              <div className="flex items-center gap-1.5 pointer-events-auto">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 rounded-lg bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-colors text-xs flex items-center gap-1"
                  title={isPlaying ? 'Pause auto-play' : 'Resume auto-play'}
                  aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => setSelectedPhoto(currentPhoto)}
                  className="p-1.5 rounded-lg bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-colors"
                  title="Expand to Fullscreen"
                  aria-label="Expand image"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Carousel Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md backdrop-blur-sm transition-transform active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md backdrop-blur-sm transition-transform active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Caption Overlay on Bottom of Image */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-6 right-3 sm:right-6 z-20 text-white pointer-events-none">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-pink-300 bg-pink-950/60 px-2 py-0.5 rounded-md backdrop-blur-xs">
                  {currentIndex + 1} of {PHOTOS.length}
                </span>
                <h3 className="text-base sm:text-xl font-black font-['Fredoka',sans-serif] tracking-tight drop-shadow-md">
                  {currentPhoto.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 line-clamp-1 sm:line-clamp-2 max-w-2xl drop-shadow">
                {currentPhoto.description}
              </p>
            </div>
          </div>

          {/* Quick-Click Zone Pills Strip (Interactive selector) */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 w-full sm:w-auto">
              {PHOTOS.map((photo, idx) => (
                <button
                  key={photo.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    idx === currentIndex
                      ? 'bg-violet-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <span className="text-[10px] opacity-75">{idx + 1}</span>
                  <span>{photo.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
              {PHOTOS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'w-6 bg-violet-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox / Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="w-full max-h-[70vh] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-5">
              <span className="text-xs font-bold text-violet-600 uppercase tracking-wider">
                {selectedPhoto.category}
              </span>
              <h3 className="text-xl font-black text-slate-900 font-['Fredoka',sans-serif] mt-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
