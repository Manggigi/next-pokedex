/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // next/image
  images: {
    domains: ["images.unsplash.com", "raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
