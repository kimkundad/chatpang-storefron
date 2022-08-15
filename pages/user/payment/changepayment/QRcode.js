import { Divider } from 'antd'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'

import QRCode from '../../../../resources/imgs/qrcash.0a134114.png'
import useUser from '../../../../Hooks/useUser'
const QRcode = () => {
  const router = useRouter()
  const { user } = useUser()
  const [isSubmit, setIsSubmit] = useState(false)

  const onSubmit = () => {
    setIsSubmit(!isSubmit)
  }

  const RenderQRCode = () => {
    if (isSubmit) {
      return (
        <div className="row justify-content-center">
          <div className="col-md-4 d-flex qrcodeImg flex-column">
            <Image src={QRCode} alt="qrcode" />
            <div className='text-end'>
              <button onClick={() => router.back}>ย้อนกลับ</button>
              <button className='ms-2' onClick={() => router.push('/user/payment/confirmorder')}>ต่อไป</button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="row justify-content-center">
          <div className="col-md-6 d-flex qrcodeInput">
            {/* <input type="text" /> */}
            <button className="btn btn-outline-secondary" onClick={() => router.back}>
              ย้อนกลับ
            </button>
            <button onClick={() => onSubmit()}>บันทึก</button>
          </div>
        </div>
      )
    }
  }
  return (
    // <div className="page-wrapper">
    // <div className="content">
    <>
      <div className="row justify-content-center mb-3">
        <div className="col-md-3 col-10 text-center qrcodeDetail mx-auto">
          <p>รายละเอียดการชำระเงิน</p>
          <Divider />
          <p>Package : VIP</p>
          <p>ราคา : 590 บาท</p>
        </div>
      </div>
      {RenderQRCode()}
    </>
    // </div>
    // </div>
  )
}

export default QRcode
