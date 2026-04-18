import { motion } from 'motion/react';
import { Users, Globe2, Sparkles, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CareersSection() {
  const { t } = useTranslation();

  const features = [
    { icon: Globe2, title: 'Global Mobility', desc: 'Work across 7 international offices in the world\'s most dynamic legal markets.' },
    { icon: Sparkles, title: 'Elite Culture', desc: 'Join a collaborative environment of intellectual rigour and excellence.' },
    { icon: GraduationCap, title: 'Graduate Program', desc: 'Developing the next generation of top-tier cross-border legal advisors.' },
    { icon: Users, title: 'Diversity & Inclusion', desc: 'A firm built on global perspective and varied intelligence.' },
  ];

  return (
    <section className="py-24 bg-surface border-t border-grey-mid">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-secondary font-bold text-[11px] uppercase tracking-[0.2em] block mb-4">{t('careers.label')}</span>
            <h2 className="text-4xl font-serif mb-8 max-w-md">{t('careers.title')}</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12 max-w-xl">
              We are permanently seeking lateral hires and graduate associates who possess a rare combination of legal precision, commercial intelligence, and global curiosity.
            </p>
            <div className="flex gap-6">
              <button className="btn-outline">{t('careers.viewOpenings')}</button>
              <button className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-on-surface hover:text-secondary transition-colors">{t('careers.pathways')}</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-grey-low border border-grey-mid rounded-sm"
              >
                <f.icon className="w-6 h-6 text-secondary mb-6" />
                <h4 className="text-base font-serif mb-3">{f.title}</h4>
                <p className="text-on-surface-variant text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
