import { Mail } from "lucide-react";
import { SocialLinks } from "@/components/ui/BrandIcons";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";
import type { Dictionary } from "@/i18n/dictionaries";

export function Contact({ t }: { t: Dictionary["contact"] }) {
  return (
    <Section id="contact" index="05" title={t.title}>
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
          />
          <h3 className="relative text-2xl font-bold tracking-tight sm:text-4xl">{t.heading}</h3>
          <p className="relative mx-auto mt-4 max-w-lg text-muted">{t.text}</p>
          <div className="relative mt-8 flex flex-col items-center gap-5">
            <ButtonLink href={`mailto:${profile.email}`}>
              <Mail size={16} aria-hidden /> {t.cta}
            </ButtonLink>
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
            <SocialLinks links={profile.socials} />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
