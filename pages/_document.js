import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>David 💻 🚀 </title>
          <link href="../public/favicon.ico" rel="shortcut icon" />
          <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Source+Code+Pro:wght@200&display=swap" rel="stylesheet"/>
          <meta
            name="myPortfolio"
            content="MyPortfolio"
          />
        </Head>
            <body>
                <Main />
                <NextScript />
            </body>
      </Html>
    );
  }
}

export default MyDocument;