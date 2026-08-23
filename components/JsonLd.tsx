export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://pembelianmobil.com/#website",
        "url": "https://pembelianmobil.com",
        "name": "Beli Mobil Bekas Cepat & Terpercaya",
        "description": "Layanan pembelian mobil bekas terpercaya dan proses cepat tanpa ribet.",
        "inLanguage": "id-ID"
      },
      {
        "@type": "AutoDealer",
        "@id": "https://pembelianmobil.com/#organization",
        "name": "Pembelian Mobil Bekas",
        "url": "https://pembelianmobil.com",
        "logo": "https://pembelianmobil.com/image/logo.png",
        "description": "Tempat jual mobil bekas langsung dengan proses cepat, penawaran transparan, dan pembayaran instan.",
        "areaServed": [
          "Jakarta",
          "Bogor",
          "Depok",
          "Tangerang",
          "Bekasi"
        ],
        "priceRange": "$$"
      },
      {
        "@type": "FAQPage",
        "@id": "https://pembelianmobil.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Bagaimana cara menjual mobil ke kami?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cukup hubungi melalui WhatsApp, kirimkan detail dan foto kendaraan untuk kami cek dan berikan penawaran."
            }
          },
          {
            "@type": "Question",
            "name": "Mobil apa saja yang bisa dijual?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kami menerima jenis MPV, SUV, City Car, Sedan, Hatchback, hingga mobil niaga/pickup dengan dokumen lengkap."
            }
          },
          {
            "@type": "Question",
            "name": "Apakah bisa menjual mobil yang masih kredit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bisa, proses over kredit atau pelunasan sisa hutang leasing dapat dikonsultasikan langsung via WhatsApp."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
