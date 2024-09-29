import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const theme = 'style-basic';
  // const theme = 'style-white';

  return (
    <Html lang="en" className={theme}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
