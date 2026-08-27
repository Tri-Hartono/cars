"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  Zap,
  ArrowRight,
  Car,
  MapPin,
} from "lucide-react";
import { getWhatsAppUrl, getWhatsAppUrlForCar, MAPS_URL, BUSINESS_NAME } from "@/lib/whatsapp";
import { POPULAR_BRANDS } from "@/lib/carData";

interface BannerSlide {
  id: number;
  tag: string;
  tagBg: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  cta: string;
}

const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 1,
    tag: "PROMO TERBARU ⚡",
    tagBg: "bg-emerald-600 text-white",
    title: `Jual Mobil Bekas Cepat di ${BUSINESS_NAME}, Dana Cair 15 Menit!`,
    subtitle: "Dapatkan penawaran harga pasar terbaik tanpa potongan perantara. Transaksi aman, resmi, dan langsung transfer lunas.",
    badge: "Garansi Pembayaran Instan",
    image: "/images/cars/hero-car-main.webp",
    cta: "Klaim Penawaran via WA",
  },
  {
    id: 2,
    tag: "LAYANAN EKSKLUSIF 🏠",
    tagBg: "bg-neutral-900 text-white",
    title: "Gratis Home Inspection ke Rumah Anda",
    subtitle: `Tim inspektor profesional ${BUSINESS_NAME} memeriksa 150 titik kendaraan langsung di lokasi Anda se-Jabodetabek tanpa biaya transport.`,
    badge: "Bebas Biaya Transportasi",
    image: "/images/cars/suv.webp",
    cta: "Jadwalkan Inspeksi Gratis",
  },
  {
    id: 3,
    tag: "SEMUA MEREK & TAHUN 🚗",
    tagBg: "bg-emerald-700 text-white",
    title: "Terima Segala Kondisi & Over Kredit Leasing",
    subtitle: "Melayani mobil MPV, SUV, City Car, Sedan hingga mobil yang masih dalam masa cicilan leasing dengan proses resmi.",
    badge: "Bantuan Berkas Sah & Tuntas",
    image: "/images/cars/mpv.webp",
    cta: "Konsultasi Mobil Saya",
  },
  {
    id: 4,
    tag: "LOKASI SHOWROOM 📍",
    tagBg: "bg-neutral-800 text-white",
    title: `Kunjungi Showroom ${BUSINESS_NAME}`,
    subtitle: "Partner jual beli mobil terpercaya dengan showroom resmi di Jabodetabek. Cek lokasi kami di Google Maps.",
    badge: "Lokasi Strategis & Nyaman",
    image: "/images/cars/sedan.webp",
    cta: "Buka Google Maps",
  },
];

