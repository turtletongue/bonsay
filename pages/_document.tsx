import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head prefix="og: http://ogp.me/ns#" />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
