import { Html, Head, Main, NextScript, style } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
          <title>My CV</title>
          <meta name="description" content="Santiago Ramírez - Curruculum Vitae" />          
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}