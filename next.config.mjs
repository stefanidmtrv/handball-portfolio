// import bundleAnalyzer from '@next/bundle-analyzer';

// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });

// export default withBundleAnalyzer({
//   reactStrictMode: false,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   experimental: {
//     optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
//   },
// });

// const nextConfig = {
//   output: 'export',
//   // Base path should be set to the repository name for GitHub Pages
//   basePath: '/handball-portfolio',
//   assetPrefix: '/handball-portfolio/',
// };

// module.exports = nextConfig

import bundleAnalyzer from '@next/bundle-analyzer';

// Setup bundle analyzer
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Next.js configuration
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  output: 'export',
  basePath: '/handball-portfolio',
  assetPrefix: '/handball-portfolio/',
};

// Use ES module export syntax
export default withBundleAnalyzer(nextConfig);