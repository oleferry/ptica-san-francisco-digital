/**
 * Carga de artículos del blog desde Markdown.
 * Cada artículo es un archivo en src/content/blog/*.md con frontmatter:
 *
 *   ---
 *   title: ...
 *   slug: ...
 *   description: ...
 *   date: 2026-03-12
 *   author: Elisa Rivero Tomé
 *   authorRole: Óptico-optometrista
 *   category: Salud visual
 *   keywords: óptica León, revisión visual
 *   ---
 *   (cuerpo en Markdown)
 */

export interface Article {
  title: string;
  slug: string;
  description: string;
  date: string; // ISO YYYY-MM-DD
  author: string;
  authorRole: string;
  category: string;
  keywords: string[];
  cover?: string; // ruta de la imagen de portada (p. ej. /blog-covers/slug.jpg)
  content: string;
}

// Carga el contenido crudo de todos los .md en tiempo de build.
const files = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

/** Parser sencillo de frontmatter (clave: valor) — sin dependencias. */
function parse(raw: string): Article {
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/.exec(raw.trim());
  if (!match) {
    throw new Error("Artículo sin frontmatter válido");
  }
  const [, front, body] = match;
  const meta: Record<string, string> = {};
  for (const line of front.split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (key) meta[key] = value;
  }
  return {
    title: meta.title ?? "Sin título",
    slug: meta.slug ?? "",
    description: meta.description ?? "",
    date: meta.date ?? "",
    author: meta.author ?? "Óptica San Francisco",
    authorRole: meta.authorRole ?? "",
    category: meta.category ?? "",
    keywords: (meta.keywords ?? "")
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean),
    cover: meta.cover || undefined,
    content: body.trim(),
  };
}

/** Todos los artículos, del más reciente al más antiguo. */
export const articles: Article[] = Object.values(files)
  .map(parse)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const getArticle = (slug?: string): Article | undefined =>
  articles.find((a) => a.slug === slug);

/** Fecha legible en español. */
export const formatDate = (iso: string): string => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
};
