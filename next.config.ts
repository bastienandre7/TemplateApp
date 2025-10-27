import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1600],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "9hn0rhd8ibpivln7.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "cdn.lemonsqueezy.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/template",
        destination: "/nextjs-templates",
        permanent: true,
      },
      {
        source: "/template/nextjs-tailwind-css-restaurant-template",
        destination:
          "/nextjs-templates/free-nextjs-tailwind-css-restaurant-template",
        permanent: true,
      },
      {
        source: "/template/restaurant-template",
        destination:
          "/nextjs-templates/free-nextjs-tailwind-css-restaurant-template",
        permanent: true,
      },
      {
        source: "/template/landkit-nextjs-landing-page-starter-kit",
        destination:
          "/nextjs-templates/landkit-nextjs-landing-page-starter-kit",
        permanent: true,
      },
      {
        source: "/template/shopbase-nextjs-e-commerce-boilerplate",
        destination: "/nextjs-templates/shopbase-nextjs-e-commerce-boilerplate",
        permanent: true,
      },
      {
        source:
          "/template/coresaas-next-js-tailwind-css-saas-starter-kit-boilerplate",
        destination:
          "/nextjs-templates/coresaas-next-js-tailwind-css-saas-boilerplate",
        permanent: true,
      },
      {
        source: "/template/nextjs-tailwind-css-saas-template",
        destination: "/nextjs-templates/nextjs-tailwind-css-saas-template",
        permanent: true,
      },
      {
        source: "/template/nextjs-tailwind-css-developer-portfolio-template",
        destination:
          "/nextjs-templates/nextjs-tailwind-css-developer-portfolio-template",
        permanent: true,
      },
      {
        source: "/template/nextjs-tailwind-css-saas-dashboard-template",
        destination:
          "/nextjs-templates/nextjs-tailwind-css-saas-dashboard-template",
        permanent: true,
      },
      {
        source: "/template/nextjs-tailwind-css-e-commerce-template",
        destination:
          "/nextjs-templates/free-nextjs-tailwind-css-e-commerce-template",
        permanent: true,
      },
      {
        source: "/template/nextjs-tailwind-css-blog-template",
        destination: "/nextjs-templates/nextjs-tailwind-css-blog-template",
        permanent: true,
      },
      {
        source: "/template/blogstarter-premium-blog-starter-kit",
        destination:
          "/nextjs-templates/blogstarter-next-js-tailwind-css-blog-starter-kit",
        permanent: true,
      },
      {
        source: "/template/saas-template",
        destination: "/nextjs-templates/nextjs-tailwind-css-saas-template",
        permanent: true,
      },
      {
        source:
          "/nextjs-templates/blogstarter-next-js-tailwind-css-blog-starter-kit",
        destination:
          "/nextjs-templates/blogstarter-nextjs-sanity-blog-starter-kit",
        permanent: true,
      },
      {
        source: "/components",
        destination: "/nextjs-components",
        permanent: true,
      },
      {
        source: "/components/pricing-section",
        destination: "/nextjs-components/pricing-section",
        permanent: true,
      },
      {
        source: "/components/product-card",
        destination: "/nextjs-components/product-card",
        permanent: true,
      },
      {
        source: "/components/simple-footer",
        destination: "/nextjs-components/simple-footer",
        permanent: true,
      },
      {
        source: "/components/simple-header",
        destination: "/nextjs-components/simple-header",
        permanent: true,
      },
      {
        source: "/components/hero-section",
        destination: "/nextjs-components/hero-section",
        permanent: true,
      },
      {
        source: "/components/contact-form",
        destination: "/nextjs-components/contact-form",
        permanent: true,
      },
      {
        source: "/components/smart-loading-button",
        destination: "/nextjs-components/smart-loading-button",
        permanent: true,
      },
      {
        source: "/components/simple-search-input",
        destination: "/nextjs-components/simple-search-input",
        permanent: true,
      },
      {
        source: "/components/notification-card",
        destination: "/nextjs-components/notification-card",
        permanent: true,
      },
      {
        source: "/components/advanced-button-group",
        destination: "/nextjs-components/advanced-button-group",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
