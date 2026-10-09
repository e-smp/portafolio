import { locale as getLocaleParam } from "next/root-params";
import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "./config";

const dictionaries = {
  es: () => import("@/messages/es.json").then((m) => m.default),
  en: () => import("@/messages/en.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["es"]>>;

/** Locale de la ruta actual (segmento raíz `[locale]`). */
export async function getLocale(): Promise<Locale> {
  const value = await getLocaleParam();
  if (!hasLocale(value)) notFound();
  return value;
}

export async function getDictionary(locale?: Locale): Promise<Dictionary> {
  return dictionaries[locale ?? (await getLocale())]();
}
