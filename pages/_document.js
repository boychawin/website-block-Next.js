import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `<!-- Global site tag (gtag.js) - Google Analytics --> <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-75876762-2"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-75876762-2'); </script>`,
            }}
          ></script>
        </Head>

        <body>
          <Main />
          <NextScript />
          <script
            async=""
            src="https://www.googletagmanager.com/gtag/js?id=UA-75876762-2"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
