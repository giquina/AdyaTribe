/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporarily disable static export to allow dynamic routes
  // output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: ''
}

module.exports = nextConfig