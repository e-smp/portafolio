/**
 * Contenido del portafolio. Edita este archivo para personalizar el sitio.
 * Los campos `Localized` llevan una versión por idioma.
 */
import type { Locale } from "@/i18n/config";

export type Localized = Record<Locale, string>;

export type SocialIcon = "github" | "linkedin" | "x";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const profile = {
  name: "Tu Nombre",
  initials: "TN",
  role: { es: "Desarrollador Frontend", en: "Frontend Developer" } satisfies Localized,
  location: { es: "Madrid, España", en: "Madrid, Spain" } satisfies Localized,
  tagline: {
    es: "Construyo interfaces web rápidas, accesibles y cuidadas al detalle con React, Next.js y TypeScript.",
    en: "I build fast, accessible and carefully crafted web interfaces with React, Next.js and TypeScript.",
  } satisfies Localized,
  email: "hola@example.com",
  available: true,
  bio: [
    {
      es: "Soy desarrollador frontend con foco en la experiencia de usuario y el rendimiento. Me gusta convertir diseños complejos en interfaces simples, mantenibles y agradables de usar.",
      en: "I'm a frontend developer focused on user experience and performance. I enjoy turning complex designs into simple, maintainable and delightful interfaces.",
    },
    {
      es: "Cuando no estoy programando, exploro nuevas herramientas, contribuyo a proyectos open source y escribo sobre lo que aprendo.",
      en: "When I'm not coding, I explore new tools, contribute to open source and write about what I learn.",
    },
  ] satisfies Localized[],
  highlights: [
    { value: "5+", label: { es: "años de experiencia", en: "years of experience" } },
    { value: "30+", label: { es: "proyectos entregados", en: "projects shipped" } },
    { value: "100", label: { es: "Lighthouse objetivo", en: "Lighthouse target" } },
  ] satisfies { value: string; label: Localized }[],
  socials: [
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "X", href: "https://x.com/", icon: "x" },
  ] satisfies { label: string; href: string; icon: SocialIcon }[],
};

export type Project = {
  title: string;
  description: Localized;
  tags: string[];
  demo?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Dashboard Analytics",
    description: {
      es: "Panel de métricas en tiempo real con gráficos interactivos, filtros avanzados y exportación de datos.",
      en: "Real-time metrics dashboard with interactive charts, advanced filters and data export.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    demo: "https://example.com",
    repo: "https://github.com/",
    featured: true,
  },
  {
    title: "E-commerce Headless",
    description: {
      es: "Tienda online headless con carrito persistente, pagos con Stripe y CMS para gestionar el catálogo.",
      en: "Headless online store with persistent cart, Stripe payments and a CMS to manage the catalog.",
    },
    tags: ["React", "Stripe", "Sanity", "Zustand"],
    demo: "https://example.com",
    repo: "https://github.com/",
  },
  {
    title: "Design System",
    description: {
      es: "Librería de componentes accesibles documentada con Storybook y publicada en npm.",
      en: "Accessible component library documented with Storybook and published to npm.",
    },
    tags: ["React", "Radix UI", "Storybook", "Vitest"],
    repo: "https://github.com/",
  },
  {
    title: "App de Tareas",
    description: {
      es: "Aplicación de productividad offline-first con sincronización y drag & drop.",
      en: "Offline-first productivity app with sync and drag & drop.",
    },
    tags: ["Next.js", "PWA", "IndexedDB"],
    demo: "https://example.com",
  },
  {
    title: "CLI Toolkit",
    description: {
      es: "Herramienta de línea de comandos para generar y automatizar proyectos frontend.",
      en: "Command-line tool to scaffold and automate frontend projects.",
    },
    tags: ["Node.js", "TypeScript"],
    repo: "https://github.com/",
  },
  {
    title: "Blog Técnico",
    description: {
      es: "Blog con MDX, búsqueda instantánea y generación estática optimizada para SEO.",
      en: "MDX blog with instant search and SEO-optimized static generation.",
    },
    tags: ["Next.js", "MDX", "SEO"],
    demo: "https://example.com",
    repo: "https://github.com/",
  },
];

export type ExperienceItem = {
  company: string;
  role: Localized;
  period: Localized;
  description: Localized;
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Empresa Actual",
    role: { es: "Senior Frontend Developer", en: "Senior Frontend Developer" },
    period: { es: "2023 — Actualidad", en: "2023 — Present" },
    description: {
      es: "Lidero el desarrollo del frontend de la plataforma principal, mejorando el rendimiento un 40% y estableciendo el design system.",
      en: "Leading frontend development of the core platform, improving performance by 40% and establishing the design system.",
    },
    tags: ["Next.js", "TypeScript", "GraphQL"],
  },
  {
    company: "Startup Tech",
    role: { es: "Frontend Developer", en: "Frontend Developer" },
    period: { es: "2021 — 2023", en: "2021 — 2023" },
    description: {
      es: "Desarrollé funcionalidades clave del producto SaaS y colaboré estrechamente con diseño para iterar rápido.",
      en: "Built key features of the SaaS product and worked closely with design to iterate quickly.",
    },
    tags: ["React", "Redux", "Jest"],
  },
  {
    company: "Agencia Digital",
    role: { es: "Desarrollador Web Junior", en: "Junior Web Developer" },
    period: { es: "2019 — 2021", en: "2019 — 2021" },
    description: {
      es: "Maquetación y desarrollo de webs corporativas y landing pages para clientes de distintos sectores.",
      en: "Built corporate websites and landing pages for clients across different industries.",
    },
    tags: ["JavaScript", "SCSS", "WordPress"],
  },
];

export const skills: { category: Localized; items: string[] }[] = [
  {
    category: { es: "Frontend", en: "Frontend" },
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML & CSS"],
  },
  {
    category: { es: "Backend", en: "Backend" },
    items: ["Node.js", "PostgreSQL", "Prisma", "REST", "GraphQL"],
  },
  {
    category: { es: "Herramientas", en: "Tools" },
    items: ["Git", "Figma", "Vitest", "Playwright", "Docker", "Vercel"],
  },
];
