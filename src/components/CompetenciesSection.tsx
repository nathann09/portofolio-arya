import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Layout, MonitorCog, Globe, BarChart3, Check } from 'lucide-react';

export const CompetenciesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const icons = [
    <Layout className="w-5 h-5 text-indigo-400" key="uiux" />,
    <MonitorCog className="w-5 h-5 text-emerald-400" key="itsupport" />,
    <Globe className="w-5 h-5 text-sky-400" key="webdev" />,
    <BarChart3 className="w-5 h-5 text-amber-400" key="marketing" />
  ];

  return (
    <section id="keahlian" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
          Fondasi Teknis &amp; Spesialisasi
        </p>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1 text-balance">
          Kompetensi Keahlian Berbasis Praktik Industri
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          Kombinasi sinergis antara pemahaman antarmuka pengguna, kesiapan infrastruktur IT support, pengembangan web, serta literasi data pemasaran.
        </p>
      </div>

      {/* Tab Navigation Controls (Interactive Filter Buttons - Section 1A allowed) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl mb-8">
        {SKILL_CATEGORIES.map((cat, index) => (
          <button
            key={cat.title}
            onClick={() => setActiveTab(index)}
            className={`flex items-center gap-2.5 px-4 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer text-left ${
              activeTab === index
                ? 'bg-slate-800 text-white shadow-sm border border-slate-700/80'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            {icons[index]}
            <span className="truncate">{cat.title.split('&')[0].trim()}</span>
          </button>
        ))}
      </div>

      {/* Active Tab Content Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {icons[activeTab]}
              <h3 className="text-xl font-bold text-white font-display">
                {SKILL_CATEGORIES[activeTab].title}
              </h3>
            </div>
            <p className="text-sm text-slate-400">
              {SKILL_CATEGORIES[activeTab].description}
            </p>
          </div>
          <div className="text-xs font-mono-code text-slate-500">
            Total {SKILL_CATEGORIES[activeTab].skills.length} Kemampuan Terverifikasi
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
          {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-indigo-500/50 hover:bg-slate-900/80 hover:-translate-y-0.5 transition-all duration-200 flex items-start justify-between gap-3 group"
            >
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-slate-200">
                  {skill.name}
                </h4>
                {/* Clean unboxed level (Anti-pill) */}
                <p className="text-xs text-indigo-400 font-mono-code">
                  {skill.level}
                </p>
              </div>
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            </div>
          ))}
        </div>

        {/* Real Application Context Note */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span>Diterapkan langsung pada penugasan BNN Sidoarjo, PT Nurul Fikri Cipta Inovasi, dan KKN UTM.</span>
          </div>
          <span className="font-mono-code text-slate-500">Standar Kurikulum Sistem Informasi UTM &amp; Cisco NetAcad</span>
        </div>
      </div>

    </section>
  );
};
