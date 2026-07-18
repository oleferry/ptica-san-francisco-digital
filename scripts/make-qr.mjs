/**
 * Genera el QR de marca para el mostrador/escaparate → lleva a Instagram
 * a través del propio dominio (opticasanfrancisco.com/instagram).
 * Ejecutar: node scripts/make-qr.mjs
 */
import QRCode from "qrcode";
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUB = join(root, "public");
const TARGET_URL = "https://opticasanfrancisco.com/instagram";
const SIZE = 1000; // px, calidad de impresión

// 1) QR en verde de marca sobre blanco (mejor contraste para escanear que el crema).
const qrBuffer = await QRCode.toBuffer(TARGET_URL, {
  type: "png",
  errorCorrectionLevel: "H", // margen alto: permite el logo central sin perder legibilidad
  margin: 2,
  width: SIZE,
  color: { dark: "#1F3A2E", light: "#FFFFFF" },
});

// 2) Logo central (el emblema de gafas ya generado para el favicon) con un
//    respaldo blanco circular para que no rompa el contraste del QR.
const logoSize = Math.round(SIZE * 0.22);
const logo = await sharp(join(PUB, "icon-512.png")).resize(logoSize, logoSize).png().toBuffer();

const padding = Math.round(logoSize * 0.16);
const badgeSize = logoSize + padding * 2;
const badge = await sharp({
  create: { width: badgeSize, height: badgeSize, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
  .composite([
    {
      input: Buffer.from(
        `<svg width="${badgeSize}" height="${badgeSize}"><circle cx="${badgeSize / 2}" cy="${badgeSize / 2}" r="${badgeSize / 2}" fill="#FFFFFF"/></svg>`,
      ),
    },
    { input: logo, gravity: "center" },
  ])
  .png()
  .toBuffer();

// 3) Composición final.
await sharp(qrBuffer)
  .composite([{ input: badge, gravity: "center" }])
  .png()
  .toFile(join(PUB, "qr-instagram.png"));

console.log(`QR generado: public/qr-instagram.png (apunta a ${TARGET_URL})`);
