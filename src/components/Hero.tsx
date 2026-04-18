import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-[70vh] flex items-center pt-24 bg-surface">
      <div className="max-w-7xl mx-auto px-10 w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="text-secondary font-bold text-[11px] uppercase tracking-[0.3em] block mb-8">
              {t('hero.tagline')}
            </span>
            
            <h1 className="text-[42px] leading-[1.1] font-serif mb-12">
              {t('hero.title')}
            </h1>
            
            <p className="text-on-surface-variant text-base leading-relaxed max-w-md mb-12">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
                className="btn-outline"
              >
                {t('hero.cta')}
              </button>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="flex gap-4 font-sans text-[12px] text-on-surface-variant tracking-wider font-bold mb-4"
          >
            {['BER', 'AMS', 'LON', 'ZRH', 'NYC', 'BOS'].map((city, i) => (
              <span key={city} className="flex items-center gap-4">
                {city} {i < 5 && <span className="text-grey-mid">/</span>}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Global Office Visualisation (Abstract) */}
        <div className="mt-16 bg-on-surface text-surface p-8 h-[180px] rounded-sm flex items-center justify-center relative overflow-hidden">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-40">Global Office Visualization</span>
          {[
            { t: '40%', l: '45%' },
            { t: '42%', l: '48%' },
            { t: '45%', l: '25%' },
            { t: '48%', l: '28%' },
            { t: '38%', l: '52%' }
          ].map((node, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-1 bg-secondary rounded-full"
              style={{ top: node.t, left: node.l }}
            >
              <div className="absolute inset-[-4px] border border-secondary/40 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
