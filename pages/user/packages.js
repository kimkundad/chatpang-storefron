import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
//component
import Stepper from '../../components/Stepper'
import CardPrice from '../../components/CardPrice';

const Packages = () => {
  const router = useRouter()
  const [selected, setSelected] = useState(null)

  function setSelectedPackage(id) {
      if (selected === id) {
        setSelected(null)
      }else{
        setSelected(id)
      }
  }
  const data = [
      {
          "title":"Basic",
          "price":"290",
          "options":[
              "ตอบคอมเม้นต์อัตโนมัติ",
              "ดึงคอมเม้นต์เข้า Inbox",
              "ใช้งานได้ 1 เพจ"
          ]
      },
      {
          "title":"VIP",
          "price":"590",
          "options":[
              "ตอบคอมเม้นต์อัตโนมัติ",
              "ดึงคอมเม้นต์เข้า Inbox",
              "ใช้งานได้ 3 เพจ"
          ]
      },
      {
          "title":"Business",
          "price":"990",
          "options":[
              "ตอบคอมเม้นต์อัตโนมัติ",
              "ดึงคอมเม้นต์เข้า Inbox",
              "ใช้งานได้ 10 เพจ"
          ]
      },
  ]
  return (
    <div className='page-wrapper' >
        <div className='content'>
            <div className='row' >
                <div className='col-lg-12 d-flex justify-content-center'>
                    <Stepper step="0" />
                </div>
            </div>
            <div className='row justify-content-center mt-5' >
                <div className='col-lg-12 d-flex justify-content-center' >
                <CardPrice data={data} selected={selected} setSelectedPackage={setSelectedPackage}/>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div style={{width:"40%"}} className='col-12 d-flex justify-content-end mt-5'>
                    <button onClick={()=> router.push('/user/payment/bankacc')} className='customBTN'>ต่อไป</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Packages