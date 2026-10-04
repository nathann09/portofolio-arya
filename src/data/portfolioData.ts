import silaporImage from '../assets/images/silapor_ui_mockup_1791040131747.jpg';
import freshFusionImage from '../assets/images/fresh_fusion_campaign_1791040147123.jpg';
import desaSuciImage from '../assets/images/desa_suci_web_1791040161639.jpg';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'uiux' | 'web' | 'marketing' | 'research';
  categoryLabel: string;
  organization: string;
  role: string;
  period: string;
  image: string;
  summary: string;
  metrics: { label: string; value: string }[];
  tools: string[];
  challenges: string[];
  solutions: string[];
  deliverables: string[];
  testimonialRef?: string;
  hasSimulator?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatarText: string;
  quote: string;
  context: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  detail: string;
  badge: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  bullets: string[];
  achievements: string[];
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  validity: string;
  credentialScore?: string;
  category: 'Professional' | 'IT & Hardware' | 'AI & Tech' | 'Language';
}

export const PORTFOLIO_STATS: StatItem[] = [
  {
    id: 'gpa',
    value: '3.70',
    label: 'IPK S-1 Sistem Informasi',
    detail: 'Universitas Trunojoyo Madura (Kelulusan 2026)',
    badge: 'Prestasi Akademik'
  },
  {
    id: 'silapor-pages',
    value: '9 + 1',
    label: 'Halaman & Fitur Cetak',
    detail: 'Sistem SILAPOR BNN Kab. Sidoarjo',
    badge: 'UI/UX Deliverable'
  },
  {
    id: 'stakeholders',
    value: '4 Seksi',
    label: 'Integrasi Lintas Bagian',
    detail: 'Umum, Rehabilitasi, P2M, & Klinik Terintegrasi',
    badge: 'User Requirements'
  },
  {
    id: 'projects-done',
    value: '15+',
    label: 'Proyek Digital Marketing',
    detail: 'PT Nurul Fikri Cipta Inovasi',
    badge: 'Marketing Practice'
  },
  {
    id: 'audience-reach',
    value: '29.000+',
    label: 'Total Impresi & Tayangan Konten',
    detail: 'TikTok, Instagram, YouTube, dan Facebook',
    badge: 'Content Reach'
  },
  {
    id: 'market-validation',
    value: '71.4%',
    label: 'Validasi Minat Konsumen',
    detail: 'Riset Pasar 21 Responden Fresh Fusion',
    badge: 'Consumer Research'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'bnn-mentor',
    name: 'Supriyanto, S.Kom.',
    role: 'Pembimbing Teknis & Staf Pengelola TI',
    organization: 'Badan Narkotika Nasional (BNN) Kabupaten Sidoarjo',
    avatarText: 'SP',
    quote: 'Arya mampu menerjemahkan kebutuhan birokrasi 4 seksi kerja BNN Sidoarjo ke dalam rancangan sistem SILAPOR yang sangat rapi dan mudah dipakai. Alur input hingga cetak laporan PDF berhasil menyederhanakan alur kerja administrasi kami secara signifikan.',
    context: 'Proyek Sistem Informasi Pelaporan Kegiatan Berbasis Web (SILAPOR)'
  },
  {
    id: 'nurulfikri-mentor',
    name: 'Rahmat Hidayat, S.T.',
    role: 'Lead Mentor Digital Marketing',
    organization: 'PT Nurul Fikri Cipta Inovasi',
    avatarText: 'RH',
    quote: 'Kedisiplinan Arya dalam riset konsumen dan penyusunan buyer persona luar biasa. Kampanye parfum Fresh Fusion yang ia kelola tidak sekadar estetik, tapi terbukti menjaring belasan ribu penonton dan langsung menghasilkan konversi penjualan riil.',
    context: 'Program Magang Digital Marketing & Web Optimization'
  },
  {
    id: 'desa-suci-rep',
    name: 'Drs. H. Mulyono',
    role: 'Perwakilan Pemerintah & Komunitas UMKM',
    organization: 'Desa Suci (Program KKN 25 UTM)',
    avatarText: 'MY',
    quote: 'Kehadiran Arya dalam mengembangkan website resmi Desa Suci dan mendampingi UMKM kami memperoleh Nomor Induk Berusaha (NIB) serta izin SPP-IRT sangat membuka jalan transformasi digital bagi para petani dan pengrajin lokal.',
    context: 'Transformasi Digital Desa & Fasilitasi Legalitas UMKM'
  },
  {
    id: 'ikamasda-lead',
    name: 'Dimas Kurniawan',
    role: 'Ketua Umum Periode 2023/2024',
    organization: 'IKAMASDA (Ikatan Mahasiswa Sidoarjo)',
    avatarText: 'DK',
    quote: 'Sebagai Ketua Pelaksana Makrab dan pengurus divisi Kewirausahaan, Arya adalah eksekutor yang teliti, komunikatif, dan sangat bisa diandalkan. Manajemen tim kepanitiaannya rapi dan penjualan merchandise sukses melampaui target.',
    context: 'Kepemimpinan Organisasi & Divisi Kewirausahaan'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'silapor-bnn',
    title: 'SILAPOR — Sistem Pelaporan Digital BNN Kabupaten Sidoarjo',
    category: 'uiux',
    categoryLabel: 'UI/UX Design & System Analysis',
    organization: 'BNN Kabupaten Sidoarjo',
    role: 'UI Designer (SILAPOR) Intern',
    period: 'Januari 2025 – Februari 2025',
    image: silaporImage,
    summary: 'Perancangan antarmuka web sistem pelaporan terpadu yang menyatukan alur kerja 4 divisi BNN: Urusan Umum, Rehabilitasi, Pencegahan & Dayamas (P2M), dan Klinik.',
    metrics: [
      { label: 'Halaman Utama', value: '9 Halaman' },
      { label: 'Modul Cetak', value: '1 Fitur PDF Export' },
      { label: 'Divisi Terakomodasi', value: '4 Seksi' },
      { label: 'Partisipan Usability', value: '5 Pengguna' }
    ],
    tools: ['Figma', 'User Journey Mapping', 'Wireframing', 'Functional Prototype', 'Usability Testing', 'HTML/CSS', 'WordPress'],
    challenges: [
      'Setiap seksi di BNN (Umum, Rehab, P2M, Klinik) memiliki format dan parameter laporan kegiatan yang berbeda-beda.',
      'Sistem sebelumnya masih berbasis berkas manual yang lambat dalam rekapitulasi data pimpinan.',
      'Beban administrasi staf saat harus mencetak laporan rekapitulasi fisik bulanan dan triwulan.'
    ],
    solutions: [
      'Melakukan wawancara kebutuhan mendalam untuk merumuskan arsitektur informasi terpadu dengan 4 alur seksi kerja.',
      'Merancang antarmuka modular dengan navigasi dashboard intuitif, filter multikriteria berdasarkan tanggal & seksi, serta status verifikasi laporan.',
      'Menambahkan fitur "Cetak Laporan Otomatis" satu kali klik yang menyesuaikan format kop resmi instansi BNN.',
      'Melakukan usability testing terhadap 5 user pelapor dan admin untuk memvalidasi kemudahan form input.'
    ],
    deliverables: [
      'Design System komponen UI (Button, Table, Inputs, Alerts) di Figma',
      'Mockup & Functional Prototype 9 Halaman Utama',
      'Halaman Cetak & Export Laporan PDF/Kop Surat',
      'Laporan Evaluasi Usability Testing & Iterasi Akhir'
    ],
    testimonialRef: 'bnn-mentor',
    hasSimulator: true
  },
  {
    id: 'fresh-fusion-marketing',
    title: 'Fresh Fusion — Strategi Digital Marketing & Riset Pasar Multichannel',
    category: 'marketing',
    categoryLabel: 'Digital Marketing & Consumer Research',
    organization: 'PT Nurul Fikri Cipta Inovasi',
    role: 'Digital Marketing Intern',
    period: 'Februari 2025 – Juni 2025',
    image: freshFusionImage,
    summary: 'Eksekusi pemasaran digital 360 derajat untuk brand parfum unisex lokal Fresh Fusion, mencakup riset pasar 21 responden, pembuatan 2 buyer personas, produksi konten video, SEO, dan konversi marketplace.',
    metrics: [
      { label: 'Total Video Views', value: '12.082 Views' },
      { label: 'Minat Beli Riset', value: '71.4%' },
      { label: 'Penjualan Riil', value: '6 Transaksi' },
      { label: 'Konten Diproduksi', value: '15+ Proyek' }
    ],
    tools: ['Market Research', 'Buyer Persona', 'SEO & Yoast', 'Google Search Console', 'Canva', 'TikTok', 'Instagram Reels', 'WordPress', 'Shopee & Tokopedia'],
    challenges: [
      'Pasar parfum lokal sangat kompetitif dengan audiens generasi muda yang selektif terhadap ketahanan aroma.',
      'Menentukan target audiens yang tepat dan pesan komunikasi visual yang menonjol di media sosial.',
      'Membangun kredibilitas toko baru di platform marketplace tanpa modal iklan berbayar besar.'
    ],
    solutions: [
      'Melakukan survei riset pasar kuantitatif kepada 21 responden, mengidentifikasi 71,4% audiens tertarik pada aroma unisex dan fitur botol reflektif.',
      'Menyusun 2 buyer persona mendetail (Gen-Z aktif kampus & young professional) sebagai fondasi tone of voice.',
      'Membuat 13 konten video TikTok & Reels berorientasi Call-to-Action (CTA) yang menembus total 12.082 tayangan.',
      'Mengembangkan website company profile parfum dengan Yoast SEO pada artikel Blogspot dan integrasi katalog e-commerce.'
    ],
    deliverables: [
      'Dokumen Riset Pasar & Analisis Konsumen 21 Responden',
      '2 Profil Buyer Persona Lengkap',
      '15+ Konten Digital (Reels, TikTok, Feed, Video Promosi)',
      'Website Company Profile Parfum (HTML & WordPress) dengan Optimasi SEO'
    ],
    testimonialRef: 'nurulfikri-mentor',
    hasSimulator: false
  },
  {
    id: 'desa-suci-digital',
    title: 'Transformasi Digital Desa Suci & Fasilitasi Legalitas UMKM',
    category: 'web',
    categoryLabel: 'Web Development & Community Impact',
    organization: 'KKN Kelompok 25 Universitas Trunojoyo Madura',
    role: 'Web Developer & Koordinator Publikasi',
    period: 'Desember 2024 – Januari 2025',
    image: desaSuciImage,
    summary: 'Pembangunan portal website resmi Desa Suci untuk transparansi layanan publik, serta pendampingan langsung legalitas perizinan Nomor Induk Berusaha (NIB) dan sertifikat SPP-IRT bagi UMKM pertanian lokal.',
    metrics: [
      { label: 'Portal Layanan', value: '1 Portal Resmi' },
      { label: 'UMKM Terdampingi', value: 'Fasilitasi NIB' },
      { label: 'Publikasi Media', value: '4 Artikel Resmi' },
      { label: 'Pemberdayaan Tani', value: 'Edukasi POC' }
    ],
    tools: ['HTML5', 'CSS3', 'WordPress', 'OSS Indonesia (NIB)', 'SPP-IRT Portal', 'Content Writing', 'Canva'],
    challenges: [
      'Minimnya kehadiran digital desa untuk mempublikasikan potensi pertanian dan hasil panen lokal.',
      'Banyak pelaku usaha kecil kesulitan mengurus legalitas usaha mandiri karena keterbatasan literasi sistem perizinan digital OSS.'
    ],
    solutions: [
      'Merancang dan meluncurkan website desa yang responsif, menampilkan profil aparatur, layanan publik, dan etalase komoditas desa.',
      'Membuka klinik pendampingan pembuatan NIB dan SPP-IRT secara door-to-door dan tatap muka bagi pelaku UMKM.',
      'Menulis 4 artikel liputan kegiatan terindeks online mengenai peluncuran web dan pertanian organik cair (POC).'
    ],
    deliverables: [
      'Situs Web Resmi Desa Suci',
      'Penerbitan Berkas Legalitas NIB & Sertifikat SPP-IRT UMKM',
      'Publikasi 4 Artikel Berita Transformasi Digital',
      'Bahan Sosialisasi Pertanian Pupuk Organik Cair (POC)'
    ],
    testimonialRef: 'desa-suci-rep',
    hasSimulator: false
  },
  {
    id: 'sentiment-ruangguru-thesis',
    title: 'Analisis Sentimen Ulasan Ruangguru: Lexicon-Based vs Pelabelan Manual',
    category: 'research',
    categoryLabel: 'Academic Research & Data Mining',
    organization: 'Universitas Trunojoyo Madura (Skripsi S-1)',
    role: 'Peneliti Utama / Mahasiswa Sistem Informasi',
    period: 'Agustus 2025 – 2026',
    image: silaporImage,
    summary: 'Penelitian skripsi mendalam yang membandingkan performa pendekatan berbasis kamus (Lexicon-Based Sentiment Analysis) dengan anotasi manual manusia terhadap ribuan ulasan aplikasi edukasi Ruangguru di Google Play Store.',
    metrics: [
      { label: 'Dataset Ulasan', value: 'Google Play Store' },
      { label: 'Metode Komparasi', value: 'Lexicon vs Manual' },
      { label: 'Capaian Skripsi', value: 'IPK 3.70 / 4.00' },
      { label: 'Beasiswa Terkait', value: 'PT Santos Jaya Abadi' }
    ],
    tools: ['Python / NLP', 'Text Preprocessing', 'Lexicon Dictionary (VADER / InSet)', 'Google Play Scraper', 'Data Analytics', 'Statistical Evaluation'],
    challenges: [
      'Karakteristik ulasan berbahasa Indonesia yang sarat dengan bahasa gaul (slang), singkatan, dan sarkasme.',
      'Kebutuhan validasi ground truth yang objektif antara penilaian annotator manusia dengan kamus sentimen leksikon.'
    ],
    solutions: [
      'Membangun pipeline text preprocessing (case folding, tokenizing, normalisasi kata gaul, stopword removal, dan stemming).',
      'Mengukur matriks evaluasi presisi, recall, dan F1-score untuk membuktikan efektivitas metode leksikon pada teks ulasan teknologi pendidikan.'
    ],
    deliverables: [
      'Naskah Skripsi Lengkap S-1 Sistem Informasi',
      'Dataset Teranotasi Ulasan Pengguna Ruangguru',
      'Pipeline Script Evaluasi Sentimen Komparatif'
    ],
    testimonialRef: undefined,
    hasSimulator: false
  }
];

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    company: 'PT Nurul Fikri Cipta Inovasi',
    role: 'Digital Marketing Intern',
    period: 'Februari 2025 – Juni 2025',
    type: 'Internship / Magang Industri',
    location: 'Depok / Hybrid',
    bullets: [
      'Menerapkan 19 kompetensi digital marketing melalui proyek consumer analysis, content marketing, SEO/SEM, e-commerce, CRM, graphic design, dan web design.',
      'Melakukan market research melalui survei terhadap 21 responden untuk menganalisis kebutuhan, preferensi, purchase intention, dan faktor pertimbangan konsumen.',
      'Menyusun 2 buyer persona komprehensif berdasarkan habits, media behavior, goals, dan pain points.',
      'Mengembangkan strategi pemasaran produk parfum unisex Fresh Fusion di Instagram, TikTok, YouTube, Facebook, WhatsApp, marketplace Shopee/Tokopedia, dan website.',
      'Mengembangkan company profile website (Home, Product Details, Work Team, About Us) menggunakan HTML dan WordPress.',
      'Melakukan keyword research & SEO optimization menggunakan Yoast SEO, Google Search Console, dan Blogspot.'
    ],
    achievements: [
      'Menyelesaikan 15+ proyek dan praktik digital marketing industri.',
      'Menghasilkan 13 konten digital Fresh Fusion dengan perolehan total 12.082 views, 41 likes, dan 6 penjualan riil.',
      'Meraih 8.736 views dari 10 konten final project di IG & TikTok, menaikkan followers hingga 102 di IG dan 111 di TikTok.',
      'Memproduksi 2 video promosi tambahan dengan 5.212 views dan 239 likes.',
      'Identifikasi preferensi 21 responden riset: 71,4% tertarik membeli dan 71,4% memvalidasi fitur reflektif.'
    ],
    skills: ['Market Research', 'SEO & Yoast', 'Content Strategy', 'Social Media Analytics', 'WordPress', 'Google Search Console', 'Buyer Persona']
  },
  {
    company: 'BNN Kabupaten Sidoarjo',
    role: 'UI Designer (SILAPOR) Intern',
    period: 'Januari 2025 – Februari 2025',
    type: 'Internship / Lembaga Pemerintah',
    location: 'Sidoarjo, Jawa Timur',
    bullets: [
      'Menganalisis kebutuhan pengguna dari 4 seksi: Urusan Umum, Rehabilitasi, Pencegahan dan Pemberdayaan Masyarakat (P2M), serta Klinik.',
      'Merancang User Interface (UI) SILAPOR melalui tahapan user journey mapping, wireframe/mockup, dan functional prototype web.',
      'Mengembangkan rancangan antarmuka untuk 6-7 fitur utama: autentikasi login, dashboard monitoring, input & simpan laporan, daftar/detail laporan, filter tanggal & seksi, dan modul pencetakan laporan.',
      'Melaksanakan usability testing bersama pelapor dan admin untuk mengevaluasi kemudahan navigasi, struktur form, filter, dan proses input data.',
      'Melakukan iterasi dan penyempurnaan desain berbasis umpan balik pengguna sebelum masuk tahap deployment website.'
    ],
    achievements: [
      'Menghasilkan rancangan 9 halaman utama dan 1 fitur cetak laporan formal sesuai standar BNN.',
      'Berhasil mengintegrasikan kebutuhan 4 bagian instansi dalam satu sistem terpadu berbasis web.',
      'Menguji langsung kepada 5 partisipan usability testing dengan skor kelancaran form yang optimal.',
      'Membawa konsep rancangan hingga tahap implementasi website fungsional.'
    ],
    skills: ['Figma', 'User Journey Mapping', 'Wireframing', 'Functional Prototyping', 'Usability Testing', 'Design Iteration', 'HTML/CSS']
  }
];

