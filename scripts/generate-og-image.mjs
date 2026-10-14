import sharp from "sharp";
import fs from "fs";
import path from "path";

const width = 1200;
const height = 630;

const svgContent = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14213D" />
      <stop offset="100%" stop-color="#0B1323" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C9A227" />
      <stop offset="100%" stop-color="#E5C158" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bg)" />

  <!-- Subtle Border Frame -->
  <rect x="36" y="36" width="${width - 72}" height="${height - 72}" fill="none" stroke="#C9A227" stroke-width="1.5" stroke-opacity="0.35" rx="16" />
  <rect x="44" y="44" width="${width - 88}" height="${height - 88}" fill="none" stroke="#FFFFFF" stroke-width="1" stroke-opacity="0.08" rx="12" />

  <!-- Top Metadata Row -->
  <g transform="translate(80, 110)">
    <!-- Brand Tag -->
    <rect x="0" y="0" width="220" height="36" rx="18" fill="#1D2D50" stroke="#C9A227" stroke-width="1" stroke-opacity="0.4" />
    <text x="110" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#E5C158" letter-spacing="2" text-anchor="middle">HAMLET HOTELS</text>

    <!-- Date -->
    <text x="${width - 240}" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#8F9CAE" letter-spacing="1">October 2026</text>
  </g>

  <!-- Main Headline -->
  <g transform="translate(80, 230)">
    <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="62" font-weight="bold" fill="#FAF8F3" letter-spacing="-0.5">
      A growth plan for
    </text>
    <text x="0" y="74" font-family="Georgia, 'Times New Roman', serif" font-size="62" font-weight="bold" fill="url(#goldGrad)" letter-spacing="-0.5">
      Hamlet Hotels
    </text>
  </g>

  <!-- Subtitle -->
  <g transform="translate(80, 375)">
    <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" fill="#C5CFDC" font-weight="400">
      Direct bookings, guest data and marketing automation
    </text>
    <text x="0" y="36" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" fill="#C5CFDC" font-weight="400">
      across your hotels.
    </text>
  </g>

  <!-- Bottom Divider -->
  <line x1="80" y1="465" x2="${width - 80}" y2="465" stroke="#FFFFFF" stroke-opacity="0.12" stroke-width="1" />

  <!-- Bottom Details -->
  <g transform="translate(80, 515)">
    <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" fill="#FAF8F3" font-weight="500">
      Prepared for Basheer, Hamlet Hotels
    </text>
    <text x="0" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#8F9CAE">
      Maidstone · Reading · Kidderminster · Hull · Thurrock
    </text>

    <!-- Author Badge -->
    <text x="${width - 240}" y="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" fill="#E5C158" font-weight="600" text-anchor="end">
      By Kesavaram Sundararaj
    </text>
  </g>
</svg>
`;

async function generate() {
  const publicDir = path.resolve("public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const svgBuffer = Buffer.from(svgContent);
  await sharp(svgBuffer)
    .png()
    .toFile(path.join(publicDir, "og-image.png"));

  console.log("Generated public/og-image.png (1200x630)");
}

generate();
