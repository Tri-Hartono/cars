# PRODUCT REQUIREMENT DOCUMENT (PRD)

## Website Pembelian Mobil Bekas

**Version:** 1.0
**Status:** Draft
**Platform:** Web
**Framework:** Next.js 16.x
**Language:** TypeScript
**Styling:** Tailwind CSS
**Primary Conversion:** WhatsApp
**SEO Strategy:** SEO-First
**Marketing Channel:** Google Search / Google Ads

---

# 1. Product Overview

Website ini merupakan **landing page pembelian mobil bekas** yang ditujukan untuk orang-orang yang ingin menjual mobilnya.

Konsep bisnisnya sederhana:

> Pemilik mobil datang ke website → melihat informasi → merasa percaya → menghubungi WhatsApp → mengirim detail mobil → proses penawaran dilakukan melalui WhatsApp.

Website **tidak melakukan transaksi secara langsung**.

Tidak terdapat:

- Login
- Register
- Checkout
- Payment gateway
- Marketplace
- Listing kendaraan
- Dashboard customer
- Dashboard admin pada MVP

Seluruh proses pembelian dilakukan secara manual melalui WhatsApp.

---

# 2. Product Vision

Membangun website pembelian mobil yang:

- Terlihat profesional
- Modern
- Clean
- Cepat
- Mobile-first
- Mudah dipercaya
- Mudah ditemukan melalui Google
- Siap digunakan untuk Google Ads
- Memiliki conversion rate WhatsApp yang tinggi

Website harus memberikan kesan:

> **"Saya bisa jual mobil saya ke mereka dengan mudah."**

Bukan seperti marketplace atau website dealer yang terlalu ramai.

---

# 3. Business Objective

## Primary Objective

Mendapatkan **leads penjual mobil** melalui WhatsApp.

## Secondary Objective

1. Membangun brand awareness.
2. Meningkatkan kepercayaan calon seller.
3. Mendapatkan organic traffic dari Google.
4. Mendapatkan paid traffic dari Google Ads.
5. Membangun database calon seller di masa depan.
6. Membentuk website sebagai acquisition channel utama.

---

# 4. Target Audience

## Primary Target

Pemilik mobil yang ingin menjual kendaraan mereka.

### Karakteristik

- Memiliki kendaraan pribadi.
- Ingin menjual kendaraan.
- Tidak ingin repot mencari pembeli.
- Tidak ingin menghadapi banyak calon pembeli.
- Ingin proses cepat.
- Ingin mengetahui harga kendaraan.
- Nyaman menggunakan WhatsApp.

## Secondary Target

Orang yang sedang mencari informasi:

- Harga jual mobil bekas.
- Cara menjual mobil.
- Tempat jual mobil.
- Cara menentukan harga mobil.
- Pembeli mobil bekas.
- Dealer / pembeli mobil terdekat.

---

# 5. Geographic Target

Website dapat dikembangkan berdasarkan wilayah operasional.

Contoh:

- Jakarta
- Depok
- Bogor
- Tangerang
- Bekasi
- Jabodetabek

Wilayah yang ditampilkan harus sesuai dengan area yang benar-benar dilayani.

Jangan membuat landing page lokasi yang sebenarnya tidak dilayani.

---

# 6. Main User Journey

```text
Google Search / Google Ads
          ↓
      Website
          ↓
    Hero Section
          ↓
     Trust Building
          ↓
    How It Works
          ↓
     Vehicle Types
          ↓
       FAQ
          ↓
      WhatsApp CTA
          ↓
     WhatsApp Chat
          ↓
   Vehicle Information
          ↓
      Evaluation
          ↓
        Offer
          ↓
        Deal
```

---

# 7. Core Conversion Funnel

## Acquisition

Traffic berasal dari:

- Google Search
- Google Ads
- Organic Search
- Social Media
- Direct Traffic
- Referral

## Conversion

```text
Visitor
 ↓
Landing Page
 ↓
Understand Offer
 ↓
Trust
 ↓
CTA
 ↓
WhatsApp
 ↓
Lead
```

Primary conversion:

**WhatsApp Click**

Secondary conversion:

