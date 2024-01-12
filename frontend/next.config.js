/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi.nolliebigspin.com",
      },
      {
        protocol: "https",
        hostname: "strapi.awinter.dev",
      },
      { hostname: "localhost" },
    ],
  },
};

module.exports = nextConfig;
