import React,{useState, useEffect} from 'react'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../resources/imgs/chat_pang_icon.png'
import ReviewCard from '../../components/ReviewCard'
const Review = () => {
  const [left, setLeft] = useState(0)

  const data = [
    {
      name:'1_Steve Aioki',
      review:'จากเมื่อก่อนตอบแชทไม่ทัน ทำเงินหายไปเยอะ ตอนนี้จากเมื่อก่อนตอบแชทไม่ทัน ทำเงินหายไปเยอะ ตอนนี้'
    },
    {
      name:'2_Steve Aioki',
      review:'จากเมื่อก่อนตอบแชทไม่ทัน ทำเงินหายไปเยอะ ตอนนี้จากเมื่อก่อนตอบแชทไม่ทัน ทำเงินหายไปเยอะ ตอนนี้'
    },
    {
      name:'3_Steve Aioki',
      review:'จากเมื่อก่อนตอบแชทไม่ทัน ทำเงินหายไปเยอะ ตอนนี้จากเมื่อก่อนตอบแชทไม่ทัน ทำเงินหายไปเยอะ ตอนนี้'
    },
    {
      name:'4_Steve Aioki',
      review:'จากเมื่อก่อนตอบแชทไม่ทัน ทำเงินหายไปเยอะ ตอนนี้จากเมื่อก่อนตอบแชทไม่ทัน ทำเงินหายไปเยอะ ตอนนี้'
    },
    {
      name:'5_Steve Aioki',
      review:'จากเมื่อก่อนตอบแชทไม่ทัน ทำเงินหายไปเยอะ ตอนนี้จากเมื่อก่อนตอบแชทไม่ทัน ทำเงินหายไปเยอะ ตอนนี้'
    },
    {
      name:'6_Steve Aioki',
      review:'จากเมื่อก่อนตอบแชทไม่ทันทำเงินหายไปเยอะ ตอนนี้จากเมื่อก่อนตอบแชทไม่ทัน ทำเงินหายไปเยอะ ตอนนี้'
    },
  ]
  const setNextCard = () => {
    const limit = data.length/2 * 338
    if (left < limit) {
      setLeft(left + 338)
    }
  } 
  const setPrevCard = () => {
    if (left > 0) {
      setLeft(left - 338)
    }
  } 

  const autoSlide = () => {
      setInterval(()=>{
        const limit = (data.length-1) * 338
        if (left < limit) {
          setLeft(left + 338)
        }else{
          setLeft(0)
        }
      },2000)
  }

  // useEffect(()=>{
  //   autoSlide()
  // },[autoSlide])
  return (
    <>
    <div className='row'>
      <div className='col-lg-12 mt-3 text-center'>
          <div className='d-flex justify-content-center align-items-center'>
          <Image width={110} height={110} src={Icon} alt='icon'/>
          <strong style={{fontSize:"3rem"}}>รีวิวจากลูกค้า</strong>
          </div>
      </div>
    </div>
    <div style={{height:'480px'}} className='row text-center'>
      <div className='reviewContainer' >
        <div className='col'>
          <FontAwesomeIcon onClick={setPrevCard} className='iconCard' icon={faChevronLeft} />
        </div>
        <div style={{left:`-${left}px`}} className='col reviewCard'>
          <ReviewCard data={data} />
        </div>
        <div className='col'>
          <FontAwesomeIcon onClick={setNextCard} className='iconCard' icon={faChevronRight} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Review