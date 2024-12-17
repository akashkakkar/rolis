/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/rolis',
  assetPrefix: '/rolis',
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: 'static'
  }
}

module.exports = nextConfig

