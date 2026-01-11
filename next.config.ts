import type { NextConfig } from 'next';
import './src/env';

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: { unoptimized: true }, // next/image optimization requires a server, not available on static sites
};

export default nextConfig;
