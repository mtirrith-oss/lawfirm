import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { matters } from '../../data/mockData';
import { Shield, TrendingUp, Clock, AlertTriangle } from 'lucide-react';

const data = matters.map(m => ({
  name: m.id.split('-')[1].toUpperCase(),
  progress: m.progress,
  risk: m.riskLevel === 'High' ? 100 : m.riskLevel === 'Medium' ? 60 : 20,
}));

const pieData = [
  { name: 'France', value: 35 },
  { name: 'USA', value: 45 },
  { name: 'UK', value: 20 },
];

const COLORS = ['#A68966', '#0F1113', '#5A5E66'];

export default function MatterOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-surface p-8 border border-grey-mid rounded-sm">
        <h3 className="text-xl font-serif mb-8 flex items-center gap-3">
          <TrendingUp className="w-5 h-5 text-secondary" />
          Active Matter Progress
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E4E7" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} style={{ fontSize: '10px', fontWeight: 'bold' }} />
              <YAxis hide />
              <Tooltip 
                cursor={{ fill: 'transparent' }}
                contentStyle={{ borderRadius: '0px', border: '1px solid #E2E4E7', fontSize: '12px' }}
              />
              <Bar dataKey="progress" fill="#A68966" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-surface p-8 border border-grey-mid rounded-sm">
        <h3 className="text-xl font-serif mb-8 flex items-center gap-3">
          <Shield className="w-5 h-5 text-secondary" />
          Jurisdictional Exposure
        </h3>
        <div className="h-64 flex items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col gap-4 pl-4 border-l border-grey-mid">
            {pieData.map((d, i) => (
              <div key={d.name} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{d.name}: {d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
