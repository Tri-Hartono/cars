"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  ShieldCheck,
  Zap,
  ArrowRight,
  Car,
  TrendingUp,
  Check,
  MapPin,
} from "lucide-react";
import { getWhatsAppUrl, getWhatsAppUrlForCar, BUSINESS_NAME, MAPS_URL } from "@/lib/whatsapp";
import { POPULAR_BRANDS } from "@/lib/carData";

const FEATURED_CARS = [
  {
    name: "MPV Keluarga (Avanza / Sigra)",
    image: "/images/cars/hero-car-main.webp",
    models: "Avanza, Xenia, Sigra, Calya, Ertiga",
    price: "Rp 75jt - 210jt",
  },
  {
    name: "City Car & LCGC (Brio / Ayla)",
    image: "/images/cars/citycar.webp",
    models: "Brio, Agya, Ayla, Sirion, Ignis",
    price: "Rp 70jt - 165jt",
  },
  {
    name: "Mini SUV (Rush / Terios)",
    image: "/images/cars/suv.webp",
    models: "Rush, Terios, Raize, Rocky, BR-V",
    price: "Rp 120jt - 225jt",
  },
];

export default function Hero() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [year, setYear] = useState("");
  const [transmission, setTransmission] = useState("Otomatis (AT)");
  const [phone, setPhone] = useState("");

  const availableModels = useMemo(() => {
    const brandObj = POPULAR_BRANDS.find((b) => b.name === selectedBrand);
    return brandObj ? brandObj.models : [];
  }, [selectedBrand]);

  const defaultWaUrl = getWhatsAppUrl();

  const handleFormSubmit = (e: React.FormEvent) => {
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
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-14 lg:pt-12 lg:pb-16 border-b border-neutral-200 bg-white">
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        
        {/* Top: Simple Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left: Punchy Text & CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-[11px] sm:text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>{BUSINESS_NAME} • Beli &amp; Jual Mobil Bekas Cepat</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
              Jual Mobil Bekas di {BUSINESS_NAME} <br />
              <span className="text-emerald-700">Dana Cair 15 Menit</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-neutral-600 max-w-xl mx-auto lg:mx-0">
              Tanpa calo, tanpa perantara. Tim kami inspeksi gratis ke rumah Anda di Jabodetabek dan langsung transfer lunas di tempat.
            </p>

            {/* 3 Quick Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs font-semibold text-neutral-700">
              <span className="bg-white border border-neutral-200 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-xs">
                ⚡ 15 Menit Cair
              </span>
              <span className="bg-white border border-neutral-200 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-xs">
                🏠 Inspeksi Gratis ke Rumah
              </span>
              <span className="bg-white border border-neutral-200 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-xs">
                💰 Harga Pasar Tertinggi
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              <a
                href={defaultWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat WA: +62 877-5258-1074</span>
              </a>

              <Link
                href="/cek-harga"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all"
              >
                <span>Cek Estimasi Harga</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Simple Fast Form */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5 shadow-sm">
              <div className="mb-3">
                <h2 className="text-xs sm:text-sm font-bold text-neutral-900">
                  Cek Penawaran Cepat
                </h2>
                <p className="text-[10px] sm:text-[11px] text-neutral-500">
                  Pilih mobil Anda untuk perkiraan harga langsung:
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-2 sm:space-y-2.5">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-semibold text-neutral-700 mb-0.5">
                    Merek Mobil
                  </label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => {
                      setSelectedBrand(e.target.value);
                      setSelectedModel("");
                    }}
                    required
                    className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:bg-white"
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

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-semibold text-neutral-700 mb-0.5">
                    Tipe / Model
                  </label>
                  {availableModels.length > 0 ? (
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      required
                      className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:bg-white"
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
                      placeholder="Contoh: Avanza / Brio / Calya"
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      required
                      className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:bg-white"
                    />
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-semibold text-neutral-700 mb-0.5">
                      Tahun
                    </label>
                    <input
                      type="number"
                      placeholder="2018"
                      min="2000"
                      max={new Date().getFullYear()}
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-semibold text-neutral-700 mb-0.5">
                      Transmisi
                    </label>
                    <select
                      value={transmission}
                      onChange={(e) => setTransmission(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:bg-white"
                    >
                      <option value="Otomatis (AT)">Matic (AT)</option>
                      <option value="Manual (MT)">Manual (MT)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-semibold text-neutral-700 mb-0.5">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="0877xxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-1.5 bg-[#111111] hover:bg-neutral-800 text-white py-2.5 px-4 rounded-xl font-bold text-xs shadow-xs transition-all mt-1 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Dapatkan Penawaran di WA</span>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Featured Car Photo Grid Cards */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Kategori Mobil Keluarga Terpopuler
            </h3>
            <Link
              href="/mobil-yang-kami-beli"
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              <span>Lihat Semua</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {FEATURED_CARS.map((car, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-400 transition-all flex flex-col"
              >
                <div className="relative h-36 sm:h-40 w-full">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="p-3 sm:p-3.5 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-neutral-900">{car.name}</h4>
                    <span className="text-[10px] sm:text-[11px] font-bold text-emerald-700">{car.price}</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-neutral-500 truncate">{car.models}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
