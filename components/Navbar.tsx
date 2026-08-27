"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X, Phone, ArrowRight, MapPin } from "lucide-react";
import { getWhatsAppUrl, DEFAULT_PHONE, MAPS_URL, BUSINESS_NAME } from "@/lib/whatsapp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const waUrl = getWhatsAppUrl();

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Cek Harga", href: "/cek-harga" },
    { name: "Cara Jual", href: "/cara-jual" },
    { name: "Mobil yang Kami Beli", href: "/mobil-yang-kami-beli" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-neutral-900 text-white text-xs py-2 px-4 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-neutral-300 font-medium text-[11px] sm:text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{BUSINESS_NAME} • Dana Cair 15 Menit • Inspeksi Gratis di Rumah</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-300 text-[11px] sm:text-xs">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <MapPin className="w-3 h-3 text-emerald-400" />
              <span>Lokasi Showroom (Google Maps)</span>
            </a>
            <a
              href={`https://wa.me/${DEFAULT_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+62 877-5258-1074</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">
            {/* Brand Logo & Name */}
            <Link href="/" className="flex items-center gap-3 group py-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative h-12 w-44 sm:h-14 sm:w-56"
              >
                <Image
                  src="/image/logo.png"
                  alt={`Logo ${BUSINESS_NAME}`}
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 180px, 240px"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-semibold text-neutral-600">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`transition-colors py-1 relative ${
                      isActive
                        ? "text-emerald-700 font-bold"
                        : "hover:text-neutral-900"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-600 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#111111] hover:bg-neutral-800 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all group shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Konsultasi WA</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center p-2 rounded-xl bg-emerald-600 text-white shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="p-2 rounded-xl text-neutral-700 hover:bg-neutral-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-b border-neutral-200 bg-white px-4 pt-2 pb-5 space-y-1 shadow-lg overflow-hidden"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                      isActive
                        ? "bg-emerald-50 text-emerald-800"
                        : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-2 space-y-2">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-neutral-100 text-neutral-800 px-4 py-2.5 rounded-xl font-bold text-xs border border-neutral-200"
                >
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Lihat Lokasi di Google Maps</span>
                </a>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#111111] text-white px-4 py-3 rounded-xl font-bold text-xs shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat via WhatsApp (+62 877-5258-1074)</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
