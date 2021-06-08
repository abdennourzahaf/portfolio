import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap'
            rel='stylesheet'
          />
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <link rel='icon' href='/favicon.ico' />
          <link rel='manifest' href='/manifest.webmanifest' />
          <link
            href='/icon-192x192.png'
            rel='icon'
            type='image/png'
            sizes='192x192'
          />
          <link
            href='/icon-256x256.png'
            rel='icon'
            type='image/png'
            sizes='256x256'
          />
          <link
            href='/icon-384x384.png'
            rel='icon'
            type='image/png'
            sizes='384x384'
          />
          <link
            href='/icon-512x512.png'
            rel='icon'
            type='image/png'
            sizes='512x512'
          />
          <link
            href='/icon-32x32.png'
            rel='icon'
            type='image/png'
            sizes='32x32'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/icon-16x16.png'
          />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#4758fc' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='theme-color' content='#ffffff' />
          <meta name='description' content='Front-end developer portfolio' />
          <meta
            name='keywords'
            content='front end, front-end, front-end developer, portfolio, abdennour zahaf'
          />
          <meta
            property='og:title'
            content='Abdennour Zahaf | Front-end developer'
          />
          <meta
            property='og:description'
            content='Front-End developer portfolio'
          />
          <meta
            property='og:image'
            content='https://i.ibb.co/VN52FvB/thumbnail.png'
          />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://abdennourzahaf.me/' />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=UA-195868593-1'></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-195868593-1');
            `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
