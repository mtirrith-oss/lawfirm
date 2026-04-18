import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Search } from 'lucide-react';
import { lawyers, offices } from '../data/mockData';
import { useTranslation } from 'react-i18next';

export default function LawyerDirectory() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language || 'en') as 'en' | 'fr' | 'de';
  const [filter, setFilter] = useState({ office: 'All Offices', expertise: 'All Expertise' });
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLawyers = lawyers.filter(l => {
    const matchesOffice = filter.office === 'All Offices' || l.offices.includes(filter.office);
    const matchesExpertise = filter.expertise === 'All Expertise' || l.expertise.includes(filter.expertise);
    const matchesSearch = l.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          l.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesOffice && matchesExpertise && matchesSearch;
  });

  const allExpertise = Array.from(new Set(lawyers.flatMap(l => l.expertise)));

  return (
    <section className="bg-surface border-t border-grey-mid" id="people">
      <div className="max-w-7xl mx-auto flex h-full min-h-[800px]">
        {/* Sidebar */}
        <aside className="w-[260px] border-r border-grey-mid p-10 hidden md:block">
          <div className="mb-12">
            <span className="text-[11px] uppercase tracking-[0.1em] font-bold text-on-surface-variant mb-6 block">{t('directory.location')}</span>
            <ul className="space-y-3">
              <li 
                className={`text-sm cursor-pointer transition-colors ${filter.office === 'All Offices' ? 'font-bold text-secondary' : 'hover:text-secondary'}`}
                onClick={() => setFilter(f => ({ ...f, office: 'All Offices' }))}
              >
                {t('directory.allOffices')}
              </li>
              {offices.map(o => (
                <li 
                  key={o.id}
                  className={`text-sm cursor-pointer transition-colors ${filter.office === o.city ? 'font-bold text-secondary' : 'hover:text-secondary'}`}
                  onClick={() => setFilter(f => ({ ...f, office: o.city }))}
                >
                  {o.city}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <span className="text-[11px] uppercase tracking-[0.1em] font-bold text-on-surface-variant mb-6 block">{t('directory.practiceArea')}</span>
            <ul className="space-y-3">
              <li 
                className={`text-sm cursor-pointer transition-colors ${filter.expertise === 'All Expertise' ? 'font-bold text-secondary' : 'hover:text-secondary'}`}
                onClick={() => setFilter(f => ({ ...f, expertise: 'All Expertise' }))}
              >
                {t('directory.allExpertise')}
              </li>
              {allExpertise.map(e => (
                <li 
                  key={e}
                  className={`text-sm cursor-pointer transition-colors ${filter.expertise === e ? 'font-bold text-secondary' : 'hover:text-secondary'}`}
                  onClick={() => setFilter(f => ({ ...f, expertise: e }))}
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 p-10">
          <div className="mb-12 flex justify-between items-center">
            <h2 className="text-3xl font-serif">{t('directory.title')}</h2>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
              <input 
                type="text" 
                placeholder={t('directory.search')}
                className="w-full bg-grey-low border border-grey-mid rounded px-10 py-2 text-xs focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredLawyers.map((lawyer) => (
                <motion.div
                  key={lawyer.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="card-sleek group flex flex-col justify-between min-h-[240px]"
                >
                  <div className="flex flex-col">
                    <div className="w-12 h-12 bg-grey-mid rounded-full mb-6">
                      <img src={lawyer.photo} alt={lawyer.name} className="w-full h-full object-cover rounded-full mix-blend-multiply opacity-80" />
                    </div>
                    <h3 className="text-xl font-serif mb-1">{lawyer.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-4">{lawyer.title[currentLang]} | {lawyer.offices[0]}</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-2">
                      {lawyer.bio[currentLang]}
                    </p>
                  </div>

                  <div className="mt-8 flex justify-between items-center">
                    <button className="btn-outline">
                      {t('directory.viewProfile')}
                    </button>
                    <Mail className="w-4 h-4 text-on-surface-variant group-hover:text-secondary transition-colors" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );

}
