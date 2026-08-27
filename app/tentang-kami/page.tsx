"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WhyUs from "@/components/WhyUs";
import TestimonialGrid from "@/components/TestimonialGrid";
import { MessageCircle, ShieldCheck, Zap, Users, MapPin, ExternalLink } from "lucide-react";
import { getWhatsAppUrl, BUSINESS_NAME, MAPS_URL } from "@/lib/whatsapp";

export default function TentangKamiPage() {
  const waUrl = getWhatsAppUrl();

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Navbar />

      <main className="flex-1 py-12 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-2"
          >
            <span className="text-xs font-bold text-neutral-700 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
              Profil Perusahaan
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Tentang {BUSINESS_NAME}
            </h1>
            <p className="text-sm text-neutral-600 max-w-lg mx-auto">
              Showroom &amp; platform jual beli mobil bekas terpercaya, profesional, dan transparan langsung ke pemilik kendaraan di area Jabodetabek.
            </p>
          </motion.div>

          {/* Mission & Values */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs"
          >
            <h2 className="text-lg font-bold text-neutral-900">Komitmen Layanan {BUSINESS_NAME}</h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {BUSINESS_NAME} hadir untuk memberikan solusi jual beli mobil yang mudah, transparan, dan menguntungkan. Pemilik mobil tidak perlu lagi membuang waktu mengurus iklan, menghadapi puluhan calon pembeli yang tidak serius, atau membayar komisi perantara yang mahal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 bg-[#FAFAF8] rounded-2xl border border-neutral-200 space-y-1"
              >
                <Zap className="w-5 h-5 text-emerald-600 mb-2" />
                <h3 className="text-sm font-bold text-neutral-900">Cepat &amp; Praktis</h3>
                <p className="text-xs text-neutral-500">Seluruh proses selesai dalam hitungan jam.</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 bg-[#FAFAF8] rounded-2xl border border-neutral-200 space-y-1"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2" />
                <h3 className="text-sm font-bold text-neutral-900">Aman &amp; Sah</h3>
                <p className="text-xs text-neutral-500">Legalitas transaksi dilindungi surat perjanjian resmi.</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 bg-[#FAFAF8] rounded-2xl border border-neutral-200 space-y-1"
              >
                <Users className="w-5 h-5 text-emerald-600 mb-2" />
                <h3 className="text-sm font-bold text-neutral-900">Bebas Calo</h3>
                <p className="text-xs text-neutral-500">Komunikasi langsung dengan penilai dan pembeli utama.</p>
              </motion.div>
            </div>

            {/* Showroom Location Box */}
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Lokasi Showroom {BUSINESS_NAME}</h4>
                  <p className="text-xs text-neutral-500">Kunjungi showroom kami langsung di Jabodetabek.</p>
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#111111] hover:bg-neutral-800 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all"
              >
                <span>Lihat di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </motion.div>

        </div>

        {/* WhyUs and Testimonials */}
        <WhyUs />
        <TestimonialGrid />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
