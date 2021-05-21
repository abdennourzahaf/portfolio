const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://abdennourzahaf.me',
  ignoredPaths: ['assets', 'admin'],
  ignoreIndexFiles: true,
  ignoredExtensions: ['png', 'xml', 'ico', 'webmanifest', 'svg'],
  pagesDirectory: __dirname + '/out',
  targetDirectory: 'out/',
  nextConfigPath: __dirname + '/next.config.js',
});
