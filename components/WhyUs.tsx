import {
  ShieldCheck,
  Zap,
  Home,
  CheckCircle2,
  FileCheck2,
  BadgeDollarSign,
} from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: Home,
      title: "Inspeksi Gratis ke Rumah",
      desc: "Tim teknisi kami datang langsung ke rumah atau kantor Anda (Home Visit) tanpa dipungut biaya.",
    },
    {
      icon: Zap,
      title: "Dana Cair 15 Menit",
      desc: "Uang langsung ditransfer lunas ke rekening Anda di tempat saat penandatanganan surat jual-beli.",
    },
    {
      icon: BadgeDollarSign,
      title: "Penawaran Transparan",
      desc: "Penawaran harga objektif sesuai kondisi fisik nyata dan riwayat kendaraan tanpa trik harga menjebak.",
    },
    {
      icon: FileCheck2,
      title: "Bantuan Berkas & Dokumen",
      desc: "Proses kelengkapan dokumen jual-beli dan surat perjanjian legalitas disiapkan sah oleh tim kami.",
    },
    {
      icon: ShieldCheck,
      title: "Bebas Calo & Aman",
      desc: "Hindari risiko penipuan atau komisi perantara berlebih dengan transaksi langsung satu pintu.",
    },
    {
      icon: ShieldCheck,
      title: "Privasi Data Terjaga",
      desc: "Data pribadi dan identitas kendaraan Anda aman dan terpercaya.",
    },
  ];

  const checklistData = [
    "Merk, Tipe & Varian Lengkap Kendaraan",
    "Tahun Pembuatan / Perakitan Mobil",
    "Jarak Tempuh (Kilometer saat ini)",
    "Pilihan Transmisi (Manual / Matic)",
    "Status Pajak & Dokumen (STNK, BPKB, Faktur)",
    "Foto Kendaraan (Eksterior, Interior, Odometer)",
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-20 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Why Choose Us */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-700 bg-neutral-100 px-3 py-1 rounded-full">
                Keunggulan Layanan
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mt-2.5">
                Kenapa Memilih Kami?
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base mt-2">
                Solusi praktis dan aman untuk menjual mobil bekas Anda tanpa repot pasang iklan atau menunggu pembeli yang tak pasti.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, idx) => {
                const Icon = f.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#FAFAF8] border border-neutral-200 space-y-1.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-neutral-900 text-sm">
                      {f.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Simple Checklist Card */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Panduan Persiapan
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Data yang Perlu Disiapkan
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Siapkan data berikut agar proses estimasi berjalan cepat saat chat ke WhatsApp:
                  </p>
                </div>

                <div className="space-y-2.5">
                  {checklistData.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-neutral-800 text-xs text-neutral-400">
                  💡 Foto kondisi mobil yang jelas akan mempercepat penawaran harga kami.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
