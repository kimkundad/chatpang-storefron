// import Footer from "./Footer";
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return children ? (
    <div className='main-wrapper'>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  ) : (
    <></>
  )
}

export default Layout
