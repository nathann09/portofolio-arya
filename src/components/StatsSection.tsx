import React, { useEffect, useState, useRef } from 'react';
import { PORTFOLIO_STATS } from '../data/portfolioData';
import { CheckCircle } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="statistik" ref={sectionRef} className="py-16 md:py-24 border-y border-slate-800/80 bg-slate-900/40 relative overflow-hidden">
      {/* Background soft ambient gradient */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Kinerja Terukur &amp; Dampak Nyata
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1 text-balance">
            Statistik Pencapaian &amp; Metrik Rekam Jejak
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Data kuantitatif berbasis keterlibatan riil dalam perancangan sistem instansi BNN, riset konsumen digital marketing, dan performa akademik.
          </p>
        </div>

        {/* Dynamic Bento Stats Grid with Interactive Hover & Staggered Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              style={{ transitionDelay: `${idx * 80}ms` }}
              className={`p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 card-laser card-bold-hover shadow-xl transition-all duration-500 group flex flex-col justify-between relative overflow-hidden transform ${
                hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Subtle top border glow beam on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="font-mono-code text-[11px] text-indigo-400 font-semibold">0{idx + 1}. {stat.badge}</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-300" />
                </div>
                
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-white font-mono-code tabular-nums tracking-tight group-hover:text-indigo-200 transition-colors">
                  {stat.value}
                </div>
                
                <h3 className="text-base font-semibold text-slate-200 mt-2 group-hover:text-white transition-colors">
                  {stat.label}
                </h3>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Quantitative Proof Banner */}
        <div className="mt-8 p-6 rounded-xl bg-indigo-950/20 border border-indigo-900/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-indigo-200 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Verifikasi Berdasarkan Dokumen Portofolio Resmi</span>
            </h4>
            <p className="text-xs text-slate-400">
              Setiap capaian didukung sertifikat kompetensi BNSP, naskah laporan magang BNN Kabupaten Sidoarjo, data analitik kampanye PT Nurul Fikri, serta SK Beasiswa PT Santos Jaya Abadi.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-300 font-mono-code shrink-0">
            <div>
              <span className="text-slate-400 block">Status Lulusan:</span>
              <span className="text-emerald-400 font-semibold">Tahun 2026 (Aktif Berkarir)</span>
            </div>
            <div>
              <span className="text-slate-400 block">Lokasi Siap Kerja:</span>
              <span className="text-white font-semibold">Sidoarjo / Surabaya / Remote</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
