import { Database, MonitorSmartphone, Server, Workflow, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { localize, skills } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

// Un icono por grupo, en el mismo orden que `skills` en src/data/profile.ts
const icons: LucideIcon[] = [MonitorSmartphone, Server, Database, Workflow];

export function Skills({ locale, t }: { locale: Locale; t: Dictionary["skills"] }) {
  return (
    <Section id="skills" index="04" title={t.title}>
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={group.category.en} delay={(i % 2) * 0.08}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <h3 className="flex items-center gap-2.5 font-semibold">
                  <Icon size={18} className="text-accent" aria-hidden />
                  {group.category[locale]}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const skill = localize(item, locale);
                    return (
                      <li
                        key={skill}
                        className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
                      >
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
