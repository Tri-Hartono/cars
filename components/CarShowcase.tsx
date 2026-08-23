"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import { getWhatsAppUrl, getWhatsAppUrlForCar } from "@/lib/whatsapp";

interface CarItem {
  id: number;
  brand: string;
  model: string;
  category: "Semua" | "MPV" | "SUV" | "City Car" | "Sedan" | "EV";
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
    model: "Innova Zenix / Reborn",
    category: "MPV",
    yearRange: "2018 - 2024",
    priceRange: "Rp 260jt - 495jt",
    image: "/images/cars/mpv.webp",
    badge: "Paling Dicari",
    transmission: "Otomatis & Manual",
    popularity: "Permintaan Sangat Tinggi",
  },
  {
    id: 2,
    brand: "Toyota",
    model: "Fortuner 2.4 / 2.8 VRZ",
    category: "SUV",
    yearRange: "2017 - 2024",
    priceRange: "Rp 365jt - 575jt",
    image: "/images/cars/hero-car-main.webp",
    badge: "Harga Tertinggi",
    transmission: "Otomatis (AT)",
    popularity: "Favorit SUV",
  },
  {
    id: 3,
    brand: "Honda",
    model: "Brio RS / Satya E",
    category: "City Car",
    yearRange: "2018 - 2024",
    priceRange: "Rp 125jt - 188jt",
    image: "/images/cars/citycar.webp",
    badge: "Cair Cepat",
    transmission: "CVT / Manual",
    popularity: "Paling Laris",
  },
  {
    id: 4,
    brand: "Mitsubishi",
    model: "Xpander Ultimate / Cross",
    category: "MPV",
    yearRange: "2018 - 2024",
    priceRange: "Rp 185jt - 275jt",
    image: "/images/cars/mpv.webp",
    badge: "Permintaan Tinggi",
    transmission: "CVT / AT",
    popularity: "Keluarga Favorit",
  },
  {
    id: 5,
    brand: "Honda",
    model: "HR-V 1.5 SE / RS Turbo",
    category: "SUV",
    yearRange: "2018 - 2024",
    priceRange: "Rp 220jt - 395jt",
    image: "/images/cars/suv.webp",
    badge: "Populer",
    transmission: "CVT",
    popularity: "Crossover Terbaik",
  },
  {
    id: 6,
    brand: "Honda",
    model: "Civic RS Sedan / Turbo",
    category: "Sedan",
    yearRange: "2017 - 2024",
    priceRange: "Rp 320jt - 510jt",
    image: "/images/cars/sedan.webp",
    badge: "Prestige",
    transmission: "CVT",
    popularity: "Sedan Eksekutif",
  },
];

export default function CarShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const categories = ["Semua", "MPV", "SUV", "City Car", "Sedan"];

  const filteredCars = useMemo(() => {
    if (activeCategory === "Semua") return CARS_DATA;
    return CARS_DATA.filter((car) => car.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="katalog-mobil" className="py-16 sm:py-20 bg-[#FAFAF8] border-b border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header & Filter Controls */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-2">
            <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest bg-neutral-200/70 px-3 py-1 rounded-full">
              Katalog Mobil
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Desain Mobil &amp; Estimasi Harga
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm max-w-xl">
              Lihat contoh tipe mobil yang kami beli beserta perkiraan rentang harganya di AutoValu.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-xl border border-neutral-200 shadow-2xs">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  type="button"
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                  whileHover={{ y: -5 }}
                  key={car.id}
                  className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md hover:border-neutral-300 transition-all flex flex-col justify-between group"
                >
                  {/* Image & Badge */}
                  <div className="relative h-48 w-full bg-neutral-100 overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.model}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {car.badge}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold text-neutral-500 uppercase">
                          {car.brand} • {car.category}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                          {car.yearRange}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-neutral-900 mt-1 group-hover:text-emerald-700 transition-colors">
                        {car.model}
                      </h3>
                      <p className="text-sm font-black text-emerald-700 mt-1">
                        {car.priceRange}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-neutral-100">
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
            <span>Lihat semua daftar merek &amp; model mobil lengkap di AutoValu</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
