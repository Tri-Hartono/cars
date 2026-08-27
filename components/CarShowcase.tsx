"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import { getWhatsAppUrl, getWhatsAppUrlForCar, BUSINESS_NAME } from "@/lib/whatsapp";

interface CarItem {
  id: number;
  brand: string;
  model: string;
  category: "Semua" | "MPV" | "City Car" | "SUV" | "LCGC";
  yearRange: string;
  priceRange: string;
  image: string;
  badge: string;
  transmission: string;
  popularity: string;
}

const CARS_DATA: CarItem[] = [
  {
    id: 1,
    brand: "Toyota",
    model: "Avanza 1.3 / 1.5 G / Veloz",
    category: "MPV",
    yearRange: "2016 - 2024",
    priceRange: "Rp 115jt - 215jt",
    image: "/images/cars/avanza-silver.webp",
    badge: "Paling Dicari",
    transmission: "Manual & Matic",
    popularity: "Mobil Sejuta Umat",
  },
  {
    id: 2,
    brand: "Honda",
    model: "Brio Satya E / RS",
    category: "City Car",
    yearRange: "2016 - 2024",
    priceRange: "Rp 98jt - 168jt",
    image: "/images/cars/brio-yellow.webp",
    badge: "Cair Cepat",
    transmission: "CVT / Manual",
    popularity: "City Car Terlaris",
  },
  {
    id: 3,
    brand: "Toyota",
    model: "Calya 1.2 G / E",
    category: "LCGC",
    yearRange: "2017 - 2024",
    priceRange: "Rp 85jt - 135jt",
    image: "/images/cars/calya-white.webp",
    badge: "Permintaan Tinggi",
    transmission: "Manual & Matic",
    popularity: "Keluarga Irit",
  },
  {
    id: 4,
    brand: "Daihatsu",
    model: "Xenia 1.3 X / R",
    category: "MPV",
    yearRange: "2016 - 2024",
    priceRange: "Rp 100jt - 185jt",
    image: "/images/cars/xenia-silver.webp",
    badge: "Favorit Keluarga",
    transmission: "Manual & Matic",
    popularity: "MPV Tangguh",
  },
  {
    id: 5,
    brand: "Daihatsu",
    model: "Terios / Toyota Rush",
    category: "SUV",
    yearRange: "2016 - 2024",
    priceRange: "Rp 135jt - 215jt",
    image: "/images/cars/terios-grey.webp",
    badge: "SUV Ekonomis",
    transmission: "Manual & Matic",
    popularity: "Ground Clearance Tinggi",
  },
  {
    id: 6,
    brand: "Daihatsu",
    model: "Sigra 1.0 / 1.2 R Deluxe",
    category: "LCGC",
    yearRange: "2017 - 2024",
    priceRange: "Rp 78jt - 128jt",
    image: "/images/cars/calya-white.webp",
    badge: "Harga Terbaik",
    transmission: "Manual & Matic",
    popularity: "7-Seater Ekonomis",
  },
];

export default function CarShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const categories = ["Semua", "MPV", "City Car", "LCGC", "SUV"];

  const filteredCars = useMemo(() => {
    if (activeCategory === "Semua") return CARS_DATA;
    return CARS_DATA.filter((car) => car.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="katalog-mobil" className="py-14 sm:py-20 bg-[#FAFAF8] border-b border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        
        {/* Header & Filter Controls */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6"
        >
          <div className="space-y-1.5 sm:space-y-2">
            <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest bg-neutral-200/70 px-3 py-1 rounded-full">
              Katalog Mobil Terpopuler
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Mobil Keluarga, MPV &amp; LCGC
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm max-w-xl">
              Lihat contoh tipe mobil yang paling sering kami beli beserta perkiraan rentang harganya di {BUSINESS_NAME}.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 bg-white p-1 rounded-xl border border-neutral-200 shadow-2xs">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  type="button"
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isActive ? "text-white" : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 bg-[#111111] rounded-lg"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Cars Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredCars.map((car) => {
              const waUrl = getWhatsAppUrlForCar({
                brand: car.brand,
                model: car.model,
                year: car.yearRange,
                transmission: car.transmission,
              });

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -4 }}
                  key={car.id}
                  className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md hover:border-neutral-300 transition-all flex flex-col justify-between group"
                >
                  {/* Image & Badge */}
                  <div className="relative h-44 sm:h-52 w-full bg-neutral-100 overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.model}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-neutral-900/85 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                      {car.badge}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] sm:text-[11px] font-bold text-neutral-500 uppercase">
                          {car.brand} • {car.category}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                          {car.yearRange}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-neutral-900 mt-1 group-hover:text-emerald-700 transition-colors">
                        {car.model}
                      </h3>
                      <p className="text-sm sm:text-base font-black text-emerald-700 mt-1">
                        {car.priceRange}
                      </p>
                    </div>

                    <div className="pt-2 sm:pt-3 border-t border-neutral-100">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#16A34A] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-xs"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span>Jual Tipe Ini via WhatsApp</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View all button */}
        <div className="text-center pt-2">
          <Link
            href="/mobil-yang-kami-beli"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
          >
            <span>Lihat semua daftar merek &amp; model mobil lengkap di {BUSINESS_NAME}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
