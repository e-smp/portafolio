import { ArrowUp } from "lucide-react";
import { SocialLinks } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";
import type { Dictionary } from "@/i18n/dictionaries";

export function Footer({ labels }: { labels: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-center font-mono text-xs text-muted sm:text-left">
          © {profile.name} · {labels.builtWith}
        </p>
        <div className="flex items-center gap-2">
          <SocialLinks links={profile.socials} />
          <a
            href="#top"
            aria-label={labels.backToTop}
            title={labels.backToTop}
            className="inline-flex size-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-card hover:text-accent"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
