import style from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from '../resources/imgs/logo_chatpang_02_Edited.png'

const Navbar = () => {
  const router = useRouter()

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${style.navbarCus}`}>
        <div className="container-fluid ms-4">
            <Link className="navbar-brand" href="/" passHref={true}>
                <Image 
                src={Logo}
                alt='logo' 
                width="230" 
                height="70" 
                className="d-inline-block align-text-top px-2" />
            </Link>
            <div className="d-flex me-4">
                <span onClick={()=> router.push('/contactus')} style={{cursor:"pointer"}} className='fw-bold fs-4'>ติดต่อเรา</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar