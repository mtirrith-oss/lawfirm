import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, Share2 } from 'lucide-react';

import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-grey-low border-t border-grey-mid pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-xl font-bold font-serif uppercase tracking-[0.05em] text-on-surface">
                Krijger <span className="text-secondary font-normal">Cornelis</span>
              </span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm mb-12">
              {t('footer.about')}
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-on-surface mb-8">{t('footer.nav')}</h5>
              <ul className="space-y-4">
                {[t('nav.practiceAreas'), t('nav.professionals'), t('nav.presence'), t('nav.insights'), 'Careers'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors text-[13px] font-medium">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-on-surface mb-8">{t('footer.offices')}</h5>
              <ul className="space-y-4">
                {['Paris', 'Berlin', 'Amsterdam', 'London', 'Zurich', 'New York'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors text-[13px] font-medium">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-on-surface mb-8">{t('footer.legal')}</h5>
              <ul className="space-y-4">
                {['Privacy Policy', 'Terms of Service', 'Legal Notice', 'Cookie Settings'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors text-[13px] font-medium">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-grey-mid flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
            <div className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>{t('footer.secure')}</span>
          </div>
          
          <p className="text-on-surface-variant text-[11px] tracking-widest uppercase font-bold">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
