"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { MessageCircle, Phone, Clock, MapPin, ShieldCheck, ArrowRight, ExternalLink, Link2 } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import {
  getWhatsAppUrl,
  DEFAULT_PHONE,
  MAPS_URL,
  BUSINESS_NAME,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from "@/lib/whatsapp";

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
              Hubungi {BUSINESS_NAME}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Kontak &amp; Layanan Pelanggan {BUSINESS_NAME}
            </h1>
            <p className="text-sm text-neutral-600 max-w-lg mx-auto">
              Hubungi kami langsung via WhatsApp untuk pertanyaan, cek estimasi harga, atau ikuti sosial media resmi kami.
            </p>
          </motion.div>

          {/* Contact & Maps Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1: WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="bg-white border border-neutral-200 rounded-3xl p-6 space-y-3 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900">WhatsApp Resmi</h3>
                  <p className="text-xs text-neutral-500 mt-0.5">Respon cepat dalam 5 - 15 menit</p>
                  <p className="text-base font-extrabold text-emerald-700 mt-2">+62 877-5258-1074</p>
                </div>
              </div>
              <div className="pt-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat WhatsApp</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Card 2: Google Maps Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-white border border-neutral-200 rounded-3xl p-6 space-y-3 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Lokasi Showroom</h3>
                  <p className="text-xs text-neutral-500 mt-0.5">{BUSINESS_NAME}</p>
                  <p className="text-xs font-medium text-neutral-700 mt-2">Buka peta navigasi Google Maps untuk petunjuk arah langsung.</p>
                </div>
              </div>
              <div className="pt-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#111111] hover:bg-neutral-800 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Buka Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Card 3: Jam Operasional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -3 }}
              className="bg-white border border-neutral-200 rounded-3xl p-6 space-y-3 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Jam Operasional</h3>
                  <p className="text-xs text-neutral-500 mt-0.5">Melayani konsultasi &amp; inspeksi setiap hari</p>
                  <p className="text-sm font-bold text-neutral-900 mt-2">Senin – Minggu: 08:00 – 21:00 WIB</p>
                </div>
              </div>
              <p className="text-[11px] text-neutral-500 pt-2">
                *Inspeksi ke rumah tetap beroperasi saat hari libur &amp; akhir pekan.
              </p>
            </motion.div>
          </div>

          {/* Social Media Connect Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#FAFAF8] border border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-4"
          >
            <div>
              <h2 className="text-lg font-bold text-neutral-900">Sosial Media Resmi {BUSINESS_NAME}</h2>
              <p className="text-xs text-neutral-500 mt-0.5">
                Ikuti akun sosial media resmi kami untuk update dokumentasi transaksi dan stok kendaraan:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-neutral-200 hover:border-pink-300 hover:shadow-xs transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900">Instagram</div>
                  <div className="text-[11px] text-neutral-500">@naufalgallerymotor</div>
                </div>
              </a>

              {/* Facebook */}
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-neutral-200 hover:border-blue-300 hover:shadow-xs transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FacebookIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900">Facebook Page</div>
                  <div className="text-[11px] text-neutral-500">Naufal Gallery Motor</div>
                </div>
              </a>

              {/* Linktree Bio */}
              <Link
                href="/links"
                className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-neutral-200 hover:border-emerald-300 hover:shadow-xs transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Link2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900">Bio Links</div>
                  <div className="text-[11px] text-neutral-500">Halaman Semua Link</div>
                </div>
              </Link>
            </div>
          </motion.div>

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
                <span>Wilayah Layanan Home Inspection {BUSINESS_NAME} (Gratis)</span>
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                Tim teknisi {BUSINESS_NAME} siap datang langsung ke lokasi rumah atau kantor Anda di area berikut:
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