- Scroll depth
- CTA click
- FAQ interaction
- Phone click
- Form submission jika nantinya ditambahkan

---

# 8. Website Structure

MVP:

```text
/
├── Landing Page
├── /blog
├── /blog/[slug]
├── /jual-mobil-[location]
├── /jual-mobil-[brand]
├── /privacy-policy
├── /terms
└── /404
```

Halaman lokasi dan brand dapat dikembangkan secara bertahap.

---

# 9. Landing Page Structure

Landing page utama terdiri dari:

1. Announcement Bar
2. Navbar
3. Hero
4. Trust Indicators
5. How It Works
6. Vehicle Types
7. Why Choose Us
8. Selling Process
9. Testimonials
10. FAQ
11. Final CTA
12. Footer
13. Floating WhatsApp

---

# 10. Announcement Bar

Optional.

Contoh:

> **Mau jual mobil? Konsultasi langsung melalui WhatsApp.**

CTA:

**Chat Sekarang**

Announcement bar dapat dihilangkan jika membuat halaman terlalu ramai.

---

# 11. Navbar

## Desktop

Left:

**Brand Logo**

Center:

- Beranda
- Cara Kerja
- Mobil yang Kami Beli
- FAQ

Right:

**Jual Mobil**

CTA menuju WhatsApp.

## Mobile

- Logo
- WhatsApp CTA
- Hamburger menu

Navbar harus sticky ketika user scroll.

---

# 12. Hero Section

Hero merupakan section paling penting.

## Primary Headline

Contoh:

> **Mau Jual Mobil? Kami Siap Beli.**

Alternative:

> **Jual Mobil Lebih Mudah, Tanpa Ribet.**

## Supporting Text

> Punya mobil yang ingin dijual? Kirim detail kendaraan Anda melalui WhatsApp dan kami akan membantu mengecek serta memberikan penawaran.

## CTA

Primary:

**Jual Mobil Saya**

Secondary:

**Lihat Cara Kerja**

## Hero Image

Gunakan:

- Foto mobil berkualitas tinggi
- Realistic
- Premium
- Tidak terlalu stock-looking
- Tidak terlalu banyak kendaraan dalam satu gambar

---

# 13. Hero SEO Strategy

Hero harus mengandung keyword utama secara natural.

Contoh:

```text
H1:
Jual Mobil Bekas dengan Mudah & Cepat

Supporting:
Tempat jual mobil bekas untuk Anda yang ingin menjual mobil secara langsung.
Kirim detail kendaraan dan hubungi kami melalui WhatsApp.
```

Jangan melakukan keyword stuffing.

---

# 14. Trust Section

Tujuan:

Mengurangi keraguan calon seller.

Contoh:

### Proses Mudah

Cukup kirim detail mobil melalui WhatsApp.

### Penawaran Transparan

Penawaran disesuaikan dengan kondisi kendaraan.

### Komunikasi Langsung

Tidak perlu melalui marketplace.

### Proses Fleksibel

Detail proses dapat dibicarakan langsung.

Jika tersedia data yang valid, dapat ditambahkan:

- Jumlah mobil yang telah dibeli
- Tahun pengalaman
- Jumlah seller
- Rating
- Testimonial

**Jangan menggunakan angka/testimonial palsu.**

---

# 15. How It Works

## Heading

> **Cara Jual Mobil ke Kami**

### Step 01

**Kirim Detail Mobil**

Kirim merk, tipe, tahun, kilometer, lokasi, kondisi, dan foto mobil.

### Step 02

**Kami Cek**

Detail kendaraan akan kami pelajari dan jika diperlukan dilakukan pengecekan lebih lanjut.

### Step 03

**Dapatkan Penawaran**

Kami memberikan penawaran berdasarkan kondisi dan informasi kendaraan.

### Step 04

**Deal**

Jika harga dan kondisi sesuai, proses selanjutnya akan dilanjutkan.

---

# 16. Vehicle Types

Heading:

> **Mobil Apa Saja yang Kami Beli?**

Kategori:

### City Car

Mobil kecil untuk penggunaan sehari-hari.

### Hatchback

Mobil compact yang praktis.

### MPV

Mobil keluarga dengan kapasitas penumpang lebih besar.

