import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const SITE_URL = "https://opticasanfrancisco.com";

/** Genera dist/sitemap.xml con la home, /blog y cada artículo del blog. */
function writeSitemap() {
  const blogDir = path.resolve(__dirname, "src/content/blog");
  const slugs = fs.existsSync(blogDir)
    ? fs.readdirSync(blogDir).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""))
    : [];
  const paths = [
    "/",
    "/blog",
    ...slugs.map((s) => `/blog/${s}`),
    "/aviso-legal",
    "/politica-de-privacidad",
    "/politica-de-cookies",
  ];
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    paths.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join("\n") +
    `\n</urlset>\n`;
  fs.writeFileSync(path.resolve(__dirname, "dist/sitemap.xml"), xml);
}

/** Parser sencillo de frontmatter (clave: valor). */
function parseFrontmatter(raw: string): Record<string, string> {
  const m = /^---\s*\n([\s\S]*?)\n---/.exec(raw);
  const meta: Record<string, string> = {};
  if (m) {
    for (const line of m[1].split("\n")) {
      const i = line.indexOf(":");
      if (i > -1) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
  }
  return meta;
}

/** Genera dist/feed.xml (RSS) con los artículos del blog. */
function writeRss() {
  const blogDir = path.resolve(__dirname, "src/content/blog");
  if (!fs.existsSync(blogDir)) return;
  const esc = (s: string) =>
    String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const escAttr = (s: string) => esc(s).replace(/"/g, "&quot;");

  const items = fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const meta = parseFrontmatter(fs.readFileSync(path.join(blogDir, f), "utf8"));
      return {
        slug: f.replace(/\.md$/, ""),
        title: meta.title ?? "",
        description: meta.description ?? "",
        date: meta.date ?? "",
        cover: meta.cover ?? "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  const xmlItems = items
    .map((it) => {
      const imgUrl = it.cover ? `${SITE_URL}${it.cover}` : "";
      // HTML embebido (con la imagen delante) para máxima compatibilidad con
      // automatizaciones (Zapier/Make/IFTTT) que solo buscan un <img> dentro
      // del contenido, además de los campos estándar enclosure/media:content.
      const html = imgUrl
        ? `<img src="${escAttr(imgUrl)}" alt="${escAttr(it.title)}" />\n<p>${esc(it.description)}</p>`
        : esc(it.description);

      return (
        `    <item>\n` +
        `      <title>${esc(it.title)}</title>\n` +
        `      <link>${SITE_URL}/blog/${it.slug}</link>\n` +
        `      <guid>${SITE_URL}/blog/${it.slug}</guid>\n` +
        (it.date ? `      <pubDate>${new Date(it.date).toUTCString()}</pubDate>\n` : "") +
        `      <description><![CDATA[${html}]]></description>\n` +
        `      <content:encoded><![CDATA[${html}]]></content:encoded>\n` +
        (imgUrl
          ? `      <enclosure url="${imgUrl}" type="image/jpeg" length="0" />\n` +
            `      <media:content url="${imgUrl}" medium="image" type="image/jpeg" />\n` +
            `      <media:thumbnail url="${imgUrl}" />\n`
          : "") +
        `    </item>`
      );
    })
    .join("\n");

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:content="http://purl.org/rss/1.0/modules/content/">\n  <channel>\n` +
    `    <title>Blog · Óptica San Francisco</title>\n` +
    `    <link>${SITE_URL}/blog</link>\n` +
    `    <description>Consejos de salud visual de Óptica San Francisco (León).</description>\n` +
    `    <language>es-ES</language>\n` +
    xmlItems +
    `\n  </channel>\n</rss>\n`;

  fs.writeFileSync(path.resolve(__dirname, "dist/feed.xml"), xml);
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Opciones de vite-react-ssg
  ssgOptions: {
    onFinished() {
      writeSitemap();
      writeRss();
    },
  },
}));
