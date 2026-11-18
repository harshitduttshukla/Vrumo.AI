/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  compress: true,
  poweredByHeader: false,
  experimental: {
    // Inline the (small) global stylesheet into the HTML to remove the render-blocking CSS request.
    inlineCss: true,
  },
};

export default nextConfig;
