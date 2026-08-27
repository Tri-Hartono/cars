"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  MapPin,
  Globe,
  Calculator,
  FileText,
  Share2,
  Check,
  CheckCircle,
  Clock,
  Phone,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import {
  getWhatsAppUrl,
  DEFAULT_PHONE,
  MAPS_URL,
  BUSINESS_NAME,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from "@/lib/whatsapp";

export default function LinksPage() {
  const [copied, setCopied] = useState(false);
  const waUrl = getWhatsAppUrl();

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      if (navigator.share) {
        try {
          await navigator.share({
            title: `${BUSINESS_NAME} - Link Profile`,
            text: `Hubungi & kunjungi sosial media resmi ${BUSINESS_NAME}`,
            url,
          });
        } catch (err) {
          // ignore share cancel
        }
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    }
  };

  const links = [
    {
      title: "Chat WhatsApp Resmi",
      subtitle: "+62 877-5258-1074 • Respon Cepat 5-15 Menit",
      url: waUrl,
      icon: MessageCircle,
      isExternal: true,
      highlight: true,
      color: "bg-[#16A34A] hover:bg-[#15803D] text-white border-emerald-600",
      iconColor: "text-white",
      badge: "Utama",
    },
    {
      title: "Cek Estimasi Harga Mobil",
      subtitle: "Hitung perkiraan nilai jual mobil Anda secara transparan",
      url: "/cek-harga",
      icon: Calculator,
      isExternal: false,
      color: "bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-200 hover:border-neutral-300",
      iconColor: "text-emerald-600",
      badge: "Gratis",
    },
    {
      title: "Instagram Resmi",
      subtitle: "@naufalgallerymotor • Dokumentasi & Update Unit",
      url: INSTAGRAM_URL,
      icon: InstagramIcon,
      isExternal: true,
      color: "bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-200 hover:border-neutral-300",
      iconColor: "text-pink-600",
      badge: "Instagram",
    },
    {
      title: "Facebook Page Resmi",
      subtitle: "Ikuti postingan & informasi terbaru di Facebook",
      url: FACEBOOK_URL,
      icon: FacebookIcon,
      isExternal: true,
      color: "bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-200 hover:border-neutral-300",
      iconColor: "text-blue-600",
      badge: "Facebook",
    },
    {
      title: "Petunjuk Arah di Google Maps",
      subtitle: "Navigasi GPS langsung ke Showroom kami di Jabodetabek",
      url: MAPS_URL,
      icon: MapPin,
      isExternal: true,
      color: "bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-200 hover:border-neutral-300",
      iconColor: "text-red-500",
      badge: "Lokasi",
    },
    {
      title: "Website Utama",
      subtitle: "Katalog mobil, panduan lengkap, dan testimoni pelanggan",
      url: "/",
      icon: Globe,
      isExternal: false,
      color: "bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-200 hover:border-neutral-300",
      iconColor: "text-neutral-700",
      badge: "Website",
    },
    {
      title: "Panduan Cara Jual Mobil",
      subtitle: "5 langkah mudah jual mobil cepat tanpa ribet calo",
      url: "/cara-jual",
      icon: FileText,
      isExternal: false,
      color: "bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-200 hover:border-neutral-300",
      iconColor: "text-neutral-700",
      badge: "Panduan",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-neutral-900 flex flex-col justify-between py-8 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Subtle glowing ambient circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full mx-auto relative z-10 space-y-6">
        
        {/* Top Floating Share Button */}
        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            type="button"
            className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md border border-neutral-200/90 text-neutral-700 hover:text-neutral-900 px-3 py-1.5 rounded-full text-xs font-semibold shadow-2xs transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Link Tersalin</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-neutral-500" />
                <span>Bagikan</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Profile Card Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center space-y-3"
        >
          {/* Logo Emblem */}
          <div className="relative mx-auto w-24 h-24 bg-white rounded-3xl p-3 shadow-md border border-neutral-200/80 flex items-center justify-center">
            <Image
              src="/image/naufal-logo.png"
              alt={`Logo ${BUSINESS_NAME}`}
              fill
              priority
              unoptimized
              className="object-contain p-2"
              sizes="96px"
            />
          </div>

          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5">
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900">
                {BUSINESS_NAME}
              </h1>
              <CheckCircle className="w-4 h-4 text-emerald-600 fill-emerald-100 shrink-0" />
            </div>

            <p className="text-xs text-neutral-600 max-w-xs mx-auto leading-relaxed">
              Showroom &amp; Pusat Jual Beli Mobil Bekas Cepat Jabodetabek. Dana Cair 15 Menit &amp; Inspeksi Gratis ke Rumah.
            </p>
          </div>

          {/* Quick Social Media Chips Row */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-200/80 flex items-center justify-center shadow-2xs transition-all"
            >
              <MessageCircle className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-pink-50 text-pink-700 hover:bg-pink-600 hover:text-white border border-pink-200/80 flex items-center justify-center shadow-2xs transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white border border-blue-200/80 flex items-center justify-center shadow-2xs transition-all"
            >
              <FacebookIcon className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps"
              className="w-9 h-9 rounded-full bg-neutral-100 text-neutral-800 hover:bg-neutral-900 hover:text-white border border-neutral-200 flex items-center justify-center shadow-2xs transition-all"
            >
              <MapPin className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${DEFAULT_PHONE}`}
              aria-label="Telepon"
              className="w-9 h-9 rounded-full bg-neutral-100 text-neutral-800 hover:bg-neutral-900 hover:text-white border border-neutral-200 flex items-center justify-center shadow-2xs transition-all"
            >
              <Phone className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Links Stack List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-3"
        >
          {links.map((item, idx) => {
            const Icon = item.icon;
            const content = (
              <motion.div
                whileHover={{ scale: 1.015, y: -2 }}
                whileTap={{ scale: 0.985 }}
                className={`w-full p-4 rounded-2xl border shadow-xs transition-all flex items-center justify-between gap-3.5 group cursor-pointer ${item.color}`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      item.highlight
                        ? "bg-white/20 text-white"
                        : "bg-neutral-100 " + item.iconColor
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm truncate">{item.title}</span>
                      {item.badge && (
                        <span
                          className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-md uppercase tracking-wider ${
                            item.highlight
                              ? "bg-white text-emerald-800"
                              : "bg-neutral-100 text-neutral-600"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-[11px] truncate mt-0.5 ${
                        item.highlight ? "text-emerald-100" : "text-neutral-500"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-neutral-400 group-hover:text-neutral-700 transition-colors">
                  {item.isExternal ? (
                    <ExternalLink
                      className={`w-4 h-4 ${
                        item.highlight
                          ? "text-white/80 group-hover:text-white"
                          : "text-neutral-400 group-hover:text-neutral-900"
                      }`}
                    />
                  ) : (
                    <ArrowRight
                      className={`w-4 h-4 ${
                        item.highlight
                          ? "text-white/80 group-hover:text-white"
                          : "text-neutral-400 group-hover:text-neutral-900"
                      }`}
                    />
                  )}
                </div>
              </motion.div>
            );

            return item.isExternal ? (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <Link key={idx} href={item.url} className="block">
                {content}
              </Link>
            );
          })}
        </motion.div>

        {/* Operating Hours & Guarantee Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-2xl border border-neutral-200 p-4 text-center space-y-2 shadow-2xs text-xs text-neutral-600"
        >
          <div className="flex items-center justify-center gap-1.5 font-bold text-neutral-900">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Layanan 24 Jam Nonstop (24/7)</span>
          </div>
          <p className="text-[11px] text-neutral-500">
            Siap melayani konsultasi &amp; Home Inspection se-Jabodetabek setiap saat
          </p>
        </motion.div>

        {/* Footer info */}
        <div className="text-center pt-2 text-[11px] text-neutral-400">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
}
