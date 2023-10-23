/** @type {import('next').NextConfig} */
const nextConfig = {
  // In development mode, when strict mode is on, useEffect
  // is called twice, which can make building client side
  // components confusing.
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
}

module.exports = nextConfig
