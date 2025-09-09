/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/creative-security-networks',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig