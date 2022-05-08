import React from 'react'
import Image from 'next/image'

import Icon from '../../resources/imgs/chat_pang_icon.png'

const Review = () => {
  return (
    <>
    <div className='col-lg-12 mainLanding mt-3 text-center'>
        <div className='d-flex justify-content-center align-items-center'>
        <Image width={110} height={110} src={Icon} alt='icon'/>
        <strong style={{fontSize:"3rem"}}>รีวิวจากลูกค้า</strong>
        </div>
    </div>
    <div className='col-lg-12' ></div>
    </>
  )
}

export default Review