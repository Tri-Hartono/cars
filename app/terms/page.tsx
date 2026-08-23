import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-3xl font-extrabold text-neutral-900">Syarat &amp; Ketentuan</h1>
          <p className="text-xs text-neutral-500">Terakhir diperbarui: {new Date().toLocaleDateString("id-ID")}</p>

          <div className="prose prose-neutral text-sm leading-relaxed space-y-4 text-neutral-700">
            <h2 className="text-base font-bold text-neutral-900">1. Persyaratan Kendaraan</h2>
            <p>
              Kendaraan yang dijual harus memiliki kelengkapan dokumen sah (STNK, BPKB jika lunas, atau surat keterangan leasing jika masih kredit). Kendaraan tidak dalam sengketa hukum atau status blokir kepolisian.
            </p>

            <h2 className="text-base font-bold text-neutral-900 pt-2">2. Ketentuan Penawaran &amp; Inspeksi</h2>
            <p>
              Estimasi harga penawaran awal dihitung berdasarkan data yang dikirimkan oleh penjual. Penawaran harga final disepakati setelah dilakukan inspeksi fisik 150 titik kendaraan oleh teknisi kami secara langsung di tempat.
            </p>

            <h2 className="text-base font-bold text-neutral-900 pt-2">3. Pembayaran &amp; Serah Terima</h2>
            <p>
              Pembayaran ditransfer langsung ke rekening bank pemilik/penjual setelah kesepakatan harga dan penandatanganan surat perjanjian jual beli (SPJB) yang sah selesai dilakukan.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
