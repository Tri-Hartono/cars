"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  rating: number;
  car: string;
  comment: string;
  avatar: string;
}

const ROW_1: TestimonialItem[] = [
  {
    id: 1,
    name: "Dipta",
    location: "Jakarta Barat",
    rating: 5.0,
    car: "Honda CR-V Turbo",
    comment:
      "Proses transaksinya sat set tanpa nunggu lama, janjian dengan surveyor AutoValu tepat waktu, dan yang paling penting harganya best deal!",
    avatar: "/images/avatars/avatar1.webp",
  },
  {
    id: 2,
    name: "Guruh Riyanto",
    location: "Bekasi",
    rating: 5.0,
    car: "Toyota Avanza Veloz",
    comment:
      "Proses cepat, pelayanan baik dan maksimal, harga terjamin baik tanpa ribet calo.",
    avatar: "/images/avatars/avatar2.webp",
  },
  {
    id: 3,
    name: "Munandar Hanafiah",
    location: "Bekasi",
    rating: 5.0,
    car: "Mitsubishi Xpander",
    comment:
      "Terima kasih AutoValu.id proses cepat dan harga kompetitif. Sukses terus ya.",
    avatar: "/images/avatars/avatar3.webp",
  },
  {
    id: 4,
    name: "Rafki Hidayatullah",
    location: "Tangerang",
    rating: 5.0,
    car: "Honda Brio RS",
    comment:
      "Terima kasih kepada tim AutoValu yang telah membantu proses jual mobil saya dengan sangat cepat dan mudah. Semuanya berjalan lancar!",
    avatar: "/images/avatars/avatar4.webp",
  },
  {
    id: 5,
    name: "Hendra Setiawan",
    location: "Jakarta Selatan",
    rating: 5.0,
    car: "Toyota Fortuner VRZ",
    comment:
      "Inspeksi di rumah sangat praktis. Surveyor datang tepat waktu, cek mesin detail, dan uang masuk rekening langsung 15 menit!",
    avatar: "/images/avatars/avatar1.webp",
  },
  {
    id: 6,
    name: "Siti Rahma",
    location: "Depok",
    rating: 5.0,
    car: "Daihatsu Terios",
    comment:
      "Awalnya ragu jual online, tapi ternyata di AutoValu aman banget. SPJB resmi disiapkan dan uang ditransfer lunas sebelum mobil dibawa.",
    avatar: "/images/avatars/avatar2.webp",
  },
  {
    id: 7,
    name: "Bambang Pamungkas",
    location: "Bogor",
    rating: 5.0,
    car: "Toyota Innova Reborn",
    comment:
      "Penawaran harga paling masuk akal dibanding showroom lain. Gak perlu tawar-menawar alot yang bikin pusing.",
    avatar: "/images/avatars/avatar3.webp",
  },
  {
    id: 8,
    name: "Dewi Lestari",
    location: "Jakarta Pusat",
    rating: 5.0,
    car: "Suzuki Ertiga Hybrid",
    comment:
      "Pelayanan customer service di WhatsApp ramah dan fast response. Jadwal inspeksi bisa disesuaikan waktu luang saya.",
    avatar: "/images/avatars/avatar4.webp",
  },
];

