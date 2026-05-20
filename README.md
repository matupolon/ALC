# Actuarial Learning Center

Website statis untuk Actuarial Learning Center HIMASAKTA ITS. Proyek ini siap di-hosting lewat GitHub Pages karena hanya memakai HTML, CSS, dan vanilla JavaScript.

## Struktur Direktori

```text
ALC/
├── index.html
├── keilmiahan/
│   ├── asai.html
│   ├── fsai.html
│   └── akademik.html
├── keprofesian/
│   ├── lomba.html
│   └── magang.html
├── data/
│   ├── asai.js
│   ├── fsai.js
│   ├── akademik.js
│   ├── lomba.js
│   └── magang.js
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   └── content-page.js
│   └── img/
│       └── alc-hero.png
├── resources/
│   ├── asai/
│   ├── fsai/
│   ├── akademik/
│   ├── lomba/
│   └── magang/
├── panduan.html
├── templates/
│   └── content-template.html
└── docs/
    └── cara-update-konten.md
```

## Prinsip Maintainability

- Desain global berada di `assets/css/style.css`.
- Interaksi umum berada di `assets/js/main.js`.
- Search, filter, dan render kartu konten berada di `assets/js/content-page.js`.
- Daftar konten yang sering diperbarui berada di `data/*.js`.
- Dokumen PDF, poster, atau file pendukung dapat disimpan di `resources/`.

## Cara Menjalankan

Buka `index.html` langsung di browser, atau aktifkan GitHub Pages dari repository settings dengan sumber branch utama.
