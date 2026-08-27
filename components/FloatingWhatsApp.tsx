"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, DEFAULT_PHONE } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const waUrl = getWhatsAppUrl();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 bg-neutral-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <span>Konsultasi WA: +62 877-5258-1074</span>
      </div>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi kami melalui WhatsApp +62 877-5258-1074"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 transform hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">Chat WhatsApp</span>
      </a>
    </div>
  );
}