### SUV

Mobil dengan ruang dan ground clearance lebih besar.

### Sedan

Mobil nyaman untuk kebutuhan harian.

### Pickup / Commercial

Kendaraan untuk kebutuhan usaha.

Tambahkan CTA:

> **Tidak menemukan tipe mobil Anda? Tetap hubungi kami.**

---

# 17. Brand / Vehicle SEO Pages

Jika data dan bisnis sudah berkembang, buat halaman:

```text
/jual-mobil-toyota
/jual-mobil-honda
/jual-mobil-suzuki
/jual-mobil-mitsubishi
/jual-mobil-daihatsu
```

Kemudian dapat dikembangkan:

```text
/jual-mobil-avanza
/jual-mobil-brio
/jual-mobil-xpander
/jual-mobil-agya
/jual-mobil-innova
```

Halaman harus memiliki konten unik dan benar-benar relevan.

---

# 18. Location SEO Pages

Contoh:

```text
/jual-mobil-jakarta
/jual-mobil-depok
/jual-mobil-bogor
/jual-mobil-bekasi
/jual-mobil-tangerang
```

Setiap halaman harus memiliki:

- H1 lokasi
- Area layanan
- Proses jual mobil
- FAQ lokasi
- CTA WhatsApp
- Informasi relevan mengenai area

Contoh:

> **Jual Mobil Bekas di Depok**

> Kami melayani pemilik mobil di area Depok dan sekitarnya yang ingin menjual kendaraan secara langsung.

---

# 19. Why Choose Us

Heading:

> **Kenapa Jual Mobil ke Kami?**

### Tidak Perlu Cari Pembeli

Tidak perlu memasang iklan dan menunggu calon pembeli.

### Lebih Praktis

Semua komunikasi dapat dimulai melalui WhatsApp.

### Proses Jelas

Tahapan penjualan dijelaskan dari awal.

### Penawaran Berdasarkan Kondisi

Harga mempertimbangkan kondisi dan detail kendaraan.

---

# 20. Selling Information

Berikan informasi apa yang perlu disiapkan seller.

### Data yang Dibutuhkan

- Merk
- Model
- Tahun
- Kilometer
- Transmisi
- Warna
- Kondisi
- Lokasi
- Foto kendaraan

CTA:

**Kirim Detail Mobil**

---

# 21. WhatsApp Integration

Tidak membutuhkan backend untuk MVP.

Semua CTA menggunakan WhatsApp URL.

Contoh:

```text
https://wa.me/[PHONE]?text=[MESSAGE]
```

Pesan otomatis:

```text
Halo, saya ingin menjual mobil.

Merk/Tipe:
Tahun:
Kilometer:
Transmisi:
Kondisi:
Lokasi:

Saya juga akan mengirimkan foto mobilnya.
```

---

# 22. Dynamic WhatsApp Message

CTA dapat memiliki message berbeda berdasarkan halaman.

Contoh dari:

`/jual-mobil-jakarta`

Pesan:

> Halo, saya ingin menjual mobil di area Jakarta.

Contoh dari:

`/jual-mobil-toyota`

Pesan:

> Halo, saya ingin menjual mobil Toyota.

Hal ini dapat membantu mengidentifikasi source lead.

---

# 23. Floating WhatsApp Button

Selalu tersedia di:

**Bottom Right**

Desktop:

```text
[ Chat via WhatsApp ]
```

Mobile:

```text
[ WhatsApp ]
```

Gunakan `aria-label`.

Contoh:

```text
aria-label="Hubungi kami melalui WhatsApp"
```

---

# 24. Testimonials

Section testimonial hanya ditampilkan jika sudah memiliki testimonial nyata.

Contoh:

> "Proses komunikasinya mudah dan cepat."

> — Nama Customer

Jika belum memiliki testimonial:

**Jangan membuat testimonial palsu.**

Section dapat disembunyikan pada MVP.

---

# 25. FAQ

FAQ harus menjawab search intent.

Contoh:

### Bagaimana cara menjual mobil?

Anda dapat menghubungi kami melalui WhatsApp dan mengirim detail kendaraan.

### Mobil apa saja yang bisa dijual?

