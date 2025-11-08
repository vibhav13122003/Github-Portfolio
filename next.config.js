
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['github.githubassets.com'],
  },
};

module.exports = nextConfig;
