"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Bagaimana cara menjual mobil di AutoValu?",
    answer:
      "Cukup isi data singkat mobil Anda di formulir website atau langsung chat WhatsApp resmi ke +62 812-3420-8253. Tim AutoValu akan memberikan estimasi awal dan menjadwalkan inspeksi gratis langsung ke lokasi rumah Anda.",
  },
  {
    question: "Apakah inspeksi ke rumah (Home Visit) benar-benar gratis?",
    answer:
      "Ya, 100% Gratis! Layanan Home Inspection kami menjangkau seluruh area Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) tanpa ada pungutan biaya transportasi atau biaya survei apapun.",
  },
  {
    question: "Berapa lama proses inspeksi dan pencairan dana?",
    answer:
      "Inspeksi 150 titik oleh teknisi profesional kami hanya memakan waktu sekitar 30 menit. Setelah Anda menyetujui penawaran harga final, seluruh dana langsung ditransfer lunas ke rekening Anda dalam waktu 15 menit di tempat.",
  },
  {
    question: "Apakah AutoValu menerima mobil yang masih dalam status kredit/leasing?",
    answer:
      "Bisa. Tim AutoValu berpengalaman menangani proses over kredit dan pelunasan sisa hutang leasing (take over) secara resmi, aman, dan transparan.",
  },
  {
    question: "Dokumen apa saja yang perlu saya siapkan saat inspeksi?",
    answer:
      "Dokumen utama yang diperlukan adalah STNK asli, BPKB asli (jika sudah lunas), Faktur (jika ada), KTP pemilik, serta buku servis/manual dan kunci cadangan jika tersedia.",
  },
  {
    question: "Bagaimana jika saya tidak setuju dengan harga penawaran setelah inspeksi?",
    answer:
      "Tidak ada paksaan! Jika Anda memutuskan untuk tidak menjual setelah inspeksi selesai, Anda tidak dikenakan biaya apapun. Keputusan sepenuhnya ada di tangan Anda.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const waUrl = getWhatsAppUrl();

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#FAFAF8] border-b border-neutral-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold text-neutral-600 uppercase tracking-widest bg-neutral-200/70 px-3 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>F.A.Q</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm max-w-md mx-auto">
            Informasi lengkap seputar prosedur, keamanan transaksi, dan pencairan dana di AutoValu.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                key={idx}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-neutral-900 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-neutral-500 shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Help CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white p-6 rounded-2xl border border-neutral-200 text-center space-y-3 shadow-xs"
        >
          <h3 className="text-sm font-bold text-neutral-900">
            Masih punya pertanyaan lain seputar mobil Anda?
          </h3>
          <p className="text-xs text-neutral-500 max-w-md mx-auto">
            Tim konsultan AutoValu siap menjawab pertanyaan Anda secara langsung melalui WhatsApp.
          </p>
          <div className="pt-1">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tanyakan via WhatsApp (+62 812-3420-8253)</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
