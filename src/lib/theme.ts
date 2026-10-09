export const THEME_KEY = "theme";

export type Theme = "dark" | "light";

/*
 * Oscuro es el tema por defecto (tokens en :root). El claro se activa con
 * `data-theme="light"` en <html>. React nunca renderiza ese atributo, así que
 * no lo sobrescribe al re-renderizar el layout (p. ej. al cambiar de idioma).
 */

export function getStoredTheme(): Theme {
  try {
    return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "light") root.setAttribute("data-theme", "light");
  else root.removeAttribute("data-theme");
}

/** Script inline que aplica el tema guardado antes del primer pintado (evita flash). */
export const themeInitScript = `(function(){try{if(localStorage.getItem("${THEME_KEY}")==="light")document.documentElement.setAttribute("data-theme","light")}catch(_){}})()`;
