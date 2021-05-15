const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  inlineImageLimit: -1,
});
