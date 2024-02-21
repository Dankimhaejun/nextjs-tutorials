/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
  },
};

export default nextConfig;
