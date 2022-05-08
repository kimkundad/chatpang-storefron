import React from 'react'
import Image from 'next/image'

import Icon from '../../resources/imgs/chat_pang_icon.png'
const Question = () => {
  return (
    <>
        <div className='col-lg-12 mainLanding mt-3 text-center'>
            <div className='d-flex justify-content-center align-items-center'>
            <Image width={110} height={110} src={Icon} alt='icon'/>
            <strong style={{fontSize:"3rem"}}>คำถามที่พบบ่อย</strong>
            </div>
            <span style={{fontSize:"2rem"}}><i>รวมคำถามที่เราได้รับมาบ่อยๆ หากมีปัญหาอะไรเพิ่มเติมสามารถติดต่อได้ที่  <span style={{color:"#F9C200"}} >LINE : @chatpang</span></i></span>
        </div>
        <div className='col-lg-12' ></div>
    </>
  )
}

export default Question