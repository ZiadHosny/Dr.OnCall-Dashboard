/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: "/dashboard",
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        basePath: false,
        permanent: false
      }
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
}

export default nextConfig