const ROW_2: TestimonialItem[] = [
  {
    id: 9,
    name: "Gilang",
    location: "Jakarta Selatan",
    rating: 5.0,
    car: "Hyundai Creta Prime",
    comment:
      "Gak nyangka jual mobil bisa secepat kilat! Tanpa ribet urus berkas, penawaran harga terbaik. Sukses selalu AutoValu.id.",
    avatar: "/images/avatars/avatar1.webp",
  },
  {
    id: 10,
    name: "Alvin Liem",
    location: "Tangerang (BSD)",
    rating: 5.0,
    car: "Honda Civic RS",
    comment:
      "AutoValu terbaik banget dalam proses jual mobil, sangat cepat dan mudah. Penawaran harga yang di berikan juga best deal banget. Sukses terus...",
    avatar: "/images/avatars/avatar2.webp",
  },
  {
    id: 11,
    name: "Fredson Kotamena",
    location: "Tangerang",
    rating: 5.0,
    car: "Toyota Raize Turbo",
    comment:
      "“Pengalaman jual mobil di AutoValu.id sangat memuaskan! Prosesnya cepat, mudah, dan bayarnya gak lama. Saya sangat terkesan dengan tim mereka...”",
    avatar: "/images/avatars/avatar3.webp",
  },
  {
    id: 12,
    name: "Richard",
    location: "Jakarta Selatan",
    rating: 5.0,
    car: "Mazda CX-5",
    comment:
      "Proses cepat sesuai taglinenya, keren AutoValu! Uang langsung cair tanpa potongan tersembunyi.",
    avatar: "/images/avatars/avatar4.webp",
  },
  {
    id: 13,
    name: "Agus Pratama",
    location: "Bekasi Timur",
    rating: 5.0,
    car: "Wuling Almaz RS",
    comment:
      "Mobil masih sisa cicilan leasing 4 bulan dibantu proses over kredit pelunasan sampai tuntas oleh AutoValu. Sangat transparan!",
    avatar: "/images/avatars/avatar1.webp",
  },
  {
    id: 14,
    name: "Maya Indriyani",
    location: "Jakarta Timur",
    rating: 5.0,
    car: "Toyota Yaris GR Sport",
    comment:
      "Sangat puas! Gak perlu repot foto-foto iklan atau ladeni puluhan calon pembeli yang cuma PHP.",
    avatar: "/images/avatars/avatar2.webp",
  },
  {
    id: 15,
    name: "Kevin Jonathan",
    location: "Tangerang Selatan (Bintaro)",
    rating: 5.0,
    car: "BMW 320i",
    comment:
      "Pemeriksaan mesin dan sasis sangat profesional oleh teknisi bersertifikat. Harga penawaran final sangat fair.",
    avatar: "/images/avatars/avatar3.webp",
  },
  {
    id: 16,
    name: "Farhan Hakim",
    location: "Cikarang",
    rating: 5.0,
    car: "Toyota Calya G",
    comment:
      "Jual mobil di AutoValu praktis banget. Hari ini inspeksi, hari ini juga uang masuk rekening.",
    avatar: "/images/avatars/avatar4.webp",
  },
];

export default function TestimonialGrid() {
  const waUrl = getWhatsAppUrl();

  const row1List = [...ROW_1, ...ROW_1];
  const row2List = [...ROW_2, ...ROW_2];

  return (
    <section id="testimoni" className="py-16 sm:py-20 bg-white border-b border-neutral-200/80 relative overflow-hidden">
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Pengalaman mereka di{" "}
            <span className="text-emerald-700">AutoValu!</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto">
            Cerita nyata dari ratusan pemilik kendaraan yang berhasil menjual mobilnya dengan cepat, aman, dan tanpa ribet.
          </p>
        </motion.div>

        {/* Moving Marquee Container with Left & Right Gradient Masks */}
        <div className="marquee-container relative w-full overflow-hidden space-y-4 py-2">
          
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Row 1: Moving Left */}
          <div className="animate-marquee-left flex gap-4">
            {row1List.map((t, idx) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                key={`row1-${idx}`}
                className="w-[290px] sm:w-[320px] shrink-0 bg-white rounded-2xl border border-neutral-200 p-5 flex flex-col justify-between shadow-xs hover:border-neutral-400 hover:shadow-md transition-all space-y-3 cursor-pointer"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2 py-0.5 rounded-md text-[11px] font-extrabold">
                      <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
                      <span>5.0</span>
                    </div>
                    <span className="text-[10px] font-bold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md">
                      {t.car}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-700 leading-relaxed line-clamp-3">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-3 border-t border-neutral-100">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-200 shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900 leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-[10px] text-neutral-500">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: Moving Right */}
          <div className="animate-marquee-right flex gap-4">
            {row2List.map((t, idx) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                key={`row2-${idx}`}
                className="w-[290px] sm:w-[320px] shrink-0 bg-white rounded-2xl border border-neutral-200 p-5 flex flex-col justify-between shadow-xs hover:border-neutral-400 hover:shadow-md transition-all space-y-3 cursor-pointer"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2 py-0.5 rounded-md text-[11px] font-extrabold">
                      <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
                      <span>5.0</span>
                    </div>
                    <span className="text-[10px] font-bold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md">
                      {t.car}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-700 leading-relaxed line-clamp-3">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-3 border-t border-neutral-100">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-200 shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900 leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-[10px] text-neutral-500">{t.location}</p>
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
            className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#16A34A] text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Gabung dengan Ratusan Penjual Puas di AutoValu</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
