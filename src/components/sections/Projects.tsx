import { FolderGit2 } from "lucide-react";
import { SocialIcon } from "@/components/ui/BrandIcons";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { profile, projects } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Projects({ locale, t }: { locale: Locale; t: Dictionary["projects"] }) {
  const github = profile.socials.find((s) => s.icon === "github");

  return (
    <Section id="projects" index="02" title={t.title} subtitle={projects.length ? t.subtitle : undefined}>
      {projects.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal as="li" key={project.title} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} locale={locale} t={t} />
            </Reveal>
          ))}
        </ul>
      ) : (
        <Reveal>
          <div className="flex flex-col items-center gap-4 rounded-xl border border-dashed border-border bg-card px-6 py-12 text-center">
            <FolderGit2 size={32} strokeWidth={1.5} className="text-accent" aria-hidden />
            <p className="max-w-md text-muted">{t.empty}</p>
            {github && (
              <ButtonLink href={github.href} target="_blank" rel="noopener noreferrer" variant="secondary">
                <SocialIcon name="github" width={16} height={16} /> {t.viewGithub}
              </ButtonLink>
            )}
          </div>
        </Reveal>
      )}
    </Section>
  );
}
