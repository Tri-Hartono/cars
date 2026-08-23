import { Zap, ShieldCheck, HandCoins, Users } from "lucide-react";

export default function TrustSection() {
  const trustPoints = [
    {
      icon: Zap,
      title: "Proses Cepat & Praktis",
      description:
        "Cukup kirim detail dan foto mobil Anda via WhatsApp, tim kami segera mengecek dan merespon.",
    },
    {
      icon: HandCoins,
      title: "Penawaran Transparan",
      description:
        "Harga penawaran diberikan secara objektif dan adil sesuai kondisi nyata dan kelengkapan kendaraan.",
    },
    {
      icon: Users,
      title: "Komunikasi Langsung",
      description:
        "Bicara langsung dengan pembeli tanpa perantara atau calo yang memotong harga kendaraan Anda.",
    },
    {
      icon: ShieldCheck,
      title: "Transaksi Aman & Jelas",
      description:
        "Pembayaran dilakukan langsung secara instan dan aman saat kesepakatan dan serah terima unit tercapai.",
    },
  ];

  return (
    <section className="py-12 bg-[#F1F1EE] border-y border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-neutral-200/80 hover:border-neutral-300 transition-all hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-neutral-900 text-base mb-1.5">
                  {point.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
