import { motion } from 'motion/react';
import { Briefcase, Gavel, Handshake, DollarSign, FileText, Zap, Shield } from 'lucide-react';
import { practiceAreas } from '../data/mockData';
import { useTranslation } from 'react-i18next';

const iconMap = {
  Briefcase: Briefcase,
  Gavel: Gavel,
  Handshake: Handshake,
  DollarSign: DollarSign,
  FileText: FileText,
  Zap: Zap,
  Shield: Shield,
};

export default function PracticeAreas() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language || 'en') as 'en' | 'fr' | 'de';

  return (
    <section className="py-24 bg-surface border-t border-grey-mid">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <span className="text-on-surface-variant font-bold text-[11px] uppercase tracking-[0.2em] block mb-4">{t('practice.label')}</span>
            <h2 className="text-4xl font-serif">{t('practice.title')}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area, index) => {
            const Icon = iconMap[area.icon as keyof typeof iconMap] || Briefcase;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-sleek flex flex-col justify-between min-h-[300px]"
              >
                <div>
                  <div className="text-secondary mb-8">
                    <Icon className="w-8 h-8 stroke-1" />
                  </div>
                  <h3 className="text-xl font-serif mb-4">{area.title[currentLang]}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {area.description[currentLang]}
                  </p>
                </div>

                <div className="mt-8">
                  <span className="text-[11px] uppercase tracking-widest font-bold border-b border-on-surface pb-1">{t('practice.details')}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

  );
}
