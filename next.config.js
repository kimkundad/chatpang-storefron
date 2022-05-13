const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  rules: {
    "@next/next/no-img-element": "off",
  },
};

module.exports = nextConfig;
