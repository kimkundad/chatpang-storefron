import React,{ useState } from 'react'
import Image from 'next/image'

import CardPrice from '../../components/CardPrice'

import Icon from '../../resources/imgs/chat_pang_icon.png'
const Package = () => {
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
    <>
        <div className='col-lg-12 mainLanding mt-3 text-center'>
            <div className='d-flex justify-content-center align-items-center'>
                <Image width={110} height={110} src={Icon} alt='icon'/>
                <strong style={{fontSize:"3rem"}}>แพ็คเกจสุดคุ้ม!</strong>
            </div>
        </div>
        <div style={{height:"250px"}} className='col-lg-12 d-flex justify-content-center flex-wrap' >
            <CardPrice data={data} selected={selected} setSelectedPackage={setSelectedPackage}/>
        </div>
        <div className='text-center'>
        <strong className='text-danger'>***สำหรับแพ็คเกจ Basic / VIP ถ้าต้องการใช้ระบบ Line แจ้งเตือน มีค่าบริการเพิ่มเติมเดือนละ 200 บาท***</strong>
        </div>
    </>
  )
}

export default Package