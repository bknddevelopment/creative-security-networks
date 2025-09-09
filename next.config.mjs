/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/creative-security-networks',
  assetPrefix: '/creative-security-networks',
  trailingSlash: true,
};

export default nextConfig;