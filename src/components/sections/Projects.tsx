import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Projects({ locale, t }: { locale: Locale; t: Dictionary["projects"] }) {
  return (
    <Section id="projects" index="02" title={t.title} subtitle={t.subtitle}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.title} delay={(i % 3) * 0.08}>
            <ProjectCard project={project} locale={locale} t={t} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
