"use client";

import Link from "next/link";
import { Languages } from "lucide-react";
import { LOCALE_COOKIE, type Locale } from "@/i18n/config";

export function LocaleSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const target: Locale = locale === "es" ? "en" : "es";

  return (
    <Link
      href={`/${target}`}
      hrefLang={target}
      aria-label={label}
      title={label}
      onClick={() => {
        // Recuerda la elección para que el proxy no la sobrescriba con Accept-Language
        document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
      }}
      className="inline-flex h-9 items-center gap-1.5 rounded-lg px-2.5 font-mono text-xs uppercase text-muted transition-colors hover:bg-card hover:text-foreground"
    >
      <Languages size={16} aria-hidden />
      {target}
    </Link>
  );
}
