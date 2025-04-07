/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  output: 'export',
  // 如果您希望部署到根目录，请删除或注释掉下面的 basePath 配置
  // basePath: process.env.NODE_ENV === 'production' ? '/image-compressor' : '',
}

module.exports = nextConfig