"use client";

import { motion } from "framer-motion";
import { Star, MessageCircle, CheckCircle } from "lucide-react";
import { getWhatsAppUrl, BUSINESS_NAME } from "@/lib/whatsapp";

interface TestimonialItem {
  id: number;
  name: string;
  initials: string;
  location: string;
  rating: number;
  car: string;
  comment: string;
}

const ROW_1: TestimonialItem[] = [
  {
    id: 1,
    name: "Dipta Pratama",
    initials: "DP",
    location: "Jakarta Barat",
    rating: 5.0,
    car: "Toyota Avanza 1.3 G",
    comment:
      `Proses transaksinya sat set tanpa nunggu lama, janjian dengan surveyor ${BUSINESS_NAME} tepat waktu, dan yang paling penting harganya best deal!`,
  },
  {
    id: 2,
    name: "Guruh Riyanto",
    initials: "GR",
    location: "Bekasi Barat",
    rating: 5.0,
    car: "Daihatsu Xenia 1.3 R",
    comment:
      "Proses cepat, pelayanan baik dan ramah, harga terjamin pas di pasaran tanpa ribet calo.",
  },
  {
    id: 3,
    name: "Munandar Hanafiah",
    initials: "MH",
    location: "Tangerang Selatan",
    rating: 5.0,
    car: "Honda Brio Satya E",
    comment:
      `Terima kasih ${BUSINESS_NAME} proses cepat dan harga kompetitif. Sangat membantu saat butuh dana mendesak.`,
  },
  {
    id: 4,
    name: "Rafki Hidayatullah",
    initials: "RH",
    location: "Jakarta Timur",
    rating: 5.0,
    car: "Toyota Calya 1.2 G",
    comment:
      `Terima kasih kepada tim ${BUSINESS_NAME} yang telah membantu proses jual mobil saya dengan sangat cepat dan mudah. Semuanya berjalan lancar!`,
  },
  {
    id: 5,
    name: "Hendra Setiawan",
    initials: "HS",
    location: "Jakarta Selatan",
    rating: 5.0,
    car: "Daihatsu Sigra 1.2 R",
    comment:
      "Inspeksi di rumah sangat praktis. Surveyor datang tepat waktu, cek mesin detail, dan uang masuk rekening langsung 15 menit!",
  },
  {
    id: 6,
    name: "Siti Rahmawati",
    initials: "SR",
    location: "Depok",
    rating: 5.0,
    car: "Toyota Agya 1.2 G",
    comment:
      `Awalnya ragu jual online, tapi ternyata di ${BUSINESS_NAME} aman banget. SPJB resmi disiapkan dan uang ditransfer lunas sebelum mobil dibawa.`,
  },
  {
    id: 7,
    name: "Bambang Pamungkas",
    initials: "BP",
    location: "Bogor Kota",
    rating: 5.0,
    car: "Suzuki Ertiga GL",
    comment:
      "Penawaran harga paling masuk akal dibanding showroom lain. Gak perlu tawar-menawar alot yang bikin pusing.",
  },
  {
    id: 8,
    name: "Dewi Lestari",
    initials: "DL",
    location: "Jakarta Pusat",
    rating: 5.0,
    car: "Daihatsu Ayla 1.0 X",
    comment:
      "Pelayanan customer service di WhatsApp ramah dan fast response. Jadwal inspeksi bisa disesuaikan waktu luang saya.",
  },
];

