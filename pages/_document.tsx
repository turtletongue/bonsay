import Document, { Head, Main, NextScript } from 'next/document';

const articlePrefix =
  'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head prefix={articlePrefix} />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
