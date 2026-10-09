import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { InlineScript } from "@/components/ui/InlineScript";
import { profile, siteUrl } from "@/data/profile";
import { locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { themeInitScript } from "@/lib/theme";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  const title = `${profile.name} — ${profile.role[locale]}`;

  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s · ${profile.name}` },
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      type: "website",
      title,
      description: t.meta.description,
      url: `/${locale}`,
      siteName: `${profile.name} · ${t.meta.title}`,
      locale: locale === "es" ? "es_ES" : "en_US",
    },
    twitter: { card: "summary_large_image", title, description: t.meta.description },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

export default async function LocaleLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await getLocale();
  const t = await getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${jetbrains.variable} antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <InlineScript html={themeInitScript} />
        {/* Sin JS, las animaciones on-scroll nunca se disparan: muestra el contenido */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-svh font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          {t.nav.skipToContent}
        </a>
        <Navbar locale={locale} initials={profile.initials} labels={t.nav} />
        {children}
        <Footer labels={t.footer} />
      </body>
    </html>
  );
}
