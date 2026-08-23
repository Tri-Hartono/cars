import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CarShowcase from "@/components/CarShowcase";
import VehicleTypes from "@/components/VehicleTypes";

export default function MobilYangKamiBeliPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Navbar />

      <main className="flex-1">
        {/* Full Car Showcase Component */}
        <CarShowcase />

        {/* Brands & Vehicle Categories */}
        <VehicleTypes />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
