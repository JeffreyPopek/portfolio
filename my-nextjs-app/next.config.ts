import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "standalone", // Ensures proper deployment on Vercel
  images: {
    unoptimized: true, // Fixes image loading issues
  },
};

export default nextConfig;
