/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'techcrunch.com',
        port: '',
        pathname: '/wp-content/uploads/2015/10/screen-shot-2015-10-08-at-4-20-16-pm.png',
      },
    ],
  },
}

module.exports = nextConfig
