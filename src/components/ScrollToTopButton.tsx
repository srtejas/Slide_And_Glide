import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleScrollUp}
      aria-label="Scroll to top"
      title="Back to top"
      className="fixed bottom-20 sm:bottom-20 right-3 sm:right-5 z-40 w-11 h-11 rounded-full bg-slate-900/95 hover:bg-violet-700 text-white shadow-lg shadow-slate-900/25 border border-white/20 flex items-center justify-center active:scale-95 transition-all"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
