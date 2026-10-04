import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, GraduationCap, Briefcase, Award, CheckCircle } from 'lucide-react';
import { WORK_EXPERIENCES, CERTIFICATIONS, ORGANIZATIONAL_EXPERIENCES, PORTFOLIO_STATS } from '../data/portfolioData';

interface CvViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvViewerModal: React.FC<CvViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl my-6 bg-[#0E1524] border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0B101D]">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-white font-display">
              Curriculum Vitae — Arya Kusuma Dewa
            </h3>
            <span className="text-xs text-indigo-400 font-mono-code hidden sm:inline">
              (Format Resume Resmi)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Tutup CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Container */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0D1322] text-slate-200">
          
          {/* CV Header */}
          <div className="border-b border-slate-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white font-display">
                  Arya Kusuma Dewa
                </h1>
                <p className="text-sm font-semibold text-indigo-400 mt-0.5">
                  IT Support &amp; UI/UX Design | System &amp; User Requirements | Web Development
                </p>
              </div>

              <div className="text-xs space-y-1 text-slate-300 font-mono-code sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <a href="mailto:nathannsyahputra@gmail.com" className="hover:underline">nathannsyahputra@gmail.com</a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-indigo-400" />
                  <a href="tel:+6281324587225" className="hover:underline">(+62) 813-2458-7225</a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Desa Trosobo, Kab. Sidoarjo, Jawa Timur</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <a href="https://linkedin.com/in/aryakusumadewa00/" target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/aryakusumadewa00/</a>
                </div>
              </div>
            </div>
          </div>

          {/* Riwayat Singkat */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-mono-code">
              RIWAYAT SINGKAT
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              Lulusan S-1 Sistem Informasi Universitas Trunojoyo Madura dengan minat pada bidang IT Support dan UI/UX Design. 
              Memiliki pengalaman sebagai UI Designer Intern di BNN Kabupaten Sidoarjo dengan fokus analisis kebutuhan pengguna, 
              perancangan antarmuka berbasis web, usability testing, pengelolaan sistem, dan troubleshooting dasar. Berhasil merancang 
              9 halaman utama dan 1 fitur cetak laporan pada sistem SILAPOR dengan mengakomodasi kebutuhan 4 bagian pengguna dan 
              mengembangkan 6-7 fitur utama hingga tahap implementasi website. Melakukan usability testing bersama 5 pengguna untuk 
              mengevaluasi navigasi, form, filter, dan alur pelaporan. Memiliki pemahaman HTML/CSS, Figma, WordPress, Microsoft Office, 
              serta dasar hardware dan software melalui Cisco IT Essentials. Didukung kemampuan problem solving, critical thinking, 
              teamwork, communication, dan attention to detail dalam menyelesaikan kebutuhan teknis maupun pengguna.
            </p>
          </div>

          {/* Latar Belakang Pendidikan */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-mono-code">
              LATAR BELAKANG PENDIDIKAN
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-white">UNIVERSITAS TRUNODJOYO MADURA</h3>
                  <p className="text-slate-300">S-1 Sistem Informasi (IPK: <strong className="text-white font-mono-code">3.70 / 4.00</strong>)</p>
                </div>
                <span className="text-slate-400 font-mono-code text-xs mt-1 sm:mt-0">Agustus 2022 – Agustus 2026</span>
              </div>
              <p className="text-xs text-slate-300 italic">
                Judul Skripsi: Perbandingan Pendekatan Lexicon-Based Dengan Pelabelan Manual Pada Analisis Sentimen Ulasan Pengguna Ruangguru.
              </p>
              <div className="text-xs text-slate-400 pt-1 space-y-1">
                <p>1. Penerima Dana Bantuan Pendidikan PT Santos Jaya Abadi Tahun 2025-2026.</p>
                <p>2. Dipercaya sebagai Ketua Pelaksana kegiatan Malam Keakraban (Makrab) dan Ramah Tamah IKAMASDA.</p>
              </div>
            </div>
          </div>

          {/* Pengalaman Kerja */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-mono-code">
              PENGALAMAN KERJA
            </h2>

            {/* PT Nurul Fikri */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm">PT NURUL FIKRI CIPTA INOVASI</h3>
                  <p className="text-indigo-300 font-medium">Digital Marketing Intern</p>
                </div>
                <span className="text-slate-400 font-mono-code">Februari 2025 – Juni 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-300 pt-1">
                <li>Menerapkan 19 kompetensi digital marketing (market research, SEO/SEM, CRM, web design, etc).</li>
                <li>Melakukan riset pasar melalui survei terhadap 21 responden (71,4% tertarik membeli produk Fresh Fusion).</li>
                <li>Menyusun 2 buyer persona komprehensif berdasarkan habits &amp; social media behavior.</li>
                <li>Mengembangkan website company profile dengan HTML &amp; WordPress serta optimasi Yoast SEO.</li>
                <li>Menghasilkan 13 konten digital Fresh Fusion (total 12.082 views, 41 likes, 6 penjualan).</li>
                <li>Menghasilkan 10 konten final project IG &amp; TikTok (8.736 views, menumbuhkan 100+ followers).</li>
              </ul>
            </div>

            {/* BNN Sidoarjo */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm">BNN KABUPATEN SIDOARJO</h3>
                  <p className="text-indigo-300 font-medium">UI Designer (SILAPOR) Intern</p>
                </div>
                <span className="text-slate-400 font-mono-code">Januari 2025 – Februari 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-300 pt-1">
                <li>Menganalisis kebutuhan pengguna dari 4 seksi: Urusan Umum, Rehabilitasi, P2M, dan Klinik.</li>
                <li>Merancang User Interface SILAPOR via user journey mapping, wireframe, mockup, dan functional prototype di Figma.</li>
                <li>Mengembangkan 9 halaman utama dan 1 fitur cetak laporan formal berbasis web.</li>
                <li>Melakukan usability testing bersama 5 pengguna untuk mengevaluasi navigasi dan kompleksitas form.</li>
                <li>Berhasil membawa rancangan sistem SILAPOR hingga tahap implementasi website.</li>
              </ul>
            </div>
          </div>

          {/* Sertifikasi & Pelatihan */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-mono-code">
              SERTIFIKASI DAN PELATIHAN
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.map((c) => (
                <div key={c.title} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <p className="font-semibold text-white">{c.title}</p>
                  <p className="text-slate-400 text-[11px]">{c.issuer} ({c.validity}) {c.credentialScore && `· ${c.credentialScore}`}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Keahlian & Software */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-mono-code">
              KEAHLIAN &amp; BAHASA
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
              <p>
                <strong className="text-white">Software &amp; Tools:</strong> Figma, HTML, CSS, WordPress, Blogspot, Canva, Microsoft Office (Word, Excel, PowerPoint), Google Forms, Google Search Console, Yoast SEO, Mailchimp.
              </p>
              <p>
                <strong className="text-white">Kompetensi Inti:</strong> IT Support &amp; Troubleshooting, UI/UX Design, User Requirements Analysis, Usability Testing, Digital Marketing Strategy, Consumer Analysis.
              </p>
              <p>
                <strong className="text-white">Soft Skills:</strong> Problem Solving, Critical Thinking, Team Leadership, Time Management, Agile, Communication, Detail Oriented.
              </p>
              <p>
                <strong className="text-white">Kemampuan Bahasa:</strong> Bahasa Indonesia (Native), Bahasa Inggris (Intermediate - TOEFL 450), Bahasa Jepang (Beginner).
              </p>
            </div>
          </div>

        </div>

        {/* Modal footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#0B101D] flex items-center justify-between">
          <span className="text-xs text-slate-400">Arya Kusuma Dewa · Resume S-1 Sistem Informasi</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
          >
            Tutup Tampilan CV
          </button>
        </div>

      </div>
    </div>
  );
};
