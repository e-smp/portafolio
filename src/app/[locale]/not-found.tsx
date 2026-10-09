import Link from "next/link";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getDictionary(locale);

  return (
    <main className="mx-auto flex min-h-svh max-w-5xl flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="font-mono text-6xl font-bold text-accent">404</p>
      <h1 className="text-2xl font-semibold">{t.notFound.title}</h1>
      <Link href={`/${locale}`} className="text-sm text-muted underline-offset-4 hover:text-accent hover:underline">
        {t.notFound.back}
      </Link>
    </main>
  );
}
