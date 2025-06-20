import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-dynmedia-1.microsoft.com',
        port: '',
        pathname: '/is/image/**',
      },
    ],
  },
};

export default nextConfig;
