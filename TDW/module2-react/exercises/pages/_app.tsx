import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import Header from '../components/Header'
import { store } from '../redux/store'
import "../styles/globals.scss"

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Head>
      <link rel="icon" href="assets/logo.svg" />
      <title>GitHub Users</title>
    </Head>
    <Header />
    <Component {...pageProps} />
  </Provider>
}
