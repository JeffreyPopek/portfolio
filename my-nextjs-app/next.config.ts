import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable image optimization (remove if not needed)
  },
};

export default nextConfig;
