import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function About({ locale, t }: { locale: Locale; t: Dictionary["about"] }) {
  return (
    <Section id="about" index="01" title={t.title}>
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:gap-14">
        <Reveal className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          {profile.bio.map((p, i) => (
            <p key={i}>{p[locale]}</p>
          ))}
        </Reveal>

        {/* Sustituye por <Image src="/avatar.jpg" .../> cuando tengas foto */}
        <Reveal delay={0.1} className="mx-auto md:mx-0">
          <div className="relative size-48 sm:size-56">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-accent/60"
            />
            <div className="relative flex size-full items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-card to-background font-mono text-5xl font-bold text-accent">
              {profile.initials}
            </div>
          </div>
        </Reveal>
      </div>

      <dl className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {profile.highlights.map((h, i) => (
          <Reveal key={h.value + i} delay={i * 0.08}>
            <div className="rounded-xl border border-border bg-card p-5">
              <dt className="sr-only">{h.label[locale]}</dt>
              <dd className="font-mono text-3xl font-semibold text-foreground">{h.value}</dd>
              <dd className="mt-1 text-sm text-muted">{h.label[locale]}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
