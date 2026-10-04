import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#070A10] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand & summary */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-white font-display text-base font-bold">
              Arya Kusuma Dewa
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              S-1 Sistem Informasi Universitas Trunojoyo Madura (IPK 3.70). UI/UX Designer sistem SILAPOR BNN Sidoarjo, praktisi IT Support, dan peraih sertifikasi Digital Marketing BNSP.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-1 font-mono-code">
              <span>Trosobo, Sidoarjo, Jawa Timur</span>
              <span>·</span>
              <a href="mailto:nathannsyahputra@gmail.com" className="hover:text-white transition-colors">nathannsyahputra@gmail.com</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <div className="flex flex-col space-y-1.5 text-xs text-slate-400">
              <a href="#ringkasan" className="hover:text-indigo-400 transition-colors">Ringkasan Profil</a>
              <a href="#statistik" className="hover:text-indigo-400 transition-colors">Statistik Pencapaian</a>
              <a href="#keahlian" className="hover:text-indigo-400 transition-colors">Kompetensi Keahlian</a>
              <a href="#proyek" className="hover:text-indigo-400 transition-colors">Studi Kasus Proyek</a>
              <a href="#testimoni" className="hover:text-indigo-400 transition-colors">Testimoni Klien &amp; Mentor</a>
              <a href="#sertifikasi" className="hover:text-indigo-400 transition-colors">Sertifikasi &amp; Publikasi</a>
            </div>
          </div>

          {/* Back to top & connect */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-4 md:items-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
            </button>

            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/aryakusumadewa00/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-slate-700 transition-colors"
                title="Kunjungi LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:nathannsyahputra@gmail.com"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-slate-700 transition-colors"
                title="Kirim Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6281324587225"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-slate-700 transition-colors"
                title="Chat WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Arya Kusuma Dewa. Seluruh hak cipta dilindungi.</p>
          <p className="font-mono-code">Dibuat untuk presentasi portofolio profesional S-1 Sistem Informasi</p>
        </div>
      </div>
    </footer>
  );
};
