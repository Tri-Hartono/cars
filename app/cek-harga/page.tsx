"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { MessageCircle, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { getWhatsAppUrlForCar, BUSINESS_NAME } from "@/lib/whatsapp";
import { POPULAR_BRANDS } from "@/lib/carData";

export default function CekHargaPage() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [transmission, setTransmission] = useState("Otomatis (AT)");
  const [condition, setCondition] = useState("Bagus / Siap Pakai");
  const [location, setLocation] = useState("Jakarta");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const availableModels = useMemo(() => {
    const brandObj = POPULAR_BRANDS.find((b) => b.name === selectedBrand);
    return brandObj ? brandObj.models : [];
  }, [selectedBrand]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppUrlForCar({
      name,
      phone,
      brand: selectedBrand,
      model: selectedModel,
      year,
      mileage,
      transmission,
      condition,
      location,
    });
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Navbar />

      <main className="flex-1 py-12 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-2"
          >
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Formulir Estimasi {BUSINESS_NAME}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Cek Nilai Jual Mobil Anda di {BUSINESS_NAME}
            </h1>
            <p className="text-sm text-neutral-600 max-w-lg mx-auto">
              Lengkapi data singkat kendaraan Anda di bawah ini untuk mendapatkan estimasi harga pasar transparan dan jadwal inspeksi gratis di rumah.
            </p>
          </motion.div>

          {/* Card Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-md"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Brand & Model */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Merek Mobil <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => {
                      setSelectedBrand(e.target.value);
                      setSelectedModel("");
                    }}
                    required
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-1 focus:ring-emerald-600 focus:bg-white focus:outline-none"
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
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Tipe / Model <span className="text-red-500">*</span>
                  </label>
                  {availableModels.length > 0 ? (
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-1 focus:ring-emerald-600 focus:bg-white focus:outline-none"
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
                      placeholder="Contoh: Avanza G / Brio RS"
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-1 focus:ring-emerald-600 focus:bg-white focus:outline-none"
                    />
                  )}
                </div>
              </div>

              {/* Year, Mileage & Transmission */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Tahun Pembuatan
                  </label>
                  <input
                    type="number"
                    placeholder="Contoh: 2020"
                    min="2000"
                    max={new Date().getFullYear()}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-1 focus:ring-emerald-600 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Jarak Tempuh (KM)
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: 45.000 km"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-1 focus:ring-emerald-600 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Transmisi
                  </label>
                  <select
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-1 focus:ring-emerald-600 focus:bg-white focus:outline-none"
                  >
                    <option value="Otomatis (AT/CVT)">Otomatis (AT/CVT)</option>
                    <option value="Manual (MT)">Manual (MT)</option>
                  </select>
                </div>
              </div>

              {/* Location & Condition */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Area Lokasi Mobil (Jabodetabek)
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-1 focus:ring-emerald-600 focus:bg-white focus:outline-none"
                  >
                    <option value="Jakarta Selatan">Jakarta Selatan</option>
                    <option value="Jakarta Barat">Jakarta Barat</option>
                    <option value="Jakarta Timur">Jakarta Timur</option>
                    <option value="Jakarta Pusat">Jakarta Pusat</option>
                    <option value="Jakarta Utara">Jakarta Utara</option>
                    <option value="Tangerang & Tangsel">Tangerang &amp; Tangsel</option>
                    <option value="Bekasi & Cikarang">Bekasi &amp; Cikarang</option>
                    <option value="Depok & Cibubur">Depok &amp; Cibubur</option>
                    <option value="Bogor">Bogor</option>
                    <option value="Luar Jabodetabek">Luar Jabodetabek</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Kondisi Umum Mobil
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-1 focus:ring-emerald-600 focus:bg-white focus:outline-none"
                  >
                    <option value="Sangat Mulus & Rutin Servis">Sangat Mulus &amp; Rutin Servis</option>
                    <option value="Bagus / Pemakaian Wajar">Bagus / Pemakaian Wajar</option>
                    <option value="Ada Lecet Ringan">Ada Lecet Ringan</option>
                    <option value="Perlu Servis / Pajak Mati">Perlu Servis / Pajak Mati</option>
                  </select>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Nama Pemilik / Penjual
                  </label>
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-1 focus:ring-emerald-600 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Nomor WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="0877xxxx"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl font-medium focus:ring-1 focus:ring-emerald-600 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base shadow-sm transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Kirim Data &amp; Cek Penawaran via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* 3 Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <motion.div
              whileHover={{ y: -3 }}
              className="p-4 bg-[#FAFAF8] border border-neutral-200 rounded-2xl"
            >
              <div className="text-sm font-bold text-neutral-900">⚡ 15 Menit Cair</div>
              <p className="text-xs text-neutral-500 mt-1">Uang langsung masuk rekening saat deal di tempat.</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              className="p-4 bg-[#FAFAF8] border border-neutral-200 rounded-2xl"
            >
              <div className="text-sm font-bold text-neutral-900">🏠 Home Inspection</div>
              <p className="text-xs text-neutral-500 mt-1">Inspeksi gratis langsung ke rumah Anda di Jabodetabek.</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              className="p-4 bg-[#FAFAF8] border border-neutral-200 rounded-2xl"
            >
              <div className="text-sm font-bold text-neutral-900">📄 Berkas Sah &amp; Aman</div>
              <p className="text-xs text-neutral-500 mt-1">Seluruh surat perjanjian jual beli (SPJB) disiapkan resmi.</p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
