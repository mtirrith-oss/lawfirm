import { motion } from 'motion/react';
import { representativeMatters } from '../data/mockData';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

export default function RepresentativeMatters() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language || 'en') as 'en' | 'fr' | 'de';

  return (
    <section className="py-24 bg-on-surface text-surface relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="mb-16">
          <span className="text-secondary font-bold text-[11px] uppercase tracking-[0.2em] block mb-4">{t('matters.label')}</span>
          <h2 className="text-4xl font-serif">{t('matters.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {representativeMatters.map((matter, index) => (
            <motion.div
              key={matter.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-l border-white/10 pl-8"
            >
              {matter.value && (
                <div className="text-secondary font-bold text-2xl mb-4 font-serif">{matter.value}</div>
              )}
              <h3 className="text-xl font-serif mb-4 leading-tight">{matter.title[currentLang]}</h3>
              <p className="text-surface/60 text-sm leading-relaxed mb-6">
                {matter.description[currentLang]}
              </p>
              <div className="flex items-center gap-2 text-secondary text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:underline">
                {t('matters.viewDetails')} <ExternalLink className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
