import { Divider } from 'antd'
import React, { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import axios from '../../api/axios'
import useUser from '../../../Hooks/useUser'
const Credit = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  const [cardName, setCardName] = useState('')
  const [cardNO, setCardNO] = useState('4535017710535741')
  const [mm, setMm] = useState('05')
  const [yy, setYy] = useState('28')
  const [cvv, setCvv] = useState('184')

  const onSubmit = async () => {
    const data = {
      number : cardNO,
      month: mm,
      year:yy,
      code: cvv,
      name: cardName,
      email: user?.user?.email,
      //*fixed value 
      // year: '28',
      // month: '05',
      // name: 'Gftherd Therdsak Paradeewirai',
      // number: '4535017710535741',
      // code: '184',
      // email: 'gftherd.p@gmail.com',
      //*fixed value 

      type: 'card',
      referenceNo: '20171128001',
      amount: user?.package?.price,
      phone: user?.user?.phoneNo,
      detail: user?.package?.name,
    }
    // console.log(data)
    try {
      const res = await axios.post('/payments', data, { headers: { 'Content-Type': 'application/json' } })
      const payment = res.data.createdPayment
      await setUserData({ ...user, payment: payment })
      router.push(`/user/payment/confirmorder`)
    } catch (error) {
      console.log(error)
      router.push(`/user`)
    }
  }
  return (
    <>
      <div className="row justify-content-center">
        <div className="creditInput col-md-3 d-flex flex-column">
          <label>Cardholder name</label>
          <input
            className="my-2"
            type="text"
            name="cardHolderName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="creditInput col-md-3 d-flex flex-column">
          <label>Card Number</label>
          <input
            className="my-2"
            type="text"
            name="cardNo"
            value={cardNO}
            onChange={(e) => setCardNO(e.target.value)}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="creditInput col-md-1">
          <label>MM</label>
          <input
            className="my-2"
            type="text"
            maxLength="2"
            name="mm"
            value={mm}
            onChange={(e) => setMm(e.target.value)}
          />
        </div>
        <div className="creditInput col-md-1">
          <label>YY</label>
          <input
            className="my-2"
            type="text"
            maxLength="2"
            name="yy"
            value={yy}
            onChange={(e) => setYy(e.target.value)}
          />
        </div>
        <div className="creditInput col-md-1">
          <label>CVV</label>
          <input
            className="my-2"
            type="tel"
            name="cvv"
            maxLength="3"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="creditInput col-md-3 text-end">
          <button className="btn btn-outline-secondary" onClick={() => router.back()}>
            ย้อนกลับ
          </button>
          <button onClick={() => onSubmit()} className="ms-3">
            ต่อไป
          </button>
        </div>
      </div>
    </>
  )
}

export default Credit
