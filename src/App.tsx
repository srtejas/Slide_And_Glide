import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroAbout } from './components/HeroAbout';
import { ServicesAndParties } from './components/ServicesAndParties';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PhotosSection } from './components/PhotosSection';
import { FaqSection } from './components/FaqSection';
import { GoogleLocationReviews } from './components/GoogleLocationReviews';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-violet-100 selection:text-violet-900">
      <Navbar />
      <main>
        <HeroAbout />
        <ServicesAndParties />
        <WhyChooseUs />
        <PhotosSection />
        <FaqSection />
        <GoogleLocationReviews />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
