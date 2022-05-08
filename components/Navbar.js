import style from '../styles/Navbar.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Logo from '../resources/imgs/logo_chatpang_02_Edited.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Dropdown, Menu } from 'antd'

import useUser from '../Hooks/useUser'

const Navbar = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()

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
    router.push("/")
    setUserData({isLogin:false})
  }

  const menu = (
    <Menu 
      items={[
        {
          label:<span onClick={()=> router.push('/pagemanagement')}>จัดการเพจ</span>,
          key:0
        },
        {
          label:<span onClick={()=> router.push('/accountmanagement')}>จัดการบัญชีและสมาชิก</span>,
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
    <nav className={`navbar navbar-expand-lg navbar-light ${style.navbarCus}`}>
        <div className="container-fluid ms-4">
            {/* <Link className="navbar-brand" href="/" passHref={true}> */}
                <Image 
                onClick={()=> router.push('/')}
                src={Logo}
                alt='logo' 
                width="230" 
                height="70" 
                style={{cursor:"pointer"}}
                className="d-inline-block align-text-top px-2" />
            {/* </Link> */}
            <div className="d-flex me-4">
                <span onClick={()=> router.push('/contactus')} style={{cursor:"pointer"}} className='fw-bold fs-4 mx-3'>ติดต่อเรา</span>
                {userDropDown()}
            </div>
        </div>
    </nav>
  )
}

export default Navbar