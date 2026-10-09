import { ExternalLink, FolderGit2 } from "lucide-react";
import type { Project } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Badge } from "./Badge";
import { SocialIcon } from "./BrandIcons";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  t: Dictionary["projects"];
};

export function ProjectCard({ project, locale, t }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/5">
      <div className="flex items-start justify-between gap-4">
        <FolderGit2 size={28} strokeWidth={1.5} className="text-accent" aria-hidden />
        <div className="flex items-center gap-1">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.code}: ${project.title}`}
              className="inline-flex size-9 items-center justify-center rounded-lg text-muted transition-colors hover:text-accent"
            >
              <SocialIcon name="github" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.demo}: ${project.title}`}
              className="inline-flex size-9 items-center justify-center rounded-lg text-muted transition-colors hover:text-accent"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="mt-5 flex flex-wrap items-center gap-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
        {project.title}
        {project.featured && (
          <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-accent">
            {t.featured}
          </span>
        )}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description[locale]}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Badge>{tag}</Badge>
          </li>
        ))}
      </ul>
    </article>
  );
}