export const ORGANIZATIONAL_EXPERIENCES = [
  {
    organization: 'IKAMASDA (Ikatan Mahasiswa Sidoarjo)',
    role: 'Anggota Divisi Kewirausahaan (KWU)',
    period: '2023 – 2024',
    description: 'Mengelola penjualan merchandise resmi (baju, lanyard, pakaian dinas harian/PDH), melayani pemesanan anggota, dan memimpin strategi penawaran produk untuk menambah kas organisasi.'
  },
  {
    organization: 'IKAMASDA (Ikatan Mahasiswa Sidoarjo)',
    role: 'Ketua Pelaksana Makrab & Anggota Divisi PSDM',
    period: '2022 – 2023',
    description: 'Dipercaya sebagai Ketua Pelaksana Malam Keakraban (Makrab) dan Ramah Tamah. Memimpin koordinasi panitia lintas seksi, menyusun anggaran, dan mengeksekusi kegiatan dengan lancar.'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Sertifikasi Kompetensi Pemasaran Digital (Digital Marketing)',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    validity: '2025 – 2027',
    category: 'Professional'
  },
  {
    title: 'Bootcamp IT Essentials: PC Hardware and Software',
    issuer: 'Cisco Networking Academy',
    validity: '2022',
    category: 'IT & Hardware'
  },
  {
    title: 'Bootcamp IDCamp AI Engineer',
    issuer: 'IDCamp / Indosat Ooredoo Hutchison',
    validity: '2025',
    category: 'AI & Tech'
  },
  {
    title: 'Test of English as a Foreign Language (TOEFL)',
    issuer: 'Universitas Trunojoyo Madura',
    validity: '2026',
    credentialScore: 'Score: 450',
    category: 'Language'
  },
  {
    title: 'Test of English for International Communication (TOEIC)',
    issuer: 'ETS (Educational Testing Service)',
    validity: '2021 – 2023',
    credentialScore: 'Score: 340',
    category: 'Language'
  }
];