Kami menerima berbagai jenis kendaraan. Silakan kirim detail mobil untuk kami cek.

### Apakah bisa menjual mobil yang masih kredit?

Ketersediaan proses akan bergantung pada kondisi dan status kendaraan. Silakan konsultasikan melalui WhatsApp.

### Apakah mobil harus dalam kondisi bagus?

Tidak selalu. Kondisi kendaraan akan menjadi pertimbangan dalam proses penawaran.

### Apakah saya harus datang ke tempat?

Tergantung proses dan lokasi kendaraan. Detailnya akan dibicarakan melalui WhatsApp.

### Berapa harga mobil saya?

Harga bergantung pada merk, tipe, tahun, kilometer, kondisi, dokumen, dan faktor lainnya.

---

# 26. Final CTA

Heading:

> **Punya Mobil yang Mau Dijual?**

Supporting:

> Kirim detail mobil Anda sekarang. Kami akan membantu mengecek dan membicarakan penawarannya.

CTA:

**Jual Mobil Saya via WhatsApp**

---

# 27. Footer

Footer berisi:

- Logo
- Short description
- Navigation
- WhatsApp
- Area layanan
- Privacy Policy
- Terms
- Copyright

Contoh:

> © 2026 [Brand]. All rights reserved.

---

# 28. SEO Strategy

SEO menjadi bagian utama dari produk.

Tujuan:

> Mendapatkan traffic dari user yang memang memiliki intent untuk menjual mobil.

---

# 29. Keyword Strategy

## Primary Keywords

- jual mobil
- jual mobil bekas
- jual mobil cepat
- tempat jual mobil
- pembeli mobil bekas

## Commercial Keywords

- jual mobil bekas Jakarta
- jual mobil cepat Jakarta
- tempat jual mobil bekas
- pembeli mobil bekas Jakarta
- jual mobil langsung
- jual mobil tanpa ribet

## Long Tail Keywords

- tempat jual mobil bekas terdekat
- cara menjual mobil bekas
- cara jual mobil cepat
- jual mobil langsung ke pembeli
- jual mobil tanpa perantara
- tempat menjual mobil bekas

Keyword harus disesuaikan kembali berdasarkan data keyword research dan area bisnis aktual.

---

# 30. Search Intent

Keyword harus dikategorikan:

### Informational

User mencari informasi.

Contoh:

> Cara menjual mobil bekas.

Target:

**Blog**

### Commercial Investigation

User sedang membandingkan pilihan.

Contoh:

> Tempat jual mobil bekas.

Target:

**Landing Page**

### Transactional

User siap menjual.

Contoh:

> Jual mobil bekas Jakarta.

Target:

**Location Landing Page**

---

# 31. SEO Site Architecture

```text
/
│
├── /jual-mobil
│
├── /jual-mobil-jakarta
├── /jual-mobil-depok
├── /jual-mobil-bogor
├── /jual-mobil-bekasi
├── /jual-mobil-tangerang
│
├── /jual-mobil-toyota
├── /jual-mobil-honda
├── /jual-mobil-suzuki
├── /jual-mobil-mitsubishi
│
├── /blog
│   ├── /cara-jual-mobil-bekas
│   ├── /cara-menentukan-harga-mobil
│   ├── /dokumen-jual-mobil
│   └── /tips-jual-mobil
│
├── /privacy-policy
├── /terms
└── /404
```

---

# 32. Blog / Content Marketing

Blog digunakan untuk mendapatkan organic traffic.

Contoh artikel:

1. Cara Jual Mobil Bekas dengan Cepat
2. Cara Menentukan Harga Jual Mobil Bekas
3. Dokumen yang Dibutuhkan Saat Menjual Mobil
4. Tips Menjual Mobil Bekas Agar Tidak Rugi
5. Faktor yang Menentukan Harga Mobil Bekas
6. Cara Cek Harga Pasaran Mobil Bekas
7. Jual Mobil ke Dealer atau Pembeli Langsung?
8. Mobil Bekas yang Banyak Dicari
9. Apa yang Harus Dicek Sebelum Menjual Mobil?
10. Cara Menjual Mobil yang Masih Kredit

Artikel harus dibuat berdasarkan search intent dan data keyword.

