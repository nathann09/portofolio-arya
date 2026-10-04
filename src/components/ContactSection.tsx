import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Check, MessageSquare, Copy } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [topic, setTopic] = useState('Peluang Kerja / Karir');
  const [message, setMessage] = useState('');

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `Halo Arya Kusuma Dewa,\n\nNama saya: ${senderName || 'Rekan'}\nTopik: ${topic}\nPesan: ${message || 'Saya tertarik dengan profil portofolio Anda dan ingin berdiskusi lebih lanjut.'}`;
    const url = `https://wa.me/6281324587225?text=${encodeURIComponent(formattedText)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="kontak" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
          Inisiasi Kolaborasi
        </p>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1 text-balance">
          Hubungi Arya Kusuma Dewa
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          Terbuka untuk tawaran posisi penuh waktu (Full-Time), kontrak proyek UI/UX Design, IT Support Specialist, maupun pengembangan web.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Direct Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] text-slate-400 font-mono-code block">Email Resmi</span>
                <a href="mailto:nathannsyahputra@gmail.com" className="text-sm font-semibold text-white hover:text-indigo-300">
                  nathannsyahputra@gmail.com
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy('nathannsyahputra@gmail.com', 'email')}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Salin email"
            >
              {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* WhatsApp / Phone Card */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] text-slate-400 font-mono-code block">WhatsApp / Telepon</span>
                <a href="tel:+6281324587225" className="text-sm font-semibold text-white hover:text-emerald-300">
                  (+62) 813-2458-7225
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy('+6281324587225', 'phone')}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Salin nomor telepon"
            >
              {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* LinkedIn Card */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] text-slate-400 font-mono-code block">Profil LinkedIn</span>
                <a 
                  href="https://linkedin.com/in/aryakusumadewa00/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-sm font-semibold text-white hover:text-sky-300"
                >
                  linkedin.com/in/aryakusumadewa00/
                </a>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] text-slate-400 font-mono-code block">Domisili</span>
              <p className="text-sm font-semibold text-white">
                Desa Trosobo, Kab. Sidoarjo, Jawa Timur
              </p>
              <p className="text-xs text-slate-400">
                Siap untuk penempatan kerja di Sidoarjo, Surabaya, maupun Remote/Hybrid.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Instant Message Builder */}
        <div className="lg:col-span-7">
          <form 
            onSubmit={handleSendWhatsApp}
            className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4"
          >
            <div className="space-y-1 pb-3 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white font-display">
                Kirim Pesan Langsung via WhatsApp
              </h3>
              <p className="text-xs text-slate-400">
                Formulir ini akan langsung membuka chat WhatsApp dengan pesan terformat rapi ke nomor Arya Kusuma Dewa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Nama Anda / Perusahaan:
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Contoh: HRD PT Teknologi / Ibu Dian"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Kebutuhan / Topik:
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="Peluang Kerja / Karir Full-Time">Peluang Kerja / Karir Full-Time</option>
                  <option value="Proyek UI/UX Design & Prototyping">Proyek UI/UX Design &amp; Prototyping</option>
                  <option value="Pengembangan Website / IT Support">Pengembangan Website / IT Support</option>
                  <option value="Konsultasi Digital Marketing & SEO">Konsultasi Digital Marketing &amp; SEO</option>
                  <option value="Diskusi Umum / Networking">Diskusi Umum / Networking</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Isi Pesan:
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan gambaran proyek, jadwal wawancara, atau pertanyaan Anda..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[11px] text-slate-500 font-mono-code">
                Nomor Tujuan: +62 813-2458-7225
              </span>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-600/20 cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Buka Percakapan WhatsApp</span>
              </button>
            </div>
          </form>
        </div>

      </div>

    </section>
  );
};
