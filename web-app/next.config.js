/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  trailingSlash: false,
  experimental: {
    forceSwcTransforms: true
  }
}

module.exports = nextConfig