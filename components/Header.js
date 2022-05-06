import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container-xl">
          <a className="navbar-brand" href="#">
            <img src="/images/header-logo.svg" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
    </header>
  );
};

export default Header;
