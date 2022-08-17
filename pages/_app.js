import '../styles/globals.css'
import '/styles/scss/global.scss'
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-tagsinput/dist/index.css'

import Layout from '../components/Layout'
import { AppContextProvider } from '../context/AppContextProvider'
import Head from 'next/head'

function MyApp({ Component, pageProps, ...appProps }) {
  return (
    <>
    <Head>
      <title>Chat Pang ผู้ช่วยตอบแชทเก่ง!</title>
    </Head>
      <AppContextProvider>
        {['/login'].includes(appProps.router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </AppContextProvider>
    </>
  )
}

export default MyApp
