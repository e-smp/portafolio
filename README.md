# Portafolio

Portafolio personal con Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion y Lucide.

## Desarrollo

```bash
npm run dev     # http://localhost:3000 (redirige a /es o /en)
npm run build   # build de producción (páginas estáticas)
npm run lint
```

## Personalizar

| Qué | Dónde |
| --- | --- |
| Nombre, bio, proyectos, experiencia, skills, redes | `src/data/profile.ts` |
| Textos de la interfaz (ES / EN) | `src/messages/es.json`, `src/messages/en.json` |
| Colores (acento, fondo…) para modo claro y oscuro | tokens en `src/app/globals.css` |
| URL pública (SEO, sitemap) | automática en Vercel; define `NEXT_PUBLIC_SITE_URL` solo si usas un dominio propio |
| Favicon | `src/app/favicon.ico` |

## Cómo funciona

- **i18n**: rutas `/es` y `/en` bajo `src/app/[locale]`. `src/proxy.ts` redirige `/` según la cookie `NEXT_LOCALE` o `Accept-Language`. Los diccionarios se cargan en el servidor (`src/i18n/dictionaries.ts`, vía `next/root-params`).
- **Tema**: oscuro por defecto; un script inline en `<head>` aplica la clase `dark` antes del primer pintado (sin flash) y el botón guarda la preferencia en `localStorage`.
- **Animaciones**: el hero usa CSS puro (no retrasa el LCP); las secciones usan `Reveal` (Framer Motion, respeta `prefers-reduced-motion`).
