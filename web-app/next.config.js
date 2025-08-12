/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static generation to ensure dynamic components render
  output: 'standalone',
  images: {
    unoptimized: false
  },
  trailingSlash: false,
  // Force dynamic rendering for all pages
  experimental: {
    forceSwcTransforms: true
  }
}

module.exports = nextConfig