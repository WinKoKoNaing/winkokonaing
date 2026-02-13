/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  ...(isProd && {
    output: "export",
    basePath: "/winkokonaing",
    assetPrefix: "https://winkokonaing.github.io/winkokonaing/",
    images: {
      unoptimized: true,
    },
  }),
};

export default nextConfig;
