import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pembelianmobil.com";
  const routes = [
    "",
    "/cek-harga",
    "/cara-jual",
    "/mobil-yang-kami-beli",
    "/tentang-kami",
    "/kontak",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
