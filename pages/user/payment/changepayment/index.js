import React, { useState } from 'react'
import { useRouter } from 'next/router'

import Credit from './credit'
import QRcode from './QRcode'
import useUser from '../../../../Hooks/useUser'

const Index = () => {
    const { user } = useUser
    const [method, setMethod] = useState(false) //false = credit, true= qrcode
    // console.log(user)

    const onChangeMethod = (e) => {
        setMethod(!method)
        console.log(e.target.name)
      }
  return (
    <div className="nosidebar-wrapper">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
          <h2>แก้ไขข้อมูลการชำระเงิน</h2>
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div style={{ fontSize: '1.5rem' }} className="col-md-3 col-12 text-center">
            <input type="checkbox" id="method1" name="card" onClick={(e) => onChangeMethod(e)} checked={!method} />
            <label className="ms-2" htmlFor="method1">
              Credit card / Debit card
            </label>
          </div>
          {/* //!hide qr code */}
          {/* <div style={{fontSize:"1.5rem"}} className="col-md-3 col-12 text-center">
            <input type="checkbox" id="method2" name="method" onClick={()=>onChangeMethod()} checked={method}/>
            <label className='ms-2' htmlFor="method2">QR CODE</label>
          </div> */}
        </div>
        {method ? <QRcode /> : <Credit />}
      </div>
    </div>
  )
}

export default Index