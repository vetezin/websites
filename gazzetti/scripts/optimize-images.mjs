import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const sourceRoot = process.argv[2];
if (!sourceRoot) throw new Error('Informe a pasta com os PNGs originais.');
const images = [
  ['architecture', 'exec-49a47a87-0528-4105-abe2-da210e7e3b02.png', 1536],
  ['helena', 'exec-b63b4d10-3696-45a1-abd4-f23db306de09.png', 720],
  ['rafael', 'exec-75b46551-7dc0-4e07-aa0b-7724e35c82bc.png', 720],
  ['beatriz', 'exec-2336b59b-f4a5-4db1-a8fe-052351eb1e19.png', 720],
];
for (const [name, source, width] of images) {
  const output = fileURLToPath(new URL(`../public/images/${name}.webp`, import.meta.url));
  const result = await sharp(`${sourceRoot}/${source}`).resize({ width, withoutEnlargement: true }).webp({ quality: 85 }).toFile(output);
  console.log(`${name}: ${result.width} × ${result.height}, ${Math.round(result.size / 1024)} KB`);
}
