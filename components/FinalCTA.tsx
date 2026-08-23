"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Check, Zap } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function FinalCTA() {
  const waUrl = getWhatsAppUrl();

  return (
    <section className="relative bg-white text-neutral-900 overflow-hidden py-16 sm:py-20 border-b border-neutral-200">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Subtle Vector Wave Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 400"
        fill="none"
        preserveAspectRatio="none"
      >
        <g stroke="#16a34a" strokeOpacity="0.2" strokeWidth="0.75" fill="none">
          <path d="M-50,200 C300,280 500,80 900,180 C1200,250 1350,120 1500,160" />
          <path d="M-50,220 C300,290 510,100 910,190 C1210,255 1360,130 1500,170" />
          <path d="M-50,240 C300,300 520,120 920,200 C1220,260 1370,140 1500,180" />
          <path d="M-50,260 C300,310 530,140 930,210 C1230,265 1380,150 1500,190" />
        </g>
      </svg>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/80">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>AutoValu Respon Cepat Dalam Hitungan Menit</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Siap Jual Mobil Anda Hari Ini di AutoValu?
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Kirimkan spesifikasi dan foto mobil Anda melalui WhatsApp. Tim AutoValu siap memberikan penawaran terbaik dan datang langsung untuk inspeksi gratis.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#16A34A] hover:bg-[#15803D] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-sm transition-all group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat WhatsApp: +62 812-3420-8253</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs text-neutral-500 font-medium">
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600" /> Inspeksi Gratis ke Rumah
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600" /> Tanpa Biaya Calo
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600" /> Dana 15 Menit Cair
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
