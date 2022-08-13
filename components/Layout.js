// import Footer from "./Footer";
import { useRouter } from 'next/router'
import Index from '../pages/index'
import Footer from './Footer'
import Header from './Header'
import { useEffect } from 'react'

const Layout = ({ children }) => {
  const route = useRouter()
  const accessToken = true
  // const accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
    if (!accessToken) {
      console.log('render')
      route.replace('/')
    }
  }, [])

  return children ? (
    <div className="main-wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  ) : (
    <></>
  )
}

export default Layout
