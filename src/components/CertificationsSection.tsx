import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, ExternalLink, CheckCircle } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const publications = [
    {
      title: 'Launching Website Desa Suci sebagai Upaya Transformasi Digital',
      category: 'Transformasi Digital',
      author: 'KKN Kelompok 25 Universitas Trunojoyo Madura',
      highlight: 'Pengembangan portal informasi desa dan keterbukaan layanan publik.'
    },
    {
      title: 'Fasilitasi Pembuatan Sertifikat NIB dan SPP-IRT bagi UMKM Desa Suci',
      category: 'Pemberdayaan Ekonomi',
      author: 'KKN Kelompok 25 Universitas Trunojoyo Madura',
      highlight: 'Pendampingan langsung legalitas perizinan usaha bagi pengrajin dan petani.'
    },
    {
      title: 'Sosialisasi Pupuk Organik Cair (POC) untuk Mendukung Pertanian Ramah Lingkungan',
      category: 'Keberlanjutan Lingkungan',
      author: 'KKN Kelompok 25 Universitas Trunojoyo Madura',
      highlight: 'Edukasi pengolahan limbah organik menjadi pupuk ramah lingkungan berbiaya hemat.'
    },
    {
      title: 'Pembukaan Kegiatan KKN Kelompok 25 UTM di Desa Suci',
      category: 'Pengabdian Masyarakat',
      author: 'KKN Kelompok 25 Universitas Trunojoyo Madura',
      highlight: 'Inisiasi program kerja kolaboratif bersama perangkat desa dan karang taruna.'
    }
  ];

  return (
    <section id="sertifikasi" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
          Kredensial &amp; Akademik
        </p>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1 text-balance">
          Pendidikan, Sertifikasi Resmi &amp; Publikasi
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          Bukti sertifikasi kompetensi nasional, rekam jejak akademik, dan publikasi program pengabdian masyarakat.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Education & Certifications */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Education Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-xs font-mono-code text-indigo-400">Agustus 2022 – Agustus 2026</span>
                <h3 className="text-xl font-bold text-white font-display">
                  Universitas Trunojoyo Madura
                </h3>
                <p className="text-sm font-medium text-slate-300">
                  S-1 Sistem Informasi · Fakultas Teknik
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono-code text-slate-400 block">IPK Kumulatif:</span>
                <span className="text-xl font-bold text-white font-mono-code tabular-nums text-emerald-400">
                  3.70 / 4.00
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2 text-xs">
              <span className="text-slate-400 block font-medium">Judul Tugas Akhir / Skripsi:</span>
              <p className="text-slate-200 leading-relaxed italic">
                "Perbandingan Pendekatan Lexicon-Based Dengan Pelabelan Manual Pada Analisis Sentimen Ulasan Pengguna Ruangguru."
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Penerima Dana Bantuan Pendidikan PT Santos Jaya Abadi 2025–2026</span>
              </span>
              <span className="text-slate-500 font-mono-code">Bangkalan / Madura</span>
            </div>
          </div>

          {/* Certifications List */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Sertifikasi &amp; Pelatihan Terdaftar:
            </h4>

            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 text-[11px] font-mono-code text-slate-400">
                    <span className="text-indigo-400">{cert.category}</span>
                    <span>·</span>
                    <span>{cert.validity}</span>
                  </div>
                  <h5 className="text-sm font-semibold text-white">
                    {cert.title}
                  </h5>
                  <p className="text-xs text-slate-400">
                    Penerbit: {cert.issuer}
                  </p>
                </div>

                {cert.credentialScore && (
                  <div className="sm:text-right shrink-0">
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-xs font-mono-code font-semibold text-indigo-300 border border-slate-700">
                      {cert.credentialScore}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Publications & KKN Community Impacts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  Dampak Komunitas &amp; KKN 25
                </p>
                <h3 className="text-lg font-bold text-white font-display">
                  Publikasi &amp; Konten Artikel
                </h3>
              </div>
              <BookOpen className="w-5 h-5 text-indigo-400" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Dokumentasi publikasi artikel kegiatan mahasiswa yang dirilis secara terbuka untuk mengedukasi masyarakat dan memperluas jangkauan transformasi digital desa.
            </p>

            <div className="space-y-3">
              {publications.map((pub, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors space-y-1"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                    <span className="text-indigo-400">{pub.category}</span>
                    <span>Artikel Publik</span>
                  </div>
                  <h5 className="text-xs sm:text-sm font-semibold text-slate-200">
                    {pub.title}
                  </h5>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {pub.highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-500 font-mono-code">
              Seluruh kegiatan KKN terdokumentasi dalam arsip resmi LPPM Universitas Trunojoyo Madura.
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
