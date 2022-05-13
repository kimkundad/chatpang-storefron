import React from 'react'
import { Divider  } from 'antd'
import { useRouter } from 'next/router'

const MemberDetails = () => {
  const router = useRouter()

  return (
    <div className='row mt-4 invoice-item p-3' style={{width:"100%"}} >
        <div className='row'>    
            <div className='col-lg-6 text-start' >
                <strong className='text-secondary fs-4'>รายละเอียดสมาชิก</strong>
                    <div className='ps-3'>
                        <p className='mb-0 fs-5'>อีเมล : abcdefg@gmail.com</p>
                        <p className='mb-0 fs-5'>โทรศัพท์ : 0812345678</p>
                    </div>
            </div>
            <Divider />
            <div className='row'>
                <div className='col-lg-6 text-start' >
                    <strong className='text-secondary fs-4'>การชำระเงิน</strong>
                        <div className='ps-3'>
                            <p className='mb-0 fs-5'>โอนเงินเข้าบัญชี</p>
                        </div>
                </div>
                {/* <div className='col-lg-6 text-end' >
                        <div className='ps-3'>
                            <p style={{cursor:"pointer"}} className='text-primary mb-0 fs-5'>แก้ไขข้อมูลการชำระเงิน</p>
                        </div>
                </div> */}
            </div>
            <Divider />
            <div className='row'>
                <div className='col-lg-6 text-start' >
                <strong className='text-secondary fs-4'>รายละเอียดแพ็คเกจ</strong>
                        <div className='ps-3'>
                            <p className='mb-0 fs-5'>Basic ราคา 290 บาท / เดือน<br/>
                            วันที่เรียกเก็บครั้งต่อไปของคุณคือ 18 มีนาคม 2565
                            </p>
                        </div>
                </div>
                <div className='col-lg-6 text-end' >
                        <div className='ps-3'>
                            <p onClick={()=> router.push('/user/packages')} style={{cursor:"pointer"}} className='text-primary mb-0 fs-5'>เปลี่ยนแพ็คเกจ</p>
                        </div>
                </div>
            </div>
            <Divider />
            <div className='row'>
                <div className='col-lg-12 text-end' >
                <button className='btn btn-secondary'>ยกเลิกการเป็นสมาชิก</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MemberDetails