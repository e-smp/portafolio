"use client";

/**
 * Script inline que se ejecuta durante el parseo del HTML del servidor.
 * En el cliente se renderiza como `text/plain` para que React no avise de
 * "Encountered a script tag" (los scripts no se ejecutan al renderizar en cliente).
 * Ver node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
