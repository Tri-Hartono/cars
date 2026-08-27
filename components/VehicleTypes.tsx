import { Car, Truck, Zap, Shield, Sparkles, Award } from "lucide-react";
import { POPULAR_BRANDS } from "@/lib/carData";
import { getWhatsAppUrl, BUSINESS_NAME } from "@/lib/whatsapp";

export default function VehicleTypes() {
  const waUrl = getWhatsAppUrl();

  const categories = [
    {
      title: "MPV (Multi Purpose Vehicle)",
      desc: "Mobil keluarga 7-penumpang paling dicari seperti Toyota Innova, Avanza, Xpander, Ertiga, dan Calya.",
      badge: "Permintaan Tertinggi",
    },
    {
      title: "SUV & Crossover",
      desc: "Mobil tangguh & gagah dengan ground clearance tinggi seperti Pajero Sport, Fortuner, HR-V, CR-V, dan Creta.",
      badge: "Nilai Jual Kuat",
    },
    {
      title: "City Car & Hatchback",
      desc: "Mobil lincah hemat bahan bakar untuk mobilitas perkotaan seperti Honda Brio, Toyota Yaris, Agya, Ayla, dan Sirion.",
      badge: "Cepat Cair",
    },
    {
      title: "Sedan & Eksekutif",
      desc: "Mobil premium dengan kenyamanan tinggi seperti Honda Civic, Toyota Camry, Corolla Altis, Mercedes-Benz, dan BMW.",
      badge: "Prestige",
    },
    {
      title: "Kendaraan Listrik (EV / Hybrid)",
      desc: "Menerima mobil ramah lingkungan generasi terbaru seperti Wuling Air EV, Binguo, Ioniq 5, dan Innova Zenix Hybrid.",
      badge: "Tren Modern",
    },
    {
      title: "Kendaraan Komersial / Niaga",
      desc: "Menerima armada niaga usaha seperti Suzuki Carry Pickup, Daihatsu Gran Max, Hilux, dan Mitsubishi L300.",
      badge: "Bisa Borongan",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
            Daftar Merek &amp; Kategori
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Merek Mobil yang Diterima {BUSINESS_NAME}
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm">
            Kami menerima berbagai merek dan model kendaraan tahun 2010 hingga 2024 dengan kondisi fisik siap pakai.
          </p>
        </div>

        {/* Brand Badges Chips Grid */}
        <div className="bg-[#FAFAF8] p-6 sm:p-8 rounded-3xl border border-neutral-200 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Merek Terpopuler di Indonesia
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {POPULAR_BRANDS.map((brand, i) => (
              <span
                key={i}
                className="bg-white border border-neutral-200/90 text-neutral-800 text-xs font-semibold px-4 py-2 rounded-xl shadow-2xs hover:border-emerald-600 hover:text-emerald-700 transition-colors cursor-default"
              >
                {brand.name}
              </span>
            ))}
            <span className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-4 py-2 rounded-xl">
              + Merek Lainnya
            </span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 p-6 rounded-2xl flex flex-col justify-between space-y-3 hover:border-neutral-400 transition-all shadow-xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                    {cat.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-neutral-900">{cat.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-8 text-center space-y-3">
          <h3 className="text-lg font-bold">Merek atau Tipe Mobil Anda Tidak Ada di Daftar?</h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto">
            Tetap hubungi kami via WhatsApp ke +62 877-5258-1074 untuk menanyakan tipe mobil Anda. Tim kami siap melakukan pengecekan dan memberikan penawaran harga.
          </p>
          <div className="pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-xs transition-all"
            >
              <span>Konsultasi Mobil Saya via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
