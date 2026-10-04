import React from 'react';
import { ArrowRight, Mail, MapPin, Award, CheckCircle2, Linkedin, Sparkles, PhoneCall } from 'lucide-react';
import profilePhoto from '../assets/images/meee.jpeg';

interface HeroProps {
  onOpenCvModal: () => void;
  onOpenContactModal: () => void;
  onSelectProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenCvModal, 
  onOpenContactModal, 
  onSelectProject
}) => {
  // Rotating roles with smooth transition
  const ROLES = [
    'UI/UX Designer — SILAPOR BNN Sidoarjo',
    'IT Support Specialist & Troubleshooting',
    'Web Developer & WordPress Architect',
    'Certified Digital Marketer (BNSP 2025–2027)'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);
  const [fadeRole, setFadeRole] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFadeRole(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        setFadeRole(true);
      }, 250);
    }, 3000);
    return () => clearInterval(interval);
  }, [ROLES.length]);

  return (
    <section id="ringkasan" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-dot-pattern">
      {/* Subtle ambient gradient backdrop with animated pulse */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[110px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Editorial Presentation */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata Kicker (Anti-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-400">
              <span className="text-indigo-400 font-semibold">S-1 Sistem Informasi</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Universitas Trunojoyo Madura</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Tersedia untuk Peluang Karir
              </span>
            </div>

            {/* Main Headline with Dynamic Animated Rotating Role */}
            <div className="space-y-2.5">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Arya Kusuma Dewa
              </h1>
              
              {/* Animated Rotating Role */}
              <div className="h-8 flex items-center overflow-hidden">
                <p 
                  className={`text-lg sm:text-xl font-bold text-indigo-400 font-display transition-all duration-300 transform ${
                    fadeRole ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  }`}
                >
                  {ROLES[currentRoleIndex]}
                </p>
              </div>

              <p className="text-xs sm:text-sm font-medium text-slate-400 font-mono-code flex items-center gap-2">
                <span>System &amp; User Requirements</span>
                <span className="text-slate-600">|</span>
                <span>Troubleshooting Hardware &amp; Jaringan</span>
              </p>
            </div>

            {/* Deep Descriptive Bio */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Lulusan S-1 Sistem Informasi (IPK 3.70) dengan rekam jejak praktis merancang antarmuka sistem web pemerintahan 
              <strong className="text-white font-semibold"> SILAPOR BNN Sidoarjo</strong> (mengintegrasikan 4 divisi operasional, 9 halaman utama, dan modul cetak laporan), 
              serta mengeksekusi strategi digital marketing &amp; web optimization di <strong className="text-white font-semibold">PT Nurul Fikri Cipta Inovasi</strong>. 
              Menguasai perancangan antarmuka di Figma, pemecahan masalah teknis hardware/software, HTML/CSS, WordPress, hingga riset kepuasan pengguna.
            </p>

            {/* Credential highlights - clean unboxed row with hover effects */}
            <div className="py-2.5 border-y border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-2 rounded-lg transition-colors hover:bg-slate-800/40">
                <span className="block text-slate-400">Indeks Prestasi</span>
                <span className="font-semibold text-white text-base font-mono-code tabular-nums text-shimmer">3.70 / 4.00</span>
              </div>
              <div className="p-2 rounded-lg transition-colors hover:bg-slate-800/40">
                <span className="block text-slate-400">Sertifikasi Profesi</span>
                <span className="font-semibold text-white text-sm">BNSP Digital Marketing</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-2 rounded-lg transition-colors hover:bg-slate-800/40">
                <span className="block text-slate-400">Beasiswa Pendidikan</span>
                <span className="font-semibold text-white text-sm">PT Santos Jaya Abadi</span>
              </div>
            </div>

            {/* Action Buttons with Bold Neon Glow */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#proyek"
                className="btn-glow-indigo-bold inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/50 transition-all cursor-pointer"
              >
                <span>Jelajahi Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onSelectProject('silapor-bnn')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-100 bg-slate-900/90 border border-indigo-500/60 hover:bg-slate-800 hover:border-indigo-400 transition-all cursor-pointer shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-4 h-4 text-indigo-400 animate-spin-slow" />
                <span>Demo Interaktif SILAPOR</span>
              </button>

              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all border border-transparent hover:border-slate-700"
              >
                <Mail className="w-4 h-4" />
                <span>Kontak &amp; Diskusi</span>
              </button>
            </div>

            {/* Quick Contact & Verification Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>Desa Trosobo, Kab. Sidoarjo, Jawa Timur</span>
              </span>
              <a 
                href="https://linkedin.com/in/aryakusumadewa00/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                <span>linkedin.com/in/aryakusumadewa00</span>
              </a>
            </div>

          </div>

          {/* Right Column: Exact Monochrome Photo Display with Ultra-Thick Spinning Conic Neon Frame & Floating Badges */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Floating Credential Badge 1 (Top-Right) - Ultra-Thick Neon Border */}
              <div className="absolute -top-5 -right-5 z-20 px-4 py-2 rounded-xl bg-slate-950/95 backdrop-blur-md border-2 border-indigo-400 shadow-[0_0_35px_rgba(99,102,241,0.9)] flex items-center gap-2 animate-float-slow">
                <Award className="w-4 h-4 text-indigo-300" />
                <span className="text-xs font-black text-white font-mono-code tabular-nums tracking-wider">IPK 3.70 / 4.00</span>
              </div>

              {/* Floating Credential Badge 2 (Bottom-Left) - Ultra-Thick Emerald Border */}
              <div className="absolute -bottom-5 -left-5 z-20 px-4 py-2 rounded-xl bg-slate-950/95 backdrop-blur-md border-2 border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.9)] flex items-center gap-2 animate-float-delayed">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span className="text-xs font-bold text-white tracking-wide">SILAPOR BNN Sidoarjo</span>
              </div>

              {/* Radiant Ambient Glow Aura with Ultra Thickness */}
              <div 
                className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-indigo-500/50 via-purple-600/40 to-cyan-400/40 blur-3xl opacity-90 animate-pulse-glow-ultra"
                aria-hidden="true"
              />

              {/* Active Spinning Conic Neon Frame - Thick & Dramatic */}
              <div className="neon-conic-frame relative z-10">
                <div className="neon-conic-inner">
                  {/* Visual Image container - Permanently locked to /aku.jpeg */}
                  <div className="relative aspect-square w-full overflow-hidden bg-black group">
                    <img
                      src={profilePhoto}
                      alt="Arya Kusuma Dewa"
                      className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-[1.03]"
                    />

                    {/* Overlaid Info Strip */}
                    <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80 text-xs shadow-2xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-white text-sm">Arya Kusuma Dewa</p>
                          <p className="text-slate-400 text-[11px]">S-1 Sistem Informasi · Universitas Trunojoyo Madura</p>
                        </div>
                        <span className="px-2.5 py-1 rounded text-[11px] font-extrabold bg-indigo-500/30 text-indigo-300 border border-indigo-400/60 font-mono-code tabular-nums shadow-[0_0_15px_rgba(99,102,241,0.6)]">
                          IPK 3.70
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Sub-card highlights */}
                  <div className="p-3.5 bg-slate-950/95 border-t border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Pengalaman Magang Utama:</span>
                      <span className="text-white font-semibold">BNN Sidoarjo &amp; PT Nurul Fikri</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Fokus Bidang:</span>
                      <span className="text-indigo-300 font-semibold">UI/UX Design, IT Support, Web</span>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                      <button
                        onClick={onOpenCvModal}
                        className="text-xs text-slate-300 hover:text-white flex items-center gap-1 font-semibold transition-colors cursor-pointer"
                      >
                        <Award className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Rincian Pendidikan &amp; Organisasi</span>
                      </button>
                      <a
                        href="https://wa.me/6281324587225?text=Halo%20Arya,%20saya%20tertarik%20dengan%20portofolio%20dan%20pengalaman%20Anda."
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Chat WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
