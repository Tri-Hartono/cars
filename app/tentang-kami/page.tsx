"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WhyUs from "@/components/WhyUs";
import TestimonialGrid from "@/components/TestimonialGrid";
import { MessageCircle, ShieldCheck, Zap, Users } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

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
              Tentang AutoValu Indonesia
            </h1>
            <p className="text-sm text-neutral-600 max-w-lg mx-auto">
              Platform pembelian mobil bekas terpercaya, profesional, dan transparan langsung ke pemilik kendaraan di area Jabodetabek.
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
            <h2 className="text-lg font-bold text-neutral-900">Komitmen Layanan AutoValu</h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              AutoValu hadir untuk memberikan solusi jual beli mobil yang mudah, transparan, dan menguntungkan. Pemilik mobil tidak perlu lagi membuang waktu mengurus iklan, menghadapi puluhan calon pembeli yang tidak serius, atau membayar komisi perantara yang mahal.
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
