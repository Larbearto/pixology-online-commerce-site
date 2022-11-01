import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Pixology</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}
