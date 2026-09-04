import type { NextConfig } from 'next';
import './src/env';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true, // next/image optimization requires a server, not available on static sites
    remotePatterns: [
      new URL('https://avatars.githubusercontent.com/**'),
      {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
    ],
  },
};

export default nextConfig;
