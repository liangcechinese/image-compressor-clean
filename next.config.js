/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  output: 'export',
  // 为 GitHub Pages 项目站点设置正确的 basePath
  basePath: process.env.NODE_ENV === 'production' ? '/image-compressor-clean' : '',
}

module.exports = nextConfig