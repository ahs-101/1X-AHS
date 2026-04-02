/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/1X-AHS',
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

module.exports = nextConfig;
