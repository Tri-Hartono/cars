"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { BUSINESS_NAME } from "@/lib/whatsapp";

export default function TutorialSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="tutorial" className="py-16 sm:py-20 bg-white border-b border-neutral-200/80 relative">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold text-neutral-600 uppercase tracking-widest">
            <span className="w-6 h-[1.5px] bg-neutral-300 inline-block" />
            <span>Tutorial</span>
            <span className="w-6 h-[1.5px] bg-neutral-300 inline-block" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Cara Jual Mobil Cepat &amp; Aman di{" "}
            <span className="text-emerald-700">{BUSINESS_NAME}</span>
          </h2>
        </motion.div>

        {/* 5-Card Bento Grid Layout with Staggered Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-5"
        >
          
          {/* Card 1 (Top Left, col-span-4): Cek Perkiraan Harga Mobil */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-[#FAFAF8] rounded-3xl border border-neutral-200 p-6 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="space-y-2 z-10">
              <h3 className="text-lg font-bold text-neutral-900">
                Cek Perkiraan Harga Mobil
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Cari tahu nilai pasar mobil Anda melalui fitur Cek Harga kami. Cukup masukkan merek, tipe, dan tahun untuk mendapatkan rentang harga yang transparan.
              </p>
            </div>

            {/* Car visual at bottom - Affordable Family Car Toyota Avanza */}
            <div className="relative h-40 w-full my-3">
              <Image
                src="/images/tutorial/cek-harga-avanza.webp"
                alt="Cek Perkiraan Harga Mobil Toyota Avanza"
                fill
                unoptimized
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            <div className="z-10">
              <Link
                href="/cek-harga"
                className="w-full inline-flex items-center justify-center bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 py-2.5 px-4 rounded-xl text-xs font-bold shadow-xs transition-all"
              >
                <span>Cek Harga</span>
              </Link>
            </div>
          </motion.div>

          {/* Card 2 (Top Center, col-span-4): Isi Data */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-[#FAFAF8] rounded-3xl border border-neutral-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
          >
            {/* Top Visual Area */}
            <div className="relative h-44 w-full bg-gradient-to-b from-emerald-800 to-emerald-700">
              <Image
                src="/images/tutorial/isi-data.webp"
                alt="Isi Data Mobil"
                fill
                className="object-cover object-center opacity-85"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            {/* Bottom Content Area */}
            <div className="p-6 space-y-2 bg-[#FAFAF8] flex-1">
              <h3 className="text-lg font-bold text-neutral-900">
                Isi Data
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Masukkan nama, nomor kontak, detail mobil (merek, tipe, dan tahun mobil) Anda pada formulir. Data ini digunakan untuk memverifikasi unit dan menghubungi Anda untuk menentukan jadwal inspeksi.
              </p>
            </div>
          </motion.div>

          {/* Card 3 (Top Right, col-span-4): Pilih Jadwal Inspeksi (Rumah/Store) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-[#FAFAF8] rounded-3xl border border-neutral-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-neutral-900">
                Pilih Jadwal Inspeksi (Rumah/Store)
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Tentukan jadwal dan lokasi pengecekan fisik mobil Anda. Tim kami bisa datang langsung ke rumah atau kunjungi kantor showroom kami. Setelah jadwal dikonfirmasi, inspektor kami siap melakukan penilaian kondisi mobil.
              </p>
            </div>

            {/* Calendar visual */}
            <div className="relative h-36 w-full mt-4 rounded-xl overflow-hidden">
              <Image
                src="/images/tutorial/jadwal-inspeksi.webp"
                alt="Pilih Jadwal Inspeksi"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </motion.div>

          {/* Card 4 (Bottom Left, col-span-7): Inspeksi & Konfirmasi */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-7 bg-[#FAFAF8] rounded-3xl border border-neutral-200 p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xs hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="relative h-44 sm:h-full w-full sm:w-1/2 rounded-2xl overflow-hidden shrink-0">
              <Image
                src="/images/tutorial/inspeksi.webp"
                alt="Inspeksi 150 Titik"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 350px"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-neutral-900">
                Inspeksi &amp; Konfirmasi
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Tim teknisi kami memeriksa 150 titik (mesin, interior, &amp; eksterior) hanya dalam 30 menit. Dapatkan penawaran harga final yang jujur dan transparan langsung di lokasi sesuai kondisi fisik mobil.
              </p>
            </div>
          </motion.div>

          {/* Card 5 (Bottom Right, col-span-5): Terima Uang */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-5 bg-[#FAFAF8] rounded-3xl border border-neutral-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-neutral-900">
                Terima Uang
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Begitu harga deal, tim kami menyiapkan seluruh dokumen jual-beli mobil dan surat perjanjian jual beli mobil yang sah. Cukup tanda tangan surat jual beli mobil di tempat, dan dana langsung ditransfer ke rekening Anda dalam 15 menit!
              </p>
            </div>

            {/* Handover Keys & Cash visual */}
            <div className="relative h-32 w-full mt-4 rounded-xl overflow-hidden">
              <Image
                src="/images/tutorial/terima-uang.webp"
                alt="Terima Uang 15 Menit"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 350px"
              />
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
