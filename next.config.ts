import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
        search: '',
      },
    ],
  },
  env: {
    STRAPI_TOKEN: process.env.STRAPI_TOKEN,
  },
}

export default nextConfig
