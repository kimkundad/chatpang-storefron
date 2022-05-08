import React from 'react'
import Image from 'next/image'

import Icon from '../../resources/imgs/chat_pang_icon.png'
import Icon_1 from '../../resources/icons/arrowdown_1.png'
import Wechat from '../../resources/icons/wechat.png'
import KeyBoard from '../../resources/icons/Vector.png'
import Chat from '../../resources/icons/chat.png'
import Bell from '../../resources/icons/bell.png'
const Function = () => {
  return (
    <>
        <div className='col-lg-12 mainLanding text-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <Image width={110} height={110} src={Icon} alt='icon'/>
                <strong style={{fontSize:"3rem"}}>Chatpang ทำอะไรได้บ้าง ?</strong>
              </div>
                <span style={{fontSize:"2rem"}}><i>รวม 5 ฟังก์ชั่นของ <span style={{color:"#F9C200"}} >Chatpang</span> ที่จะช่วยให้คุณตอบแชทกับลูกค้าได้ในทันที</i></span>
            </div>
            <div style={{width:"80%"}} className='col-lg-12 flex-wrap d-flex justify-content-center align-items-center'>
              <div className='fnContainer d-flex flex-column text-center'>
                <div className='fnContainerIcon'>
                <Image src={Icon_1} alt="icon"/>
                </div>
                <strong>ดึงคอมเม้นต์เข้า INBOX</strong>
                <span>ไม่พลาดทุกคอมเม้นต์ ที่ลูกค้าสนใจสินค้าสามารถดึงไปคุยต่อในแชทได้ทันที!</span>
              </div>
              <div className='fnContainer d-flex flex-column text-center'>
                <div className='fnContainerIcon'>
                <Image src={Wechat} alt="icon"/>
                </div>
                <strong>ตอบคอมเม้นต์อัตโนมัติ</strong>
                <span>ตั้งค่าตอบทุกคอมเม้นต์อัตโนมัติตามข้อความที่คุณต้องการ</span>
              </div>
              <div className='fnContainer d-flex flex-column text-center'>
                <div className='fnContainerIcon'>
                <Image src={KeyBoard} alt="icon"/>
                </div>
                <strong>ตอบโพสต์อัตโนมัติ</strong>
                <span>ตอบทุกคอมเม้นต์ใต้โพส ตามข้อความที่คุณตั้งไว้ แม้คุณไม่ว่างตอบ</span>
              </div>
              <div className='fnContainer d-flex flex-column text-center'>
                <div className='fnContainerIcon'>
                <Image src={Chat} alt="icon"/>
                </div>
                <strong>ตอบ INBOX อัตโนมัติ</strong>
                <span>สร้างข้อความ พูดคุยกับลูกค้าแชทปิดการขายได้ทุกเวลา</span>
              </div>
              <div className='fnContainer d-flex flex-column text-center'>
                <div className='fnContainerIcon'>
                <Image src={Bell} alt="icon"/>
                </div>
                <strong>แจ้งเตือนเมื่อไม่มีคนตอบแชท</strong>
                <span>ทุกครั้งที่แชท ไม่มีคนตอบเป็นเวลานานๆจะมีข้อความเเจ้งเตือนไปที่มือถือคุณ</span>
              </div>
        </div>
    </>
  )
}

export default Function