import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/handball-portfolio/' : '',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/handball-portfolio' : '',
};
