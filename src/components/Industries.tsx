import { motion } from 'motion/react';
import { Landmark, Cpu, Radio, Stethoscope } from 'lucide-react';
import { industries } from '../data/mockData';
import { useTranslation } from 'react-i18next';

const iconMap = {
  Landmark: Landmark,
  Cpu: Cpu,
  Radio: Radio,
  Stethoscope: Stethoscope,
};

export default function Industries() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language || 'en') as 'en' | 'fr' | 'de';

  return (
    <section className="py-24 bg-surface-variant/5 border-b border-grey-mid">
      <div className="max-w-7xl mx-auto px-10">
        <div className="mb-16">
          <span className="text-secondary font-bold text-[11px] uppercase tracking-[0.2em] block mb-4">{t('sectors.label')}</span>
          <h2 className="text-4xl font-serif">{t('sectors.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap] || Cpu;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="mb-6 p-4 bg-surface rounded-sm border border-grey-mid inline-block group-hover:border-secondary transition-colors">
                  <Icon className="w-6 h-6 text-on-surface" />
                </div>
                <h3 className="text-lg font-serif mb-3 group-hover:text-secondary transition-colors">{industry.title[currentLang]}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {industry.description[currentLang]}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
