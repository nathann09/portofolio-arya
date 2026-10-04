import React, { useState } from 'react';
import { X, Printer, Shield, CheckCircle, Search, Filter, Plus, FileText, ArrowRight, Building2, HeartPulse, ShieldAlert, Stethoscope } from 'lucide-react';

interface SilaporSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MockReport {
  id: string;
  division: 'Urusan Umum' | 'Rehabilitasi' | 'P2M' | 'Klinik';
  title: string;
  reporter: string;
  date: string;
  status: 'Terverifikasi' | 'Menunggu Review' | 'Diproses';
  summary: string;
}

export const SilaporSimulatorModal: React.FC<SilaporSimulatorModalProps> = ({ isOpen, onClose }) => {
  const [selectedDivision, setSelectedDivision] = useState<string>('Semua');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showPrintView, setShowPrintView] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'form' | 'usability'>('dashboard');

  // Form simulation state
  const [newTitle, setNewTitle] = useState('');
  const [newDivision, setNewDivision] = useState<'Urusan Umum' | 'Rehabilitasi' | 'P2M' | 'Klinik'>('P2M');
  const [newReporter, setNewReporter] = useState('');
  const [newSummary, setNewSummary] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const initialReports: MockReport[] = [
    {
      id: 'REP-BNN-2025-001',
      division: 'P2M',
      title: 'Penyuluhan Bahaya Narkoba Pelajar SMA Negeri 1 Sidoarjo',
      reporter: 'Bripka Hendra (Seksi P2M)',
      date: '2025-01-20',
      status: 'Terverifikasi',
      summary: 'Sosialisasi pencegahan narkoba dihadiri 120 siswa. Materi mencakup bahaya narkotika dan mekanisme pelaporan rahasia.'
    },
    {
      id: 'REP-BNN-2025-002',
      division: 'Rehabilitasi',
      title: 'Asesmen Medis & Konseling Adiksi Rawat Jalan Sesi II',
      reporter: 'Ns. Siti Fatimah, S.Kep.',
      date: '2025-01-24',
      status: 'Terverifikasi',
      summary: 'Pemeriksaan rutin dan terapi psikososial terhadap 4 klien rehabilitasi sukarela dalam kondisi stabil.'
    },
    {
      id: 'REP-BNN-2025-003',
      division: 'Klinik',
      title: 'Penerbitan Surat Keterangan Hasil Pemeriksaan Narkoba (SKHPN)',
      reporter: 'dr. Wahyu Pratama',
      date: '2025-01-28',
      status: 'Terverifikasi',
      summary: 'Layanan rapid urine test 6 parameter untuk 15 pemohon instansi publik dengan hasil non-reaktif.'
    },
    {
      id: 'REP-BNN-2025-004',
      division: 'Urusan Umum',
      title: 'Rekapitulasi Inventarisasi Perangkat TI & Jaringan Kantor',
      reporter: 'Staf Subbag Umum BNN',
      date: '2025-02-02',
      status: 'Terverifikasi',
      summary: 'Pengecekan fisik 18 unit PC kerja, access point, dan maintenance server lokal BNN Kabupaten Sidoarjo.'
    },
    {
      id: 'REP-BNN-2025-005',
      division: 'P2M',
      title: 'Tes Urine Deteksi Dini di Lingkungan Kerja BUMD Sidoarjo',
      reporter: 'Tim Terpadu P2M',
      date: '2025-02-08',
      status: 'Menunggu Review',
      summary: 'Pemeriksaan urine terjadwal bagi 85 karyawan operasional untuk pencegahan dini penyalahgunaan zat.'
    }
  ];

  const [reports, setReports] = useState<MockReport[]>(initialReports);

  if (!isOpen) return null;

  const filteredReports = reports.filter((rep) => {
    const matchesDiv = selectedDivision === 'Semua' || rep.division === selectedDivision;
    const matchesSearch = rep.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          rep.reporter.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          rep.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDiv && matchesSearch;
  });

  const handleAddReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newReporter) return;

    const newEntry: MockReport = {
      id: `REP-BNN-2025-00${reports.length + 1}`,
      division: newDivision,
      title: newTitle,
      reporter: newReporter,
      date: new Date().toISOString().split('T')[0],
      status: 'Terverifikasi',
      summary: newSummary || 'Laporan kegiatan telah diverifikasi oleh koordinator seksi kerja.'
    };

    setReports([newEntry, ...reports]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setNewTitle('');
      setNewReporter('');
      setNewSummary('');
      setActiveTab('dashboard');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl my-6 bg-[#0E1524] border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0B101D]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
              BNN
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white font-display">
                  SILAPOR Interactive Prototype
                </h3>
                <span className="text-[11px] font-mono-code text-indigo-400">
                  Desain UI oleh Arya Kusuma Dewa
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Sistem Pelaporan Kegiatan Terintegrasi 4 Seksi Kerja BNN Kabupaten Sidoarjo
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPrintView(!showPrintView)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors"
              title="Pratinjau modul cetak laporan resmi"
            >
              <Printer className="w-3.5 h-3.5 text-indigo-400" />
              <span>{showPrintView ? 'Tutup Pratinjau Cetak' : 'Fitur Cetak Laporan'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Tutup Simulator"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-slate-800 bg-[#0B101D]/60 text-xs">
          <button
            onClick={() => { setActiveTab('dashboard'); setShowPrintView(false); }}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'dashboard' && !showPrintView
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Dashboard &amp; Rekapitulasi 4 Seksi
          </button>
          <button
            onClick={() => { setActiveTab('form'); setShowPrintView(false); }}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'form' && !showPrintView
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Form Input Pelaporan Baru
          </button>
          <button
            onClick={() => { setActiveTab('usability'); setShowPrintView(false); }}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'usability'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Hasil Usability Testing (5 Pengguna)
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Printable Report View Simulator */}
          {showPrintView ? (
            <div className="p-6 sm:p-8 bg-white text-slate-900 rounded-xl shadow-lg border border-slate-300 font-sans space-y-6">
              
              {/* Kop Surat Resmi Format BNN */}
              <div className="border-b-2 border-slate-900 pb-4 flex items-center justify-between">
                <div className="text-center w-full">
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-700">BADAN NARKOTIKA NASIONAL REPUBLIK INDONESIA</p>
                  <h4 className="text-base sm:text-lg font-extrabold text-slate-900 uppercase">BADAN NARKOTIKA NASIONAL KABUPATEN SIDOARJO</h4>
                  <p className="text-[11px] text-slate-600">Jl. Pahlawan No. 01, Sidoarjo, Jawa Timur · Telp: (031) 895-xxxx</p>
                  <p className="text-xs font-semibold text-slate-800 uppercase mt-2 underline">REKAPITULASI LAPORAN KEGIATAN OPERASIONAL (SILAPOR)</p>
                </div>
              </div>

              <div className="flex justify-between text-xs text-slate-700 border-b border-slate-200 pb-2">
                <span>Filter Bagian: <strong>{selectedDivision}</strong></span>
                <span>Tanggal Cetak: <strong>{new Date().toLocaleDateString('id-ID', { dateStyle: 'long' })}</strong></span>
                <span>Oleh: <strong>Admin SILAPOR BNN Sidoarjo</strong></span>
              </div>

              {/* Table print format */}
              <table className="w-full text-left text-xs border border-slate-300">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300 text-slate-800 font-semibold">
                    <th className="p-2 border-r border-slate-300">No. Registrasi</th>
                    <th className="p-2 border-r border-slate-300">Seksi Kerja</th>
                    <th className="p-2 border-r border-slate-300">Nama Kegiatan / Agenda</th>
                    <th className="p-2 border-r border-slate-300">Pelapor</th>
                    <th className="p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReports.map((r, i) => (
                    <tr key={r.id} className="border-b border-slate-200 text-slate-700">
                      <td className="p-2 font-mono font-medium border-r border-slate-300">{r.id}</td>
                      <td className="p-2 border-r border-slate-300 font-medium">{r.division}</td>
                      <td className="p-2 border-r border-slate-300">{r.title}</td>
                      <td className="p-2 border-r border-slate-300">{r.reporter}</td>
                      <td className="p-2 font-medium">{r.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="pt-4 flex justify-between items-end text-xs text-slate-700">
                <div>
                  <p className="text-[11px] text-slate-500">Dicetak melalui modul Cetak Laporan SILAPOR perancangan Arya Kusuma Dewa.</p>
                </div>
                <div className="text-center space-y-8">
                  <p>Mengetahui,</p>
                  <p className="font-bold border-t border-slate-400 pt-1">Kepala BNN Kabupaten Sidoarjo</p>
                </div>
              </div>
            </div>
          ) : activeTab === 'dashboard' ? (
            
            <div className="space-y-6">
              
              {/* 4 Division Status Cards (Accommodating 4 User Segments) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  onClick={() => setSelectedDivision('Urusan Umum')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedDivision === 'Urusan Umum'
                      ? 'bg-indigo-950/40 border-indigo-500 text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <Building2 className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-mono-code tabular-nums text-slate-400">
                      {reports.filter(r => r.division === 'Urusan Umum').length} Lap.
                    </span>
                  </div>
                  <h4 className="text-xs font-bold">Urusan Umum</h4>
                  <p className="text-[10px] text-slate-400">Aset, logistik &amp; TI</p>
                </button>

                <button
                  onClick={() => setSelectedDivision('Rehabilitasi')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedDivision === 'Rehabilitasi'
                      ? 'bg-indigo-950/40 border-indigo-500 text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <HeartPulse className="w-4 h-4 text-rose-400" />
                    <span className="text-xs font-mono-code tabular-nums text-slate-400">
                      {reports.filter(r => r.division === 'Rehabilitasi').length} Lap.
                    </span>
                  </div>
                  <h4 className="text-xs font-bold">Rehabilitasi</h4>
                  <p className="text-[10px] text-slate-400">Asesmen &amp; rawat jalan</p>
                </button>

                <button
                  onClick={() => setSelectedDivision('P2M')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedDivision === 'P2M'
                      ? 'bg-indigo-950/40 border-indigo-500 text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <ShieldAlert className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono-code tabular-nums text-slate-400">
                      {reports.filter(r => r.division === 'P2M').length} Lap.
                    </span>
                  </div>
                  <h4 className="text-xs font-bold">Seksi P2M</h4>
                  <p className="text-[10px] text-slate-400">Sosialisasi &amp; cegah dini</p>
                </button>

                <button
                  onClick={() => setSelectedDivision('Klinik')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedDivision === 'Klinik'
                      ? 'bg-indigo-950/40 border-indigo-500 text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <Stethoscope className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono-code tabular-nums text-slate-400">
                      {reports.filter(r => r.division === 'Klinik').length} Lap.
                    </span>
                  </div>
                  <h4 className="text-xs font-bold">Klinik Pratama</h4>
                  <p className="text-[10px] text-slate-400">Tes urine &amp; SKHPN</p>
                </button>
              </div>

              {/* Filter and Search Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 flex-1">
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Cari judul laporan, pelapor, atau nomor registrasi..."
                    className="w-full bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedDivision('Semua')}
                    className={`px-2.5 py-1 text-xs rounded transition-colors ${
                      selectedDivision === 'Semua' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Semua ({reports.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('form')}
                    className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-white bg-indigo-600 rounded hover:bg-indigo-500"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Buat Laporan</span>
                  </button>
                </div>
              </div>

              {/* Reports List Table */}
              <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-900/50">
                <div className="divide-y divide-slate-800/80">
                  {filteredReports.map((report) => (
                    <div key={report.id} className="p-4 hover:bg-slate-800/40 transition-colors space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono-code">
                            <span className="text-indigo-400 font-semibold">{report.id}</span>
                            <span>·</span>
                            <span>{report.division}</span>
                            <span>·</span>
                            <span>{report.date}</span>
                          </div>
                          <h5 className="text-sm font-semibold text-white">
                            {report.title}
                          </h5>
                        </div>
                        <span className="text-xs font-medium text-emerald-400 shrink-0">
                          {report.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300">
                        {report.summary}
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                        <span>Pelapor: <strong className="text-slate-300 font-medium">{report.reporter}</strong></span>
                        <span className="text-slate-500">Tersimpan dalam database web SILAPOR</span>
                      </div>
                    </div>
                  ))}
                  {filteredReports.length === 0 && (
                    <div className="p-8 text-center text-xs text-slate-400">
                      Tidak ada laporan yang sesuai dengan kriteria filter saat ini.
                    </div>
                  )}
                </div>
              </div>

            </div>

          ) : activeTab === 'form' ? (
            
            <form onSubmit={handleAddReport} className="space-y-4 max-w-2xl mx-auto p-6 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="border-b border-slate-800 pb-3">
                <h4 className="text-base font-bold text-white">Input Laporan Kegiatan SILAPOR</h4>
                <p className="text-xs text-slate-400">
                  Simulasikan bagaimana form input yang dirancang Arya mempermudah staf 4 seksi BNN mengisi data secara cepat tanpa hambatan birokrasi.
                </p>
              </div>

              {submitSuccess && (
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Laporan berhasil disimpan! Mengalihkan ke dashboard...</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Pilih Seksi / Bagian Kerja:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['Urusan Umum', 'Rehabilitasi', 'P2M', 'Klinik'] as const).map((div) => (
                    <button
                      key={div}
                      type="button"
                      onClick={() => setNewDivision(div)}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                        newDivision === div
                          ? 'bg-indigo-600 border-indigo-500 text-white'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {div}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Nama / Agenda Kegiatan:
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Contoh: Sosialisasi Bahaya Zat Adiktif di Komunitas Karang Taruna"
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Nama Petugas Pelapor:
                </label>
                <input
                  type="text"
                  required
                  value={newReporter}
                  onChange={(e) => setNewReporter(e.target.value)}
                  placeholder="Contoh: Aiptu Triyono (Seksi P2M)"
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Ringkasan Pelaksanaan &amp; Output Kegiatan:
                </label>
                <textarea
                  rows={3}
                  value={newSummary}
                  onChange={(e) => setNewSummary(e.target.value)}
                  placeholder="Rincian hasil kegiatan, jumlah audiens, dan dokumentasi terkait..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('dashboard')}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
                >
                  Simpan Laporan ke Sistem
                </button>
              </div>
            </form>

          ) : (
            
            /* Usability Testing Insights Tab */
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/60 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Evaluasi Usability Testing dengan 5 Partisipan Riil BNN</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pada tahap pengujian desain SILAPOR, Arya menguji prototipe fungsional kepada 5 pengguna yang terdiri dari staf pelapor dan admin seksi di BNN Kabupaten Sidoarjo. Pengujian berfokus pada kemudahan navigasi, kecepatan pengisian form, fungsionalitas filter data, dan akurasi modul cetak laporan.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono-code text-indigo-400">Uji 1: Navigasi Antarmuka</span>
                  <h5 className="text-sm font-semibold text-white">Struktur 9 Halaman Teratur</h5>
                  <p className="text-xs text-slate-400">
                    Pengguna dapat berpindah antar modul dalam &lt; 2 klik tanpa mengalami disorientasi menu.
                  </p>
                  <span className="text-[11px] text-emerald-400 block pt-1">Hasil: 100% Task Completed</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono-code text-indigo-400">Uji 2: Pengisian Form</span>
                  <h5 className="text-sm font-semibold text-white">Kompleksitas Disederhanakan</h5>
                  <p className="text-xs text-slate-400">
                    Waktu input berkurang rata-rata 60% dibanding pengisian berkas spreadsheet manual sebelumnya.
                  </p>
                  <span className="text-[11px] text-emerald-400 block pt-1">Hasil: Efisiensi Meningkat Signifikan</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono-code text-indigo-400">Uji 3: Filter &amp; Modul Cetak</span>
                  <h5 className="text-sm font-semibold text-white">Standar Kop Surat Resmi</h5>
                  <p className="text-xs text-slate-400">
                    Export format siap cetak memenuhi format pelaporan atasan langsung dan arsip inspektorat.
                  </p>
                  <span className="text-[11px] text-emerald-400 block pt-1">Hasil: Diterima &amp; Diterapkan</span>
                </div>
              </div>
            </div>

          )}

        </div>

        {/* Modal Footer note */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#0B101D] flex items-center justify-between text-xs text-slate-400">
          <span>Studi Kasus Resmi: UI Designer Intern BNN Kabupaten Sidoarjo (Jan – Feb 2025)</span>
          <button
            onClick={onClose}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Tutup Simulator
          </button>
        </div>

      </div>
    </div>
  );
};
