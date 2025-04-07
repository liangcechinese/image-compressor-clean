/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  output: 'export',
  // 如果部署到子目录，如image-compressor而不是根目录
  basePath: process.env.NODE_ENV === 'production' ? '/image-compressor' : '',
}

module.exports = nextConfig