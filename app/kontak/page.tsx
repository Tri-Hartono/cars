"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { MessageCircle, Phone, Clock, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { getWhatsAppUrl, DEFAULT_PHONE } from "@/lib/whatsapp";

export default function KontakPage() {
  const waUrl = getWhatsAppUrl();

  const locations = [
    { city: "Jakarta Selatan", desc: "Kebayoran Baru, Cilandak, Jagakarsa, Tebet, Pasar Minggu" },
    { city: "Jakarta Barat", desc: "Puri Indah, Kebon Jeruk, Palmerah, Cengkareng" },
    { city: "Jakarta Timur", desc: "Cibubur, Rawamangun, Duren Sawit, Cakung" },
    { city: "Jakarta Pusat & Utara", desc: "Menteng, Kemayoran, Kelapa Gading, Pluit, Sunter" },
    { city: "Tangerang & Tangsel", desc: "BSD Serpong, Bintaro, Alam Sutera, Gading Serpong, Ciputat" },
    { city: "Bekasi & Cikarang", desc: "Bekasi Barat, Bekasi Timur, Galaxy, Summarecon, Cikarang" },
    { city: "Depok & Bogor", desc: "Margonda, Cinere, Sawangan, Cibinong, Sentul, Bogor Kota" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Navbar />

      <main className="flex-1 py-12 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-2"
          >
            <span className="text-xs font-bold text-neutral-700 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
              Hubungi AutoValu
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Kontak &amp; Layanan Pelanggan AutoValu
            </h1>
            <p className="text-sm text-neutral-600 max-w-lg mx-auto">
              Hubungi kami langsung via WhatsApp untuk pertanyaan, cek estimasi harga, atau jadwalkan inspeksi gratis ke rumah Anda.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="bg-white border border-neutral-200 rounded-3xl p-6 space-y-3 shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-neutral-900">WhatsApp Resmi AutoValu</h3>
                <p className="text-xs text-neutral-500 mt-0.5">Respon cepat dalam 5 - 15 menit</p>
                <p className="text-base font-extrabold text-emerald-700 mt-2">+62 812-3420-8253</p>
              </div>
              <div className="pt-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat WhatsApp Sekarang</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="bg-white border border-neutral-200 rounded-3xl p-6 space-y-3 shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-neutral-900">Jam Operasional</h3>
                <p className="text-xs text-neutral-500 mt-0.5">Melayani konsultasi &amp; inspeksi setiap hari</p>
                <p className="text-sm font-bold text-neutral-900 mt-2">Senin – Minggu: 08:00 – 21:00 WIB</p>
              </div>
              <p className="text-xs text-neutral-500 pt-2">
                *Inspeksi hari libur &amp; akhir pekan tetap beroperasi normal.
              </p>
            </motion.div>
          </div>

          {/* Service Area Coverage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#FAFAF8] border border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-4"
          >
            <div>
              <h2 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span>Wilayah Layanan Home Inspection AutoValu (Gratis)</span>
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                Tim teknisi AutoValu siap datang langsung ke lokasi rumah atau kantor Anda di area berikut:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {locations.map((loc, i) => (
                <div key={i} className="bg-white p-3.5 rounded-2xl border border-neutral-200 space-y-1">
                  <div className="text-xs font-bold text-neutral-900">{loc.city}</div>
                  <div className="text-[11px] text-neutral-500 leading-relaxed">{loc.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
