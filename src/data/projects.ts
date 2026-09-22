export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectScreenshot {
  title: string;
  imgSrc: string;
  caption: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  imgSrc: string;
  videoSrc?: string;
  link: string;
  linkText?: string;
  category: "web" | "android";
  badge: string;
  techStack: string[];
  githubLink?: string;

  // Header Proyek fields
  date: string;
  role: string;

  // Ringkasan & Masalah (Overview & Problem Statement)
  overview: string;
  problem: string;
  solution: string;

  // Tech Stack & Arsitektur (Bagian Penting untuk User IT)
  techArchitecture: {
    frontendOrMobile: string;
    backendOrDatabase: string;
    architectureOrPattern: string;
  };

  // Tampilan & Demonstrasi (Showcase Feature)
  screenshots?: ProjectScreenshot[];

  // Fitur Kunci & Tantangan Teknis (Technical Highlights)
  challenges?: ProjectChallenge[];
  features?: { title: string; desc: string }[];

  // Spesifikasi detail tambahan
  architecture?: { label: string; value: string }[];
  highlights?: { title: string; desc: string }[];
}

export const projectsList: ProjectItem[] = [
  // Proyek 1: AcheeZ
  {
    id: "acheez",
    title: "AcheeZ — Manajemen Keuangan Pribadi",
    shortTitle: "AcheeZ",
    description:
      "Aplikasi pencatat keuangan modern untuk memantau pemasukan, pengeluaran, dan saldo di berbagai rekening (Bank, E-Wallet, Uang Tunai) secara otomatis dan instan.",
    imgSrc: "/projects/acheez.png",
    videoSrc: "/projects/acheez-demo-compressed.mp4",
    link: "https://acheez.pages.dev/",
    linkText: "Live Website",
    category: "web",
    badge: "Website",
    date: "Desember 2024 – Januari 2025",
    role: "Full-Stack Developer (Solo Developer)",
    techStack: [
      "React",
      "Tailwind CSS",
      "Zustand",
      "Recharts",
      "Hono.js",
      "Cloudflare Workers",
      "Cloudflare D1 Database",
    ],
    githubLink: "https://github.com/Faisalt28/react-financial-management",
    overview:
      "Banyak orang malas mencatat keuangan karena dua hal:\n1. Aplikasi terasa lambat saat dibuka di kasir/toko.\n2. Repot menghitung manual saat memindahkan uang antar-rekening (misal: isi saldo Gopay dari Bank BCA, saldo sering tidak sinkron).\n\nAcheeZ dibuat agar proses pencatatan berlangsung instan dan saldo di semua rekening otomatis terhitung rapi tanpa perlu hitung ulang manual.\n\n*Catatan: Seluruh data rekening dan mutasi saldo diinput secara manual oleh pengguna (bukan sinkronisasi langsung dengan API perbankan).",
    problem:
      "Aplikasi keuangan yang lambat dibuka di kasir toko serta kerumitan menghitung manual saat transfer antar-rekening yang rawan menyebabkan saldo tidak sinkron.",
    solution:
      "AcheeZ memastikan proses pencatatan berlangsung instan dan saldo di semua rekening otomatis terhitung rapi secara atomik tanpa perlu hitung ulang manual.",
    techArchitecture: {
      frontendOrMobile: "React, Tailwind CSS (Tampilan modern dan rapi di HP maupun Laptop)",
      backendOrDatabase: "Hono.js, Cloudflare Workers & D1 Database (Teknologi cloud modern tanpa server fisik, membuat aplikasi sangat ringan dan cepat dibuka)",
      architectureOrPattern: "Zustand (Manajemen Data Layar real-time tanpa refresh) & Recharts (Grafik diagram interaktif)",
    },
    challenges: [
      {
        title: "Transfer Antar-Rekening Aman (Anti Uang Hilang)",
        problem:
          "Saat transfer uang dari Bank ke E-Wallet, ada dua langkah: saldo Bank berkurang, saldo E-Wallet bertambah. Jika internet mendadak putus di tengah proses, saldo Bank bisa terpotong padahal E-Wallet belum bertambah.",
        solution:
          "Kedua langkah tersebut saya jadikan \"satu paket wajib\". Jika salah satu proses gagal, sistem otomatis membatalkan semuanya dan mengembalikan saldo ke keadaan semula. Uang tidak akan pernah nyangkut.",
      },
      {
        title: "Saldo Otomatis Menyesuaikan saat Transaksi Diedit atau Dihapus",
        problem:
          "Jika pengguna salah mencatat pengeluaran (misal mencatat Rp 50.000 padahal aslinya Rp 30.000) lalu mengeditnya, saldo rekening bisa kacau jika perhitungannya salah.",
        solution:
          "Sistem diprogram dengan logika 2 langkah: saldo lama dikembalikan dulu secara utuh ke rekening, baru kemudian sistem memotong nominal yang baru. Saldo dijamin selalu cocok dengan mutasi fisik.",
      },
      {
        title: "Aplikasi Langsung Terbuka Cepat (Tanpa Loading Muter-Muter)",
        problem:
          "Banyak aplikasi web serverless butuh waktu 2–3 detik hanya untuk \"bangun\" saat pertama kali dibuka.",
        solution:
          "Menggunakan Cloudflare Workers yang selalu siaga di jaringan global, sehingga aplikasi langsung merespon dalam hitungan milidetik.",
      },
    ],
    features: [
      {
        title: "Banyak Akun/Dompet",
        desc: "Bisa memantau saldo BCA, Mandiri, Gopay, OVO, hingga Uang Tunai di satu layar. (Catatan: Rekening & saldo diinput secara manual oleh pengguna, bukan sinkronisasi otomatis dengan API bank).",
      },
      {
        title: "Catat Transaksi & Transfer Cepat",
        desc: "Pemasukan, pengeluaran, dan transfer langsung memotong/menambah saldo secara otomatis.",
      },
      {
        title: "Batas Pengeluaran (Budgeting)",
        desc: "Mengatur batas belanja per kategori (misal: jajan max 1 juta/bulan) lengkap dengan indikator warna jika uang sudah mau habis.",
      },
      {
        title: "Celengan / Target Tabungan",
        desc: "Membuat target tabungan (misal: beli laptop) dan bisa langsung \"setor uang\" dari rekening bank yang dipilih.",
      },
      {
        title: "Laporan Grafik Keuangan",
        desc: "Melihat ke mana uang paling banyak habis setiap bulannya lewat grafik yang mudah dipahami.",
      },
    ],
    architecture: [
      { label: "Tampilan (Frontend)", value: "React & Tailwind CSS (Modern & Rapi di HP maupun Laptop)" },
      { label: "Manajemen Data Layar", value: "Zustand (Angka saldo berubah seketika tanpa refresh halaman)" },
      { label: "Grafik Pengeluaran", value: "Recharts (Diagram pengeluaran interaktif)" },
      { label: "Backend API", value: "Hono.js (Web Standards Ultra-Fast API)" },
      { label: "Komputasi Cloud / Server", value: "Cloudflare Workers (Jaringan edge global, respon milidetik)" },
      { label: "Database Layer", value: "Cloudflare D1 Database (SQL Cloud Tanpa Server Fisik)" },
      { label: "Metode Input Rekening", value: "Input Manual oleh Pengguna (Bukan Sinkronisasi API Bank)" },
    ],
    highlights: [
      {
        title: "Transfer Atomik Anti Uang Hilang",
        desc: "Mutasi debet dan kredit antar-rekening dieksekusi dalam satu paket batch wajib dengan rollback otomatis jika terjadi kegagalan.",
      },
      {
        title: "Logika Reversal Saldo Otomatis",
        desc: "Saldo lama dikembalikan utuh sebelum nominal mutasi baru diaplikasikan saat transaksi diedit atau dihapus.",
      },
      {
        title: "Serverless Edge Tanpa Loading",
        desc: "Cloudflare Workers memastikan aplikasi langsung terbuka responsif dalam hitungan milidetik.",
      },
    ],
  },

  // Proyek 2: RS MediTrack (Live Deployed Web)
  {
    id: "rs-meditrack",
    title: "RS MediTrack — Sistem Presensi & Manajemen SDM RS",
    shortTitle: "RS MediTrack",
    description:
      "Website manajemen presensi dan koordinasi SDM rumah sakit terpadu untuk Dokter, Perawat, Kepala Ruangan, hingga Manajemen HRD. Dilengkapi verifikasi geofencing GPS, live selfie, dan penjadwalan shift otomatis.",
    imgSrc: "/projects/rs-meditrack.png",
    videoSrc: "/projects/rs-meditrack-demo-compressed.mp4",
    link: "https://rs-meditrack.pages.dev/",
    linkText: "Live Website",
    category: "web",
    badge: "Website",
    date: "Oktober 2024 – November 2024",
    role: "Frontend & Full-Stack Developer",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Geofencing GPS API",
      "HTML5 Camera API",
      "Role-Based Access (RBAC)",
      "Cloudflare Pages",
    ],
    githubLink: "https://github.com/Faisalt28/react-hospital-attendant",
    overview:
      "RS MediTrack mengintegrasikan kedisiplinan kerja staf medis dan non-medis, manajemen jadwal shift dinas otomatis (pagi, siang, malam), dan verifikasi presensi geofencing berbasis GPS serta live camera selfie untuk memastikan transparansi kehadiran dan standar keselamatan pasien terbaik.",
    problem:
      "Rumah sakit dengan ratusan staf medis menghadapi tantangan validitas presensi manual yang rawan kecurangan (titip absen), kompleksitas rotasi shift dinas 24 jam, serta sulitnya rekapitulasi kehadiran real-time antar-ruangan rawat inap dan IGD.",
    solution:
      "RS MediTrack menyediakan portal web terpusat dengan validasi ganda: radius geofencing GPS presisi dan live camera snapshot tanpa file upload, sistem penjadwalan shift terstruktur, serta hierarki hak akses (RBAC) bertingkat.",
    techArchitecture: {
      frontendOrMobile: "React, TypeScript, Tailwind CSS, Lucide Icons",
      backendOrDatabase: "RESTful Web Services, Local Storage & State Cache",
      architectureOrPattern: "Role-Based Access Control (RBAC), Geofencing Radius Verification, Real-Time Shift Scheduler",
    },
    challenges: [
      {
        title: "Akurasi Geofencing & Penanganan Fake GPS",
        problem:
          "Presensi mobile rentan dimanipulasi dengan mock location atau koordinat GPS palsu saat staf berada di luar rumah sakit.",
        solution:
          "Mengombinasikan validasi HTML5 Geolocation API dengan batas toleransi akurasi koordinat (accuracy margin < 50m) dan penolakan timestamp deviasi.",
      },
      {
        title: "Live Snapshot Anti-Fraud Tanpa File Upload",
        problem:
          "Mengizinkan upload file dari galeri membuka celah penggunaan foto selfie lama atau tangkapan layar tiruan.",
        solution:
          "Mengunci input kamera menggunakan stream langsung HTML5 MediaDevices (facingMode: user) dan merender frame langsung ke canvas tanpa opsi unggah file lokal.",
      },
    ],
    features: [
      {
        title: "Verifikasi Presensi Geofencing GPS",
        desc: "Validasi radius lokasi secara presisi untuk memastikan presensi hanya sah saat staf berada di area rumah sakit.",
      },
      {
        title: "Manajemen Jadwal Shift Dinas Otomatis",
        desc: "Pengaturan rotasi dinas dan jadwal kerja dokter, perawat, dan tenaga medis secara dinamis dan terstruktur.",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        desc: "Portal terpisah dengan hak akses spesifik untuk Staf/Nakes, Kepala Ruangan, hingga Tim Manajemen HRD.",
      },
      {
        title: "Live Camera Selfie & Anti-Fraud",
        desc: "Deteksi kehadiran dengan foto langsung untuk mencegah kecurangan absensi dan titip kehadiran.",
      },
      {
        title: "Dashboard Rekapitulasi & Pelaporan",
        desc: "Rekap data kehadiran real-time, status dinas per ruangan, dan export rekapitulasi untuk evaluasi HRD.",
      },
    ],
    architecture: [
      { label: "Kategori Platform", value: "Hospital Staff Management & Attendance Portal" },
      { label: "Verifikasi Lokasi", value: "Browser Geolocation API + Geofence Radius Calculation" },
      { label: "Autentikasi & Otorisasi", value: "Multi-Role RBAC (Dokter, Perawat, Kepala Ruangan, HRD)" },
      { label: "Antarmuka Pengguna", value: "Modern Responsive Dashboard, Tailwind CSS, Dark/Light Mode" },
      { label: "Status Proyek", value: "Online Web Solution" },
    ],
  },

  // Proyek 3: Frameify
  {
    id: "frameify",
    title: "Frameify — Galeri Foto & Visual Discovery",
    shortTitle: "Frameify",
    description:
      "Platform eksplorasi visual berbasis Unsplash API untuk menemukan, mencari, mengunduh, dan membagikan foto berkualitas tinggi dari seluruh dunia. Dirancang dengan antarmuka galeri yang imersif dan modern.",
    imgSrc: "/projects/frameify.png",
    videoSrc: "/projects/frameify-demo.mp4",
    link: "https://frameify.pages.dev/",
    linkText: "Live Website",
    category: "web",
    badge: "Website",
    date: "November 2024",
    role: "Frontend Developer",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Unsplash API",
      "Masonry Grid Engine",
      "Cloudflare Pages",
    ],
    githubLink: "https://github.com/Faisalt28/Frameify",
    overview:
      "Frameify dibangun sebagai platform eksplorasi foto yang menghubungkan pengguna dengan jutaan karya fotografi profesional melalui integrasi Unsplash API. Fokus utama adalah pengalaman visual yang mulus, mulai dari pencarian berbasis kata kunci, tampilan grid dinamis, hingga kemudahan mengunduh dan membagikan foto langsung dari antarmuka yang bersih dan responsif.",
    problem:
      "Banyak antarmuka galeri foto web terasa lambat, tata letak gambar yang terpotong secara kaku (fixed aspect ratio) merusak proporsi karya fotografer asli, dan proses pengunduhan sering kali diarahkan ke halaman pihak ketiga yang membingungkan.",
    solution:
      "Frameify menerapkan arsitektur Masonry Grid adaptif yang merespons rasio aspek asli foto, integrasi langsung Unsplash REST API dengan caching pintar, serta unduh resolusi penuh satu klik tanpa redirect.",
    techArchitecture: {
      frontendOrMobile: "React, TypeScript, Tailwind CSS, Custom Masonry Engine",
      backendOrDatabase: "Unsplash REST API (JSON Endpoints), Client-side Image Cache",
      architectureOrPattern: "Dynamic Masonry Layout, Debounced Keyword Search, Headless Image Loader",
    },
    challenges: [
      {
        title: "Optimasi Render Masonry Grid Tanpa Layout Shift",
        problem:
          "Foto dengan berbagai rasio dimensi yang dimuat secara asinkron sering memicu Cumulative Layout Shift (CLS) dan scrolling tersendat.",
        solution:
          "Menghitung rasio aspek dimensi awal dari payload JSON metadata Unsplash dan merender skeleton placeholder dengan dimensi presisi sebelum gambar terunduh.",
      },
      {
        title: "Debounced Search & Rate Limiting Unsplash API",
        problem:
          "Input pencarian real-time berisiko menghabiskan kuota request rate limit API secara cepat.",
        solution:
          "Menerapkan custom debounce hook (400ms delay) dan in-memory response cache untuk kata kunci pencarian yang sering diakses.",
      },
    ],
    features: [
      {
        title: "Pencarian Foto Cerdas",
        desc: "Temukan foto berdasarkan kata kunci, kategori, atau mood — didukung Unsplash API dengan hasil relevan dan resolusi tinggi.",
      },
      {
        title: "Galeri Grid Dinamis",
        desc: "Tata letak foto mengalir secara dinamis mengikuti rasio aspek asli setiap gambar, menghadirkan tampilan yang rapi tanpa ruang kosong.",
      },
      {
        title: "Unduh Foto Langsung",
        desc: "Download foto dalam resolusi penuh langsung dari platform tanpa redirect, siap digunakan untuk kebutuhan kreatif apapun.",
      },
      {
        title: "Berbagi ke Media Sosial",
        desc: "Bagikan foto favorit ke platform lain dengan tautan langsung atau salin URL yang dapat langsung digunakan.",
      },
    ],
    architecture: [
      { label: "Frontend Framework", value: "React + TypeScript" },
      { label: "Data Source", value: "Unsplash REST API (OAuth 2.0)" },
      { label: "Layout Engine", value: "Masonry Grid (Dynamic Aspect Ratio)" },
      { label: "Styling", value: "Tailwind CSS + Custom Transitions" },
      { label: "Deployment", value: "Cloudflare Pages (Global CDN)" },
    ],
  },

  // Proyek 4: ArtoZ (Android Project)
  {
    id: "artoz",
    title: "ArtoZ — Manajemen Keuangan Mahasiswa",
    shortTitle: "ArtoZ",
    description:
      "Aplikasi Android untuk manajemen keuangan mahasiswa sehari-hari. Mencatat pemasukan dan pengeluaran dengan kategori yang relevan untuk mahasiswa, dilengkapi visualisasi bar chart dan pie chart untuk memantau kondisi finansial secara menyeluruh.",
    imgSrc: "/projects/artoz-splash.png",
    videoSrc: "/projects/artoz-demo.mp4",
    link: "https://github.com/Faisalt28/Mobile-Artoz-Offline",
    linkText: "Repository GitHub",
    category: "android",
    badge: "Android",
    date: "Agustus 2024 – September 2024",
    role: "Android Developer (Kotlin)",
    techStack: [
      "Android Studio",
      "Kotlin",
      "Room Database (SQLite)",
      "MPAndroidChart",
      "MVVM Architecture",
      "RecyclerView",
      "Coroutines",
      "Material 3",
    ],
    githubLink: "https://github.com/Faisalt28/Mobile-Artoz-Offline",
    overview:
      "ArtoZ dirancang khusus untuk memecahkan persoalan khas mahasiswa dalam mengatur uang saku bulanan. Kategori pemasukan dan pengeluaran disesuaikan dengan realitas anak kos dan mahasiswa (uang saku, makan & minum, biaya kos, fotokopi tugas, pulsa/kuota, hingga hiburan). Dilengkapi visualisasi grafik interaktif agar mahasiswa dapat mengevaluasi pos pengeluaran terbesar tanpa ketergantungan koneksi internet.",
    problem:
      "Mahasiswa sering mengalami defisit keuangan di akhir bulan karena tidak mencatat pengeluaran kecil harian. Sebagian besar aplikasi finansial di Play Store membutuhkan kuota internet, memiliki fitur perbankan yang terlalu rumit, dan tidak menyediakan kategori yang relevan dengan kebutuhan khas perkuliahan.",
    solution:
      "ArtoZ menyediakan aplikasi Android native yang 100% offline-first dengan database lokal Room SQLite. Mahasiswa dapat mencatat transaksi secepat kilat, melihat rekapitulasi pos pengeluaran dalam pie chart, dan membandingkan cash flow bulanan lewat bar chart interaktif.",
    techArchitecture: {
      frontendOrMobile: "Android Studio, Kotlin, XML Layouts, Material Design 3, ViewBinding, MPAndroidChart",
      backendOrDatabase: "Room Database (SQLite ORM Offline-First), Android DataStore",
      architectureOrPattern: "MVVM (Model-View-ViewModel), Repository Pattern, Kotlin Coroutines, LiveData",
    },
    screenshots: [
      {
        title: "Mockup Layar: Dashboard & Saldo Mahasiswa",
        imgSrc: "/projects/artoz-dashboard.png",
        caption: "Highlight total pemasukan dan pengeluaran serta daftar transaksi.",
      },
      {
        title: "Mockup Layar: Input Transaksi Cepat",
        imgSrc: "/projects/artoz-input.png",
        caption: "Formulir pencatatan cepat dengan pilihan kategori khas mahasiswa (kos, kuliah, internet, magang, dll).",
      },
      {
        title: "Mockup Layar: Total Saldo",
        imgSrc: "/projects/artoz-saldo.png",
        caption: "Highlight total saldo serta diagram total pemasukan dan pengeluaran",
      },
    ],
    challenges: [
      {
        title: "Implementasi Arsitektur 100% Offline-First dengan Room DB",
        problem:
          "Aplikasi harus dapat digunakan secara instan di mana pun tanpa menunggu koneksi internet atau buffering data.",
        solution:
          "Mengimplementasikan Room Database (SQLite ORM) dengan Entity, DAO, dan Repository Pattern. Semua operasi baca-tulis dijalankan asinkron melalui Kotlin Coroutines di background thread (Dispatchers.IO) agar UI thread tetap mulus 60 FPS.",
      },
      {
        title: "Agregasi Data Bulanan untuk MPAndroidChart yang Responsif",
        problem:
          "Melakukan kalkulasi jumlah pengeluaran per kategori untuk grafik Pie Chart dan Bar Chart berpotensi memperlambat performa saat riwayat transaksi sudah mencapai ratusan baris.",
        solution:
          "Menulis query agregasi SQL kustom (SUM & GROUP BY) langsung di level DAO Room SQLite sehingga perhitungan dilakukan di engine C SQLite yang sangat cepat sebelum diserahkan ke komponen MPAndroidChart.",
      },
    ],
    features: [
      {
        title: "Pencatatan Transaksi Harian Cepat",
        desc: "Catat pemasukan dan pengeluaran dalam hitungan detik menggunakan kategori yang familiar bagi kehidupan mahasiswa.",
      },
      {
        title: "Kategori Khusus Mahasiswa",
        desc: "Kategori spesifik: Uang Saku, Biaya Kos, Makan & Minuman, Fotokopi & ATK, Pulsa & Kuota, serta Hiburan.",
      },
      {
        title: "Bar Chart Arus Kas Bulanan",
        desc: "Visualisasi perbandingan total pemasukan vs pengeluaran per bulan menggunakan library MPAndroidChart.",
      },
      {
        title: "Pie Chart Distribusi Pengeluaran",
        desc: "Diagram lingkaran untuk memantau pos belanja mana yang paling banyak menghabiskan anggaran bulanan.",
      },
      {
        title: "Filter & Riwayat Transaksi Fleksibel",
        desc: "Filter riwayat transaksi berdasarkan bulan, kategori, atau jenis mutasi untuk evaluasi keuangan yang mudah.",
      },
    ],
    architecture: [
      { label: "Platform Mobile", value: "Android Native (Kotlin)" },
      { label: "Database Lokal", value: "Room ORM over SQLite (Offline-First)" },
      { label: "Pola Arsitektur", value: "MVVM (Model-View-ViewModel) + Repository Pattern" },
      { label: "Charting Library", value: "MPAndroidChart (Interactive Bar & Pie Chart)" },
      { label: "Komponen UI", value: "Material 3, ViewBinding, RecyclerView" },
      { label: "Asynchronous Engine", value: "Kotlin Coroutines & LiveData" },
    ],
  },

  // Proyek 5: FindThem (Android Project)
  {
    id: "findthem",
    title: "FindThem — Pendataan Mahasiswa & Geo API",
    shortTitle: "FindThem",
    description:
      "Aplikasi Android untuk pendataan mahasiswa yang terintegrasi dengan Geolocation API. Dilengkapi fitur pemetaan lokasi tempat tinggal pada peta interaktif, integrasi kontak WhatsApp instan, dan pengelolaan profil akademik.",
    imgSrc: "/projects/findthem.png",
    videoSrc: "/projects/findthem-demo.mp4",
    link: "https://github.com/Faisalt28",
    linkText: "Repository GitHub",
    category: "android",
    badge: "Android",
    date: "Oktober 2024",
    role: "Android Developer",
    techStack: [
      "Android Studio",
      "Kotlin",
      "Google Maps API",
      "Geolocation API",
      "Room Database (SQLite)",
      "ViewBinding",
      "Material 3",
      "WhatsApp Intent",
    ],
    githubLink: "https://github.com/Faisalt28",
    overview:
      "FindThem dibangun untuk mempermudah pencatatan dan pelacakan data tempat tinggal mahasiswa. Aplikasi ini menggabungkan formulir biodata akademik dengan sistem Geolocation API untuk memetakan koordinat domisili mahasiswa ke dalam peta interaktif, serta menyediakan integrasi tombol komunikasi cepat langsung ke nomor WhatsApp mahasiswa terkait.",
    problem:
      "Pendataan mahasiswa secara konvensional sering kali hanya berupa teks alamat yang sulit diverifikasi keakuratannya di lapangan dan tidak memberikan gambaran visual sebaran geografis tempat tinggal mahasiswa untuk keperluan koordinasi atau kunjungan darurat.",
    solution:
      "FindThem menghadirkan solusi mobile native dengan opsi sinkronisasi koordinat GPS ('Masukkan ke Peta'), penandaan avatar mahasiswa langsung pada peta Google Maps, dan tombol direct message WhatsApp satu klik tanpa perlu menyimpan kontak secara manual.",
    techArchitecture: {
      frontendOrMobile: "Android Studio, Kotlin, XML Layouts, Material Design 3, ViewBinding",
      backendOrDatabase: "Room Database (SQLite), Android DataStore",
      architectureOrPattern: "MVVM (Model-View-ViewModel), Repository Pattern, Google Maps SDK Integration",
    },
    screenshots: [],
    challenges: [
      {
        title: "Integrasi Geolocation API & Dynamic Map Markers",
        problem:
          "Menampilkan marker kustom berupa foto profil mahasiswa pada peta Google Maps dengan latensi render yang rendah.",
        solution:
          "Menggunakan custom BitmapDescriptor generator yang mengubah bitmap foto profil terpotong lingkaran (circular crop) menjadi marker overlay secara efisien.",
      },
      {
        title: "Deep-Linking WhatsApp Intent Otomatis",
        problem:
          "Memfasilitasi komunikasi darurat atau akademik tanpa mengharuskan pengguna menyimpan nomor telepon ke kontak ponsel terlebih dahulu.",
        solution:
          "Mengimplementasikan Android Implicit Intent dengan skema URL 'https://wa.me/{nomor}' dan format nomor internasional otomatis (+62).",
      },
    ],
    features: [
      {
        title: "Pendataan Mahasiswa & Biodata Lengkap",
        desc: "Pencatatan nama, NIM, jurusan, nomor WhatsApp, dan alamat domisili dengan antarmuka yang bersih.",
      },
      {
        title: "Integrasi Geolocation API & Google Maps",
        desc: "Visualisasi titik sebaran tempat tinggal mahasiswa secara real-time pada peta interaktif.",
      },
      {
        title: "Custom Avatar Marker pada Peta",
        desc: "Setiap titik lokasi mahasiswa ditandai dengan pin foto profil agar mudah dikenali secara visual.",
      },
      {
        title: "Direct WhatsApp Communication",
        desc: "Kirim pesan atau hubungi mahasiswa secara langsung dengan satu ketukan via integrasi WhatsApp Intent.",
      },
      {
        title: "Manajemen Data CRUD Responsif",
        desc: "Kemudahan menambah, memperbarui data profil, hingga menghapus data mahasiswa.",
      },
    ],
    architecture: [
      { label: "Platform Mobile", value: "Android Native (Kotlin)" },
      { label: "Map & Location", value: "Google Maps Android SDK & Geolocation API" },
      { label: "Database Lokal", value: "Room ORM over SQLite" },
      { label: "Komunikasi Eksternal", value: "WhatsApp Direct Intent (URI Parsing)" },
      { label: "Komponen UI", value: "Material 3, ViewBinding, Dynamic Markers" },
    ],
  },
];

export function getProjectById(id: string): ProjectItem | undefined {
  return projectsList.find((p) => p.id === id);
}
