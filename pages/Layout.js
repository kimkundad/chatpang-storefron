
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Layout = ({children}) => {
  return (
    <div className={`main-wrapper`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout