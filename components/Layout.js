// import Footer from "./Footer";
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return children ? (
    <div className='main-wrapper'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  ) : (
    <></>
  )
}

export default Layout
