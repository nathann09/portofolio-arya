import React, { useState } from 'react';
import { FileText, Mail, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCvModal: () => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenCvModal, 
  onOpenContactModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Ringkasan', href: '#ringkasan' },
    { label: 'Statistik', href: '#statistik' },
    { label: 'Keahlian', href: '#keahlian' },
    { label: 'Proyek', href: '#proyek' },
    { label: 'Pengalaman', href: '#pengalaman' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Sertifikasi', href: '#sertifikasi' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0B0F17]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="font-display text-base sm:text-lg font-bold tracking-tight text-white hover:text-indigo-400 transition-colors"
        >
          Arya Kusuma Dewa
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors duration-150 py-1 hover:border-b-2 hover:border-indigo-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenCvModal}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-900/90 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white transition-all whitespace-nowrap cursor-pointer active:scale-95"
            title="Lihat resume CV lengkap Arya Kusuma Dewa"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            <span>Lihat CV</span>
          </button>

          <button
            onClick={onOpenContactModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all shadow-sm shadow-indigo-500/20 whitespace-nowrap cursor-pointer active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenCvModal}
            className="px-2.5 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 rounded-lg sm:hidden flex items-center gap-1"
          >
            <FileText className="w-3 h-3 text-indigo-400" />
            <span>CV</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0B0F17] px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-slate-800/80 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 rounded-lg hover:bg-slate-700"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Buka Dokumen CV Lengkap</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
            >
              <Mail className="w-4 h-4" />
              <span>Hubungi Arya Sekarang</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
