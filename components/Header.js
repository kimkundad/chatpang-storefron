import React, { useRef, useState } from 'react'
import { Link } from 'react-scroll'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import useUser from '../Hooks/useUser'
import { Dropdown, Menu, Avatar } from 'antd'

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
    localStorage.removeItem('userId')
    // router.push('/')
    setUserData({ ...user, isLogin: false })
  }

  const menu = (
    <Menu
      items={[
        {
          label: (
            <span style={{ fontSize: 'min(1.5rem,3vw)' }} onClick={() => router.push('/user/manage')}>
              หน้าหลัก
            </span>
          ),
          key: 0,
        },
        {
          label: (
            <span style={{ fontSize: 'min(1.5rem,3vw)' }} onClick={() => router.push(`/user/edit/${user?.user?.id}`)}>
              แก้ไขข้อมูลส่วนตัว
            </span>
          ),
          key: 1,
        },
        {
          label: (
            <span style={{ fontSize: 'min(1.5rem,3vw)' }} onClick={() => router.push('/user/info/pagemanagement')}>
              จัดการเพจ
            </span>
          ),
          key: 2,
        },
        {
          label: (
            <span style={{ fontSize: 'min(1.5rem,3vw)' }} onClick={() => router.push('/user/info/accountmanagement')}>
              จัดการบัญชีและสมาชิก
            </span>
          ),
          key: 3,
        },

        {
          label: (
            <span style={{ fontSize: 'min(1.5rem,3vw)' }} onClick={() => router.push('/user/contactus')}>
              ติดต่อเรา
            </span>
          ),
          key: 4,
        },
        {
          type: 'divider',
        },
        {
          label: (
            <span style={{ fontSize: 'min(1.5rem,3vw)' }} onClick={onLogOut}>
              ออกจากระบบ
            </span>
          ),
          key: 5,
        },
      ]}
    />
  )

  const userDropDown = () => {
    if (user.isLogin) {
      return (
        <Dropdown overlay={menu} trigger={['click']} className="fw-bold fs-4 d-flex align-items-center ms-3">
          <a style={{ textDecoration: 'none', color: 'Black' }} onClick={(e) => e.preventDefault()}>
            {/* {userData.image ? <Avatar src={<img src={userData.image} alt="profile"/>} style={{ width: 50 }} /> : <FontAwesomeIcon icon={faCircleUser} />} */}
            <span className="mx-2">{user?.user?.name !== undefined ? user?.user?.name : 'User'}</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </Dropdown>
      )
    } else {
      return (
        <li className="nav-item fs-2">
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
    if (
      !pathName.includes('/user/manage') &&
      !pathName.includes('/user/payment') &&
      !pathName.includes('/user/info') &&
      !pathName.includes('/user/register') &&
      !pathName.includes('/user/changepackage') &&
      !pathName.includes('/user/contactus') &&
      !pathName.includes('/user/packages') &&
      !pathName.includes('/register')&&
      !pathName.includes('/user/edit')
    ) {
      return (
        <div className="collapse navbar-collapse align-content-end" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="customHeaderItem" activeClass="active" spy to="about" offset={-60}>
                {/* <span className={`customHeaderItem ${current === '1' && 'active'}`}> */}
                เกี่ยวกับ
                {/* </span> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="customHeaderItem" activeClass="active" spy smooth to="function" offset={-60}>
                {/* <span className={`customHeaderItem ${current === '2' && 'active'}`}> */}
                ฟังก์ชั่น
                {/* </span> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="customHeaderItem" activeClass="active" spy smooth to="review" offset={-60}>
                {/* <span className={`customHeaderItem ${current === '3' && 'active'}`}> */}
                รีวิวจากลูกค้า
                {/* </span> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="customHeaderItem" activeClass="active" spy smooth to="questions" offset={-60}>
                {/* <span className={`customHeaderItem ${current === '4' && 'active'}`}> */}
                คำถามที่พบบ่อย
                {/* </span> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="customHeaderItem" activeClass="active" spy smooth to="packages" offset={-60}>
                {/* <span className={`customHeaderItem ${current === '5' && 'active'}`}> */}
                แพ็คเกจ
                {/* </span> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="customHeaderItem" activeClass="active" spy smooth to="contract" offset={-60}>
                {/* <span className={`customHeaderItem ${current === '6' && 'active'}`}> */}
                ติดต่อเรา
                {/* </span> */}
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
    if (!pathName.includes('user')) {
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
    <div className="position-fixed w-100 top-0" style={{ zIndex: '1000' }}>
      <nav className="customHeader navbar navbar-expand-lg navbar-dark shadow-sm">
        <div className="navContainer">
          <Link
            to="/"
            onClick={() => {
              setCurrent('')
              router.push('/')
            }}
            className="navbar-brand"
          >
            <div style={{ width: '30vw' }} className="d-md-block d-none">
              <img src="/images/logo/newLogo.png" style={{ maxWidth: '50%' }} alt="logo" />
            </div>
            <div className="d-block d-md-none">
              <img src="/images/logo/textLogo.png" style={{ maxWidth: '40%' }} alt="logo" />
            </div>
          </Link>
          {renderBTNNavbar()}
          {renderMenuNav()}
        </div>
      </nav>

      {modalMobile ? (
        <div className="position-absolute bg-white vw-100 shadow">
          <ul className="navbar-nav px-4 py-3">
            <li className="nav-item fs-2">
              <Link activeClass="active" to="about" offset={-90}>
                <button className="btn" onClick={() => setModalMobile(false)}>
                  เกี่ยวกับ
                </button>
              </Link>
            </li>
            <li className="nav-item fs-2">
              <Link to="function" offset={-90}>
                <button className="btn" onClick={() => setModalMobile(false)}>
                  ฟังก์ชั่น
                </button>
              </Link>
            </li>
            <li className="nav-item fs-2">
              <Link to="review" offset={-90}>
                <button className="btn" onClick={() => setModalMobile(false)}>
                  รีวิวจากลูกค้า
                </button>
              </Link>
            </li>
            <li className="nav-item fs-2">
              <Link to="questions" offset={-90}>
                <button className="btn" onClick={() => setModalMobile(false)}>
                  คำถามที่พบบ่อย
                </button>
              </Link>
            </li>
            <li className="nav-item fs-2">
              <Link to="packages" offset={-90}>
                <button className="btn" onClick={() => setModalMobile(false)}>
                  แพ็คเกจ
                </button>
              </Link>
            </li>
            <li className="nav-item fs-2">
              <Link to="contract" offset={-90}>
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
    </div>
  )
}

export default Header
