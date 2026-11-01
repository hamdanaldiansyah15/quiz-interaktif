# BOX CHALLENGE

**Choose Your Box, Earn Your Points!**

BOX CHALLENGE adalah website kuis interaktif untuk kegiatan pembelajaran di kelas. Proyek ini dibuat untuk mendukung presentasi Kelompok 4 berjudul **“Unit Analisis, Data, dan Cara Memperolehnya”**. Peserta memilih kotak, menjawab pertanyaan, dan mengumpulkan poin yang langsung ditampilkan pada klasemen.

## Fitur

- Sembilan kotak pertanyaan dengan tingkat mudah, sedang, dan sulit.
- Hitung mundur sebelum pertanyaan dibuka.
- Jawaban salah terkunci, sementara peserta lain tetap dapat mencoba pilihan yang tersisa.
- Penjelasan jawaban benar dan pengisian nama pemenang.
- Nama peserta otomatis menggunakan huruf kapital.
- Poin dan klasemen diperbarui langsung setelah jawaban benar dikirim.
- Kotak yang telah dijawab menampilkan nama pemenang.
- Hasil akhir menampilkan peserta dengan poin tertinggi, termasuk jika terjadi seri.
- Tampilan responsif untuk desktop maupun perangkat seluler.
- Tidak memerlukan backend, basis data, login, atau API eksternal. Data permainan disimpan sementara di memori aplikasi dan kembali ke awal saat halaman dimuat ulang.

## Arah Pengembangan

Pengembangan BOX CHALLENGE berfokus pada pengalaman kuis kelas yang sederhana, menarik, dan mudah dijalankan. Arah pengembangan berikutnya dapat mencakup pengelolaan soal melalui berkas terpisah, pengaturan nama peserta oleh moderator, dukungan beberapa bab atau topik, serta aksesibilitas dan penyempurnaan tampilan di berbagai perangkat. Fitur-fitur tersebut belum termasuk dalam versi saat ini.

## Teknologi

- **React 19** untuk antarmuka dan pengelolaan interaksi.
- **Vite 8** untuk server pengembangan dan proses build.
- **JavaScript** untuk logika permainan.
- **CSS biasa** untuk tampilan responsif dan animasi.
- **Oxlint** untuk pemeriksaan kode.

## Menjalankan di Komputer Lokal

Pastikan Node.js versi LTS dan npm telah terpasang.

```powershell
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite di terminal, biasanya `http://localhost:5173`.

Untuk memeriksa hasil build produksi:

```powershell
npm run build
npm run preview
```

Hasil build tersedia di folder `dist`.

## Mengunggah Proyek ke GitHub melalui Terminal

Buat repositori baru yang kosong di GitHub terlebih dahulu. Jika folder proyek ini belum menjadi repositori Git, jalankan perintah berikut di PowerShell dari folder proyek:

```powershell
git init
git add .
git commit -m "Initial commit: BOX CHALLENGE"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPOSITORY.git
git push -u origin main
```

Ganti `USERNAME` dan `NAMA-REPOSITORY` dengan akun serta nama repositori GitHub Anda. Jika Git melaporkan bahwa `origin` sudah ada, periksa alamatnya dengan `git remote -v`; untuk mengganti alamat tersebut gunakan:

```powershell
git remote set-url origin https://github.com/USERNAME/NAMA-REPOSITORY.git
git push -u origin main
```

Untuk mengunggah perubahan berikutnya:

```powershell
git add .
git commit -m "Jelaskan perubahan"
git push
```

## Deploy ke Netlify

1. Masuk ke Netlify dan pilih **Add new site** → **Import an existing project**.
2. Hubungkan akun GitHub, lalu pilih repositori BOX CHALLENGE.
3. Isi pengaturan build berikut:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Pilih **Deploy site**. Netlify akan membangun ulang situs secara otomatis setiap kali perubahan dikirim ke branch yang terhubung.

Proyek ini tidak memerlukan environment variables atau konfigurasi backend.

## Pengembang

**M. Hamdan Aldiansyah**
