import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Budi Santoso",
      location: "Jakarta Selatan",
      car: "Toyota Innova Reborn 2019",
      rating: 5,
      comment:
        "Prosesnya cepat dan tepat janji. Inspektor datang ke rumah di Jagakarsa, cek mobil 30 menit. Setelah deal, uang langsung ditransfer di tempat dalam 15 menit.",
    },
    {
      name: "Rina Wijaya",
      location: "Tangerang Selatan (BSD)",
      car: "Honda Brio RS 2021",
      rating: 5,
      comment:
        "Praktis sekali, tidak perlu repot ladeni banyak calon pembeli. Penawaran harganya jujur dan transparan sesuai kondisi mobil.",
    },
    {
      name: "Hendrik Pratama",
      location: "Bekasi",
      car: "Mitsubishi Xpander 2020",
      rating: 5,
      comment:
        "Layanan Home Inspection sangat membantu karena saya sibuk kerja. Komunikasi via WhatsApp responsif dan surat perjanjian jual beli jelas.",
    },
  ];

  return (
    <section id="testimoni" className="py-16 sm:py-20 bg-[#FAFAF8] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-700 bg-neutral-200/70 px-3 py-1 rounded-full">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Ulasan Pelanggan
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Pengalaman nyata dari pemilik mobil yang telah bertransaksi bersama kami.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-neutral-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                  <span className="text-xs font-bold text-neutral-700 ml-1">
                    5.0
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  &ldquo;{r.comment}&rdquo;
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-3.5 mt-5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-neutral-900 text-xs sm:text-sm">
                    {r.name}
                  </h4>
                  <p className="text-[11px] text-neutral-500">{r.location}</p>
                </div>
                <span className="text-[11px] font-semibold text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded-md">
                  {r.car}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
