import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, index, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-20 sm:py-28">
      <Reveal className="mb-10 sm:mb-14">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-accent">{index}.</span>
          <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <span aria-hidden className="h-px flex-1 bg-border" />
        </div>
        {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
      </Reveal>
      {children}
    </section>
  );
}