const ROW_2: TestimonialItem[] = [
  {
    id: 9,
    name: "Gilang Ramadhan",
    initials: "GR",
    location: "Tangerang (BSD)",
    rating: 5.0,
    car: "Daihatsu Terios R",
    comment:
      `Gak nyangka jual mobil bisa secepat kilat! Tanpa ribet urus berkas, penawaran harga terbaik. Sukses selalu ${BUSINESS_NAME}.`,
  },
  {
    id: 10,
    name: "Alvin Liem",
    initials: "AL",
    location: "Jakarta Barat",
    rating: 5.0,
    car: "Honda Mobilio E",
    comment:
      `${BUSINESS_NAME} terbaik banget dalam proses jual mobil, sangat cepat dan mudah. Penawaran harga yang diberikan juga best deal.`,
  },
  {
    id: 11,
    name: "Fredson Kotamena",
    initials: "FK",
    location: "Bekasi Timur",
    rating: 5.0,
    car: "Toyota Rush 1.5 S",
    comment:
      `Pengalaman jual mobil di ${BUSINESS_NAME} sangat memuaskan! Prosesnya cepat, mudah, dan bayarnya langsung cair di tempat.`,
  },
  {
    id: 12,
    name: "Richard Santoso",
    initials: "RS",
    location: "Jakarta Utara",
    rating: 5.0,
    car: "Honda Brio RS Matic",
    comment:
      `Proses cepat sesuai taglinenya, mantap ${BUSINESS_NAME}! Uang langsung cair tanpa potongan tersembunyi.`,
  },
  {
    id: 13,
    name: "Agus Kurniawan",
    initials: "AK",
    location: "Cikarang",
    rating: 5.0,
    car: "Toyota Avanza Veloz",
    comment:
      `Mobil masih sisa cicilan leasing 4 bulan dibantu proses over kredit pelunasan sampai tuntas oleh ${BUSINESS_NAME}. Sangat transparan!`,
  },
  {
    id: 14,
    name: "Maya Indriyani",
    initials: "MI",
    location: "Jakarta Timur",
    rating: 5.0,
    car: "Daihatsu Sigra 1.0 M",
    comment:
      "Sangat puas! Gak perlu repot pasang iklan atau ladeni puluhan calon pembeli yang cuma tanya-tanya.",
  },
  {
    id: 15,
    name: "Kevin Jonathan",
    initials: "KJ",
    location: "Tangerang (Bintaro)",
    rating: 5.0,
    car: "Mitsubishi Xpander GLX",
    comment:
      "Pemeriksaan mesin dan sasis sangat profesional oleh teknisi bersertifikat. Harga penawaran final sangat jujur.",
  },
  {
    id: 16,
    name: "Farhan Hakim",
    initials: "FH",
    location: "Cibubur",
    rating: 5.0,
    car: "Toyota Calya 1.2 E",
    comment:
      `Jual mobil di ${BUSINESS_NAME} praktis banget. Hari ini inspeksi, hari ini juga uang masuk rekening lunas.`,
  },
];

export default function TestimonialGrid() {
  const waUrl = getWhatsAppUrl();

  const row1List = [...ROW_1, ...ROW_1];
  const row2List = [...ROW_2, ...ROW_2];

  return (
    <section id="testimoni" className="py-14 sm:py-20 bg-white border-b border-neutral-200/80 relative overflow-hidden">
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        
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
            <span>Testimoni</span>
            <span className="w-6 h-[1.5px] bg-neutral-300 inline-block" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Pengalaman mereka di{" "}
            <span className="text-emerald-700">{BUSINESS_NAME}!</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto">
            Cerita nyata dari ratusan pemilik kendaraan yang berhasil menjual mobilnya dengan cepat, aman, dan tanpa ribet.
          </p>
        </motion.div>

        {/* Moving Marquee Container with Left & Right Gradient Masks */}
        <div className="marquee-container relative w-full overflow-hidden space-y-3 sm:space-y-4 py-2">
          
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Row 1: Moving Left */}
          <div className="animate-marquee-left flex gap-3 sm:gap-4">
            {row1List.map((t, idx) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                key={`row1-${idx}`}
                className="w-[280px] sm:w-[320px] shrink-0 bg-white rounded-2xl border border-neutral-200 p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:border-neutral-400 hover:shadow-md transition-all space-y-3 cursor-pointer"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2 py-0.5 rounded-md text-[11px] font-extrabold">
                      <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
                      <span>5.0</span>
                    </div>
                    <span className="text-[10px] font-bold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-md">
                      {t.car}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-700 leading-relaxed line-clamp-3">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-3 border-t border-neutral-100">
                  {/* Monogram Initials Badge instead of photo */}
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[11px] flex items-center justify-center shrink-0 border border-emerald-200">
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <h4 className="text-xs font-bold text-neutral-900 truncate">
                        {t.name}
                      </h4>
                      <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                    </div>
                    <p className="text-[10px] text-neutral-500 truncate">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: Moving Right */}
          <div className="animate-marquee-right flex gap-3 sm:gap-4">
            {row2List.map((t, idx) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                key={`row2-${idx}`}
                className="w-[280px] sm:w-[320px] shrink-0 bg-white rounded-2xl border border-neutral-200 p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:border-neutral-400 hover:shadow-md transition-all space-y-3 cursor-pointer"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2 py-0.5 rounded-md text-[11px] font-extrabold">
                      <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
                      <span>5.0</span>
                    </div>
                    <span className="text-[10px] font-bold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-md">
                      {t.car}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-700 leading-relaxed line-clamp-3">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-3 border-t border-neutral-100">
                  {/* Monogram Initials Badge instead of photo */}
                  <div className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-800 font-extrabold text-[11px] flex items-center justify-center shrink-0 border border-neutral-200">
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <h4 className="text-xs font-bold text-neutral-900 truncate">
                        {t.name}
                      </h4>
                      <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                    </div>
                    <p className="text-[10px] text-neutral-500 truncate">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center pt-2"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#16A34A] text-white px-5 sm:px-6 py-2.5 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Gabung dengan Ratusan Penjual Puas di {BUSINESS_NAME}</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
