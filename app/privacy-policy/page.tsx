import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-3xl font-extrabold text-neutral-900">Kebijakan Privasi</h1>
          <p className="text-xs text-neutral-500">Terakhir diperbarui: {new Date().toLocaleDateString("id-ID")}</p>

          <div className="prose prose-neutral text-sm leading-relaxed space-y-4 text-neutral-700">
            <p>
              Kami menghargai privasi data setiap pengguna dan pelanggan layanan pembelian mobil kami. Dokumen Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data informasi pribadi Anda.
            </p>

            <h2 className="text-base font-bold text-neutral-900 pt-2">1. Data yang Dikumpulkan</h2>
            <p>
              Data yang dikumpulkan saat Anda mengisi formulir atau menghubungi kami via WhatsApp meliputi: Nama, Nomor Telepon/WhatsApp, Detail Spesifikasi Kendaraan (Merek, Model, Tahun, Kilometer, Transmisi, Kondisi), dan Foto Kendaraan.
            </p>

            <h2 className="text-base font-bold text-neutral-900 pt-2">2. Penggunaan Data</h2>
            <p>
              Informasi yang Anda berikan hanya digunakan semata-mata untuk keperluan evaluasi penawaran harga mobil, penjadwalan inspeksi unit fisik, serta pembuatan surat perjanjian jual-beli sah saat transaksi berlangsung.
            </p>

            <h2 className="text-base font-bold text-neutral-900 pt-2">3. Keamanan Data</h2>
            <p>
              Kami berkomitmen untuk tidak menyebarluaskan, memperjualbelikan, atau membagikan data informasi pribadi dan kepemilikan kendaraan Anda kepada pihak ketiga yang tidak berkepentingan tanpa izin tertulis dari Anda.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