---

# 33. On-Page SEO

Setiap halaman harus memiliki:

- Unique title
- Unique meta description
- One H1
- Proper H2/H3
- SEO-friendly URL
- Internal links
- Optimized images
- Alt text
- Canonical URL
- Structured data
- Open Graph

---

# 34. Technical SEO

Implementasikan:

- `sitemap.xml`
- `robots.txt`
- Canonical
- Metadata API
- Open Graph
- Twitter/X metadata
- JSON-LD
- Breadcrumb
- Semantic HTML
- Proper heading structure
- 404 page
- Redirect handling
- Clean URL
- HTTPS
- Mobile responsive

---

# 35. Structured Data

Gunakan schema yang relevan dengan halaman.

Potential schemas:

```text
WebSite
Organization
LocalBusiness
BreadcrumbList
Article
FAQPage
```

Schema harus menggambarkan konten yang benar-benar terlihat oleh user.

---

# 36. Internal Linking

Internal linking harus dirancang.

Contoh:

```text
Blog
 ↓
Cara Jual Mobil Bekas
 ↓
Jual Mobil Jakarta
 ↓
WhatsApp
```

Location page:

```text
Jual Mobil Jakarta
 ↓
Jual Mobil Toyota
 ↓
Cara Jual Mobil
 ↓
WhatsApp
```

Tujuan:

- Membantu crawling
- Membantu user navigation
- Membentuk topical relevance
- Mendistribusikan internal authority

---

# 37. Google Search Console

Website harus siap didaftarkan ke Google Search Console.

Checklist:

- Verify domain
- Submit sitemap
- Check indexing
- Monitor queries
- Monitor CTR
- Monitor impressions
- Monitor pages
- Monitor Core Web Vitals

---

# 38. Google Analytics

Gunakan Google Analytics 4.

Track:

```text
page_view
scroll
whatsapp_click
cta_click
phone_click
```

Primary event:

```text
whatsapp_click
```

---

# 39. Google Ads

Website harus disiapkan untuk Google Search Ads.

Contoh campaign:

### Campaign

**Jual Mobil**

Ad Group:

**Jual Mobil Bekas**

Keywords:

```text
"jual mobil bekas"
"jual mobil cepat"
"tempat jual mobil"
"pembeli mobil bekas"
```

Landing page:

```text
/jual-mobil
```

---

# 40. Google Ads Landing Page Relevance

Keyword:

> jual mobil bekas Jakarta

Ad:

> Jual Mobil Bekas Jakarta

Landing page:

> **Jual Mobil Bekas di Jakarta**

Dengan supporting content yang relevan.

Tujuannya meningkatkan:

- Ad relevance
- Landing page experience
- Conversion rate

---

# 41. Google Ads Conversion Tracking

Track:

```text
whatsapp_click
```

Contoh:

```text
Google Ads
   ↓
Landing Page
   ↓
CTA
   ↓
WhatsApp Click
```

WhatsApp click dianggap sebagai conversion.

Jika nantinya tersedia CRM/backend, conversion dapat dikembangkan menjadi:

```text
WhatsApp Click
      ↓
Qualified Lead
      ↓
Inspection
      ↓
Offer
      ↓
Purchased
```

---

# 42. SEO vs Google Ads

Keduanya memiliki tujuan berbeda.

| Channel        | Tujuan                           |
| -------------- | -------------------------------- |
| Google Ads     | Mendapatkan traffic dengan cepat |
| SEO            | Mendapatkan organic traffic      |
| Blog           | Menangkap informational traffic  |
| Location Pages | Menangkap local intent           |
| Brand Pages    | Menangkap vehicle/brand intent   |
| WhatsApp       | Conversion                       |

Strateginya:

```text
Short Term
Google Ads
     ↓
Leads

Long Term
SEO
     ↓
Organic Traffic
     ↓
Leads
```

---

# 43. Performance Requirements

Target:

- Lighthouse Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+
- Mobile-first
- Fast initial load
- Optimized images
- Minimal JS
- Minimal third-party scripts

Target Core Web Vitals:

- LCP: < 2.5s
- INP: < 200ms
- CLS: < 0.1

