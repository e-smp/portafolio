"use client";

import { Moon, Sun } from "lucide-react";
import { useLayoutEffect, useSyncExternalStore } from "react";
import { applyTheme, getStoredTheme, THEME_KEY } from "@/lib/theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const getIsDark = () => document.documentElement.getAttribute("data-theme") !== "light";

export function ThemeToggle({ label }: { label: string }) {
  // En el servidor no conocemos el tema: null -> icono neutro hasta hidratar.
  const isDark = useSyncExternalStore(subscribe, getIsDark, () => null);

  // El script inline solo corre en cargas completas; en navegaciones de cliente
  // (p. ej. cambio de idioma) <html> puede re-crearse, así que re-aplicamos antes del pintado.
  useLayoutEffect(() => {
    applyTheme(getStoredTheme());
  }, []);

  function toggle() {
    const next = getIsDark() ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex size-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-card hover:text-foreground"
    >
      {isDark === false ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
