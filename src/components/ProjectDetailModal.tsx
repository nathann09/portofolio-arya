import React from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X, CheckCircle, ExternalLink, ArrowRight, Sparkles, Building, Calendar, Layers } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenSimulator?: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenSimulator
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl my-6 bg-[#0E1524] border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-[#0B101D]">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2 text-xs font-mono-code text-indigo-400">
              <span>{project.categoryLabel}</span>
              <span>·</span>
              <span>{project.period}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              {project.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-slate-500" />
                <span>{project.organization}</span>
              </span>
              <span className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-slate-500" />
                <span>Peran: <strong className="text-slate-300 font-medium">{project.role}</strong></span>
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Tutup Detail Proyek"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Main Visual Image */}
          <div className="relative aspect-video sm:aspect-[21/9] w-full rounded-xl overflow-hidden bg-slate-800 border border-slate-700/60">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {project.hasSimulator && (
              <div className="absolute bottom-4 right-4">
                <button
                  onClick={() => {
                    onClose();
                    onOpenSimulator?.();
                  }}
                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white shadow-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Jalankan Simulator Interaktif SILAPOR</span>
                </button>
              </div>
            )}
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="block text-[11px] text-slate-400 font-mono-code">{metric.label}</span>
                <span className="text-base sm:text-lg font-bold text-white font-mono-code tabular-nums text-indigo-200">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Project Summary */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Ringkasan Studi Kasus
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenges vs Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Tantangan */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-3">
              <h5 className="text-sm font-bold text-rose-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                <span>Tantangan &amp; Kebutuhan Sistem</span>
              </h5>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-400 font-mono text-[11px] mt-0.5">0{i+1}.</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solusi & Pendekatan */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-3">
              <h5 className="text-sm font-bold text-emerald-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Solusi &amp; Implementasi Desain</span>
              </h5>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Deliverables / Output Riil */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Hasil Kerja &amp; Deliverables Akhir
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Tech Stack */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <span className="text-xs text-slate-400 block">Tools, Software &amp; Metodologi yang Digunakan:</span>
            {/* Unboxed inline text per Section 1A */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300 font-mono-code">
              {project.tools.map((t, idx) => (
                <React.Fragment key={t}>
                  <span className="text-indigo-300">{t}</span>
                  {idx < project.tools.length - 1 && <span className="text-slate-600">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-[#0B101D] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            Portofolio Arya Kusuma Dewa · Verifikasi dari CV &amp; Laporan Kerja
          </div>

          <div className="flex items-center gap-2">
            {project.hasSimulator && (
              <button
                onClick={() => {
                  onClose();
                  onOpenSimulator?.();
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Buka Demo Simulator</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
