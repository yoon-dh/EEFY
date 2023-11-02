/* @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, 
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
    },
});
