import '../styles/globals.css'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import Layout from './Layout'
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
