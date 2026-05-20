/*
  CARA UPDATE BANK SOAL ASAI:
  1. Simpan file PDF/drive link pada folder resources/asai atau URL eksternal.
  2. Duplikasi salah satu objek di bawah.
  3. Ubah title, category, summary, tags, updated, dan url.
  4. Jangan mengubah nama properti seperti "title" atau "category" karena dipakai oleh JavaScript.
*/
window.ALC_CONTENT = {
  eyebrow: "Keilmiahan",
  title: "Bank Soal ASAI",
  description: "Kumpulan soal, pembahasan, dan referensi ringkas untuk persiapan ujian profesi ASAI.",
  categories: ["Semua", "Probabilitas", "Statistika", "Ekonomi", "Matematika Keuangan"],
  items: [
    {
      title: "Paket Probabilitas Dasar ASAI",
      category: "Probabilitas",
      level: "Pemula",
      period: "Tryout Internal",
      summary: "Latihan peluang, peubah acak, distribusi diskret, dan distribusi kontinu dengan pembahasan singkat.",
      tags: ["ASAI", "Probabilitas", "Pembahasan"],
      updated: "20 Mei 2026",
      url: "#",
      ctaLabel: "Buka soal",
    },
    {
      title: "Statistika Inferensial untuk Ujian Profesi",
      category: "Statistika",
      level: "Menengah",
      period: "Modul ALC",
      summary: "Ringkasan estimasi, interval kepercayaan, uji hipotesis, dan contoh soal terstruktur.",
      tags: ["ASAI", "Statistika", "Modul"],
      updated: "20 Mei 2026",
      url: "#",
      ctaLabel: "Buka modul",
    },
    {
      title: "Kumpulan Soal Matematika Keuangan",
      category: "Matematika Keuangan",
      level: "Menengah",
      period: "Latihan Mandiri",
      summary: "Latihan anuitas, obligasi, bunga efektif, durasi, dan konsep nilai waktu uang.",
      tags: ["ASAI", "Finance", "Latihan"],
      updated: "20 Mei 2026",
      url: "#",
      ctaLabel: "Buka soal",
    },
    {
      title: "Ekonomi Mikro dan Makro Ringkas",
      category: "Ekonomi",
      level: "Dasar",
      period: "Catatan Belajar",
      summary: "Peta konsep ekonomi yang sering muncul sebagai pengantar dalam ujian profesi aktuaria.",
      tags: ["ASAI", "Ekonomi", "Ringkasan"],
      updated: "20 Mei 2026",
      url: "#",
      ctaLabel: "Buka catatan",
    },
  ],
};
