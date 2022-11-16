import GlobalStyle from '../../styles/global';
import Head from 'next/head'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Projeto Tracking Trade</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
