/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import LawyerDirectory from './components/LawyerDirectory';
import InsightsSection from './components/InsightsSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function HomePage() {
  return (
    <main>
      <Hero />
      
      {/* Client Logos / Trust Signals */}
      <section className="bg-surface border-y border-grey-mid py-12">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-wrap justify-between items-center gap-12 opacity-60">
            {['FORTUNE 500', 'GLOBAL WEALTH', 'LEX MUNDI', 'CHAMBERS TOP', 'EU REGISTRY'].map(logo => (
              <span key={logo} className="text-xl font-serif tracking-[0.1em]">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      <PracticeAreas />
      <LawyerDirectory />
      <InsightsSection />
    </main>
  );
}

function LanguageWrapper() {
  const { lng } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const supportedLngs = ['en', 'fr', 'de'];

  useEffect(() => {
    if (lng && supportedLngs.includes(lng)) {
      if (i18n.language !== lng) {
        i18n.changeLanguage(lng);
      }
    } else {
      // If no valid language in path, use detection or fallback
      const detectedLng = i18n.language?.split('-')[0] || 'en';
      const targetLng = supportedLngs.includes(detectedLng) ? detectedLng : 'en';
      navigate(`/${targetLng}${location.pathname === '/' ? '' : location.pathname}`, { replace: true });
    }
  }, [lng, i18n, navigate, location.pathname]);

  if (!lng || !supportedLngs.includes(lng)) return null;

  return (
    <>
      <Helmet>
        <html lang={lng} />
        <link rel="alternate" hrefLang="en" href={`${window.location.origin}/en`} />
        <link rel="alternate" hrefLang="fr" href={`${window.location.origin}/fr`} />
        <link rel="alternate" hrefLang="de" href={`${window.location.origin}/de`} />
        <link rel="alternate" hrefLang="x-default" href={`${window.location.origin}/en`} />
      </Helmet>
      <HomePage />
    </>
  );
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsBookingOpen(true);
    window.addEventListener('open-booking', handleOpen);
    return () => window.removeEventListener('open-booking', handleOpen);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-surface">
          <Navbar />
          
          <Routes>
            <Route path="/:lng" element={<LanguageWrapper />} />
            <Route path="/" element={<Navigate to={`/${localStorage.getItem('i18nextLng') || 'en'}`} replace />} />
            <Route path="*" element={<Navigate to="/en" replace />} />
          </Routes>

          <Footer />
          <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
          
          <script dangerouslySetInnerHTML={{ __html: `
            window.openBooking = () => { window.dispatchEvent(new CustomEvent('open-booking')); }
          ` }} />
        </div>
      </Router>
    </HelmetProvider>
  );
}

