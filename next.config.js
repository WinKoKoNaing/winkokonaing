/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  ...(isProd && {
    output: "export",
    basePath: "/WinKoKoNaing",
    assetPrefix: "https://winkokonaing.github.io/WinKoKoNaing/",
    images: {
      unoptimized: true,
    },
  }),
};

export default nextConfig;
