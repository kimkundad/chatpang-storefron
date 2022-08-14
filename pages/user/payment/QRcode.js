import { Divider } from 'antd'
import React, { useState } from 'react'
// import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'

import QRCode from '../../../resources/imgs/qrcash.0a134114.png'
import useUser from '../../../Hooks/useUser'
import axios from '../../api/axios'
import { useQRCode } from 'next-qrcode'

const QRcode = () => {
  const { user } = useUser()
  const router = useRouter()
  const [isSubmit, setIsSubmit] = useState(false)
  const { Image } = useQRCode()
  const [qrcode, setQrcode] = useState('tse')
  const selectedPackage = user.package

  const onSubmit = async () => {
    setIsSubmit(!isSubmit)
    // const date = new Date()
    // const data = {
    //   facebookUser: user.facebookUserId,
    //   payment: {
    //     amount: selectedPackage.price,
    //     paidDate: Date.now(),
    //     channel: 'GBPrimePay',
    //   },
    //   package: {
    //     _id: selectedPackage.id,
    //     name: selectedPackage.name,
    //     price: selectedPackage.price,
    //     quotaLimit: selectedPackage.quota_limit,
    //     pageLimit: selectedPackage.page_limit,
    //     lineNotificationLimit: selectedPackage.line_notification_limit,
    //     days: selectedPackage.days,
    //   },
    //   discount: 0,
    //   net: selectedPackage.price,
    // }
    // console.log(data);
    // try {
    //   const qrcode = await axios.get(`public/orders-payment/${user.order.id}/qrcode`)
    //   setQrcode(qrcode.data.data.qrcode)
    // } catch (error) {
    //   console.log(error)
    // }
  }

  const RenderQRCode = () => {
    if (isSubmit) {
      return (
        <div className="row justify-content-center">
          <div className="col-md-4 d-flex qrcodeImg flex-column">
          {qrcode && <Image
              text={qrcode}
              options={{
                type: 'image/jpeg',
                quality: 0.3,
                level: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                color: {
                  dark: '#000',
                  light: '#FFF',
                },
              }}
              alt="qrcode"
            />}
            <div className="text-end">
              <button onClick={() => router.back}>ย้อนกลับ</button>
              <button className="ms-2" onClick={() => router.push('/user/payment/confirmorder')}>
                ต่อไป
              </button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="row justify-content-center">
          <div className="col-md-6 d-flex qrcodeInput">
            {/* <input type="text" /> */}
            <button className="btn btn-outline-secondary" onClick={() => router.back()}>
              ย้อนกลับ
            </button>
            <button onClick={() => onSubmit()}>สร้าง QR CODE</button>
          </div>
        </div>
      )
    }
  }
  return (
    // <div className="page-wrapper">
    // <div className="content">
    <>
      <div className="row justify-content-center">
        <div className="col-md-3 col-10 text-center qrcodeDetail mx-auto">
          <p>รายละเอียดการชำระเงิน</p>
          <Divider />
          <p>Package : {selectedPackage?.name}</p>
          <p>ราคา : {selectedPackage?.price} บาท</p>
        </div>
      </div>
      {RenderQRCode()}
    </>
    // </div>
    // </div>
  )
}

export default QRcode
