import Navbar from "../components/Navbar"
import style from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={`main-wrapper`}>
        <Navbar />
        <main>{children}</main>
    </div>
  )
}

export default Layout