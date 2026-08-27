import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pembelianmobil.com";
  const routes = [
    "",
    "/links",
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
    changeFrequency: route === "" || route === "/links" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/links" ? 0.9 : 0.8,
  }));
}
