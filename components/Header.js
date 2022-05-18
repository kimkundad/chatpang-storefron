import React, { useRef, useState } from 'react'
import { Link } from 'react-scroll';
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import useUser from '../Hooks/useUser'
import { Dropdown, Menu, Avatar } from 'antd'

const Header = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  const userData = user.user

  const pathName = router.pathname
  const [modalMobile, setModalMobile] = useState(false)

  const onShowSideBarMenu = () => {
    document.querySelector('.sidebar').classList.toggle('open')  
  }

  const onLogOut = () => {
    router.push("/user/")
    setUserData({isLogin:false})
  }

  const menu = (
    <Menu 
      items={[
        {
          label:<span onClick={()=> router.push('/user/info/pagemanagement')}>จัดการเพจ</span>,
          key:0
        },
        {
          label:<span onClick={()=> router.push('/user/info/accountmanagement')}>จัดการบัญชีและสมาชิก</span>,
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

  const userDropDown = () => {
    if (user.isLogin) {
      return (
        <Dropdown
          overlay={menu} 
          trigger={['click']}
          className='fw-bold fs-4 d-flex align-items-center ms-3'
          >
          <a style={{textDecoration:"none", color:"Black"}} onClick={(e) => e.preventDefault()}>
          {userData.image ? <Avatar src={<img src={userData.image} alt="profile"/>} style={{ width: 50 }} /> : <FontAwesomeIcon icon={faCircleUser} />}
          <span className='mx-2'>{userData.name ? userData.name : 'User'}</span>
          <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </Dropdown>
      )
    }
  }

  const renderMenuNav = () => {
    if (!pathName.includes('user')) {
      return (
        <div className="collapse navbar-collapse align-content-end" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="about" offset={-40}>
                <button className="btn btn-primary">เกี่ยวกับ</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="benefit" offset={-220}>
                <button className="btn btn-primary">ฟังก์ชั่น</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="review" offset={-140}>
                <button className="btn btn-primary">รีวิวจากลูกค้า</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="questions" offset={-140}>
                <button className="btn btn-primary">คำถามที่พบบ่อย</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="packages" offset={-120}>
                <button className="btn btn-primary">แพ็คเกจ</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contract" offset={-150}>
                <button className="btn btn-primary">ติดต่อเรา</button>
              </Link>
            </li>
          </ul>
        </div>
      )
    }else{
      return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link to="/" offset={-40}>
                <button onClick={()=> router.push('/user/contactus')} className="btn btn-primary">ติดต่อเรา</button>
              </Link>
          </li>
          {userDropDown()}
        </ul>
        )
    }
  }

  const renderBTNNavbar = () => {
    if (!pathName.includes('user')) {
      return(
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              src="/images/hamburger-menu.svg"
              onClick={() => setModalMobile(!modalMobile)}
              style={{ width: '24px' }}
            />
        </button>
      )
    }else{
      return <></>
    }
  }
  return (
    <header className="position-fixed w-100 top-0" style={{ zIndex: '1000' }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container-xl">
          <a className="navbar-brand" href="#">
            <img src="/images/header-logo.svg" style={{ maxWidth: '209px' }} alt='logo' />
          </a>
          <div className='sideBarToggle d-md-none d-sm-block me-3' style={{cursor:"pointer"}} onClick={onShowSideBarMenu} >
            <FontAwesomeIcon icon={faBars} /> 
          </div>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              src="/images/hamburger-menu.svg"
              onClick={() => setModalMobile(!modalMobile)}
              style={{ width: '24px' }}
            />
          </button> */}
            {renderBTNNavbar()}
            {renderMenuNav()}
          {/* <div className="collapse navbar-collapse align-content-end" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="about" offset={-40}>
                  <button className="btn btn-primary">เกี่ยวกับ</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="benefit" offset={-220}>
                  <button className="btn btn-primary">ฟังก์ชั่น</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="review" offset={-140}>
                  <button className="btn btn-primary">รีวิวจากลูกค้า</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="questions" offset={-140}>
                  <button className="btn btn-primary">คำถามที่พบบ่อย</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="packages" offset={-120}>
                  <button className="btn btn-primary">แพ็คเกจ</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contract" offset={-150}>
                  <button className="btn btn-primary">ติดต่อเรา</button>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>

      {modalMobile ? (
        <div className="position-absolute bg-white vw-100 shadow">
          <ul className="navbar-nav px-4 py-3">
            <li className="nav-item">
              <Link activeClass="active" to="about" offset={-110}>
                <button className="btn" onClick={() => setModalMobile(false)}>
                  เกี่ยวกับ
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="benefit" offset={-200}>
                <button className="btn" onClick={() => setModalMobile(false)}>
                  ฟังก์ชั่น
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="review" offset={-120}>
                <button className="btn" onClick={() => setModalMobile(false)}>
                  รีวิวจากลูกค้า
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="questions" offset={-140}>
                <button className="btn" onClick={() => setModalMobile(false)}>
                  คำถามที่พบบ่อย
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="packages" offset={-100}>
                <button className="btn" onClick={() => setModalMobile(false)}>
                  แพ็คเกจ
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contract" offset={-180}>
                <button className="btn" onClick={() => setModalMobile(false)}>
                  ติดต่อเรา
                </button>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </header>
  )
}

export default Header
