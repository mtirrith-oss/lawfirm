import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Briefcase, 
  MessageSquare, 
  FileText, 
  CreditCard, 
  ShieldCheck, 
  Settings, 
  LogOut,
  Bell,
  Search,
  User
} from 'lucide-react';
import MatterOverview from './MatterOverview';
import MatterList from './MatterList';

export default function PortalDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Overview' },
    { id: 'matters', icon: Briefcase, label: 'Legal Matters' },
    { id: 'messages', icon: MessageSquare, label: 'Secure Messaging' },
    { id: 'documents', icon: FileText, label: 'Document Vault' },
    { id: 'billing', icon: CreditCard, label: 'Billing & Invoices' },
  ];

  return (
    <div className="flex bg-grey-low min-h-screen pt-[72px]">
      {/* Portal Sidebar */}
      <aside className="w-64 bg-on-surface text-surface h-[calc(100vh-72px)] sticky top-[72px] flex flex-col p-6 border-r border-white/5">
        <div className="mb-10 flex items-center gap-4 p-4 bg-white/5 rounded-sm">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-on-surface font-bold">
            GL
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest">Global Logistics</div>
            <div className="text-[10px] text-surface/50">Client Identity: C-8842</div>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-all rounded-sm ${
                activeTab === item.id 
                  ? 'bg-secondary text-on-surface' 
                  : 'text-surface/60 hover:text-surface hover:bg-white/5'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-2">
          <button className="w-full flex items-center gap-4 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-surface/60 hover:text-surface">
            <Settings className="w-4 h-4" />
            Security Settings
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-red-400 hover:text-red-300">
            <LogOut className="w-4 h-4" />
            Secure Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {/* Portal Header */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-serif text-on-surface">Client Intelligence Dashboard</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mt-2 flex items-center gap-2">
              <ShieldCheck className="w-3 h-3 text-secondary" />
              End-to-End Encrypted Session | {new Date().toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Bell className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-secondary transition-colors" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-grey-low" />
            </div>
            <div className="w-px h-6 bg-grey-mid" />
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right">
                <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface">Markus Steiner</div>
                <div className="text-[9px] text-on-surface-variant uppercase tracking-widest">Assigned Partner</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-grey-mid overflow-hidden group-hover:ring-2 ring-secondary transition-all">
                <img src="https://picsum.photos/seed/lawyer/100/100" alt="Partner" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard View */}
        {activeTab === 'dashboard' && (
          <div className="space-y-10">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Active Matters', value: '4', trend: '+1 this quarter' },
                { label: 'Pending Docs', value: '12', trend: '3 requiring action' },
                { label: 'Current Billing', value: '€2.4M', trend: 'Next invoice: May 1' },
                { label: 'Calculated Risk', value: 'Low', trend: 'Stable outlook' },
              ].map(stat => (
                <div key={stat.label} className="bg-surface p-6 border border-grey-mid rounded-sm shadow-sm group hover:border-secondary transition-colors cursor-default">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">{stat.label}</div>
                  <div className="text-2xl font-serif text-on-surface mb-1">{stat.value}</div>
                  <div className="text-[9px] font-bold text-secondary uppercase tracking-widest">{stat.trend}</div>
                </div>
              ))}
            </div>

            <MatterOverview />
            <MatterList />
          </div>
        )}

        {/* Other Tabs Placeholder */}
        {activeTab !== 'dashboard' && (
          <div className="flex flex-col items-center justify-center h-[500px] text-center border-2 border-dashed border-grey-mid rounded-sm bg-surface/50">
            <div className="p-4 bg-secondary/10 rounded-full mb-6">
              <LayoutDashboard className="w-10 h-10 text-secondary" />
            </div>
            <h2 className="text-xl font-serif text-on-surface mb-2">Module Under Secure Deployment</h2>
            <p className="text-sm text-on-surface-variant max-w-md mx-auto">
              Our {activeTab} framework is undergoing enterprise security validation. This module will be live shortly for production use.
            </p>
            <button 
              onClick={() => setActiveTab('dashboard')}
              className="mt-8 btn-outline"
            >
              Return to Insights Dashboard
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
