
# SKENARIO 1 — Teman ingin ikut NGODING (collaborator)




SKENARIO 2 — Teman ingin ikut NGODING (collaborator)

Karena kamu sudah menambahkan dia → ini alurnya 🔥

```bash
git clone https://github.com/username/rental-mobil.git
cd rental-mobil

```

Di sisi KAMU (kalau kamu update fitur lagi):

```bash
git add .
git commit -m "add fitur booking mobil"
git push origin main

```

Di sisi TEMANMU (biar update):

```bash
git pull origin main
```


# SKENARIO 3 — Kerja rapi ala profesional (REKOMENDASI) — Teman ingin ikut NGODING (collaborator)

Kalau mau kelihatan “anak industri” 😎

```bash
git checkout -b fitur-booking
```



```bash
git add .
git commit -m "feat: booking mobil"
git push origin fitur-booking

```



```bash
git fetch
git checkout fitur-booking
```
## Ringkasan super singkat

Lihat fitur
```bash
git clone
```
Ambil update
```bash
git pull
```
Lihat branch lain
```bash
git fetch
```

hapus jejak git
```bash
# Pastikan di folder utama "rental mobil"
cd "/d/PROJECT CODING/rental mobil"

# Hapus .git di subfolder (jika ada)
rm -rf rentverse-core-service/.git
rm -rf rentverse-ai-service/.git
rm -rf frontend/.git

# Kemudian commit ulang
git add .
git commit -m "fix: remove subfolder .git and add all files"
git push origin main
```
