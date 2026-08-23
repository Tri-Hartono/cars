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
  title: "Jual Mobil Bekas Cepat & Mudah | Pembelian Mobil Bekas Langsung",
  description:
    "Mau jual mobil bekas tanpa ribet? Kami siap beli mobil Anda dengan penawaran harga terbaik, transparan, proses cepat, dan pembayaran instan di Jabodetabek via WhatsApp.",
  keywords: [
    "jual mobil",
    "jual mobil bekas",
    "jual mobil cepat",
    "tempat jual mobil",
    "pembeli mobil bekas",
    "jual mobil bekas jakarta",
    "jual mobil tanpa ribet",
  ],
  authors: [{ name: "Pembelian Mobil Bekas" }],
  openGraph: {
    title: "Jual Mobil Bekas Cepat & Mudah | Pembelian Mobil Bekas Langsung",
    description:
      "Kirim detail kendaraan via WhatsApp, dapatkan penawaran harga terbaik, dan terima pembayaran langsung di hari yang sama.",
    url: "https://pembelianmobil.com",
    siteName: "Pembelian Mobil Bekas",
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
