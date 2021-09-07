const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  inlineImageLimit: -1,
  eslint: {
    dirs: ['pages', 'lib', 'components', 'containers', 'contexts'],
  },
  images: {
    disableStaticImages: true,
  },
});
