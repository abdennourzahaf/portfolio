const withOptimizedImages = require('next-optimized-images');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  withOptimizedImages({
    inlineImageLimit: -1,
  }),
);
