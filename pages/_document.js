import { Html, Head, Main, NextScript } from 'next/document'
import Header from './Header'

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Header/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
