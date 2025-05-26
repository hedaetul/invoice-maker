/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    optimizeCss: false, // Disable CSS optimization for now
  },
};

export default nextConfig;
