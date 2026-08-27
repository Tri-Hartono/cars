import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naufal Gallery Motor | Jual Mobil Bekas Cepat & Terpercaya Jabodetabek",
  description:
    "Jual mobil bekas tanpa ribet di Naufal Gallery Motor. Penawaran harga tertinggi, transparan, inspeksi gratis ke rumah se-Jabodetabek, dan dana cair 15 menit.",
  keywords: [
    "Naufal Gallery Motor",
    "jual mobil",
    "jual mobil bekas",
    "jual mobil cepat",
    "tempat jual mobil",
    "pembeli mobil bekas",
    "jual mobil bekas jakarta",
    "showroom mobil bekas jabodetabek",
    "jual mobil tanpa ribet",
  ],
  authors: [{ name: "Naufal Gallery Motor" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "Naufal Gallery Motor | Jual Mobil Bekas Cepat & Terpercaya",
    description:
      "Kirim detail kendaraan via WhatsApp, dapatkan penawaran harga terbaik, dan terima pembayaran langsung di hari yang sama bersama Naufal Gallery Motor.",
    url: "https://pembelianmobil.com",
    siteName: "Naufal Gallery Motor",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-[#171717]">
        {children}
      </body>
    </html>
  );
}
