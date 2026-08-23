import {
  Calculator,
  FileText,
  CalendarCheck,
  Search,
  Banknote,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function HowItWorks() {
  const waUrl = getWhatsAppUrl();

  const steps = [
    {
      step: "01",
      icon: Calculator,
      title: "Cek Perkiraan Harga Mobil",
      description:
        "Kirimkan merek, tipe, dan tahun mobil untuk mendapatkan perkiraan rentang harga penawaran secara transparan.",
    },
    {
      step: "02",
      icon: FileText,
      title: "Isi Data Kendaraan",
      description:
        "Lengkapi kilometer, transmisi, kondisi umum, serta foto mobil Anda untuk evaluasi awal oleh tim kami.",
    },
    {
      step: "03",
      icon: CalendarCheck,
      title: "Pilih Jadwal Inspeksi (Home Visit)",
      description:
        "Tentukan waktu dan lokasi inspeksi. Tim kami datang langsung ke rumah atau kantor Anda tanpa dipungut biaya.",
    },
    {
      step: "04",
      icon: Search,
      title: "Inspeksi 150 Titik (30 Menit)",
      description:
        "Pemeriksaan mesin, transmisi, bodi, dan interior oleh teknisi profesional untuk penawaran harga final di tempat.",
    },
    {
      step: "05",
      icon: Banknote,
      title: "Terima Uang dalam 15 Menit",
      description:
        "Penandatanganan surat perjanjian jual-beli sah dan dana langsung cair ke rekening pribadi Anda seketika.",
    },
  ];

  return (
    <section id="cara-jual" className="relative py-16 sm:py-20 bg-white border-b border-neutral-200/80">
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-700 bg-neutral-100 px-3 py-1 rounded-full">
            Alur Penjualan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Cara Jual Mobil ke Kami
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Proses sederhana 5 langkah dari pengecekan awal hingga pembayaran lunas.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-neutral-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold text-neutral-300">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Prompt card */}
          <div className="bg-neutral-900 text-white rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Siap Mulai?
              </span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">
                Jadwalkan Inspeksi Gratis
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Tim kami siap melayani area Jabodetabek setiap hari.
              </p>
            </div>

            <div className="pt-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
