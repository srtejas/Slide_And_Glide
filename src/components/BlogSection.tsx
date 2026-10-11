import React, { useState } from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/blogData';
import { CONTACT_INFO, IMAGES } from '../data/siteData';
import {
  Calendar,
  Clock,
  ChevronRight,
  ArrowLeft,
  Share2,
  CheckCircle2,
  Tag,
  Phone,
  MessageCircle,
  HelpCircle,
  Search,
  BookOpen,
  Sparkles,
  MapPin,
  Check
} from 'lucide-react';

interface BlogProps {
  currentSlug?: string | null;
  onNavigateHome: () => void;
  onSelectPost: (slug: string) => void;
  onOpenPricing: () => void;
  onOpenBirthdays: () => void;
}

export const BlogSection: React.FC<BlogProps> = ({
  currentSlug,
  onNavigateHome,
  onSelectPost,
  onOpenPricing,
  onOpenBirthdays,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);

  const activePost = currentSlug
    ? BLOG_POSTS.find((p) => p.slug === currentSlug) || null
    : null;

  const categories = ['All', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.targetKeyword.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // If viewing an individual blog post
  if (activePost) {
    return (
      <article className="min-h-screen bg-slate-50 pt-20 pb-24 text-slate-800">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
            <button
              onClick={onNavigateHome}
              className="hover:text-violet-600 transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button
              onClick={() => onSelectPost('')}
              className="hover:text-violet-600 transition-colors"
            >
              Parent Parenting &amp; Play Blog
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md">
              {activePost.title}
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
          {/* Back button */}
          <button
            onClick={() => onSelectPost('')}
            className="inline-flex items-center gap-2 text-xs font-bold text-violet-700 hover:text-violet-900 bg-violet-100/70 hover:bg-violet-100 px-3 py-1.5 rounded-lg mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to All Blog Articles
          </button>

          {/* Post Header */}
          <header className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-bold">
              <span className="bg-violet-600 text-white px-3 py-1 rounded-full uppercase tracking-wider text-[10px]">
                {activePost.category}
              </span>
              <span className="flex items-center gap-1 text-slate-500">
                <Calendar className="w-3.5 h-3.5" />
                {activePost.publishedDate}
              </span>
              <span className="flex items-center gap-1 text-slate-500">
                <Clock className="w-3.5 h-3.5" />
                {activePost.readingTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Fredoka',sans-serif] leading-tight mb-4">
              {activePost.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-6">
              {activePost.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src={IMAGES.logo}
                  alt="Slide & Glide Team"
                  className="w-10 h-10 rounded-full object-contain bg-violet-50 p-1 border border-violet-200"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Slide &amp; Glide Play Team
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Play Specialists • Nagarabhavi, Bangalore
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition-colors"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share Post</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden mb-10 shadow-sm border border-slate-200 max-h-[460px]">
            <img
              src={activePost.coverImage}
              alt={activePost.title}
              className="w-full h-full object-cover max-h-[460px]"
            />
          </div>

          {/* Article Body */}
          <main className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs mb-10 space-y-8">
            {/* Introduction */}
            <div className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal border-l-4 border-violet-600 pl-4 py-1 italic bg-violet-50/50 rounded-r-xl">
              {activePost.intro}
            </div>

            {/* Content Sections */}
            {activePost.sections.map((section, idx) => (
              <section key={idx} className="space-y-4 pt-4 border-t border-slate-100 first:border-t-0 first:pt-0">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-['Fredoka',sans-serif] tracking-tight">
                  {section.heading}
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {section.content}
                </p>

                {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                  <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 sm:p-5 mt-4">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-amber-900 uppercase tracking-wider mb-2.5">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      Key Highlights for Parents
                    </div>
                    <ul className="space-y-2">
                      {section.keyTakeaways.map((takeaway, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}

            {/* Target Keywords / SEO meta tags pills */}
            <div className="pt-6 border-t border-slate-100">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-violet-500" />
                Related Topics &amp; Focus Keywords
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-bold bg-violet-100 text-violet-800 px-3 py-1 rounded-full">
                  #{activePost.targetKeyword}
                </span>
                {activePost.relatedKeywords.map((kw, kwIdx) => (
                  <span
                    key={kwIdx}
                    className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* In-Article Frequently Asked Questions */}
            {activePost.faq && activePost.faq.length > 0 && (
              <div className="pt-8 border-t border-slate-200">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-['Fredoka',sans-serif] mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-violet-600" />
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {activePost.faq.map((faqItem, fIdx) => (
                    <div
                      key={fIdx}
                      className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5"
                    >
                      <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-2">
                        {faqItem.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faqItem.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Call to Action Card inside post */}
            <div className="bg-linear-to-r from-violet-600 to-indigo-700 text-white rounded-3xl p-6 sm:p-8 mt-10 shadow-md">
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-wider uppercase text-violet-200 mb-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                Plan Your Child's Visit to Nagarabhavi
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-['Fredoka',sans-serif] leading-snug mb-3">
                {activePost.ctaText || 'Experience Clean, Safe & Joyful Play at Slide & Glide!'}
              </h3>
              <p className="text-xs sm:text-sm text-violet-100 leading-relaxed max-w-2xl mb-6">
                Located at S N Arcade, 3rd Floor, above Bakasura Bandi in Annapoorneshwari Nagar, Nagarabhavi. Open daily from 11:00 AM to 9:00 PM with passes starting for walk-ins and tailored birthday party packages.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    onNavigateHome();
                    setTimeout(() => onOpenPricing(), 100);
                  }}
                  className="bg-white text-violet-700 hover:bg-violet-50 text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-xl shadow-xs transition-colors"
                >
                  View Play Pricing &amp; Passes
                </button>
                <button
                  onClick={() => {
                    onNavigateHome();
                    setTimeout(() => onOpenBirthdays(), 100);
                  }}
                  className="bg-amber-400 text-slate-900 hover:bg-amber-300 text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-xl shadow-xs transition-colors"
                >
                  Book Birthday Party
                </button>
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 bg-violet-800/80 hover:bg-violet-900 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl border border-violet-400/30 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-violet-300" />
                  Call {CONTACT_INFO.phone1}
                </a>
              </div>
            </div>
          </main>

          {/* Related Articles Carousel */}
          <div className="pt-6">
            <h3 className="text-xl font-black text-slate-900 font-['Fredoka',sans-serif] mb-6">
              More Articles from Our Parenting &amp; Play Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BLOG_POSTS.filter((p) => p.slug !== activePost.slug)
                .slice(0, 2)
                .map((related) => (
                  <div
                    key={related.slug}
                    onClick={() => {
                      onSelectPost(related.slug);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-40 overflow-hidden">
                        <img
                          src={related.coverImage}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-[10px] font-extrabold text-violet-600 uppercase tracking-wider bg-violet-50 px-2.5 py-1 rounded-full">
                          {related.category}
                        </span>
                        <h4 className="text-base font-bold text-slate-900 font-['Fredoka',sans-serif] mt-2 group-hover:text-violet-600 transition-colors line-clamp-2">
                          {related.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                          {related.excerpt}
                        </p>
                      </div>
                    </div>
                    <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-bold text-violet-600">
                      <span>Read Full Article</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Blog Directory / Listing Page
  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24 text-slate-800">
      {/* Blog Hero Banner */}
      <section className="bg-linear-to-b from-violet-900 via-indigo-900 to-slate-900 text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-400/30 text-violet-200 text-xs font-bold px-3.5 py-1.5 rounded-full mb-4">
            <BookOpen className="w-3.5 h-3.5 text-violet-300" />
            Slide &amp; Glide Parenting &amp; Play Blog
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-['Fredoka',sans-serif] tracking-tight leading-tight mb-4">
            Insights on Active Play, Child Development &amp; Family Fun
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Expert parent guides, safety tips, screen-free development insights, and kids birthday planning secrets from the leading indoor play arena in Nagarabhavi, Bangalore.
          </p>

          {/* Search bar inside Hero */}
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search topics: child development, safety, birthday parties, screen-free..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm pl-11 pr-4 py-3.5 rounded-2xl shadow-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* Main Listing Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-violet-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs font-medium text-slate-500">
            Showing <span className="font-bold text-slate-900">{filteredPosts.length}</span> articles
          </div>
        </div>

        {/* Featured Post Card (1st item) */}
        {filteredPosts.length > 0 && selectedCategory === 'All' && !searchQuery && (
          <div
            onClick={() => {
              onSelectPost(filteredPosts[0].slug);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer group grid grid-cols-1 lg:grid-cols-12 mb-10"
          >
            <div className="lg:col-span-7 h-64 sm:h-80 lg:h-auto overflow-hidden relative">
              <img
                src={filteredPosts[0].coverImage}
                alt={filteredPosts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-violet-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                Featured Guide
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold mb-3">
                  <span className="bg-violet-50 text-violet-700 font-extrabold px-2.5 py-1 rounded-full text-[10px] uppercase">
                    {filteredPosts[0].category}
                  </span>
                  <span>{filteredPosts[0].readingTime}</span>
                  <span>•</span>
                  <span>{filteredPosts[0].publishedDate}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-['Fredoka',sans-serif] group-hover:text-violet-600 transition-colors leading-snug mb-3">
                  {filteredPosts[0].title}
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {filteredPosts[0].excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {filteredPosts[0].relatedKeywords.slice(0, 3).map((kw, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-violet-600 group-hover:underline">
                  Read Full Comprehensive Guide
                </span>
                <ChevronRight className="w-4 h-4 text-violet-600 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </div>
        )}

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(selectedCategory === 'All' && !searchQuery
            ? filteredPosts.slice(1)
            : filteredPosts
          ).map((post) => (
            <div
              key={post.slug}
              onClick={() => {
                onSelectPost(post.slug);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md shadow-xs">
                    {post.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-semibold mb-2">
                    <span>{post.publishedDate}</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-['Fredoka',sans-serif] group-hover:text-violet-600 transition-colors line-clamp-2 leading-snug mb-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    <span className="text-[10px] font-semibold bg-violet-50 text-violet-700 px-2 py-0.5 rounded-md">
                      #{post.targetKeyword}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-violet-600 border-t border-slate-50 mt-2">
                <span>Read Article</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Result */}
        {filteredPosts.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-md mx-auto my-12">
            <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              No matching articles found
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Try adjusting your search terms or select another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-bold bg-violet-600 text-white px-4 py-2 rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Nagarabhavi Local SEO Banner */}
        <div className="bg-white border border-violet-100 rounded-3xl p-6 sm:p-8 mt-14 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900 font-['Fredoka',sans-serif]">
                Looking for the Best Indoor Kids Play Area in Nagarabhavi?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Slide &amp; Glide is open daily 11:00 AM – 9:00 PM at S N Arcade, 3rd Floor, Annapoorneshwari Nagar. Walk-ins welcomed anytime with free street parking and parent lounges!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Us
            </a>
            <button
              onClick={onNavigateHome}
              className="text-xs font-bold text-violet-700 bg-violet-50 hover:bg-violet-100 border border-violet-200 px-4 py-2.5 rounded-xl transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
