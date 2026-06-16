/**
 * Genera un artículo del blog con la API de Claude (Opus 4.8) y lo guarda como
 * Markdown en src/content/blog/. Pensado para ejecutarse desde una GitHub Action.
 *
 * Requiere la variable de entorno ANTHROPIC_API_KEY.
 * Uso: node scripts/generate-article.mjs
 *
 * Salvaguardas de calidad (contenido de salud / SEO local):
 *  - Tono de marca, cercano y sin tecnicismos.
 *  - PROHIBIDO inventar datos médicos, diagnósticos o promesas de salud.
 *  - Incluye aviso informativo y firma de la profesional.
 *  - Optimizado para SEO local de León.
 */
import Anthropic from "@anthropic-ai/sdk";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BLOG_DIR = join(root, "src", "content", "blog");
const TOPICS = JSON.parse(readFileSync(join(root, "scripts", "blog-topics.json"), "utf8"));

// Slugs ya publicados (nombre de archivo = slug).
const published = new Set(
  readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, "")),
);

// Primer tema del backlog que aún no se ha publicado.
const topic = TOPICS.find((t) => !published.has(t.slug));
if (!topic) {
  console.log("No hay temas pendientes en el backlog. Nada que generar.");
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);

const system = `Eres el redactor/a oficial de contenidos de Óptica San Francisco, una óptica INDEPENDIENTE de León (España) con más de 40 años de historia. NO es una cadena ni se comunica desde el descuento. Su valor está en la confianza de toda la vida, un equipo estable y experto, la atención sin prisas, las explicaciones claras y el criterio profesional.

PRUEBA DE MARCA (obligatoria): antes de escribir, asegúrate de que el artículo NO podría publicarlo cualquier óptica genérica. Debe reflejar, de forma explícita o implícita, al menos un rasgo diferencial: más de 40 años en León, equipo estable, atención sin prisas, explicaciones claras, criterio profesional, trato cercano, revisiones cuidadas, lentes premium o personalización.

VOZ Y TONO:
- Sereno, profesional, humano, claro y elegante. Experto sin arrogancia, cercano sin exceso de familiaridad. Trato de "tú".
- Español de España. Frases cortas y comprensibles. Prioriza la claridad sobre la creatividad.
- Escribes para público adulto y mayor (especialmente personas de mediana edad y mayores).
- Entre 450 y 750 palabras.

PROHIBIDO (tono): alarmismo, miedo o urgencia. Nada de "reserva ya", "última oportunidad", "corre", "no sufras en silencio", "no es normal", "remedio definitivo", "ofertón" o "promoción irresistible". Nada de lenguaje juvenil, memes, promesas milagrosas ni sonar a cadena o a descuento permanente.

SEGURIDAD (contenido de salud):
- NO inventes datos, cifras ni estudios. Si no es de conocimiento general, no lo afirmes.
- NO des diagnósticos ni promesas de resultados de salud. Ante síntomas, recomienda una revisión profesional.

PRIORIDADES COMERCIALES (cuando encajen de forma natural y sin presión; la venta nace de la confianza, no de la urgencia):
- Revisiones visuales cuidadas, con calma y explicaciones claras (es el eje permanente).
- Lentes premium y progresivos personalizados; cuando proceda, menciona "Mimetika Pro de Indo" como progresivo personalizado de alta gama ("no todos los progresivos son iguales").
- Lentillas y adaptaciones complejas con buen seguimiento.
- Atención posterior: ajustes, mantenimiento y seguimiento ("nuestra atención no termina cuando entregamos tus gafas").

FORMATO DEL CUERPO (campo "body", en Markdown):
- NO incluyas un encabezado de nivel 1 (#) con el título; el título se muestra aparte.
- Usa 2-4 subtítulos de nivel 2 (##).
- Menciona León de forma natural (SEO local), sin forzar.
- Incluye cerca del final una cita en bloque con el aviso: "> Este artículo es informativo y no sustituye una revisión visual profesional."
- Termina con una llamada a la acción serena hacia la reserva, en la línea de "Reserva tu cita con tranquilidad", enlazando a /#reserva. Sin presión.`;

const userPrompt = `Escribe un artículo de blog sobre: "${topic.brief}"

Categoría: ${topic.category}
Palabras clave a tener en cuenta (úsalas de forma natural): ${topic.keywords.join(", ")}

Devuelve el resultado en el formato estructurado solicitado.`;

const client = new Anthropic(); // lee ANTHROPIC_API_KEY del entorno

const response = await client.messages.create({
  model: "claude-opus-4-8",
  max_tokens: 16000,
  thinking: { type: "adaptive" },
  system,
  messages: [{ role: "user", content: userPrompt }],
  output_config: {
    format: {
      type: "json_schema",
      schema: {
        type: "object",
        properties: {
          title: { type: "string", description: "Título del artículo, atractivo y claro" },
          description: {
            type: "string",
            description: "Meta descripción SEO de 120-155 caracteres",
          },
          keywords: {
            type: "array",
            items: { type: "string" },
            description: "3-6 palabras clave",
          },
          body: { type: "string", description: "Cuerpo del artículo en Markdown" },
        },
        required: ["title", "description", "keywords", "body"],
        additionalProperties: false,
      },
    },
  },
});

const textBlock = response.content.find((b) => b.type === "text");
if (!textBlock) {
  console.error("La respuesta no contiene texto.");
  process.exit(1);
}
const article = JSON.parse(textBlock.text);

// Escapa comillas dobles en valores del frontmatter.
const esc = (s) => String(s).replace(/"/g, "'");

const frontmatter = [
  "---",
  `title: ${esc(article.title)}`,
  `slug: ${topic.slug}`,
  `description: ${esc(article.description)}`,
  `date: ${today}`,
  `author: ${topic.author}`,
  `authorRole: ${topic.authorRole}`,
  `category: ${topic.category}`,
  `keywords: ${(article.keywords || topic.keywords).join(", ")}`,
  "---",
  "",
].join("\n");

const filePath = join(BLOG_DIR, `${topic.slug}.md`);
writeFileSync(filePath, frontmatter + article.body.trim() + "\n", "utf8");

console.log(`Artículo generado: src/content/blog/${topic.slug}.md`);
// Expone datos para la GitHub Action (título de PR, etc.).
if (process.env.GITHUB_OUTPUT) {
  const out = [`slug=${topic.slug}`, `title=${article.title}`].join("\n");
  writeFileSync(process.env.GITHUB_OUTPUT, out + "\n", { flag: "a" });
}
