"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, DEFAULT_PHONE } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const waUrl = getWhatsAppUrl();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Floating Tooltip Pill */}
      <div className="hidden sm:flex items-center gap-2 mr-3 bg-neutral-900/90 text-white text-xs font-bold py-2 px-4 rounded-full shadow-2xl backdrop-blur-md border border-neutral-700 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Konsultasi WA: +62 812-3420-8253</span>
      </div>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi kami melalui WhatsApp +62 812-3420-8253"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-200 border-2 border-white/80"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
          {/* Pulsing Green Indicator Dot */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
          </span>
        </div>
        <span className="font-extrabold text-sm tracking-wide hidden sm:inline">
          Chat WhatsApp
        </span>
      </a>
    </div>
  );
}
