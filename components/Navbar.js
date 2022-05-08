import style from '../styles/Navbar.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Logo from '../resources/imgs/logo_chatpang_02_Edited.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Dropdown, Menu } from 'antd'

import useUser from '../Hooks/useUser'

const Navbar = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()

  console.log(router.pathname.includes('user'));
  const isLandingPage = router.pathname.includes('user')
  const landingNavMenu = () =>{
    if (!isLandingPage) {
      return (
        <>
        <Link href='#about'><span style={{cursor:"pointer"}} className='fw-bold fs-4 mx-3'>เกี่ยวกับ</span></Link>
        <Link href='#functions'><span style={{cursor:"pointer"}} className='fw-bold fs-4 mx-3'>ฟังก์ชั่น</span></Link>
        <Link href='#review'><span style={{cursor:"pointer"}} className='fw-bold fs-4 mx-3'>รีวิวจากลูกค้า</span></Link>
        <Link href='#question'><span style={{cursor:"pointer"}} className='fw-bold fs-4 mx-3'>คำถามที่พบบ่อย</span></Link>
        <Link href='#package'><span style={{cursor:"pointer"}} className='fw-bold fs-4 mx-3'>แพ็คเกจ</span></Link>
        <Link href='#contact'><span style={{cursor:"pointer"}} className='fw-bold fs-4 mx-3'>ติดต่อเรา</span></Link>
      </>
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
                {landingNavMenu()}
                {userDropDown()}
            </div>
        </div>
    </nav>
  )
}

export default Navbar