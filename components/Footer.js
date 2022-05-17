import React from 'react'
<<<<<<< HEAD

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
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLine, faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faPhone, faEnvelope, faStopwatch } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='leftFooter'>
            <strong>ข้อมูลและรายละเอียด</strong>
            <span>นโยบายความเป็นส่วนตัว</span>
            <span>เงื่อนไขการใช้งาน</span>
            <span className='d-flex align-items-center' ><FontAwesomeIcon className='me-2' icon={faFacebook} />chatpang</span>
        </div>
        <div className='rightFooter'>
            <div className='me-3'>
            <strong>ติดต่อสอบถามเพิ่มเติม</strong>
            <div className='d-flex mb-3'>
                <FontAwesomeIcon style={{color:"red"}} className='me-3' icon={faLocationDot} />
                <div>
                <p>บริษัท บีทีวาย มาเก็ตติ้ง จำกัด<br/>
                    169/93 หมู่บ้านอรินสิริ@ข้าวหลาม<br/>
                    ต.ห้วยกะปิ อ.เมือง จ.ชลบุรี 20000
                </p>
                </div>
            </div>
            </div>
            <div className='d-flex flex-column'>
                <span><FontAwesomeIcon style={{color:"#0AA1DD"}} className='me-2' icon={faPhone} /> 087 135 2410 (คุณต๊อป)</span>
                <span><FontAwesomeIcon style={{color:"#36AE7C"}} className='me-2' icon={faLine} /> @chatpang</span>
                <span><FontAwesomeIcon style={{color:"#0AA1DD"}} className='me-2' icon={faEnvelope} /> chatpang@gmail.com</span>
                <span><FontAwesomeIcon style={{color:"#F8CB2E"}} className='me-2' icon={faStopwatch} /> ทุกวัน 9.00 - 23.00</span>
            </div>
        </div>
>>>>>>> book
    </div>
  )
}

<<<<<<< HEAD
export default Footer
=======
export default Footer
>>>>>>> book
