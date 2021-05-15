const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://abdennourzahaf.me',
  ignoredPaths: ['assets'],
  ignoredExtensions: ['png', 'xml', 'ico'],
  pagesDirectory: __dirname + '\\out',
  targetDirectory: 'out/',
  nextConfigPath: __dirname + '\\next.config.js',
});
