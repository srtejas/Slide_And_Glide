import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroAbout } from './components/HeroAbout';
import { ServicesAndParties } from './components/ServicesAndParties';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PhotosSection } from './components/PhotosSection';
import { FaqSection } from './components/FaqSection';
import { GoogleLocationReviews } from './components/GoogleLocationReviews';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BlogSection } from './components/BlogSection';
import { PlaytimeToolsSection } from './components/PlaytimeToolsSection';
import { BLOG_POSTS } from './data/blogData';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<{
    page: 'home' | 'blog';
    slug?: string | null;
  }>({
    page: 'home',
    slug: null,
  });

  // Listen to hash changes for robust client-side routing & deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#blog')) {
        const parts = hash.split('/');
        const slug = parts[1] ? decodeURIComponent(parts[1]) : null;
        setCurrentRoute({ page: 'blog', slug });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentRoute({ page: 'home', slug: null });
      }
    };

    // Initial check on page load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update dynamic meta titles when viewing blog articles
  useEffect(() => {
    if (currentRoute.page === 'blog') {
      if (currentRoute.slug) {
        const post = BLOG_POSTS.find((p) => p.slug === currentRoute.slug);
        if (post) {
          document.title = `${post.metaTitle} | Slide & Glide`;
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) {
            metaDesc.setAttribute('content', post.metaDescription);
          }
          return;
        }
      }
      document.title = 'Parenting & Play Blog | Slide & Glide Nagarabhavi, Bangalore';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Explore expert parenting tips, child development insights, safety guidelines, and birthday party guides from Slide & Glide in Nagarabhavi.'
        );
      }
    } else {
      document.title = 'Indoor Kids Play Area in Nagarabhavi | Slide & Glide';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Visit Slide & Glide, an indoor kids play area and birthday party venue in Nagarabhavi, Bengaluru. Play sessions starting from 249 onwards. CCTV monitored and cleaned every day.'
        );
      }
    }

    // Google tag SPA page view tracking
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname + window.location.hash,
      });
    }
  }, [currentRoute]);

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentRoute({ page: 'home', slug: null });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToBlog = (slug?: string) => {
    if (slug) {
      window.location.hash = `#blog/${slug}`;
      setCurrentRoute({ page: 'blog', slug });
    } else {
      window.location.hash = '#blog';
      setCurrentRoute({ page: 'blog', slug: null });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    if (currentRoute.page !== 'home') {
      window.location.hash = `#${id}`;
      setCurrentRoute({ page: 'home', slug: null });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-violet-100 selection:text-violet-900">
      <Navbar />

      {currentRoute.page === 'blog' ? (
        <main>
          <BlogSection
            currentSlug={currentRoute.slug}
            onNavigateHome={navigateToHome}
            onSelectPost={(slug) => navigateToBlog(slug)}
            onOpenPricing={() => scrollToSection('pricing')}
            onOpenBirthdays={() => scrollToSection('birthdays')}
          />
        </main>
      ) : (
        <main>
          <HeroAbout />
          <ServicesAndParties />
          <WhyChooseUs />
          <PhotosSection />
          <PlaytimeToolsSection />
          {/* Featured Blog Preview Section on Home Page */}
          <section id="blog" className="py-20 bg-slate-50 border-t border-b border-slate-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                <div>
                  <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                    Parenting &amp; Child Play Insights
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
                    Expert Guides for Active &amp; Screen-Free Kids
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                    Discover how purposeful indoor play builds motor skills, emotional resilience, and lifelong friendships—backed by child development insights.
                  </p>
                </div>
                <button
                  onClick={() => navigateToBlog()}
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-violet-700 bg-white hover:bg-violet-50 border border-violet-200 px-5 py-3 rounded-2xl shadow-xs transition-colors shrink-0 self-start md:self-auto"
                >
                  View All Blog Articles
                  <span className="text-base leading-none">→</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {BLOG_POSTS.slice(0, 3).map((post) => (
                  <div
                    key={post.slug}
                    onClick={() => navigateToBlog(post.slug)}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-800 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md shadow-xs">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="text-[11px] text-slate-400 font-medium mb-1">
                          {post.readingTime} • {post.publishedDate}
                        </div>
                        <h3 className="text-base font-bold text-slate-900 font-['Fredoka',sans-serif] group-hover:text-violet-600 transition-colors line-clamp-2 leading-snug mb-2">
                          {post.title}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                    <div className="p-5 pt-0 text-xs font-bold text-violet-600 flex items-center justify-between border-t border-slate-50 mt-2">
                      <span>Read Guide</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <FaqSection />
          <GoogleLocationReviews />
          <ContactSection />
        </main>
      )}

      <Footer />
    </div>
  );
}
