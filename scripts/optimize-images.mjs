/**
 * Optimización puntual de imágenes pesadas.
 * Ejecutar: node scripts/optimize-images.mjs
 * Convierte a WebP, redimensiona y comprime. No borra los originales.
 */
import sharp from "sharp";
import { stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const A = join(root, "src", "assets");

const jobs = [
  // Hero: imagen grande de fondo. Máx 2000px de ancho, calidad 80.
  { in: "hero-leon-catedral.png", out: "hero-leon-catedral.webp", width: 2000, quality: 80 },
  // Logo: se muestra pequeño; 600px de ancho es de sobra. Mantiene transparencia.
  { in: "logo-osf.png", out: "logo-osf.webp", width: 600, quality: 90 },
];

const kb = (b) => `${(b / 1024).toFixed(0)} KB`;

for (const job of jobs) {
  const src = join(A, job.in);
  const dest = join(A, job.out);
  const before = (await stat(src)).size;
  await sharp(src)
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality })
    .toFile(dest);
  const after = (await stat(dest)).size;
  console.log(`${job.in} (${kb(before)})  ->  ${job.out} (${kb(after)})`);
}

console.log("Listo.");
