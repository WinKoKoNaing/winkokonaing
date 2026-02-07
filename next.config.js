/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/WinKoKoNaing",
  assetPrefix: "https://winkokonaing.github.io/WinKoKoNaing/",
  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
  },
};

export default nextConfig;
