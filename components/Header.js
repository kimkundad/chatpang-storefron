import React, { useRef, useState } from 'react'
import { Link } from 'react-scroll'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAngleDown, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import useUser from '../Hooks/useUser'
import { Dropdown, Menu, Avatar } from 'antd'
import AppContext from '../context/AppContextProvider'

const Header = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  const [current, setCurrent] = useState('')

  const pathName = router.pathname
  const [modalMobile, setModalMobile] = useState(false)

  const onShowSideBarMenu = () => {
    document.querySelector('.sidebar').classList.toggle('open')
  }

  const onClickItem = (id) => {
    setCurrent(id)
  }

  const onLogOut = () => {
    router.push('/')
    setUserData({ ...user,isLogin: false })
  }

  const menu = (
    <Menu
      items={[
        {
          label: <span onClick={() => router.push('/user/info/pagemanagement')}>จัดการเพจ</span>,
          key: 0,
        },
        {
          label: <span onClick={() => router.push('/user/info/accountmanagement')}>จัดการบัญชีและสมาชิก</span>,
          key: 1,
        },
        {
          label: <span onClick={() => router.push('/user/manage')}>หน้าหลัก</span>,
          key: 3,
        },
        {
          label: <span onClick={() => router.push('/user/contactus')}>ติดต่อเรา</span>,
          key: 4,
        },
        {
          type: 'divider',
        },
        {
          label: <span onClick={onLogOut}>ออกจากระบบ</span>,
          key: 5,
        },
      ]}
    />
  )

  const userDropDown = () => {
    if (user.isLogin) {
      return (
        // <AppContext.Consumer>
          <Dropdown overlay={menu} trigger={['click']} className="fw-bold fs-4 d-flex align-items-center ms-3">
            <a style={{ textDecoration: 'none', color: 'Black' }} onClick={(e) => e.preventDefault()}>
              {/* {userData.image ? <Avatar src={<img src={userData.image} alt="profile"/>} style={{ width: 50 }} /> : <FontAwesomeIcon icon={faCircleUser} />} */}
              <span className="mx-2">{user?.user?.name !== undefined ? user?.user?.name : 'User'}</span>
              <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </Dropdown>
        // </AppContext.Consumer>
      )
    } else {
      return (
        <li className="nav-item">
          <Link to="/" offset={-40}>
            <span
              onClick={() => router.push('/user/contactus')}
              className={`customHeaderItem ${current === '6' && 'active'}`}
            >
              ติดต่อเรา
            </span>
          </Link>
        </li>
      )
    }
  }

  const renderMenuNav = () => {
    if (!pathName.includes('user')) {
      return (
        <div className="collapse navbar-collapse align-content-end" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link onClick={() => onClickItem('1')} to="about" offset={-40}>
                <span className={`customHeaderItem ${current === '1' && 'active'}`}>เกี่ยวกับ</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={() => onClickItem('2')} to="benefit" offset={-220}>
                <span className={`customHeaderItem ${current === '2' && 'active'}`}>ฟังก์ชั่น</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={() => onClickItem('3')} to="review" offset={-140}>
                <span className={`customHeaderItem ${current === '3' && 'active'}`}>รีวิวจากลูกค้า</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={() => onClickItem('4')} to="questions" offset={-140}>
                <span className={`customHeaderItem ${current === '4' && 'active'}`}>คำถามที่พบบ่อย</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={() => onClickItem('5')} to="packages" offset={-120}>
                <span className={`customHeaderItem ${current === '5' && 'active'}`}>แพ็คเกจ</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={() => onClickItem('6')} to="contract" offset={-150}>
                <span className={`customHeaderItem ${current === '6' && 'active'}`}>ติดต่อเรา</span>
              </Link>
            </li>
          </ul>
        </div>
      )
    } else {
      return <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-none d-sm-block">{userDropDown()}</ul>
    }
  }

  const renderBTNNavbar = () => {
    if (!pathName.includes('user/manage')) {
      return (
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
            alt="menu"
          />
        </button>
      )
    } else {
      return (
        <div className="sideBarToggle d-md-none d-sm-block" style={{ cursor: 'pointer' }} onClick={onShowSideBarMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      )
    }
  }
  return (
    <header className="position-fixed w-100 top-0" style={{ zIndex: '1000' }}>
      <nav className="customHeader navbar navbar-expand-lg navbar-dark shadow-sm">
        <div className="container-xl">
          <Link to="/" onClick={() =>{ setCurrent(''); router.push('/')}} className="navbar-brand" >
            <img src="/images/header-logo.svg" style={{ maxWidth: '209px' }} alt="logo" />
          </Link>
          {/* <div className='sideBarToggle d-md-none d-sm-block me-3' style={{cursor:"pointer"}} onClick={onShowSideBarMenu} >
            <FontAwesomeIcon icon={faBars} /> 
          </div> */}
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
