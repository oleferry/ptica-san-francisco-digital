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
  const paths = ["/", "/blog", ...slugs.map((s) => `/blog/${s}`)];
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    paths.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join("\n") +
    `\n</urlset>\n`;
  fs.writeFileSync(path.resolve(__dirname, "dist/sitemap.xml"), xml);
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
    },
  },
}));
