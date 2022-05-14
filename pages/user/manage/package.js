import React, {useState} from 'react'

import CardPrice from '../../../components/CardPrice'
import Sidebar from '../../../components/Sidebar'
const Package = () => {
    const [selected, setSelected] = useState(null)

    const data = [
        {
            "title":"Basic",
            "price":"290",
            "isBestSell":false,
            "options":[
                "ตอบคอมเม้นต์อัตโนมัติ",
                "ดึงคอมเม้นต์เข้า Inbox",
                "ใช้งานได้ 1 เพจ"
            ]
        },
        {
            "title":"VIP",
            "price":"590",
            "isBestSell":false,
            "options":[
                "ตอบคอมเม้นต์อัตโนมัติ",
                "ดึงคอมเม้นต์เข้า Inbox",
                "ใช้งานได้ 3 เพจ"
            ]
        },
        {
            "title":"Business",
            "price":"990",
            "isBestSell":true,
            "options":[
                "ตอบคอมเม้นต์อัตโนมัติ",
                "ดึงคอมเม้นต์เข้า Inbox",
                "ใช้งานได้ 10 เพจ"
            ]
        },
    ]


  function setSelectedPackage(id) {
      if (selected === id) {
        setSelected(null)
      }else{
        setSelected(id)
      }
  }

  return (
    <div className='page-wrapper'>
        <div className='content container-fluid'>
            <Sidebar />
            <div className='userpage-wrapper'>
              <div className="page-header">
                <div className="row">
                  <div className="col text-center">
                    <strong className="page-title packageHeader">แพ็คเกจสุดคุ้ม</strong>
                  </div>
                </div>
              </div>
              <div className="row">
                <div style={{minHeight:"300px"}} className='col-lg-12 d-flex justify-content-center' >
                    <CardPrice data={data} selected={selected} setSelectedPackage={setSelectedPackage}/>
                </div>
             </div>
              {/* content */}
            </div>
        </div>
    </div>
  )
}

export default Package