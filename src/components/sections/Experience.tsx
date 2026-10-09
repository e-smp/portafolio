import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { experience, localize } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Experience({ locale, t }: { locale: Locale; t: Dictionary["experience"] }) {
  return (
    <Section id="experience" index="03" title={t.title}>
      <ol className="relative ml-1.5 border-l border-border">
        {experience.map((item, i) => (
          <Reveal as="li" key={item.title.en} delay={i * 0.06} className="relative pb-12 pl-8 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 border-accent bg-background"
            />
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              {item.period[locale]}
            </p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight">
              {item.title[locale]}
              {item.organization && <span className="text-accent"> @ {item.organization}</span>}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {item.description[locale]}
            </p>
            {item.tags.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => {
                  const label = localize(tag, locale);
                  return (
                    <li key={label}>
                      <Badge>{label}</Badge>
                    </li>
                  );
                })}
              </ul>
            )}
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
