/**
 * Contenido del portafolio. Edita este archivo para personalizar el sitio.
 * Los campos `Localized` llevan una versión por idioma.
 */
import type { Locale } from "@/i18n/config";

export type Localized = Record<Locale, string>;
/** Texto igual en todos los idiomas (string) o traducido (Localized). */
export type Text = string | Localized;

export const localize = (value: Text, locale: Locale) =>
  typeof value === "string" ? value : value[locale];

export type SocialIcon = "github" | "linkedin" | "x";

/**
 * URL pública del sitio (SEO, sitemap). Orden de prioridad:
 * 1. NEXT_PUBLIC_SITE_URL, si la defines (p. ej. al usar un dominio propio).
 * 2. VERCEL_PROJECT_PRODUCTION_URL, que Vercel inyecta automáticamente (ej. "mi-sitio.vercel.app").
 * 3. localhost en desarrollo.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const profile = {
  name: "Emilio San Martín Pezoa",
  initials: "ES",
  role: {
    es: "Desarrollador Full Stack · Web & Mobile",
    en: "Full Stack Developer · Web & Mobile",
  } satisfies Localized,
  location: { es: "Santiago, Chile", en: "Santiago, Chile" } satisfies Localized,
  tagline: {
    es: "Construyo soluciones web y móviles rápidas, accesibles y cuidadas al detalle con React, Next.js, Flutter y Django.",
    en: "I build fast, accessible and carefully crafted web and mobile solutions with React, Next.js, Flutter and Django.",
  } satisfies Localized,
  email: "e.sanmartinpez@gmail.com",
  available: true,
  bio: [
    {
      es: "Soy estudiante de Ingeniería Civil Informática en la Universidad Autónoma de Chile —cursando el octavo de once semestres— y desarrollo soluciones de software tanto web como móviles.",
      en: "I'm a Computer Engineering student at Universidad Autónoma de Chile —currently in my eighth of eleven semesters— and I build software solutions for both web and mobile.",
    },
    {
      es: "Disfruto todo el ciclo de un proyecto: analizar el problema, modelar la base de datos, evaluar la arquitectura, el diseño y el stack más adecuado, y luego meter las manos en el código. En la universidad he sido Product Owner en varios proyectos, comunicándome con clientes y levantando requerimientos funcionales y no funcionales.",
      en: "I enjoy the whole lifecycle of a project: analyzing the problem, modeling the database, evaluating the right architecture, design and stack, and then getting my hands dirty with the code. At university I've been the Product Owner on several projects, working directly with clients and gathering functional and non-functional requirements.",
    },
    {
      es: "Llegué a la informática porque me gusta resolver problemas reales: ver a un cliente satisfecho con el producto que le entregué es lo que más me motiva. Fuera del código practico deportes de contacto como MMA y judo, y juego videojuegos.",
      en: "I got into computing because I love solving real problems: seeing a client happy with the product I delivered is what motivates me most. Outside of code, I train contact sports like MMA and judo, and I play video games.",
    },
  ] satisfies Localized[],
  highlights: [
    {
      value: "8/11",
      label: { es: "semestres de Ing. Civil Informática", en: "semesters of Computer Engineering" },
    },
    { value: "3", label: { es: "proyectos desarrollados", en: "projects built" } },
    { value: "Web & Mobile", label: { es: "soluciones multiplataforma", en: "cross-platform solutions" } },
  ] satisfies { value: string; label: Localized }[],
  socials: [
    { label: "GitHub", href: "https://github.com/e-smp", icon: "github" },
    // Pendiente: { label: "LinkedIn", href: "https://www.linkedin.com/in/...", icon: "linkedin" },
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

/** Mientras esté vacío, la sección muestra un aviso con enlace a GitHub. */
export const projects: Project[] = [];

export type ExperienceItem = {
  title: Localized;
  /** Organización; se muestra como "@ organización". Opcional. */
  organization?: string;
  period: Localized;
  description: Localized;
  tags: Text[];
};

export const experience: ExperienceItem[] = [
  {
    title: { es: "Desarrollador en práctica", en: "Software Developer Intern" },
    period: { es: "Próximamente", en: "Coming soon" },
    description: {
      es: "Por iniciar mi primera práctica profesional como desarrollador.",
      en: "About to start my first professional internship as a developer.",
    },
    tags: [],
  },
  {
    title: { es: "Product Owner · Proyectos universitarios", en: "Product Owner · University projects" },
    organization: "Universidad Autónoma de Chile",
    period: { es: "2023 — Actualidad", en: "2023 — Present" },
    description: {
      es: "Lideré la comunicación con clientes en varios proyectos: levantamiento de requerimientos funcionales y no funcionales, modelado de bases de datos y evaluación de arquitectura y stack, participando también en el desarrollo.",
      en: "Led client communication on several projects: gathering functional and non-functional requirements, database modeling and evaluating architecture and stack, while also contributing to development.",
    },
    tags: [
      { es: "Requerimientos", en: "Requirements" },
      { es: "Modelado de datos", en: "Data modeling" },
      { es: "Arquitectura", en: "Architecture" },
    ],
  },
  {
    title: { es: "Ingeniería Civil Informática", en: "Computer Engineering (B.Sc. + Professional Degree)" },
    organization: "Universidad Autónoma de Chile",
    period: { es: "2023 — Actualidad", en: "2023 — Present" },
    description: {
      es: "Cursando el octavo de once semestres, con foco en desarrollo de software web y móvil.",
      en: "Currently in my eighth of eleven semesters, focused on web and mobile software development.",
    },
    tags: ["Python", "Java", "C#", "PostgreSQL"],
  },
];

export const skills: { category: Localized; items: Text[] }[] = [
  {
    category: { es: "Frontend & Mobile", en: "Frontend & Mobile" },
    items: ["React", "Next.js", "Flutter", "Dart"],
  },
  {
    category: { es: "Backend", en: "Backend" },
    items: ["Django", "Python", "Java", "C#"],
  },
  {
    category: { es: "Bases de datos & DevOps", en: "Databases & DevOps" },
    items: ["PostgreSQL", "MongoDB", "Docker"],
  },
  {
    category: { es: "Análisis & Producto", en: "Analysis & Product" },
    items: [
      { es: "Modelado de bases de datos", en: "Database modeling" },
      { es: "Arquitectura de software", en: "Software architecture" },
      { es: "Levantamiento de requerimientos", en: "Requirements gathering" },
      "Product Owner",
    ],
  },
];
