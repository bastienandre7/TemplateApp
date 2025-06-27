/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "9hn0rhd8ibpivln7.public.blob.vercel-storage.com",
      "cdn.sanity.io",
      // ajoute d'autres domaines si besoin
    ],
  },
  // ...autres options...
};

module.exports = nextConfig;
