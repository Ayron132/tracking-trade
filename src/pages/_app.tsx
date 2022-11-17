import GlobalStyle from '../../styles/global';
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../context/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Projeto Tracking Trade</title>
      </Head>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  )
}
