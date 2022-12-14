/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.imgur.com", "imgur.com", "images.unsplash.com"]
  }
}

module.exports = nextConfig
