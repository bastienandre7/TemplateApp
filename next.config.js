/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1600],
    domains: [
      "9hn0rhd8ibpivln7.public.blob.vercel-storage.com",
      "cdn.sanity.io",
      // ajoute d'autres domaines si besoin
    ],
  },
  // ...autres options...
};

module.exports = nextConfig;
