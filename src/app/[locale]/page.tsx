import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export default async function HomePage() {
  const locale = await getLocale();
  const t = await getDictionary(locale);

  return (
    <main id="main" className="mx-auto max-w-5xl px-4 sm:px-6">
      <span id="top" aria-hidden className="absolute top-0" />
      <Hero locale={locale} t={t.hero} />
      <About locale={locale} t={t.about} />
      <Projects locale={locale} t={t.projects} />
      <Experience locale={locale} t={t.experience} />
      <Skills locale={locale} t={t.skills} />
      <Contact t={t.contact} />
    </main>
  );
}
