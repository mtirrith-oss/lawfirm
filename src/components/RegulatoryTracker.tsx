import { motion } from 'motion/react';
import { ShieldAlert, AlertCircle, Info, ExternalLink } from 'lucide-react';
import { regulatoryUpdates } from '../data/mockData';
import { useTranslation } from 'react-i18next';

export default function RegulatoryTracker() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language || 'en') as 'en' | 'fr' | 'de';

  const signalConfig = {
    'Stable': { icon: Info, color: 'text-green-500', bg: 'bg-green-500/5' },
    'Caution': { icon: AlertCircle, color: 'text-amber-500', bg: 'bg-amber-500/5' },
    'High Alert': { icon: ShieldAlert, color: 'text-red-500', bg: 'bg-red-500/5' },
  };

  return (
    <section className="py-24 bg-surface-variant/5 border-y border-grey-mid overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-secondary font-bold text-[11px] uppercase tracking-[0.2em] block mb-4">Strategic Intelligence</span>
            <h2 className="text-4xl font-serif">Global Regulatory Tracker</h2>
          </div>
          <button className="btn-outline flex items-center gap-2">
            Access Full Knowledge Hub <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {regulatoryUpdates.map((update, idx) => {
            const config = signalConfig[update.riskSignal as keyof typeof signalConfig];
            const Icon = config.icon;
            
            return (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface p-10 border border-grey-mid rounded-sm flex flex-col md:flex-row gap-8 relative group"
              >
                <div className={`absolute top-0 right-0 w-1.5 h-full ${config.color.replace('text-', 'bg-')}`} />
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold text-on-surface-variant bg-grey-low px-2 py-0.5 rounded uppercase tracking-widest">{update.source}</span>
                    <span className="text-[10px] text-on-surface-variant font-bold">{update.date}</span>
                  </div>
                  <h3 className="text-xl font-serif mb-4 group-hover:text-secondary transition-colors">{update.title[currentLang]}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 italic">
                    {update.summary[currentLang]}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-full ${config.bg}`}>
                      <Icon className={`w-4 h-4 ${config.color}`} />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${config.color}`}>Risk Level: {update.riskSignal}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
