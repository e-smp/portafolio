import { ArrowRight, MapPin } from "lucide-react";
import { SocialLinks } from "@/components/ui/BrandIcons";
import { ButtonLink } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Hero({ locale, t }: { locale: Locale; t: Dictionary["hero"] }) {
  return (
    <section className="relative flex min-h-svh items-center pt-16">
      {/* Fondo decorativo a ancho completo, recortado para no provocar scroll horizontal */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden"
      >
        <div className="bg-grid absolute inset-0" />
        <div className="absolute left-1/2 top-1/3 size-[22rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl sm:size-[28rem]" />
      </div>

      <div className="w-full">
        {profile.available && (
          <div className="fade-up">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {t.available}
            </p>
          </div>
        )}

        <div className="fade-up" style={{ animationDelay: "0.05s" }}>
          <p className="font-mono text-sm text-accent sm:text-base">{t.greeting}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            {profile.name}
          </h1>
          <p className="caret mt-3 font-mono text-lg text-muted sm:text-2xl">
            {profile.role[locale]}
          </p>
        </div>

        <div className="fade-up" style={{ animationDelay: "0.15s" }}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline[locale]}
          </p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={14} aria-hidden /> {profile.location[locale]}
          </p>
        </div>

        <div className="fade-up mt-10 flex flex-col gap-4 sm:flex-row sm:items-center" style={{ animationDelay: "0.25s" }}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#projects">
              {t.ctaProjects} <ArrowRight size={16} aria-hidden />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              {t.ctaContact}
            </ButtonLink>
          </div>
          <SocialLinks links={profile.socials} className="sm:ml-2" />
        </div>
      </div>
    </section>
  );
}
