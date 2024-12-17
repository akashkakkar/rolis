/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'static',  // Changed from 'export'
  basePath: '/rolis',
  assetPrefix: '/rolis',
  images: { unoptimized: true },
  distDir: 'dist'    // Specify output directory
}

module.exports = nextConfig

