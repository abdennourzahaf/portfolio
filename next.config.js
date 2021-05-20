const withOptimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa');

module.exports = withPWA(
  withOptimizedImages({
    inlineImageLimit: -1,
    webpack: cfg => {
      cfg.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] },
      });
      return cfg;
    },
  }),
);
