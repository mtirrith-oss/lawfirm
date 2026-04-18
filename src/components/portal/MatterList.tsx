import React from 'react';
import { matters, clients } from '../../data/mockData';
import { useTranslation } from 'react-i18next';
import { MoreVertical, ChevronRight } from 'lucide-react';

export default function MatterList() {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || 'en') as 'en' | 'fr' | 'de';

  return (
    <div className="bg-surface border border-grey-mid rounded-sm overflow-hidden">
      <div className="p-8 border-b border-grey-mid flex justify-between items-center">
        <h3 className="text-xl font-serif">Active Legal Matters</h3>
        <button className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:underline">View All Documents</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-grey-low border-b border-grey-mid">
              <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Matter ID</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Description</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Lawyers</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Status</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Billing</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {matters.map((matter) => (
              <tr key={matter.id} className="border-b border-grey-mid hover:bg-grey-low/50 transition-colors group cursor-pointer">
                <td className="p-4 font-mono text-xs">{matter.id.toUpperCase()}</td>
                <td className="p-4">
                  <div className="text-sm font-serif">{matter.title[currentLang]}</div>
                  <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">
                    {matter.jurisdictions.join(' | ')}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex -space-x-2">
                    {matter.lawyerIds.map((id, i) => (
                      <div key={id} className="w-8 h-8 rounded-full bg-grey-mid border-2 border-surface flex items-center justify-center text-[8px] font-bold text-on-surface">
                        {id.substring(0, 2).toUpperCase()}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-full h-1.5 bg-grey-mid rounded-full overflow-hidden flex-1 max-w-[80px]">
                      <div className="h-full bg-secondary" style={{ width: `${matter.progress}%` }} />
                    </div>
                    <span className="text-[10px] font-bold whitespace-nowrap">{matter.status.toUpperCase()}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
                    matter.billingStatus === 'Up to Date' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {matter.billingStatus}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <ChevronRight className="w-4 h-4 text-grey-mid group-hover:text-secondary transition-colors" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
