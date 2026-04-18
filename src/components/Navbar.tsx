import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gavel, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.professionals'), path: '/' },
    { name: t('nav.practiceAreas'), path: '/practice-areas' },
    { name: t('nav.insights'), path: '/insights' },
    { name: t('nav.presence'), path: '/offices' },
    { name: t('nav.about'), path: '/about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-surface border-b border-grey-mid ${isScrolled ? 'py-3 shadow-sm' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-xl font-bold font-serif uppercase tracking-[0.05em] text-on-surface">
            Krijger <span className="text-secondary font-normal">Cornelis</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[13px] uppercase tracking-[0.02em] font-semibold transition-all hover:text-secondary ${
                location.pathname === link.path ? 'text-secondary' : 'text-on-surface'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
            className="hidden sm:block btn-outline"
          >
            {t('nav.contact')}
          </button>
          <button 
            className="lg:hidden p-2 text-on-surface"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>


      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-surface flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-2xl font-bold font-serif">Krijger Cornelis</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-serif font-bold text-on-surface hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('open-booking'));
                }}
                className="w-full bg-secondary text-surface py-5 rounded-md font-bold uppercase tracking-widest"
              >
                {t('nav.contact')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
