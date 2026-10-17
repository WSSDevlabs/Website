// Builds a soft depth map for the home hero from the founder's photo.
// Dark figure = near (white), grey wall = far (black). Run: node scripts/make-hero-depth.mjs
import sharp from 'sharp';

const SRC = 'WebsiteImage/HeroBgPlain.jpg';
const OUT = 'public/images/hero/hero-depth.png';
const W = 1100;

const base = sharp(SRC).resize({ width: W }).greyscale();
const { data, info } = await base.clone().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;

// 1) figure mask: anything clearly darker than the wall, then closed up so shiny metal is included
const mask = Buffer.alloc(width * height);
for (let i = 0; i < mask.length; i++) mask[i] = data[i] < 100 ? 255 : 0;
const closed = await sharp(mask, { raw: { width, height, channels: 1 } }).blur(14).threshold(70).toColourspace('b-w').raw().toBuffer();

// 2) soft dome: blur the mask heavily, then add a little darkness detail inside the figure
const soft = await sharp(closed, { raw: { width, height, channels: 1 } }).blur(26).toColourspace('b-w').raw().toBuffer();
const depth = Buffer.alloc(width * height);
for (let i = 0; i < depth.length; i++) {
  const detail = (1 - data[i] / 255) * (closed[i] / 255);
  depth[i] = Math.min(255, Math.round(soft[i] * 0.82 + detail * 255 * 0.18));
}
await sharp(depth, { raw: { width, height, channels: 1 } }).png({ compressionLevel: 9 }).toFile(OUT);
console.log('depth map written', OUT, width, height);
