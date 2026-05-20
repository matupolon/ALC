/*
  CARA UPDATE MATERI AKADEMIK:
  Simpan materi pada resources/akademik atau masukkan link Drive/Notion.
  Setelah itu tambahkan objek baru pada array items.
*/
window.ALC_CONTENT = {
  eyebrow: "Keilmiahan",
  title: "Materi Akademik",
  description: "Materi pendukung kuliah dan penguatan skill analitik untuk mahasiswa aktuaria.",
  categories: ["Semua", "Statistika", "Machine Learning", "Aktuaria", "Komputasi"],
  items: [
    {
      title: "Statistika Terapan untuk Aktuaria",
      category: "Statistika",
      level: "Semester Menengah",
      period: "Materi Kuliah",
      summary: "Ringkasan distribusi, estimasi parameter, regresi, dan interpretasi model statistik.",
      tags: ["Statistika", "Regresi", "R"],
      updated: "20 Mei 2026",
      url: "#",
      ctaLabel: "Buka materi",
    },
    {
      title: "Machine Learning Dasar",
      category: "Machine Learning",
      level: "Pemula",
      period: "Workshop",
      summary: "Pengenalan supervised learning, validasi model, dan metrik evaluasi untuk data tabular.",
      tags: ["ML", "Python", "Modeling"],
      updated: "20 Mei 2026",
      url: "#",
      ctaLabel: "Buka modul",
    },
    {
      title: "Template Notebook Analisis Klaim",
      category: "Komputasi",
      level: "Praktik",
      period: "Lab ALC",
      summary: "Struktur notebook untuk eksplorasi data klaim, visualisasi, dan model frekuensi sederhana.",
      tags: ["Python", "Claims", "Notebook"],
      updated: "20 Mei 2026",
      url: "#",
      ctaLabel: "Buka template",
    },
  ],
};
