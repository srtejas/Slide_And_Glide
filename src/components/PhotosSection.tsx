import React, { useState } from 'react';
import { PHOTOS } from '../data/siteData';
import { Sparkles, Maximize2, X } from 'lucide-react';

export const PhotosSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof PHOTOS[0] | null>(null);

  return (
    <section id="photos" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-100/70 px-3 py-1 rounded-full">
            Play Arena Gallery
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Fredoka',sans-serif] mt-2">
            Photos of Slide &amp; Glide
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Take a look inside our vibrant play zones, soft-play structures, trampoline, pretend play village, and birthday celebration rooms.
          </p>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-violet-300 transition-all flex flex-col"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-violet-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-xl bg-white/90 text-violet-900 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-violet-900 font-extrabold text-[11px] px-2.5 py-0.5 rounded-lg shadow-xs">
                  {photo.category}
                </span>
              </div>

              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-bold text-slate-900 text-base font-['Fredoka',sans-serif]">
                    {photo.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="w-full max-h-[70vh] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-6">
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