export default function FullWidthHero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Form quick state
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [year, setYear] = useState("");
  const [transmission, setTransmission] = useState("Otomatis (AT/CVT)");
  const [phone, setPhone] = useState("");

  const availableModels = useMemo(() => {
    const brandObj = POPULAR_BRANDS.find((b) => b.name === selectedBrand);
    return brandObj ? brandObj.models : [];
  }, [selectedBrand]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? BANNER_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % BANNER_SLIDES.length);
  };

  const active = BANNER_SLIDES[current];
  const defaultWaUrl = getWhatsAppUrl();

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppUrlForCar({
      phone: phone || "-",
      brand: selectedBrand || "Mobil",
      model: selectedModel || "",
      year: year || "-",
      transmission: transmission,
      location: "Jabodetabek",
      condition: "Siap diinspeksi",
    });
    window.open(url, "_blank");
  };

  return (
    <section className="relative bg-white border-b border-neutral-200/80">
      
      {/* 1. Full-Width Hero Rotating Promo Banner */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative w-full h-[380px] sm:h-[440px] md:h-[500px] lg:h-[540px] bg-neutral-950 overflow-hidden group"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={active.image}
              alt={active.title}
              fill
              priority
              className="object-cover object-center opacity-60"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/40 to-transparent" />

        {/* Slide Content Box */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between py-8 sm:py-12 relative z-10">
          
          {/* Top Tag */}
          <motion.div
            key={`tag-${current}`}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <span className={`text-[11px] sm:text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider ${active.tagBg}`}>
              {active.tag}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{active.badge}</span>
            </span>
          </motion.div>

          {/* Center Main Text */}
          <motion.div
            key={`content-${current}`}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3 max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-md">
              {active.title}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-neutral-200 leading-relaxed drop-shadow-xs max-w-xl">
              {active.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              {active.id === 4 ? (
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all group/btn"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Buka di Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </motion.a>
              ) : (
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={defaultWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all group/btn"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{active.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </motion.a>
              )}

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white backdrop-blur-md px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all border border-white/20"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Petunjuk Arah Maps</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Bottom Controls */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              {BANNER_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  type="button"
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === idx ? "w-8 bg-emerald-400" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            <div className="text-[11px] text-neutral-400 font-medium">
              {current + 1} / {BANNER_SLIDES.length}
            </div>
          </div>

        </div>

        {/* Navigation Arrow Controls */}
        <button
          onClick={prevSlide}
          type="button"
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-neutral-900/60 hover:bg-neutral-900/90 text-white flex items-center justify-center backdrop-blur-xs border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          type="button"
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-neutral-900/60 hover:bg-neutral-900/90 text-white flex items-center justify-center backdrop-blur-xs border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* 2. Fast Interactive Valuation Strip Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 sm:-mt-8 relative z-20 mb-6"
      >
        <div className="bg-white rounded-3xl border border-neutral-200 p-5 sm:p-6 shadow-xl shadow-neutral-200/60">
          
          <div className="flex items-center justify-between mb-3 border-b border-neutral-100 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
              <h2 className="text-xs sm:text-sm font-bold text-neutral-900 uppercase tracking-wider">
                Cek Perkiraan Harga Mobil Instan di {BUSINESS_NAME}
              </h2>
            </div>
            <span className="text-[11px] text-neutral-500 hidden sm:inline">
              ⚡ Hasil langsung terhubung ke WhatsApp (+62 877-5258-1074)
            </span>
          </div>

          <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 items-end">
            {/* Merek */}
            <div>
              <label className="block text-[11px] font-bold text-neutral-700 mb-1">
                Merek Mobil
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => {
                  setSelectedBrand(e.target.value);
                  setSelectedModel("");
                }}
                required
                className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-xl font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:bg-white"
              >
                <option value="">Pilih Merek</option>
                {POPULAR_BRANDS.map((b) => (
                  <option key={b.name} value={b.name}>
                    {b.name}
                  </option>
                ))}
                <option value="Merek Lain">Lainnya</option>
              </select>
            </div>

            {/* Model */}
            <div>
              <label className="block text-[11px] font-bold text-neutral-700 mb-1">
                Model / Tipe
              </label>
              {availableModels.length > 0 ? (
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-xl font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:bg-white"
                >
                  <option value="">Pilih Model</option>
                  {availableModels.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                  <option value="Model Lain">Model Lain</option>
                </select>
              ) : (
                <input
                  type="text"
                  placeholder={selectedBrand ? "Ketik tipe model" : "Pilih merek dulu"}
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-xl font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:bg-white"
                />
              )}
            </div>

            {/* Tahun */}
            <div>
              <label className="block text-[11px] font-bold text-neutral-700 mb-1">
                Tahun
              </label>
              <input
                type="number"
                placeholder="Contoh: 2020"
                min="2000"
                max={new Date().getFullYear()}
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-xl font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:bg-white"
              />
            </div>

            {/* No WhatsApp */}
            <div>
              <label className="block text-[11px] font-bold text-neutral-700 mb-1">
                Nomor WhatsApp
              </label>
              <input
                type="tel"
                placeholder="0877xxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-xl font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:bg-white"
              />
            </div>

            {/* Submit Button */}
            <div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 bg-[#16A34A] hover:bg-[#15803D] text-white py-2.5 px-4 rounded-xl font-bold text-xs shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Cek Harga di WA</span>
              </motion.button>
            </div>
          </form>

        </div>
      </motion.div>

    </section>
  );
}
