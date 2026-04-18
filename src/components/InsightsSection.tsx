import { motion } from 'motion/react';
import { insights } from '../data/mockData';
import { useTranslation } from 'react-i18next';

export default function InsightsSection() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language || 'en') as 'en' | 'fr' | 'de';

  return (
    <section className="py-24 bg-surface border-t border-grey-mid">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <span className="text-on-surface-variant font-bold text-[11px] uppercase tracking-[0.2em] block mb-4">{t('insights.label')}</span>
            <h2 className="text-4xl font-serif mb-8">{t('insights.title')}</h2>
            <p className="text-on-surface-variant text-base leading-relaxed mb-12">
              {t('insights.subtitle')}
            </p>
            <button className="btn-outline">
              {t('insights.cta')}
            </button>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-sleek flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold">
                      {insight.location} | {insight.date}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-serif mb-6 leading-snug">
                    {insight.title[currentLang]}
                  </h4>
                  
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-10 line-clamp-2">
                    {insight.excerpt[currentLang]}
                  </p>
                </div>

                <button className="text-[11px] uppercase tracking-widest font-bold border-b border-on-surface pb-1 w-fit">
                  {t('insights.readMore')}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
