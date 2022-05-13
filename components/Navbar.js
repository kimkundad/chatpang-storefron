import style from '../styles/Navbar.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Logo from '../resources/imgs/logo_chatpang_02_Edited.png'
import SmallLogo from '../resources/imgs/chat_pang_icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Dropdown, Menu } from 'antd'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import useUser from '../Hooks/useUser'

const Navbars = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()

  const isLandingPage = router.pathname.includes('user')
  const landingNavMenu = () =>{
    if (!isLandingPage) {
      return (
        <Nav className='ms-auto'>
        <Nav.Link href='#about'><span style={{cursor:"pointer"}} className='fw-bold fs-4 mx-3'>เกี่ยวกับ</span></Nav.Link>
        <Nav.Link href='#functions'><span style={{cursor:"pointer"}} className='fw-bold fs-4 mx-3'>ฟังก์ชั่น</span></Nav.Link>
        <Nav.Link href='#review'><span style={{cursor:"pointer"}} className='fw-bold fs-4 mx-3'>รีวิวจากลูกค้า</span></Nav.Link>
        <Nav.Link href='#question'><span style={{cursor:"pointer"}} className='fw-bold fs-4 mx-3'>คำถามที่พบบ่อย</span></Nav.Link>
        <Nav.Link href='#package'><span style={{cursor:"pointer"}} className='fw-bold fs-4 mx-3'>แพ็คเกจ</span></Nav.Link>
        <Nav.Link href='#contact'><span style={{cursor:"pointer"}} className='fw-bold fs-4 mx-3'>ติดต่อเรา</span></Nav.Link>
      </Nav>
    )
    }else{
      return (
        <span onClick={()=> router.push('/contactus')} style={{cursor:"pointer"}} className='fw-bold fs-4 mx-3'>ติดต่อเรา</span>
      )
    }
  }
  const userDropDown = () => {
    if (user.isLogin) {
      return (
        <Dropdown
          overlay={menu} 
          trigger={['click']}
          className='fw-bold fs-4 d-flex align-items-center'
          >
          <a style={{textDecoration:"none", color:"Black"}} onClick={(e) => e.preventDefault()}>
          <FontAwesomeIcon icon={faCircleUser} />
          <span className='mx-2'>UserInfo</span>
          <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </Dropdown>
      )
    }
  }
  const onLogOut = () => {
    router.push("/user/")
    setUserData({isLogin:false})
  }

  const menu = (
    <Menu 
      items={[
        {
          label:<span onClick={()=> router.push('/user/manage/pagemanagement')}>จัดการเพจ</span>,
          key:0
        },
        {
          label:<span onClick={()=> router.push('/user/manage/accountmanagement')}>จัดการบัญชีและสมาชิก</span>,
          key:1
        },
        {
        type: 'divider',
        },
        {
          label:<span onClick={onLogOut} >ออกจากระบบ</span>,
          key:3
        }
      ]}
    />
  )
  return (
    <Navbar bg='light' expand="lg" className={`${style.navbarCus}`}>
        <div className="container-fluid ms-4">
            {/* <Link className="navbar-brand" href="/" passHref={true}> */}
            <Navbar.Brand>
                <Image 
                onClick={()=> router.push('/')}
                src={Logo}
                alt='logo' 
                width="230" 
                height="70" 
                style={{cursor:"pointer"}}
                className={`align-text-top px-2 ${style.logo}`} />
                {/* <Image 
                onClick={()=> router.push('/')}
                src={SmallLogo}
                alt='logo' 
                width="80" 
                height="80"
                className={`align-text-top px-2${style.smallLogo}`} /> */}
            </Navbar.Brand>
            {/* </Link> */}
            {/* <div className="d-flex me-4"> */}
            <Navbar.Toggle />
            <Navbar.Collapse>
                {landingNavMenu()}
                {userDropDown()}
            </Navbar.Collapse>
            {/* </div> */}
        </div>
    </Navbar>
  )
}

export default Navbars