"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageCircle, Sparkles, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface PromoSlide {
  id: number;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  ctaText: string;
}

const SLIDES: PromoSlide[] = [
  {
    id: 1,
    tag: "PROMO TERBARU ⚡",
    tagColor: "bg-emerald-600 text-white",
    title: "Jual Mobil Cepat, Dana Cair 15 Menit!",
    subtitle: "Dapatkan penawaran harga pasar terbaik tanpa komisi calo. Uang langsung ditransfer saat deal di tempat.",
    badge: "Garansi Pembayaran Instan",
    image: "/images/cars/hero-car-main.webp",
    ctaText: "Klaim Penawaran Sekarang",
  },
  {
    id: 2,
    tag: "LAYANAN KHUSUS 🏠",
    tagColor: "bg-neutral-900 text-white",
    title: "Gratis Home Inspection ke Rumah Anda",
    subtitle: "Inspektor kami datang langsung ke lokasi Anda di seluruh Jabodetabek. Cek 150 titik kendaraan dalam 30 menit.",
    badge: "Bebas Biaya Transportasi",
    image: "/images/cars/suv.webp",
    ctaText: "Jadwalkan Inspeksi Rumah",
  },
  {
    id: 3,
    tag: "SEMUA MEREK & TAHUN 🚗",
    tagColor: "bg-emerald-700 text-white",
    title: "Terima Segala Kondisi & Over Kredit",
    subtitle: "Melayani mobil MPV, SUV, Sedan, City Car, hingga mobil yang masih dalam masa cicilan leasing.",
    badge: "Bantuan Berkas Resmi & Sah",
    image: "/images/cars/mpv.webp",
    ctaText: "Konsultasi Mobil Saya",
  },
  {
    id: 4,
    tag: "KEMUDAHAN TRANSAKSI 🛡️",
    tagColor: "bg-neutral-800 text-white",
    title: "Proses Transparan, Tanpa Ribet",
    subtitle: "Semua tahapan dijelaskan dari awal. Cukup kirim foto via WhatsApp dan tentukan waktu inspeksi.",
    badge: "Surat Perjanjian Jual Beli Sah",
    image: "/images/cars/sedan.webp",
    ctaText: "Hubungi Tim Penilai WA",
  },
];

export default function HeroPromoSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const waUrl = getWhatsAppUrl();

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const active = SLIDES[current];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-900 text-white shadow-lg group"
    >
      {/* Background Image with Overlay */}
      <div className="relative h-72 sm:h-80 md:h-96 w-full">
        <Image
          src={active.image}
          alt={active.title}
          fill
          priority
          className="object-cover object-center transition-all duration-700 scale-105 group-hover:scale-100 opacity-60"
          sizes="(max-width: 768px) 100vw, 700px"
        />

        {/* Gradient Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/40 to-transparent" />

        {/* Content on top of slide */}
        <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-between z-10">
          
          {/* Top Tag & Badge */}
          <div className="flex items-center justify-between gap-3">
            <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs uppercase tracking-wider ${active.tagColor}`}>
              {active.tag}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{active.badge}</span>
            </span>
          </div>

          {/* Center / Bottom Title & Action */}
          <div className="space-y-3 max-w-xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-md">
              {active.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed drop-shadow-xs line-clamp-2">
              {active.subtitle}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{active.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  type="button"
                  aria-label={`Pindah ke slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === idx ? "w-7 bg-emerald-400" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            <div className="text-[11px] text-neutral-400 font-medium">
              {current + 1} / {SLIDES.length}
            </div>
          </div>

        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          type="button"
          aria-label="Slide sebelumnya"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-900/60 hover:bg-neutral-900/90 text-white flex items-center justify-center backdrop-blur-xs border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          type="button"
          aria-label="Slide berikutnya"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-900/60 hover:bg-neutral-900/90 text-white flex items-center justify-center backdrop-blur-xs border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
}
