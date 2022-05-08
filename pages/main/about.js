import React from 'react'
import Image from 'next/image'
import Icon from '../../resources/imgs/chat_pang_icon.png'
import Icon_list from '../../resources/imgs/Icon-10.png'
import Logo_1 from '../../resources/imgs/landing_logo_1.png'

const About = () => {
  return (
      <>
        <div className='col-lg-6 mainLanding'>
            <div style={{marginLeft:"10rem"}} className='d-flex align-items-start'>
            <Image width={150} height={150} src={Icon} alt='icon'/>
            <span style={{fontSize:"5rem"}}>ไม่พลาดทุกแชทของลูกค้าด้วยข้อความอัตโนมัติ!</span>
            </div>
            <div style={{marginLeft:"12rem"}} >
            <p className='text-secondary d-flex align-items-center'><Image width={50} height={50} src={Icon_list} alt="icon"/><span style={{fontSize:"3rem"}} className='mx-3'>ตอบคอมเม้นต์อัตโนมัติ</span></p>
            <p className='text-secondary d-flex align-items-center'><Image width={50} height={50} src={Icon_list} alt="icon"/><span style={{fontSize:"3rem"}} className='mx-3'>ดึงคอมเม้นต์เข้า Inbox</span></p>
            <p className='text-secondary d-flex align-items-center'><Image width={50} height={50} src={Icon_list} alt="icon"/><span style={{fontSize:"3rem"}} className='mx-3'>แจ้งเตือนแชทจาก LINE</span></p>
            </div>
        </div>
        <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <Image src={Logo_1} alt='logo' width={660} height={630}/>
        </div>
    </>
  )
}

export default About