Target tersebut merupakan target engineering, bukan jaminan skor tetap karena kondisi perangkat dan jaringan user berbeda-beda.

---

# 44. Next.js Architecture

Gunakan:

**Next.js 16.x**

Dengan:

- App Router
- TypeScript
- Server Components
- Static Generation jika memungkinkan
- Dynamic Metadata
- `next/image`
- `next/font`

Client Components hanya digunakan jika membutuhkan:

- Interaction
- Animation
- Browser API
- Analytics interaction

---

# 45. Recommended Project Structure

```text
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── jual-mobil/
│   │   └── page.tsx
│   │
│   ├── jual-mobil-[location]/
│   │   └── page.tsx
│   │
│   ├── jual-mobil-[brand]/
│   │   └── page.tsx
│   │
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── privacy-policy/
│   │   └── page.tsx
│   │
│   ├── terms/
│   │   └── page.tsx
│   │
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx
│
├── components/
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── trust-section.tsx
│   ├── how-it-works.tsx
│   ├── vehicle-types.tsx
│   ├── why-us.tsx
│   ├── testimonials.tsx
│   ├── faq.tsx
│   ├── final-cta.tsx
│   ├── footer.tsx
│   └── whatsapp-button.tsx
│
├── components/
│   └── seo/
│       ├── json-ld.tsx
│       └── breadcrumb.tsx
│
├── lib/
│   ├── whatsapp.ts
│   ├── analytics.ts
│   └── seo.ts
│
├── content/
│   └── blog/
│
└── public/
    ├── images/
    ├── icons/
    └── logo.svg
```

---

# 46. Design System

## Colors

Primary:

```text
#111111
```

Background:

```text
#FAFAF8
```

Secondary:

```text
#F1F1EE
```

Accent:

```text
#16A34A
```

Text:

```text
#171717
#737373
```

---

# 47. Design Principles

Website harus:

### Clean

Tidak menggunakan terlalu banyak elemen.

### Premium

Typography besar dan whitespace luas.

### Trustworthy

Copywriting jelas dan tidak berlebihan.

### Human

Bahasa seperti manusia, bukan corporate jargon.

### Conversion-focused

CTA selalu mudah ditemukan.

### Mobile-first

Prioritaskan pengalaman smartphone.

---

# 48. Animation Guidelines

Gunakan animation secara minimal:

- Fade
- Slide-up
- Hover
- Smooth scroll

Tidak boleh:

- Excessive parallax
- Excessive motion
- Auto-playing video berat
- Animation yang mengganggu CTA

---

# 49. Accessibility

Implementasikan:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Focus state
- ARIA label
- Alt text
- Color contrast
- Accessible accordion
- Accessible buttons

---

# 50. Security

Walaupun MVP tidak memiliki backend, tetap harus:

- HTTPS
- No sensitive information in frontend
- No API key exposed
- Validate external URLs
- Secure analytics configuration
- Content Security Policy jika diperlukan

Nomor WhatsApp bukan secret dan dapat berada di frontend.

---

# 51. Privacy

Tambahkan:

**Privacy Policy**

Walaupun website sederhana, privacy policy diperlukan terutama jika menggunakan:

- Google Analytics
- Google Ads
- Cookies
- Tracking
- Contact information

---

# 52. Legal Pages

Minimal:

```text
/privacy-policy
/terms
```

Jika bisnis membutuhkan, tambahkan:

```text
/disclaimer
```

---

# 53. Analytics Event Naming

Gunakan event yang konsisten.

```text
whatsapp_click
hero_cta_click
navbar_cta_click
final_cta_click
vehicle_category_click
location_page_view
brand_page_view
blog_article_view
```

Tambahkan parameter:

```text
source
page
location
brand
cta_position
```

Contoh:

```text
whatsapp_click
{
  page: "/jual-mobil-jakarta",
  cta_position: "hero"
}
```

---

# 54. SEO Content Rules

Setiap artikel harus:

- Menjawab satu search intent utama.
- Memiliki keyword utama.
- Memiliki keyword terkait.
- Memiliki H1.
- Memiliki struktur H2/H3.
- Memiliki internal links.
- Memiliki CTA.
- Memiliki FAQ jika relevan.
- Tidak keyword stuffing.
- Tidak copy-paste.
- Tidak menggunakan AI-generated content secara mentah tanpa review.

