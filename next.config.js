/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_PAGES === 'true' ? '/image-compressor-clean' : '',
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig