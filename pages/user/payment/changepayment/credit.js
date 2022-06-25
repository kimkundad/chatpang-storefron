import React, { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import axios from '../../../api/axios'
import useUser from '../../../../Hooks/useUser'
const Credit = ({setIsSuccess}) => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  const [cardName, setCardName] = useState(user?.payment?.customerName)
  const [cardNO, setCardNO] = useState(user?.payment?.customerCardNo)
  const [mm, setMm] = useState(user?.payment?.customerCardexpirationMonth)
  const [yy, setYy] = useState(user?.payment?.customerCardexpirationYear)
  const [cvv, setCvv] = useState(user?.payment?.customerCardsecurityCode)
  
  const onSubmit = async () => {
    const data = {
      cardNo: cardNO,
      cardMonth: mm,
      cardYear: yy,
      cardCode: cvv,
      cardName: cardName,
      // email: user?.user?.email,
      //*fixed value
      // year: '28',
      // month: '05',
      // name: 'Gftherd Therdsak Paradeewirai',
      // number: '4535017710535741',
      // code: '184',
      // email: 'gftherd.p@gmail.com',
      //*fixed value

      // type: 'card',
      // referenceNo: '20171128001',
      // amount: user?.package?.price,
      // phone: user?.user?.phoneNo,
      // detail: user?.package?.name,
    }
    // console.log(data)
    // console.log(user?.user?._id)
    //!move to parent component
    try {
      const res = await axios.patch(`/user/updateUser/${user?.user?._id}`, data, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user?.accessToken}` },
      })
      setIsSuccess({
        show: true,
        isSuccess: true,
        text: 'อัพเดตข้อมูลสำเร็จ',
      })
      handleNotify()
      // console.log(res.data)
    } catch (error) {
      console.log(error)
      // router.push(`/user`)
      console.log(error)
      setIsSuccess({
        show: true,
        isSuccess: false,
        text: 'อัพเดตข้อมูลไม่สำเร็จ',
      })
      handleNotify()
    }
  }
  const handleNotify = () => {
    setTimeout(() => {
      setIsSuccess({
        show: false,
        isSuccess: false,
        text: '',
      })
      router.back()
    }, 2000)
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
            บันทึก
          </button>
        </div>
      </div>
    </>
  )
}

export default Credit
