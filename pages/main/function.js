import React from 'react'
import Image from 'next/image'

import Icon from '../../resources/imgs/chat_pang_icon.png'
import Icon_1 from '../../resources/icons/arrowdown_1.png'
import Wechat from '../../resources/icons/wechat.png'
import KeyBoard from '../../resources/icons/Vector.png'
import Chat from '../../resources/icons/chat.png'
import Bell from '../../resources/icons/bell.png'
const Function = () => {

  const data = [
    {
      title:'ดึงคอมเม้นต์เข้า INBOX',
      icon:<Image className='imgIcon' src={Icon_1} alt="icon"/>,
      detail:'ไม่พลาดทุกคอมเม้นต์ ที่ลูกค้าสนใจสินค้าสามารถดึงไปคุยต่อในแชทได้ทันที!'
    },
    {
      title:'ตอบคอมเม้นต์อัตโนมัติ',
      icon:<Image src={Wechat} alt="icon"/>,
      detail:'ตั้งค่าตอบทุกคอมเม้นต์อัตโนมัติตามข้อความที่คุณต้องการ'
    },
    {
      title:'ตอบโพสต์อัตโนมัติ',
      icon:<Image className='imgIcon' src={KeyBoard} alt="icon"/>,
      detail:'ตอบทุกคอมเม้นต์ใต้โพส ตามข้อความที่คุณตั้งไว้ แม้คุณไม่ว่างตอบ'
    },
    {
      title:'ตอบ INBOX อัตโนมัติ',
      icon:<Image src={Chat} alt="icon"/>,
      detail:'สร้างข้อความ พูดคุยกับลูกค้าแชทปิดการขายได้ทุกเวลา'
    },
    {
      title:'แจ้งเตือนเมื่อไม่มีคนตอบแชท',
      icon:<Image src={Bell} alt="icon"/>,
      detail:'ทุกครั้งที่แชท ไม่มีคนตอบเป็นเวลานานๆจะมีข้อความเเจ้งเตือนไปที่มือถือคุณ'
    },
  ]

  const fnBox = (data) => {
    if (data.length === 0) {
      return <></>
    } else {
      return data.map((obj, index)=>{
        return (
          <div key={index} className='fnContainer d-flex flex-column text-center'>
            <div className='Iconcenter'>
              <div className='fnContainerIcon'>
              {obj.icon}
              </div>
            </div>
            <div className='fninfo'>
            <strong>{obj.title}</strong>
            <span>{obj.detail}</span>
            </div>
          </div>
        )
      })
    }
  }
  return (
    <>
        <div className='col-lg-12 fnSection text-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <Image width={110} height={110} src={Icon} alt='icon'/>
                <strong >Chatpang ทำอะไรได้บ้าง ?</strong>
              </div>
                <span><i>รวม 5 ฟังก์ชั่นของ <span style={{color:"#F9C200"}} >Chatpang</span> ที่จะช่วยให้คุณตอบแชทกับลูกค้าได้ในทันที</i></span>
        </div>
        <div className='fnBox col-lg-12 flex-wrap d-flex justify-content-center align-items-center'>
              {fnBox(data)}
              {/* <div className='fnContainer d-flex flex-column text-center'>
                <div className='Iconcenter'>
                  <div className='fnContainerIcon'>
                  <Image className='imgIcon' src={Icon_1} alt="icon"/>
                  </div>
                </div>
                <div className='fninfo'>
                <strong>ดึงคอมเม้นต์เข้า INBOX</strong>
                <span>ไม่พลาดทุกคอมเม้นต์ ที่ลูกค้าสนใจสินค้าสามารถดึงไปคุยต่อในแชทได้ทันที!</span>
                </div>
              </div>
              <div className='fnContainer d-flex flex-column text-center'>
              <div className='Iconcenter'>
                <div className='fnContainerIcon'>
                <Image src={Wechat} alt="icon"/>
                </div>
              </div>
                <strong>ตอบคอมเม้นต์อัตโนมัติ</strong>
                <span>ตั้งค่าตอบทุกคอมเม้นต์อัตโนมัติตามข้อความที่คุณต้องการ</span>
              </div>
              <div className='fnContainer d-flex flex-column text-center'>
              <div className='Iconcenter'>
                <div className='fnContainerIcon'>
                <Image className='imgIcon' src={KeyBoard} alt="icon"/>
                </div>
              </div>
                <strong>ตอบโพสต์อัตโนมัติ</strong>
                <span>ตอบทุกคอมเม้นต์ใต้โพส ตามข้อความที่คุณตั้งไว้ แม้คุณไม่ว่างตอบ</span>
              </div>
              <div className='fnContainer d-flex flex-column text-center'>
              <div className='Iconcenter'>
                <div className='fnContainerIcon'>
                <Image src={Chat} alt="icon"/>
                </div>
              </div>
                <strong>ตอบ INBOX อัตโนมัติ</strong>
                <span>สร้างข้อความ พูดคุยกับลูกค้าแชทปิดการขายได้ทุกเวลา</span>
              </div>
              <div className='fnContainer d-flex flex-column text-center'>
              <div className='Iconcenter'>
                <div className='fnContainerIcon'>
                <Image src={Bell} alt="icon"/>
                </div>
              </div>
              <div>
                <strong>แจ้งเตือนเมื่อไม่มีคนตอบแชท</strong>
                <span>ทุกครั้งที่แชท ไม่มีคนตอบเป็นเวลานานๆจะมีข้อความเเจ้งเตือนไปที่มือถือคุณ</span>
              </div>
              </div> */}
        </div>
    </>
  )
}

export default Function