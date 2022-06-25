import '../styles/globals.css'
import '/styles/scss/global.scss'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-tagsinput/dist/index.css'

import Layout from '../components/Layout'
import { AppContextProvider } from '../context/AppContextProvider';

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  )
}

export default MyApp
