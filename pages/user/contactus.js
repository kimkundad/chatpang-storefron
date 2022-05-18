
import QRCode from '../../resources/imgs/QR_CODE.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { faLine, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Sidebar from '../../components/Sidebar'
const Contactus = () => {
  return (
    <div className='page-wrapper' >
        <div className='content container-fluid'>
        <Sidebar />
            <div className='row justify-content-center' >
                <div className='col-lg-6 mb-3 d-flex justify-content-center' >
                    <div>
                        <h2>ติดต่อสอบถามเพิ่มเติม</h2>
                        <div className='d-flex mb-3'>
                            <FontAwesomeIcon style={{color:"red"}} className='me-3' icon={faLocationDot} />
                            <div>
                            <p>บริษัท บีทีวาย มาเก็ตติ้ง จำกัด<br/>
                            169/93 หมู่บ้านอรินสิริ@ข้าวหลาม<br/>
                            ต.ห้วยกะปิ อ.เมือง จ.ชลบุรี 20000
                            </p>
                            </div>
                        </div>
                        <p><FontAwesomeIcon style={{color:"#0AA1DD"}} className='me-2' icon={faPhone} /> 087 135 2410 (คุณต๊อป)</p>
                        <p><FontAwesomeIcon style={{color:"#36AE7C"}} className='me-2' icon={faLine} /> @chatpang</p>
                        <p><FontAwesomeIcon style={{color:"#0AA1DD"}} className='me-2' icon={faEnvelope} /> chatpang@gmail.com</p>
                        <p><FontAwesomeIcon style={{color:"#F8CB2E"}} className='me-2' icon={faStopwatch} /> ทุกวัน 9.00 - 23.00</p>
                    </div>
                </div>
                <div className='col-lg-6 d-flex flex-column' >
                    <div className='d-flex justify-content-center' >    
                    <Image alt="qrcode" src={QRCode} />
                    </div>
                    <div className='d-flex justify-content-center mt-4'>
                    <FontAwesomeIcon style={{color:"#0AA1DD"}} className='me-2 fs-4' icon={faFacebook} />
                    <FontAwesomeIcon style={{color:"#36AE7C"}} className='me-2 fs-4' icon={faLine} />
                    <FontAwesomeIcon style={{color:"#EB5353"}} className='me-2 fs-4' icon={faInstagram} />
                    <FontAwesomeIcon style={{color:"#F32424"}} className='me-2 fs-4' icon={faYoutube} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contactus