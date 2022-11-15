import '../styles/globals.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Background from '../components/Background'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Background />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}
