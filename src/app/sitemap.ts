import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/profile";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}`]));
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
