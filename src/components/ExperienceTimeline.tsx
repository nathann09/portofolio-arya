import React, { useState } from 'react';
import { WORK_EXPERIENCES, ORGANIZATIONAL_EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Building, CheckCircle2, ChevronRight, Award, Calendar, MapPin } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'org'>('work');

  return (
    <section id="pengalaman" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Riwayat Profesional
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1 text-balance">
            Pengalaman Kerja &amp; Kepemimpinan Organisasi
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Dedikasi berkelanjutan dalam lingkungan kerja profesional, institusi pemerintah, serta kepanitiaan organisasi kemahasiswaan.
          </p>
        </div>

        {/* Tab switch button */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl">
          <button
            onClick={() => setActiveTab('work')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'work'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Pengalaman Kerja / Magang
          </button>
          <button
            onClick={() => setActiveTab('org')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'org'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Aktivitas Organisasi
          </button>
        </div>
      </div>

      {/* Tab 1: Work Experience Timeline */}
      {activeTab === 'work' ? (
        <div className="space-y-8">
          {WORK_EXPERIENCES.map((exp, index) => (
            <div
              key={exp.company}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 card-bold-hover space-y-6 shadow-xl"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-code text-indigo-400">
                    <span>{exp.period}</span>
                    <span>·</span>
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                    <span className="text-slate-200 font-medium">{exp.company}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono-code text-emerald-400">
                    {exp.achievements.length} Capaian Kunci Terdokumentasi
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Tanggung Jawab &amp; Pelaksanaan Kerja:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-indigo-400 mt-1">›</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Achievements Grid */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Key Achievements (Hasil Terukur):</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Skills Used - Unboxed per Zero-Pill discipline */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 pt-2 border-t border-slate-800/80 font-mono-code">
                <span className="text-slate-500">Keahlian Terapan:</span>
                {exp.skills.map((s, i) => (
                  <React.Fragment key={s}>
                    <span className="text-indigo-300">{s}</span>
                    {i < exp.skills.length - 1 && <span className="text-slate-700">·</span>}
                  </React.Fragment>
                ))}
              </div>

            </div>
          ))}
        </div>
      ) : (
        /* Tab 2: Organizational Experiences */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ORGANIZATIONAL_EXPERIENCES.map((org, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-4"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-mono-code text-indigo-400">
                  <span>{org.period}</span>
                  <span className="text-slate-500">IKAMASDA</span>
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  {org.role}
                </h3>
                <p className="text-xs text-slate-400">
                  {org.organization}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {org.description}
              </p>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Peran: Kepemimpinan &amp; Eksekusi Tim</span>
                <span className="text-emerald-400">Terverifikasi</span>
              </div>
            </div>
          ))}

          {/* Academic Highlight Banner */}
          <div className="md:col-span-2 p-6 rounded-2xl bg-indigo-950/30 border border-indigo-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono-code text-indigo-400">Highlight Prestasi Kampus</span>
              <h4 className="text-base font-bold text-white">
                Penerima Dana Bantuan Pendidikan PT Santos Jaya Abadi (2025–2026)
              </h4>
              <p className="text-xs text-slate-300">
                Penghargaan beasiswa prestasi akademik dan kontribusi sosial dari produsen kopi Kapal Api (PT Santos Jaya Abadi) kepada mahasiswa berprestasi Universitas Trunojoyo Madura.
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-2xl font-bold font-mono-code text-white">IPK 3.70</span>
              <span className="block text-[11px] text-slate-400">Skala 4.00</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
