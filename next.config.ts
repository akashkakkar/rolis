/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/rolis',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   basePath: '/rolis',
//   images: {
//     unoptimized: true
//   }
// }

// module.exports = nextConfig
