import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/about/', destination: '/about', permanent: true },
      { source: '/booking/', destination: '/booking', permanent: true },
      { source: '/faq/', destination: '/faq', permanent: true },
      { source: '/blog/', destination: '/blog', permanent: true },
      { source: '/policies/', destination: '/policies', permanent: true },
      { source: '/locations/', destination: '/locations', permanent: true },
      { source: '/house-cleaning/', destination: '/house-cleaning', permanent: true },
      { source: '/same-day-cleaning/', destination: '/same-day-cleaning', permanent: true },
    ];
  },
};

export default nextConfig;
