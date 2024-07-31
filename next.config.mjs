/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "media.istockphoto.com" },
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "instagram.com" },
      { protocol: "https", hostname: "linkedin.com/in" },
      { protocol: "https", hostname: "onehash.ai" },
      { protocol: "https", hostname: "lmsin.com" },
    ],
  },
};

export default nextConfig;
