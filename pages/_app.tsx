import '../styles/globals.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </Layout>
  )
}
