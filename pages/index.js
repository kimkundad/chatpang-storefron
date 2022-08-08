/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import axios from './api/axios'
import CardPrice from '../components/CardPrice'
import Player from 'react-player'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import QAContainer from '../components/QAContainer'
const featureData = [
  {
    img: '/images/landing-page/feature-1.svg',
    title: 'ดึงคอมเม้นต์เข้า INBOX',
    subTitle: `ไม่พลาดทุกคอมเม้นต์ ที่ลูกค้าสนใจสินค้า สามารถดึงไปคุยต่อในแชทได้ทันที!`,
  },
  {
    img: '/images/landing-page/feature-2.svg',
    title: 'ตอบคอมเม้นต์อัตโนมัติ',
    subTitle: `ตั้งค่าตอบทุกคอมเม้นต์อัตโนมัติ ตามข้อความที่คุณต้องการ`,
  },
  {
    img: '/images/landing-page/feature-3.svg',
    title: 'ตอบโพสต์อัตโนมัติ',
    subTitle: `ตอบทุกคอมเม้นต์ใต้โพส ตามข้อความ ที่คุณตั้งไว้ แม้คุณไม่ว่างตอบ`,
  },
  {
    img: '/images/landing-page/feature-4.svg',
    title: 'ตอบ INBOX อัตโนมัติ',
    subTitle: `สร้างข้อความ พูดคุยกับลูกค้า แชทปิดการขายได้ทุกเวลา`,
  },
  {
    img: '/images/landing-page/feature-5.svg',
    title: 'แจ้งเตือนเมื่อไม่มีคนตอบแชท',
    subTitle: `ทุกครั้งที่แชท ไม่มีคนตอบเป็นเวลานานๆ จะมีข้อความเเจ้งเตือนไปที่มือถือคุณ`,
  },
]

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

// const accordionData = [
//   {
//     id: '1',
//     title: 'Q : Chatpang ใช้ทำอะไรได้บ้าง ?',
//     des: `Chatpang สามารถช่วยคุณดึงคอมเม้นต์เข้า Inbox และช่วยแชทแทนคุณ ในเวลาที่คุณไม่ว่าง เพื่อให้ลูกค้าตัดสินใจซื้อได้ทันที! และประหยัดเวลาในการตอบแชท`,
//   },
//   {
//     id: '2',
//     title: 'Q : Chatpang เหมาะกับใคร ?',
//     des: `Chatpang สามารถช่วยคุณดึงคอมเม้นต์เข้า Inbox และช่วยแชทแทนคุณ ในเวลาที่คุณไม่ว่าง เพื่อให้ลูกค้าตัดสินใจซื้อได้ทันที! และประหยัดเวลาในการตอบแชท`,
//   },
//   {
//     id: '3',
//     title: 'Q : Chatpang มีค่าบริการเท่าไร ?',
//     des: `Chatpang สามารถช่วยคุณดึงคอมเม้นต์เข้า Inbox และช่วยแชทแทนคุณ ในเวลาที่คุณไม่ว่าง เพื่อให้ลูกค้าตัดสินใจซื้อได้ทันที! และประหยัดเวลาในการตอบแชท`,
//   },
//   {
//     id: '4',
//     title: 'Q : Chatpang มีค่าบริการเท่าไร ?',
//     des: `Chatpang สามารถช่วยคุณดึงคอมเม้นต์เข้า Inbox และช่วยแชทแทนคุณ ในเวลาที่คุณไม่ว่าง เพื่อให้ลูกค้าตัดสินใจซื้อได้ทันที! และประหยัดเวลาในการตอบแชท`,
//   },
// ]

