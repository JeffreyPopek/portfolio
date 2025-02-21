import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable image optimization (remove if not needed)
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
