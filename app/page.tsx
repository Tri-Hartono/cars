import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FullWidthHero from "@/components/FullWidthHero";
import TutorialSection from "@/components/TutorialSection";
import CarShowcase from "@/components/CarShowcase";
import TestimonialGrid from "@/components/TestimonialGrid";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Header & Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Full-Width Hero Promo Rotating Slider & Quick Valuation Bar */}
        <FullWidthHero />

        {/* 3. Tutorial Section (Cara Jual Mobil Cepat & Aman di JualMobilmu.id) - Bento Grid as in Image */}
        <TutorialSection />

        {/* 4. Car Models & Estimated Price Showcase */}
        <CarShowcase />

        {/* 5. Testimonial Section (Pengalaman mereka di Jualmobilmu!) - 2 Rows of Cards as in Image */}
        <TestimonialGrid />

        {/* 6. Frequently Asked Questions */}
        <FAQ />

        {/* 7. Final Call to Action Banner */}
        <FinalCTA />
      </main>

      {/* 8. Light Clean Footer */}
      <Footer />

      {/* 9. Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
