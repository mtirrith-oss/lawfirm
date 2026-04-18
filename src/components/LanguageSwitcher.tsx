import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';

const languages = [
  { code: 'en', name: 'English', flag: 'EN' },
  { code: 'fr', name: 'Français', flag: 'FR' },
  { code: 'de', name: 'Deutsch', flag: 'DE' }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const currentLanguage = languages.find(l => l.code === i18n.language) || languages[0];

  const toggleLanguage = (code: string) => {
    const newPath = location.pathname === '/' || location.pathname === '' 
      ? `/${code}` 
      : location.pathname.replace(/^\/[a-z]{2}/, `/${code}`);
    navigate(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 text-on-surface-variant hover:text-secondary transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="text-[11px] font-bold tracking-widest uppercase">{currentLanguage.flag}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute right-0 mt-2 w-40 bg-white border border-grey-mid shadow-2xl z-50 rounded-sm overflow-hidden"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => toggleLanguage(lang.code)}
                  className={`w-full text-left px-4 py-3 text-[11px] font-bold uppercase tracking-widest transition-colors hover:bg-grey-low ${
                    i18n.language === lang.code ? 'text-secondary bg-grey-low' : 'text-on-surface'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
