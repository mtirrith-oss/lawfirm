import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { offices } from '../data/mockData';
import { useTranslation } from 'react-i18next';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-surface/90"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="relative w-full max-w-4xl bg-surface rounded-sm overflow-hidden shadow-2xl border border-grey-mid"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 bg-on-surface text-surface">
                <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em] block mb-4">{t('booking.label')}</span>
                <h3 className="text-3xl font-serif mb-8" dangerouslySetInnerHTML={{ __html: t('booking.title').replace(' Consultation', '<br /> Consultation') }} />
                <p className="opacity-70 text-sm mb-12">
                  {t('booking.subtitle')}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded text-secondary font-bold text-xs uppercase tracking-widest border border-white/10">
                      {t('booking.phase')}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">{t('booking.responseTimeLabel')}</p>
                      <p className="text-xs">{t('booking.responseTimeValue')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12 relative">
                <button 
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">{t('booking.name')}</label>
                    <input type="text" className="w-full bg-grey-low border border-grey-mid rounded px-4 py-3 text-sm focus:ring-1 focus:ring-secondary outline-none" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">{t('booking.email')}</label>
                    <input type="email" className="w-full bg-grey-low border border-grey-mid rounded px-4 py-3 text-sm focus:ring-1 focus:ring-secondary outline-none" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">{t('booking.office')}</label>
                    <select className="w-full bg-grey-low border border-grey-mid rounded px-4 py-3 text-sm focus:ring-1 focus:ring-secondary outline-none">
                      <option>{t('booking.routing')}</option>
                      {offices.map(o => <option key={o.id}>{o.city}</option>)}
                    </select>
                  </div>

                  <button className="w-full btn-outline py-4">
                    {t('booking.submit')}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

      )}
    </AnimatePresence>
  );
}
