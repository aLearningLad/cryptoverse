/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.coinranking.com",
      },
      {
        protocol: "https",
        hostname: "www.bing.com",
      },
    ],
  },
};

module.exports = nextConfig;
