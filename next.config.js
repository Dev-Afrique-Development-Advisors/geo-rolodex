/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/sign-in',
        destination: 'https://app.geo-rolodex.com/sign-in',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig

