import type { NextConfig } from 'next';
import './src/env';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
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
