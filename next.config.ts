/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/rolis',
  assetPrefix: '/rolis',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: ''
  }
}

module.exports = nextConfig