import Image  from 'next/image'
import bbl from '../resources/imgs/bbl.png'
import kbank from '../resources/imgs/kbank.png'
import ktb from '../resources/imgs/ktb.png'
import scb from '../resources/imgs/scb.png'

import { useRouter } from 'next/router'

import Stepper from '../components/Stepper'

const Bankacc = () => {
  const router = useRouter()

  return (
    <div className='page-wrapper' >
    <div className='content'>

        <div className='row' >
            <div className='col-lg-12 d-flex justify-content-center'>
                <Stepper step="1"/>
            </div>
        </div>
        <div className="row m-auto w-75">
            <div className="col-lg-12 d-flex justify-content-center">
                <h1>ชื่อบัญชี : บริษัท บีทีวาย มาเก็ตติ้ง จำกัด</h1>
            </div>
        </div>
        <div className='row m-auto w-75' >
            <div className='col-lg-6 d-flex justify-content-center w-50' >
                <Image src={bbl} alt="logo"/>
                <div className='d-flex flex-column mx-3'>
                    <span>ธนาคาร : กรุงเทพ</span>
                    <span>ประเภท : ออมทรัพย์</span>
                    <span>เลขที่บัญชี : 123-4-56789-0</span>
                    <span>สาขา : ห้างแฟชั่นไอส์แลน</span>
                </div>
            </div>
            <div className='col-lg-6 d-flex justify-content-center w-50' >
                <Image src={kbank} alt="logo"/>
                <div className='d-flex flex-column mx-3'>
                    <span>ธนาคาร : กรุงเทพ</span>
                    <span>ประเภท : ออมทรัพย์</span>
                    <span>เลขที่บัญชี : 123-4-56789-0</span>
                    <span>สาขา : ห้างแฟชั่นไอส์แลน</span>
                </div>  
            </div>
        </div>
        <div className='row m-auto w-75 mt-4' >
            <div className='col-lg-6 d-flex justify-content-center w-50' >
                <Image src={ktb} alt="logo"/>
                <div className='d-flex flex-column mx-3'>
                    <span>ธนาคาร : กรุงเทพ</span>
                    <span>ประเภท : ออมทรัพย์</span>
                    <span>เลขที่บัญชี : 123-4-56789-0</span>
                    <span>สาขา : ห้างแฟชั่นไอส์แลน</span>
                </div>
            </div>
            <div className='col-lg-6 d-flex justify-content-center w-50' >
                <Image src={scb} alt="logo"/>
                <div className='d-flex flex-column mx-3'>
                    <span>ธนาคาร : กรุงเทพ</span>
                    <span>ประเภท : ออมทรัพย์</span>
                    <span>เลขที่บัญชี : 123-4-56789-0</span>
                    <span>สาขา : ห้างแฟชั่นไอส์แลน</span>
                </div>  
            </div>
        </div>
        <div className='row m-auto w-75 mt-4' >
            <div className='col-lg-12 d-flex justify-content-center'>
                <span>***หลังจากท่านได้โอนเงินแล้ว กรุณาอัพโหลด สลิปการโอนเงิน หรือส่งหลักฐานการโอนเงินมาที่ LINE : @chatpang***</span>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col-12 d-flex justify-content-end w-50 mt-3'>
                <span onClick={()=> router.back()} className='btn text-secondary'>ย้อนกลับ</span>
                <button onClick={()=> router.push('/slipupload')} className='customBTN'>อัพโหลดสลิป</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Bankacc