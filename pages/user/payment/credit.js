import { Divider } from 'antd'
import React from 'react'
import { useRouter } from 'next/dist/client/router'
const Credit = () => {
  const router = useRouter()
  return (
    <>
      {/* <div className="page-wrapper"> */}
      {/* <div className="content">  */}
      {/* <div className="row justify-content-center mb-3">
          <div className="col-md-6 col-10 text-center qrcodeDetail mx-auto">
            <p>รายละเอียดการชำระเงิน</p>
            <Divider />
            <p>Package : VIP</p>
            <p>ราคา : 590 บาท</p>
          </div>
        </div> */}
      <div className="row justify-content-center">
        <div className="creditInput col-md-3 d-flex flex-column">
          <label>Cardholder name</label>
          <input className="my-2" type="text" name="cardHolderName" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="creditInput col-md-3 d-flex flex-column">
          <label>Card Number</label>
          <input className="my-2" type="text" name="cardNo" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="creditInput col-md-1">
          <label>MM</label>
          <input className="my-2" type="text" name="mm" />
        </div>
        <div className="creditInput col-md-1">
          <label>YY</label>
          <input className="my-2" type="text" name="yy" />
        </div>
        <div className="creditInput col-md-1">
          <label>CVV</label>
          <input className="my-2" type="password" name="cvv" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="creditInput col-md-3 text-end">
          <button className='btn btn-outline-secondary' onClick={()=> router.back()}>ย้อนกลับ</button>
          <button onClick={()=> router.push(`/user/payment/confirmorder`)} className="ms-3">ต่อไป</button>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  )
}

export default Credit
