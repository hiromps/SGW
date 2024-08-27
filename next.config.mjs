/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // カスタムWebpack設定をここに記述
      return config
    },
  }