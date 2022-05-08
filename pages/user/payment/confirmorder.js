
import { useRouter } from 'next/router'
import Stepper from '../../../components/Stepper'
import { Checkbox, Modal, Divider  } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'

import sampleSlip from '../../../resources/imgs/slip.jpg'

const Confirmorder = () => {
  const router = useRouter()
  const [previewSlip, setPreviewSlip] = useState(false)
  function onChecked (e) {
    console.log(`check = ${e.target.checked}`);
  }
  function handleCancel() {
    setPreviewSlip(false)
  }
  return (
    <div className='page-wrapper' >
    <div className='content'>
        <div className='row' >
            <div className='col-lg-12 d-flex justify-content-center'>
                <Stepper step="2"/>
            </div>
        </div>
        <div style={{width:"30%"}} className="row m-auto">
            <div className="col-lg-12 d-flex justify-content-start">
                <Checkbox className='fs-3' onChange={onChecked} >รับสลิป</Checkbox>
            </div>
        </div>
        <div className='row m-auto mt-4 invoice-item p-3' >
            <div className='row'>    
                <div className='col-lg-6 text-start' >
                <strong className='text-secondary'>รายละเอียดการชำระเงิน</strong>
                    <div className='ps-3'>
                        <p className='mb-0'>ชำระด้วยบัตรเครดิต</p>
                        <span>หมายเลข:</span>
                    </div>
                </div>
                <div className='col-lg-6 text-end' >
                <strong className='text-secondary'>หลักฐานการชำระเงิน</strong>
                    <div>
                        <Image onClick={()=>setPreviewSlip(true)} src={sampleSlip} alt="slip" width={120} height={150}/>
                        <Modal
                        visible={previewSlip}
                        title="หลักฐานการโอนของคุณ"
                        footer={null}
                        onCancel={handleCancel}
                        >
                        <Image alt="example" style={{ width: '100%' }} src={sampleSlip} />
                        </Modal>
                    </div>
                    <span style={{cursor:"pointer"}} className='text-info' onClick={()=>setPreviewSlip(true)}>ดูสลิปการโอน</span>
                </div>
            </div>
            <Divider />
            <div className='row' >
                <div className='col-lg-6 text-start' >
                    <strong className='text-secondary'>รายละเอียดแพ็คเกจ</strong>
                </div>
            </div>
            <div className='row ps-4'>
                {/* <div className='col-lg-12'> */}
                    <table>
                        <thead>
                            <tr>
                                <th className="text-start">รายการ</th>
                                <th className="text-center">ราคา</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Basic ราคา 290 บาท / เดือน<br/>ใช้งานได้ 1 เพจ</td>
                                <td className="text-end">290 บาท</td>
                            </tr>
                        </tbody>
                    </table>
                {/* </div> */}
            </div>
            <Divider />
            <div className='row'>
                <div className='col-md-6 ms-auto'>
                    <table className="table">
                        <tbody>
                        <tr>
                            <th>ราคารวม:</th>
                            <td className="text-end p-0">290 บาท</td>
                        </tr>
                        <tr>
                            <th>ภาษี (7%)</th>
                            <td className="text-end p-0">20.3 บาท</td>
                        </tr>
                        <tr>
                            <th>ราคาสุทธิ:</th>
                            <td className="text-end p-0">310.3 บาท</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div style={{width:"30%"}} className='col-12 d-flex justify-content-end mt-3'>
                <span onClick={()=> router.back()} className='btn text-secondary'>ย้อนกลับ</span>
                <button onClick={()=> router.push('/confirmorder')} className='customBTN'>ยืนยัน</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Confirmorder