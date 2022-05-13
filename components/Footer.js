import React from 'react'

const Footer = () => {
  return (
    <div className=" w-100 bg-primary" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <div className="container-md d-flex flex-column gap-1">
        <div className=" text-bolder" style={{ fontSize: '18px' }}>
          ข้อมูลและรายละเอียด
        </div>
        <div style={{ fontSize: '14px' }}>นโยบายความเป็นส่วนตัว</div>
        <div style={{ fontSize: '14px' }}>เงื่อนไขการใช้งาน</div>
        <div className="d-flex align-items-center gap-1">
          <img src="/images/landing-page/facebook-faded.svg" style={{ width: '16px' }} />
          <div style={{ fontSize: '14px' }}>chatpang</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
