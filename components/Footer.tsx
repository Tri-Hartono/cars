import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, Phone, Clock, ShieldCheck, ExternalLink } from "lucide-react";
import { getWhatsAppUrl, DEFAULT_PHONE, MAPS_URL, BUSINESS_NAME } from "@/lib/whatsapp";

export default function Footer() {
  const waUrl = getWhatsAppUrl();

  const serviceAreas = [
    "Jakarta Selatan",
    "Jakarta Barat",
    "Jakarta Timur",
    "Jakarta Pusat & Utara",
    "Tangerang & BSD Serpong",
    "Tangerang Selatan & Bintaro",
    "Bekasi Kota & Cikarang",
    "Depok & Cibubur",
    "Bogor & Sekitarnya",
  ];

  return (
    <footer className="bg-white text-neutral-600 pt-16 pb-12 border-t border-neutral-200/90 relative">
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-200">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative h-12 w-44">
              <Image
                src="/image/logo.png"
                alt={`Logo ${BUSINESS_NAME}`}
                fill
                className="object-contain object-left"
                sizes="180px"
              />
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm">
              <strong className="text-neutral-900 font-semibold">{BUSINESS_NAME}</strong> adalah dealer dan partner pembelian mobil bekas langsung tanpa perantara di wilayah Jabodetabek. Proses cepat, inspeksi gratis ke rumah, dan pembayaran tunai cair dalam 15 menit.
            </p>
            <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-xs transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +62 877-5258-1074</span>
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-neutral-200 transition-all"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            </div>
          </div>

          {/* Col 2: Menu Navigasi */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Menu Navigasi
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-600 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/cek-harga" className="hover:text-emerald-600 transition-colors">
                  Cek Harga
                </Link>
              </li>
              <li>
                <Link href="/cara-jual" className="hover:text-emerald-600 transition-colors">
                  Cara Jual
                </Link>
              </li>
              <li>
                <Link href="/mobil-yang-kami-beli" className="hover:text-emerald-600 transition-colors">
                  Mobil yang Kami Beli
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-emerald-600 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-emerald-600 transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Area Layanan Home Visit */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Area Home Inspection</span>
            </h3>
            <ul className="grid grid-cols-1 gap-1.5 text-xs text-neutral-600">
              {serviceAreas.map((area, i) => (
                <li key={i} className="hover:text-neutral-900 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Layanan Kontak & Showroom */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Layanan &amp; Lokasi
            </h3>
            <div className="space-y-2.5 text-xs text-neutral-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900">Lokasi Showroom:</span>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-emerald-700 hover:underline mt-0.5 font-medium flex items-center gap-1"
                  >
                    <span>{BUSINESS_NAME} di Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900">WhatsApp / Telepon:</span>
                  <p className="text-neutral-600 mt-0.5">+62 877-5258-1074</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900">Jam Operasional:</span>
                  <p className="text-neutral-600 mt-0.5">Senin - Minggu: 08.00 - 21.00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900">Keamanan Transaksi:</span>
                  <p className="text-neutral-600 mt-0.5">Surat Jual Beli Sah &amp; Transfer Bank Instan</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-neutral-900 transition-colors">
              Kebijakan Privasi
            </Link>
            <span className="text-neutral-300">|</span>
            <Link href="/terms" className="hover:text-neutral-900 transition-colors">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
