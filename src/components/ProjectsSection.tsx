import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ArrowUpRight, Sparkles, Building, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (projectId: string) => void;
  onOpenSimulator: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenSimulator
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'uiux', label: 'UI/UX & Desain Sistem' },
    { id: 'marketing', label: 'Digital Marketing & Riset' },
    { id: 'web', label: 'Web Development' },
    { id: 'research', label: 'Riset Akademik S-1' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="proyek" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Portofolio Terpilih
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1 text-balance">
            Studi Kasus &amp; Pengalaman Proyek Unggulan
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Dari perancangan antarmuka sistem web birokrasi pemerintahan hingga strategi kampanye digital berbasis riset preferensi konsumen.
          </p>
        </div>

        {/* Interactive Filter Tabs (Functional segmented buttons per Section 1A) */}
        <div className="flex items-center gap-1 p-1 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-slate-800 text-white shadow-sm border border-slate-700/70'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid: Dynamic Bento Box Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {filteredProjects.map((project, idx) => {
          const isFeatured = project.id === 'silapor-bnn';

          return (
            <div
              key={project.id}
              className={`rounded-2xl bg-slate-900/80 border border-slate-800/90 card-bold-hover card-laser flex flex-col justify-between overflow-hidden group shadow-lg ${
                isFeatured ? 'lg:col-span-12 xl:col-span-8 border-indigo-500/40' : 'lg:col-span-6 xl:col-span-4'
              }`}
            >
              
              {/* Media image container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Visual gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1524] via-transparent to-transparent opacity-80" />

                {/* Overlaid quick metadata unboxed */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                  <div className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-slate-700/60 font-mono-code text-[11px] text-indigo-300">
                    {project.categoryLabel}
                  </div>
                  {project.hasSimulator && (
                    <span className="px-2.5 py-1 rounded bg-emerald-950/80 backdrop-blur-md border border-emerald-700/60 font-mono-code text-[11px] text-emerald-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Live Prototype Ready</span>
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-400 font-mono-code">
                  <span>{project.period}</span>
                  <span>{project.organization}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Metrics bar - unboxed */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="text-xs">
                      <span className="text-slate-400 block text-[11px]">{m.label}:</span>
                      <span className="text-white font-semibold font-mono-code tabular-nums text-xs">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => onSelectProject(project.id)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Pelajari Studi Kasus</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {project.hasSimulator && (
                    <button
                      onClick={onOpenSimulator}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer"
                      title="Buka simulator prototype antarmuka SILAPOR BNN"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Uji Demo</span>
                    </button>
                  )}
                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
};
