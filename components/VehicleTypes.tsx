import { MessageCircle, HelpCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function VehicleTypes() {
  const waUrl = getWhatsAppUrl();

  const brands = [
    "Toyota",
    "Honda",
    "Mitsubishi",
    "Daihatsu",
    "Suzuki",
    "Hyundai",
    "Wuling",
    "Nissan",
    "Mazda",
    "BMW",
    "Mercedes Benz",
    "Chery",
    "BYD",
    "Kia",
    "Isuzu",
    "Lexus",
  ];

  const vehicleCategories = [
    {
      category: "MPV",
      desc: "Mobil keluarga dengan ruang kabin luas dan kapasitas 7 penumpang.",
      popular: "Avanza, Innova, Xpander, Ertiga, Calya, Sigra, Stargazer",
    },
    {
      category: "SUV",
      desc: "Mobil tangguh dengan ground clearance tinggi untuk segala kebutuhan.",
      popular: "Fortuner, Pajero Sport, HR-V, CR-V, Rush, Terios, Creta",
    },
    {
      category: "City Car & Hatchback",
      desc: "Mobil lincah dan hemat bahan bakar untuk mobilitas harian.",
      popular: "Brio, Agya, Ayla, Yaris, Jazz, Baleno, Ignis",
    },
    {
      category: "Sedan",
      desc: "Mobil dengan kenyamanan maksimal dan pengalaman berkendara halus.",
      popular: "Civic, Camry, Altis, BMW Seri 3/5, Mercedes C/E Class",
    },
    {
      category: "Commercial / Niaga",
      desc: "Kendaraan niaga dan armada operasional usaha.",
      popular: "Gran Max, Carry, Hilux, L300",
    },
    {
      category: "Mobil Listrik (EV)",
      desc: "Kendaraan listrik modern ramah lingkungan.",
      popular: "Wuling Air EV, Binguo EV, Ioniq 5",
    },
  ];

  return (
    <section id="merk-mobil" className="py-16 sm:py-20 bg-[#FAFAF8] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-700 bg-neutral-200/70 px-3 py-1 rounded-full">
            Kategori Kendaraan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Merek Mobil yang Kami Beli
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Kami menerima berbagai merek mobil asal Jepang, Eropa, Korea, hingga mobil listrik.
          </p>
        </div>

        {/* Brand Badges Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {brands.map((b) => (
            <div
              key={b}
              className="bg-white border border-neutral-200 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-neutral-800"
            >
              {b}
            </div>
          ))}
          <div className="bg-neutral-900 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold">
            + Merek Lainnya
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {vehicleCategories.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-neutral-200 hover:border-neutral-400 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-neutral-900 mb-1.5">
                  {item.category}
                </h3>
                <p className="text-xs text-neutral-600 mb-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-2.5 text-[11px] text-neutral-500">
                <span className="font-semibold text-neutral-700">Contoh:</span> {item.popular}
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA Callout */}
        <div className="mt-8 bg-white border border-neutral-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-neutral-900">
              Tidak menemukan tipe mobil Anda pada daftar di atas?
            </h4>
            <p className="text-xs text-neutral-500 mt-0.5">
              Tetap hubungi kami via WhatsApp ke +62 812-3420-8253 untuk menanyakan tipe mobil Anda.
            </p>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#111111] hover:bg-neutral-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Tanyakan via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