---

# 55. Blog CTA

Setiap artikel harus memiliki CTA.

Contoh:

> **Sedang ingin menjual mobil?**

> Setelah mengetahui harga dan kondisi mobil Anda, Anda bisa langsung menghubungi kami untuk mendiskusikan penawaran.

Button:

**Jual Mobil Saya**

---

# 56. SEO Landing Page CTA

Setiap location/brand page harus memiliki CTA.

Contoh:

### Jual Mobil Toyota

> Punya Toyota yang ingin dijual? Kirim detail mobil Anda melalui WhatsApp.

**[ Jual Toyota Saya ]**

---

# 57. Sitemap Strategy

Sitemap harus mencakup:

- Homepage
- Main landing page
- Location pages
- Brand pages
- Blog
- Important static pages

Jangan memasukkan:

- Duplicate pages
- Query parameters
- Internal utility pages
- Noindex pages

---

# 58. Robots Strategy

Default:

```text
Allow: /
```

Block:

```text
/admin
/api
/private
```

Jika area tersebut nantinya tersedia.

---

# 59. URL Strategy

Gunakan URL pendek dan readable.

Good:

```text
/jual-mobil
/jual-mobil-jakarta
/jual-mobil-toyota
/blog/cara-jual-mobil-bekas
```

Avoid:

```text
/page?id=123
/blog/article?id=123
/jual-mobil?category=toyota
```

---

# 60. Image SEO

Setiap image:

- Optimized
- Responsive
- Proper filename
- Alt text
- Appropriate dimensions

Contoh filename:

```text
jual-mobil-bekas-jakarta.webp
```

Alt:

```text
Jual mobil bekas di Jakarta
```

Jangan:

```text
IMG_928382.jpg
```

---

# 61. Content Hierarchy

Prioritas informasi:

```text
1. Apa yang ditawarkan?
2. Kenapa harus percaya?
3. Bagaimana prosesnya?
4. Mobil apa yang diterima?
5. Bagaimana cara menghubungi?
```

Jangan membuat user harus membaca panjang sebelum menemukan CTA.

---

# 62. MVP Scope

## Must Have

- [ ] Landing page
- [ ] Responsive design
- [ ] Navbar
- [ ] Hero
- [ ] Trust section
- [ ] How it works
- [ ] Vehicle types
- [ ] Why us
- [ ] FAQ
- [ ] Final CTA
- [ ] WhatsApp integration
- [ ] Floating WhatsApp
- [ ] SEO metadata
- [ ] Sitemap
- [ ] Robots
- [ ] Open Graph
- [ ] JSON-LD
- [ ] Google Analytics
- [ ] Google Ads conversion
- [ ] Privacy Policy
- [ ] Terms
- [ ] Performance optimization

---

# 63. Phase 2

Setelah MVP berjalan:

- [ ] Blog
- [ ] Location landing pages
- [ ] Brand landing pages
- [ ] Google Business Profile
- [ ] Testimonials
- [ ] Lead tracking
- [ ] Vehicle submission form
- [ ] Advanced analytics
- [ ] Google Tag Manager
- [ ] CRM integration

---

# 64. Phase 3

Jika jumlah leads meningkat:

- [ ] Admin dashboard
- [ ] Lead management
- [ ] Seller database
- [ ] Vehicle database
- [ ] Inspection management
- [ ] Offer management
- [ ] Lead status
- [ ] CRM
- [ ] Automated WhatsApp workflow

---

# 65. Future Lead Management

Future architecture:

```text
Google
  ↓
Website
  ↓
WhatsApp
  ↓
Lead
  ↓
CRM
  ↓
Vehicle Data
  ↓
Inspection
  ↓
Offer
  ↓
Purchased
```

---

# 66. Success Metrics

## Primary KPI

**WhatsApp Conversion Rate**

```text
WhatsApp Clicks
─────────────── × 100
Total Visitors
```

## Secondary KPI

- Organic traffic
- Paid traffic
- CTR
- CPC
- Conversion rate
- Cost per lead
- Qualified leads
- Vehicle submissions
- Purchase conversion
- Bounce/engagement metrics
- Core Web Vitals

