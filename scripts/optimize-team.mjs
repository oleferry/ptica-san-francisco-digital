/**
 * Optimiza las fotos del equipo a WebP con los nombres que usa la web.
 * Ejecutar: node scripts/optimize-team.mjs
 */
import sharp from "sharp";
import { stat, unlink } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const E = join(root, "public", "equipo");

const jobs = [
  { in: "Yolanda Pedrero.jpeg", out: "yolanda-pedrero.webp" },
  { in: "Elisa Rivero.jpeg", out: "elisa-rivero.webp" },
];

const kb = (b) => `${(b / 1024).toFixed(0)} KB`;

for (const job of jobs) {
  const src = join(E, job.in);
  const dest = join(E, job.out);
  const before = (await stat(src)).size;
  await sharp(src)
    .rotate() // respeta la orientación EXIF del móvil
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dest);
  const after = (await stat(dest)).size;
  console.log(`${job.in} (${kb(before)})  ->  ${job.out} (${kb(after)})`);
  await unlink(src); // borra el original con espacios
}

console.log("Listo.");
