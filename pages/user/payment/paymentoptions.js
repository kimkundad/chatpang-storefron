import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Stepper from '../../../components/Stepper'
import Credit from './credit'
import QRcode from './QRcode'
import useUser from '../../../Hooks/useUser'
import axios from '../../api/axios'

const Paymentoptions = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  const [method, setMethod] = useState(true) //false = credit, true= qrcode
  const onChangeMethod = (e) => {
    setMethod(!method)
    // console.log(e.target.name)
  }

  const getOrderData = async () => {
    try {
      const res = await axios.get(`/public/orders/${user.order.id}`, { headers: { Authorization: `Bearer ${user.accessToken}` } })
      setUserData({...user,order:res.data.data})
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getOrderData()
  },[])
  return (
    <div className="nosidebar-wrapper">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <Stepper step="1" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div style={{ fontSize: '1.5rem' }} className="col-md-3 col-12 text-center">
            <input type="checkbox" id="method1" name="card" onClick={(e) => onChangeMethod(e)} checked={!method} />
            <label className="ms-2" htmlFor="method1">
              Credit card / Debit card
            </label>
          </div>
          <div style={{ fontSize: '1.5rem' }} className="col-md-3 col-12 text-center">
            <input type="checkbox" id="method2" name="method" onClick={() => onChangeMethod()} checked={method} />
            <label className="ms-2" htmlFor="method2">
              QR CODE
            </label>
          </div>
        </div>
        {method ? <QRcode /> : <Credit />}
      </div>
    </div>
  )
}

export default Paymentoptions