export default function Home() {
  const router = useRouter()
  const [packages, setPackages] = useState([])
  const [selectedPackage, setPackage] = useState(null)

  const [reviews, setReviews] = useState([])
  const [questions, setQuestions] = useState([])

  async function getPackages() {
    try {
      const res = await axios('/public/packages')
      console.log(res.data.data.results);
      setPackages(res.data.data.results)
    } catch (error) {
      console.log(error)
    }
  }
  function setSelectedPackage(id) {
    if (selectedPackage === id) {
      setPackage(null)
    } else {
      setPackage(id)
    }
  }

 async function getQuestions() {
    try {
      const res = await axios('/public/questions')
      setQuestions(res.data.data.results)
    } catch (error) {
      console.log(error);
    }
  }

  async function getReviews() {
    try {
      const res = await axios('/public/reviews')
      setReviews(res.data.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  function renderRating(num) {
    let star = []
    for (let i = 1; i <= num; i++) {
      star.push(i)
    }
    return (
      <div>
        {star.map((obj) => {
          return <FontAwesomeIcon style={{ color: 'yellow', margin: '0 2px' }} key={obj} icon={faStar} />
        })}
      </div>
    )
  }
  function renderReviewDetail(text) {
    if (text?.length > 30) {
      return text?.substring(0, 31) + '...'
    } else {
      return text
    }
  }
  useEffect(() => {
    getPackages()
    getReviews()
    getQuestions()
  }, [])
  return (
    <>
      <div className="container container-fluid m-0 p-0 mx-auto">
        {/* Section 1 */}
        <section
          className="d-flex flex-column-reverse flex-md-row row-cols-2"
          // style={{ minHeight: 'calc(100vh - 104px)' }}
          id="home"
        >
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <iframe
              src="https://www.youtube.com/embed/QIjZn_fiS3M"
              width="100%"
              height="100%"
              className="video-yt"
              allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
              allowFullScreen
              // style={{ height: '100%', width: '100%', maxHeight: '518px' }}
            />
          </div>
          <div className="col-12 col-md-6 py-5 py-md-0 flex-column align-items-center justify-content-center d-flex">
            <img src="/images/logo/newLogo.png" style={{ width: '100%', maxWidth: '980px' }} />
            <div className="index-text">
              ผู้ช่วยตอบแชทเก่ง! <br />
              ของแม่ค้าออนไลน์
            </div>
            {/* <div className="display-4 display-sm-2">ผู้ช่วยตอบแชทเก่ง!</div> */}
            {/* <h2 className="fst-italic fw-normal">ของแม่ค้าออนไลน์</h2> */}
            <Button onClick={() => router.push('/user')} className="btn custom-index-btn rounded-pill">
              สนใจเริ่มใช้งาน
            </Button>
          </div>
        </section>

        {/* Section 2 */}
        {/* <sections id="about" className="d-flex">
        ABOUT
        </sections> */}
        <section className="d-flex flex-column flex-md-row py-5 py-md-0" id="about">
          <div className="col-6 col-md-8 d-flex flex-column align-items-center justify-content-center ">
            <div className="d-flex">
              <img src="/images/logo/miniLogo.png" style={{ width: '100%', maxWidth: '160px' }} />
              <div className="display-4 display-md-4">
                ไม่พลาดทุกแชทของลูกค้า
                <br />
                ด้วยข้อความอัตโนมัติ
              </div>
            </div>
            <div className="d-flex flex-column mt-5">
              <div className="d-flex align-items-center gap-1">
                <img src="/images/landing-page/bullet-point.svg" style={{ width: '80px' }} />
                <div className="ms-2 display-6 display-md-4">ตอบคอมเม้นต์อัตโนมัติ</div>
              </div>
              <div className="d-flex align-items-center gap-1 mt-3">
                <img src="/images/landing-page/bullet-point.svg" style={{ width: '80px' }} />
                <div className="ms-2  display-6 display-md-4">ดึงคอมเม้นต์เข้า Inbox</div>
              </div>
              <div className="d-flex align-items-center gap-1 mt-3">
                <img src="/images/landing-page/bullet-point.svg" style={{ width: '80px' }} />
                <div className="ms-2  display-6 display-md-4">แจ้งเตือนแชทจาก LINE</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 d-flex align-items-center justify-content-center">
            <img src="/images/landing-page/about-image.svg" style={{ width: '100%', maxWidth: '780px' }} />
          </div>
        </section>

        {/* Section 3 */}
        <section className="d-flex flex-column align-items-center py-5 py-md-0 my-5"
        id="function"
        >
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            <img src="/images/logo/miniLogo.png" style={{ width: '100%', maxWidth: '130px' }} />
            <div className="text-section-header">Chatpang ทำอะไรได้บ้าง ?</div>
          </div>
          <div className="text-center fs-2">
            รวม 5 ฟังก์ชั่นของ <span className="text-secondary">Chatpang</span> ที่จะช่วยให้คุณตอบแชทกับลูกค้าได้ในทันที
          </div>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center"
            style={{ marginTop: '56px', gridAutoRows: '1fr' }}
          >
            {featureData.map((val, index) => (
              <div className="px-3 mt-5 h-100" key={index}>
                <div
                  className="px-2 pb-3 position-relative border-grey100 border rounded-3 d-flex flex-column align-items-center shadow-sm"
                  style={{ paddingTop: '56px', height: '180px' }}
                >
                  <img
                    src={val.img}
                    className="position-absolute m-auto"
                    style={{
                      maxWidth: '80px',
                      left: 0,
                      right: 0,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      top: '-40px',
                    }}
                  />
                  <div className=" fw-bold fs-2">{val.title}</div>
                  <div className="text-center text-break fs-4">{val.subTitle}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section
          className="d-flex flex-column align-items-center py-5 py-md-0 my-5"
          id="review"
          // id='benefit'
        >
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            <img src="/images/logo/miniLogo.png" style={{ width: '100%', maxWidth: '130px' }} />
            <div className="text-section-header">รีวิวจากลูกค้า</div>
          </div>

          <div className="h-100 w-100 px-0 px-md-5 my-auto">
            <Carousel responsive={responsive}>
              {reviews.map((val, index) => (
                <div key={index} className="flex flex-column p-3">
                  {/* <img src="/images/landing-page/placeholder-video.svg" className="w-100" /> */}
                  <div className='ratio ratio-4x3'>
                    {val.video_url !==  null ? <Player
                      width="100%"
                      height="100%"
                      url={val.video_url}
                      className="video-yt"
                      style={{ borderRadius: '20px !important' }}
                    />: <div className='mx-auto text-center' style={{ borderRadius: '20px !important', fontSize:'clamp(1rem, 1rem + 1.5vw, 2.5rem)' }}>NO VDO</div>}
                  </div>
                  {/* <iframe
                    src="https://www.youtube.com/embed/QIjZn_fiS3M"
                    // src={val.item.linkUrl}
                    width="100%"
                    height="100%"
                    className="video-yt"
                    allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ height: '100%', width: '100%', maxHeight: '518px' }}
                  /> */}
                  <div
                    className="bg-grey50 shadow px-3 pt-4 pb-3 border rounded-3 position-relative"
                    style={{ marginTop: '4em' }}
                  >
                    <img
                      src={val.picture}
                      className="position-absolute m-auto"
                      style={{
                        width: '60px',
                        height: '60px',
                        objectFit:'fill',
                        left: 0,
                        right: 0,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        top: '-40px',
                        borderRadius: '50px',
                      }}
                    />
                    <div className=" d-flex flex-column align-items-center">
                      <div>{val.name}</div>
                      {renderRating(val.rate)}
                      <div style={{ minHeight: '50px', fontSize: '1.2rem' }} className="text-center">
                        {renderReviewDetail(val.description)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Section 5 */}
        <section
          className="d-flex flex-column align-items-center py-5 py-md-0 my-5"
          id="questions"
        >
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            <img src="/images/logo/miniLogo.png" style={{ width: '100%', maxWidth: '130px' }} />
            <div className="text-section-header">คำถามที่พบบ่อย</div>
          </div>
          <div className="text-center fs-2">
            รวมคำถามที่เราได้รับมาบ่อยๆ หากมีปัญหาอะไรเพิ่มเติมสามารถติดต่อได้ที่{' '}
            <span className="text-secondary">LINE : @chatpang</span>
          </div>

          <div className="mt-3 w-100 my-auto">
            {questions?.length === 0 ? <div className='text-center'>ไม่มีข้อมูล</div> : <QAContainer data={questions} />}
          </div>
        </section>

        {/* Section 6 */}
        <section
          className="d-flex flex-column align-items-center justify-content-center h-100 py-5 py-md-0 py-5 my-5"
          id="packages"
        >
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            <img src="/images/logo/miniLogo.png" style={{ width: '100%', maxWidth: '72px' }} />
            <div className="text-section-header">แพ็คเกจสุดคุ้ม!</div>
          </div>

          <div className="row w-100 overflow-hidden" style={{ marginTop: '2em' }}>
            <div className="col-md-12 cardPriceContainer">
              <CardPrice data={packages} selected={selectedPackage} setSelectedPackage={setSelectedPackage} />
            </div>
          </div>

          <div className="mt-3 text-danger fs-2">
            ***สำหรับแพ็คเกจ Basic / VIP ถ้าต้องการใช้ระบบ Line แจ้งเตือน มีค่าบริการเพิ่มเติมเดือนละ 200 บาท***
          </div>
        </section>

        {/* Section 7 */}
        <section
          className="d-flex flex-column flex-md-row row-cols-2 p-2 p-md-0 h-100 align-items-center"
          style={{ minHeight: 'calc(80vh)' }}
          id="contract"
        >
          <div className="col-12 col-md-6 d-flex flex-column ms-md-5">
            <u className="display-5">ติดต่อสอบถามเพิ่มเติม</u>
            <div className="d-flex" style={{ marginTop: '24px' }}>
              <img src="/images/landing-page/location.png" style={{ width: '24px', height: '24px' }} />
              <div className="ms-4 fs-4">
                บริษัท บีทีวาย มาเก็ตติ้ง จำกัด
                <br />
                169/93 หมู่บ้านอรินสิริ@ข้าวหลาม
                <br />
                ต.ห้วยกะปิ อ.เมือง จ.ชลบุรี 20000
              </div>
            </div>
            <div className="d-flex" style={{ marginTop: '16px' }}>
              <img src="/images/landing-page/call.png" style={{ width: '24px', height: '24px' }} />
              <div className="ms-4 fs-4">087 135 2410 (คุณต๊อป)</div>
            </div>
            <div className="d-flex" style={{ marginTop: '16px' }}>
              <img src="/images/landing-page/line .png" style={{ width: '24px', height: '24px' }} />
              <div className="ms-4 fs-4">@chatpang</div>
            </div>
            <div className="d-flex" style={{ marginTop: '16px' }}>
              <img src="/images/landing-page/email.svg" style={{ width: '24px', height: '24px' }} />
              <div className="ms-4 fs-4">chatpang@gmail.com</div>
            </div>
            <div className="d-flex" style={{ marginTop: '16px' }}>
              <img src="/images/landing-page/timer.png" style={{ width: '24px', height: '24px' }} />
              <div className="ms-4 fs-4">ทุกวัน 9.00 - 23.00</div>
            </div>
          </div>
          <div className="col-12 col-md-6 py-5 py-md-0 d-flex flex-column align-items-center justify-content-center">
            <img src="/images/landing-page/qr-code.svg" style={{ width: '250px' }} />
            <div className="d-flex mt-4 gap-3">
              <img src="/images/landing-page/facebook-round.svg" style={{ width: '42px' }} />
              <img src="/images/landing-page/line-round.svg" style={{ width: '42px' }} />
              <img src="/images/landing-page/ig-round.svg" style={{ width: '42px' }} />
              <img src="/images/landing-page/youtube-round.svg" style={{ width: '42px' }} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
