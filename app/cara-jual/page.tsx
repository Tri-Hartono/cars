"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { MessageCircle, CheckCircle2, Calculator, FileText, CalendarCheck, Search, Banknote } from "lucide-react";
import { getWhatsAppUrl, BUSINESS_NAME } from "@/lib/whatsapp";

export default function CaraJualPage() {
  const waUrl = getWhatsAppUrl();

  const steps = [
    {
      no: "01",
      icon: Calculator,
      title: "Cek Perkiraan Harga Mobil",
      desc: `Kirimkan data merek, tipe, dan tahun mobil untuk mendapatkan estimasi nilai penawaran pasar secara transparan di ${BUSINESS_NAME}.`,
    },
    {
      no: "02",
      icon: FileText,
      title: "Isi Data Kendaraan",
      desc: "Lengkapi kilometer, transmisi, kondisi umum, dan foto mobil Anda agar tim kami bisa memberikan estimasi awal yang akurat.",
    },
    {
      no: "03",
      icon: CalendarCheck,
      title: "Jadwalkan Inspeksi Gratis",
      desc: `Tentukan hari dan lokasi pengecekan fisik. Teknisi ${BUSINESS_NAME} datang langsung ke rumah Anda tanpa biaya transport se-Jabodetabek.`,
    },
    {
      no: "04",
      icon: Search,
      title: "Pemeriksaan 150 Titik (30 Menit)",
      desc: "Pengecekan mesin, sasis, bodi, dan kelengkapan dokumen secara profesional untuk penawaran harga final di tempat.",
    },
    {
      no: "05",
      icon: Banknote,
      title: "Terima Uang dalam 15 Menit",
      desc: "Tanda tangan surat perjanjian jual beli sah, dan dana langsung ditransfer lunas ke rekening Anda saat itu juga.",
    },
  ];

  const documents = [
    "STNK Asli & Bukti Pembayaran Pajak",
    "BPKB Asli (jika sudah lunas) atau Surat Keterangan Leasing",
    "Faktur Kendaraan & Sertifikat NIK (jika ada)",
    "KTP Asli Pemilik / Penjual",
    "Buku Manual & Buku Servis Berkala",
    "Kunci Cadangan / Remote",
  ];

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
              Panduan Penjualan {BUSINESS_NAME}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Cara Jual Mobil ke {BUSINESS_NAME}
            </h1>
            <p className="text-sm text-neutral-600 max-w-lg mx-auto">
              5 tahapan praktis tanpa calo, tanpa perantara, dan tanpa proses berbelit-belit.
            </p>
          </motion.div>

          {/* 5 Steps Cards */}
          <div className="space-y-4">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ x: 4 }}
                  key={idx}
                  className="bg-white border border-neutral-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs hover:border-neutral-300 transition-all"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center font-bold text-sm shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-emerald-700">Langkah {s.no}</span>
                        <span className="text-neutral-300">•</span>
                        <h3 className="text-base font-bold text-neutral-900">{s.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-1">{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Required Documents Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#FAFAF8] border border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-4"
          >
            <div>
              <h2 className="text-lg font-bold text-neutral-900">
                Dokumen yang Perlu Disiapkan
              </h2>
              <p className="text-xs text-neutral-500 mt-0.5">
                Pastikan dokumen berikut lengkap saat jadwal inspeksi berlangsung:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-neutral-200 text-xs font-medium text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center p-8 bg-neutral-900 text-white rounded-3xl space-y-4"
          >
            <h3 className="text-xl font-bold">Siap Menjual Mobil Anda Sekarang?</h3>
            <p className="text-xs text-neutral-300 max-w-md mx-auto">
              Hubungi WhatsApp {BUSINESS_NAME} untuk jadwalkan inspeksi gratis ke rumah Anda hari ini.
            </p>
            <div className="pt-1">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white px-6 py-3 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi WhatsApp: +62 877-5258-1074</span>
              </motion.a>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
