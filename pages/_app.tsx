import '../styles/globals.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Background from '../components/Background'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aroon Salotra Website</title>
      </Head>
      <Layout>
        <Background />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  )
}
