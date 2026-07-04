/**
 * Genera el favicon y los iconos del sitio a partir del logo.
 * Usa el emblema de las gafas sobre un cuadrado crema redondeado (marca).
 * Ejecutar: node scripts/make-favicon.mjs
 */
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const LOGO = join(root, "src", "assets", "logo-osf.png");
const PUB = join(root, "public");

const SIZE = 512;
const RADIUS = 104;
const CREAM = "#E7E3D7";

// 1) Recorta el emblema de las gafas del logo.
const glasses = await sharp(LOGO)
  .extract({ left: 330, top: 155, width: 750, height: 250 })
  .trim()
  .resize({ width: 360 })
  .png()
  .toBuffer();

// 2) Fondo crema con esquinas redondeadas.
const bg = Buffer.from(
  `<svg width="${SIZE}" height="${SIZE}"><rect width="${SIZE}" height="${SIZE}" rx="${RADIUS}" ry="${RADIUS}" fill="${CREAM}"/></svg>`,
);

// 3) Icono maestro (512): gafas centradas sobre el fondo.
const master = await sharp(bg)
  .composite([{ input: glasses, gravity: "center" }])
  .png()
  .toBuffer();

// 4) Exporta todos los tamaños.
const png = (size, name) =>
  sharp(master).resize(size, size).png().toFile(join(PUB, name));

await sharp(master).resize(512, 512).png().toFile(join(PUB, "icon-512.png"));
await png(192, "icon-192.png");
await png(180, "apple-touch-icon.png");
await png(32, "favicon-32x32.png");
await png(16, "favicon-16x16.png");

// 5) favicon.ico (16 + 32) — reemplaza el de Lovable.
const buf32 = await sharp(master).resize(32, 32).png().toBuffer();
const buf16 = await sharp(master).resize(16, 16).png().toBuffer();
const ico = await pngToIco([buf16, buf32]);
writeFileSync(join(PUB, "favicon.ico"), ico);

console.log("Favicon e iconos generados en public/.");
