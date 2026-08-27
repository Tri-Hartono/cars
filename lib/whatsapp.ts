export const DEFAULT_PHONE = "6287752581074";
export const MAPS_URL = "https://maps.app.goo.gl/tyxiNiTooNbJrqJv5";
export const BUSINESS_NAME = "Naufal Gallery Motor";
export const INSTAGRAM_URL = "https://www.instagram.com/naufalgallerymotor?igsi=MTRkb2tuMDNrbnpydQ==";
export const FACEBOOK_URL = "https://www.facebook.com/share/1bvxdbmQok/";

export interface CarInquiryData {
  name?: string;
  phone?: string;
  brand?: string;
  model?: string;
  year?: string;
  mileage?: string;
  transmission?: string;
  condition?: string;
  location?: string;
}

export function getWhatsAppUrl(
  customMessage?: string,
  phoneNumber: string = DEFAULT_PHONE
): string {
  const defaultText = `Halo ${BUSINESS_NAME}, saya ingin konsultasi dan menjual mobil saya. Mohon informasi estimasi harga dan jadwal inspeksi gratis ke rumah.`;
  const message = customMessage || defaultText;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppUrlForCar(
  data: CarInquiryData,
  phoneNumber: string = DEFAULT_PHONE
): string {
  const lines = [
    `Halo ${BUSINESS_NAME}, saya ingin menjual mobil dengan rincian berikut:`,
    ``,
    `👤 Nama Pemilik: ${data.name || "Pemilik"}`,
    `📱 No. WhatsApp: ${data.phone || "-"}`,
    `🚗 Merek Mobil: ${data.brand || "-"}`,
    `📋 Model / Tipe: ${data.model || "-"}`,
    `📅 Tahun Pembuatan: ${data.year || "-"}`,
    `⚙️ Transmisi: ${data.transmission || "Otomatis (AT)"}`,
    data.mileage ? `🛣️ Jarak Tempuh: ${data.mileage}` : "",
    data.condition ? `🔍 Kondisi: ${data.condition}` : "",
    `📍 Lokasi Inspeksi: ${data.location || "Jabodetabek"}`,
    ``,
    `Mohon info estimasi penawaran harga dan jadwal inspeksi gratis di rumah. Terima kasih!`,
  ].filter(Boolean);

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function getWhatsAppUrlForLocation(
  location: string,
  phoneNumber: string = DEFAULT_PHONE
): string {
  const text = `Halo ${BUSINESS_NAME}, saya ingin menjual mobil saya dan mengajukan jadwal Home Inspection gratis di wilayah ${location}. Mohon dibantu.`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}
