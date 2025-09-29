/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.storage.googleapis.com/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/fallstack-2024.firebasestorage.app/**",
      },
    ],
  },
};

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

module.exports = withPWA(nextConfig);