---

# 67. Google Ads KPI

Monitor:

- Impressions
- CTR
- CPC
- Conversion
- Cost / Conversion
- Search Terms
- Quality-related diagnostics
- Landing Page Experience

Primary conversion:

**WhatsApp Click**

Long-term:

**Qualified Seller Lead**

---

# 68. SEO KPI

Monitor:

- Organic clicks
- Organic impressions
- Average position
- CTR
- Indexed pages
- Top keywords
- Top landing pages
- Backlinks
- Core Web Vitals

---

# 69. Definition of Done

Website dianggap siap production jika:

### Design

- [ ] Clean
- [ ] Modern
- [ ] Responsive
- [ ] Mobile-first
- [ ] CTA jelas
- [ ] Tidak terlalu ramai

### Functionality

- [ ] Semua WhatsApp CTA berfungsi
- [ ] Pre-filled message berfungsi
- [ ] Navigation berfungsi
- [ ] FAQ berfungsi
- [ ] Mobile menu berfungsi

### SEO

- [ ] Title
- [ ] Description
- [ ] H1
- [ ] H2/H3
- [ ] Canonical
- [ ] Sitemap
- [ ] Robots
- [ ] JSON-LD
- [ ] Open Graph
- [ ] Internal links
- [ ] Alt text
- [ ] SEO-friendly URLs

### Performance

- [ ] Optimized images
- [ ] Optimized fonts
- [ ] Minimal client JS
- [ ] Good Core Web Vitals
- [ ] Mobile performance optimized

### Analytics

- [ ] Google Analytics
- [ ] Google Ads conversion
- [ ] WhatsApp click tracking

### Legal

- [ ] Privacy Policy
- [ ] Terms
- [ ] Cookie/tracking disclosure jika diperlukan

---

# 70. Recommended Final Landing Page Flow

```text
┌─────────────────────────────────────┐
│ NAVBAR                              │
│ Logo        Menu       Jual Mobil   │
├─────────────────────────────────────┤
│                                     │
│ HERO                                │
│                                     │
│ Jual Mobil Bekas                    │
│ dengan Mudah & Cepat                │
│                                     │
│ Kirim detail mobil Anda...          │
│                                     │
│ [ Jual Mobil Saya ]                 │
│                                     │
│                    [ CAR IMAGE ]    │
├─────────────────────────────────────┤
│                                     │
│ TRUST                               │
│ Cepat | Transparan | Praktis        │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ CARA KERJA                          │
│                                     │
│ 01 → Kirim Detail                   │
│ 02 → Kami Cek                       │
│ 03 → Dapatkan Penawaran             │
│ 04 → Deal                            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ MOBIL YANG KAMI BELI                │
│                                     │
│ City Car | Hatchback | MPV          │
│ SUV | Sedan | Pickup                │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ KENAPA KAMI?                        │
│                                     │
│ Tidak ribet                         │
│ Komunikasi langsung                 │
│ Proses jelas                        │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ TESTIMONIAL                         │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ FAQ                                 │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ SIAP JUAL MOBIL ANDA?               │
│                                     │
│ [ CHAT VIA WHATSAPP ]               │
│                                     │
├─────────────────────────────────────┤
│ FOOTER                              │
└─────────────────────────────────────┘

                 🟢 WhatsApp
```

---

# 71. Final Product Principle

Website harus dibangun dengan prinsip:

> **SEO brings people in. Design builds trust. Copy explains the value. WhatsApp creates the lead.**

Dengan demikian website bukan hanya terlihat bagus, tetapi memiliki fungsi bisnis yang jelas:

```text
        SEO
         +
     GOOGLE ADS
         ↓
      TRAFFIC
         ↓
   LANDING PAGE
         ↓
       TRUST
         ↓
        CTA
         ↓
      WHATSAPP
         ↓
       LEAD
         ↓
       OFFER
         ↓
        DEAL
```

Fokus utama MVP adalah **menghasilkan seller lead sebanyak mungkin dengan pengalaman yang sederhana, cepat, terpercaya, dan mudah ditemukan di Google.**
