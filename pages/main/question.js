import React from 'react'
import Image from 'next/image'

import Icon from '../../resources/imgs/chat_pang_icon.png'

import QuestionBoxs from '../../components/subUser/QuestionBoxs'
const Question = () => {

  const data = [
    {
    question:'Chatpang ใช้ทำอะไรได้บ้าง',
    answer:'Chatpang สามารถช่วยคุณดึงคอมเม้นต์เข้า Inbox และช่วยแชทแทนคุณ ในเวลาที่คุณไม่ว่างเพื่อให้ลูกค้าตัดสินใจซื้อได้ทันที! และประหยัดเวลาในการตอบแชท'
    },
    {
    question:'Chatpang เหมาะกับใคร',
    answer:'Chatpang สามารถช่วยคุณดึงคอมเม้นต์เข้า Inbox และช่วยแชทแทนคุณ ในเวลาที่คุณไม่ว่าง เพื่อให้ลูกค้าตัดสินใจซื้อได้ทันที! และประหยัดเวลาในการตอบแชท'
    },
    {
    question:'Chatpang มีค่าบริการเท่าไร',
    answer:'Chatpang สามารถช่วยคุณดึงคอมเม้นต์เข้า Inbox และช่วยแชทแทนคุณ ในเวลาที่คุณไม่ว่าง เพื่อให้ลูกค้าตัดสินใจซื้อได้ทันที! และประหยัดเวลาในการตอบแชท'
    },
    {
    question:'ติดต่อ Chatpang ได้ช่องทางใหนบ้าง',
    answer:'Chatpang สามารถช่วยคุณดึงคอมเม้นต์เข้า Inbox และช่วยแชทแทนคุณ ในเวลาที่คุณไม่ว่าง เพื่อให้ลูกค้าตัดสินใจซื้อได้ทันที! และประหยัดเวลาในการตอบแชท'
    },
  ]
  return (
    <>
        <div className='col-lg-12 mt-3 text-center'>
            <div className='d-flex justify-content-center align-items-center'>
            <Image width={110} height={110} src={Icon} alt='icon'/>
            <strong style={{fontSize:"3rem"}}>คำถามที่พบบ่อย</strong>
            </div>
            <span style={{fontSize:"2rem"}}><i>รวมคำถามที่เราได้รับมาบ่อยๆ หากมีปัญหาอะไรเพิ่มเติมสามารถติดต่อได้ที่  <span style={{color:"#F9C200"}} >LINE : @chatpang</span></i></span>
        </div>
        <div className='col-lg-12' >
          <QuestionBoxs data={data} />
        </div>
    </>
  )
}

export default Question