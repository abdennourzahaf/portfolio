import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='dark'>
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
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src='https://identity.netlify.com/v1/netlify-identity-widget.js' />
          <script
            type='text/javascript'
            dangerouslySetInnerHTML={{
              __html: `
                        if (window.netlifyIdentity) {
                          window.netlifyIdentity.on("init", user => {
                            if (!user) {
                              window.netlifyIdentity.on("login", () => {
                                document.location.href = "/admin/";
                              });
                            }
                          });
                        }
                  `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
