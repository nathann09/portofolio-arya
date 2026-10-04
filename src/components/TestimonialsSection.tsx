import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimoni" className="py-16 md:py-24 border-y border-slate-800/80 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Validasi &amp; Rekomendasi Profesional
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1 text-balance">
            Testimoni Klien, Mentor &amp; Stakeholder
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Umpan balik nyata dari para pembimbing lembaga pemerintah, mentor industri digital marketing, dan mitra masyarakat terkait dedikasi kerja Arya.
          </p>
        </div>

        {/* 2x2 Grid of Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 card-bold-hover flex flex-col justify-between space-y-6 relative group shadow-lg"
            >
              <div className="space-y-4">
                {/* Quote Icon & Context */}
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-800/50 flex items-center justify-center text-indigo-400">
                    <Quote className="w-4 h-4" />
                  </div>
                  {/* Clean unboxed context (Anti-pill) */}
                  <span className="text-[11px] font-mono-code text-slate-400">
                    Konteks: {t.context.split('&')[0]}
                  </span>
                </div>

                {/* Quote Statement */}
                <p className="text-slate-200 text-sm sm:text-[15px] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Stakeholder Identity Lockup */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-900 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                  {t.avatarText}
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-semibold text-white">
                      {t.name}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <p className="text-xs text-indigo-300 font-medium">
                    {t.role}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {t.organization}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Professional Reliability Note */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Semua testimoni bersumber dari interaksi proyek kerja magang dan program resmi kemahasiswaan S-1 Sistem Informasi UTM.
        </div>

      </div>
    </section>
  );
};