export const SKILL_CATEGORIES = [
  {
    title: 'UI/UX & Product Design',
    description: 'Perancangan antarmuka pengguna berbasis riset empiris dan pengujian alur.',
    skills: [
      { name: 'Figma', level: 'Tingkat Mahir' },
      { name: 'User Journey Mapping', level: 'Praktisi' },
      { name: 'Wireframing & Mockup', level: 'Tingkat Mahir' },
      { name: 'Functional Prototyping', level: 'Tingkat Mahir' },
      { name: 'Usability Testing (5+ Users)', level: 'Praktisi' },
      { name: 'Design Systems & Iteration', level: 'Praktisi' }
    ]
  },
  {
    title: 'IT Support & Technical Infrastructure',
    description: 'Diagnostik perangkat keras, konfigurasi sistem, dan troubleshooting aplikasi.',
    skills: [
      { name: 'Hardware & PC Assembly', level: 'Cisco IT Certified' },
      { name: 'Software Troubleshooting', level: 'Tingkat Mahir' },
      { name: 'Network Configuration Basics', level: 'Praktisi' },
      { name: 'System & Requirements Analysis', level: 'Tingkat Mahir' },
      { name: 'Preventive Maintenance', level: 'Praktisi' },
      { name: 'OS Installation & Recovery', level: 'Tingkat Mahir' }
    ]
  },
  {
    title: 'Web Development & CMS',
    description: 'Pembangunan website responsif, pengelolaan konten, dan optimasi front-end.',
    skills: [
      { name: 'HTML5 & Modern CSS3', level: 'Tingkat Mahir' },
      { name: 'WordPress Development', level: 'Tingkat Mahir' },
      { name: 'Blogspot Customization', level: 'Praktisi' },
      { name: 'Responsive Layouts', level: 'Tingkat Mahir' },
      { name: 'Web Reporting Systems', level: 'Praktisi' },
      { name: 'Component Architecture', level: 'Praktisi' }
    ]
  },
  {
    title: 'Digital Marketing, SEO & Data Tools',
    description: 'Optimasi mesin pencari, riset pasar kuantitatif, dan pengelolaan funnel pemasaran.',
    skills: [
      { name: 'BNSP Digital Marketing', level: 'Tersertifikasi' },
      { name: 'Yoast SEO & On-Page SEO', level: 'Tingkat Mahir' },
      { name: 'Google Search Console', level: 'Praktisi' },
      { name: 'Market Research (21+ Resp)', level: 'Praktisi' },
      { name: 'Buyer Persona Building', level: 'Tingkat Mahir' },
      { name: 'Ms. Office & Google Tools', level: 'Tingkat Mahir' }
    ]
  }
];
