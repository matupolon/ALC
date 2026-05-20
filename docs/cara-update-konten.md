# Panduan Update Konten ALC

Website ini dibuat agar panitia cukup mengubah file di folder `data/` dan menyimpan dokumen pada folder `resources/`.
Versi HTML untuk dibaca di browser tersedia di `panduan.html`.

## Menambah Bank Soal atau Materi

1. Simpan PDF atau dokumen pada folder yang sesuai, misalnya `resources/asai/`.
2. Buka file data yang sesuai, misalnya `data/asai.js`.
3. Duplikasi salah satu objek di dalam array `items`.
4. Ubah isi `title`, `category`, `summary`, `tags`, `updated`, dan `url`.
5. Jika memakai Google Drive, ubah `url: "#"` menjadi link Drive yang sudah dibuka aksesnya.

Contoh:

```js
{
  title: "Paket Soal Baru",
  category: "Probabilitas",
  level: "Pemula",
  period: "Tryout 2026",
  summary: "Deskripsi singkat isi soal.",
  tags: ["ASAI", "Probabilitas"],
  updated: "20 Mei 2026",
  url: "../resources/asai/nama-file.pdf",
  ctaLabel: "Buka soal",
}
```

## Menambah Info Magang atau Lomba

1. Buka `data/magang.js` atau `data/lomba.js`.
2. Tambahkan objek baru pada array `items`.
3. Isi `deadline` agar mahasiswa mudah memprioritaskan peluang.
4. Ganti `url` dengan link pendaftaran atau poster.

## Menambah Halaman Baru

1. Salin `templates/content-template.html` ke folder tujuan.
2. Buat file data baru di `data/`.
3. Ganti script data pada halaman baru, misalnya dari `../data/asai.js` menjadi `../data/beasiswa.js`.
4. Tambahkan link halaman baru di navbar pada `index.html` dan halaman terkait.

Jangan mengubah `assets/js/content-page.js` kecuali ingin mengganti cara kartu ditampilkan.
