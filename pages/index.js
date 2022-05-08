import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Logo from '../resources/imgs/logo_chatpang_03.png'

import Logo_1 from '../resources/imgs/landing_logo_1.png'
import Icon_list from '../resources/imgs/Icon-10.png'
import Icon from '../resources/imgs/chat_pang_icon.png'

import Player from 'react-player'

import Icon_1 from '../resources/icons/arrowdown_1.png'
import Wechat from '../resources/icons/wechat.png'
import KeyBoard from '../resources/icons/Vector.png'
import Chat from '../resources/icons/chat.png'
import Bell from '../resources/icons/bell.png'

import Contact from './contactus'
import About from './main/about'
import Function from './main/function'
import Review from './main/review'
import Question from './main/question'
import Package from './main/package'
const Landingpage = () => {
  const router = useRouter()
  return (
    <div className='page-wrapper'>
      <div className='content'>
         <div className='row landingSection'>
           <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <Player 
            url='https://www.youtube.com/watch?v=1F9_V0ub2H8' 
            controls={true}
            muted={true}
            />
           </div>
           <div className='col-lg-6 text-center mainLanding'>
             <Image src={Logo} alt='logo' width={360} height={330}/>
             <h2>ผู้ช่วยตอบแชทเก่ง!</h2>
             <h4><i>ของแม่ค้าออนไลน์</i></h4>
             <button onClick={()=> router.push('/user')} className='btn'>สนใจเริ่มใช้งาน</button>
           </div>
         </div>
          <div id='about' className='row landingSection'>
            <About />
          </div>
          <div id='functions' className='row landingSection d-flex justify-content-center'>
            <Function />
          </div>
          <div id='review' className='row landingSection'>
            <Review />
          </div>
          <div id='question' className='row landingSection'>
            <Question />
          </div>
          <div id='package' className='row landingSection'>
            <Package />
          </div>
          <div id='contact' className='row landingSection my-5'>
            <Contact />
          </div>
      </div>
    </div>
  )
}

export default Landingpage