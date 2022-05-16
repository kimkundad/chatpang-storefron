import React, { useRef, useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  const [modalMobile, setModalMobile] = useState(false)

  return (
    <header className="position-fixed w-100 top-0" style={{ zIndex: '1000' }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container-xl">
          <a className="navbar-brand" href="#">
            <img src="/images/header-logo.svg" style={{ maxWidth: '209px' }} />
          </a>
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
          <div className="collapse navbar-collapse align-content-end" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-primary">เกี่ยวกับ</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary">ฟังก์ชั่น</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary">รีวิวจากลูกค้า</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary">คำถามที่พบบ่อย</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary">แพ็คเกจ</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary">ติดต่อเรา</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {modalMobile ? (
        <div className="position-absolute bg-white vw-100 shadow">
          <ul className="navbar-nav px-4 py-3">
            <li className="nav-item">
              <button className="btn">เกี่ยวกับ</button>
            </li>
            <li className="nav-item">
              <button className="btn">ฟังก์ชั่น</button>
            </li>
            <li className="nav-item">
              <button className="btn">รีวิวจากลูกค้า</button>
            </li>
            <li className="nav-item">
              <button className="btn">คำถามที่พบบ่อย</button>
            </li>
            <li className="nav-item">
              <button className="btn">แพ็คเกจ</button>
            </li>
            <li className="nav-item">
              <button className="btn">ติดต่อเรา</button>
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
