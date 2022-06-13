/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useRef, useState } from 'react'
import { Accordion, Card, Col, Container, Row, Button } from 'react-bootstrap'
import { useRouter } from 'next/router'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import axios from './api/axios'
import CardPrice from '../components/CardPrice'
import Player from 'react-player'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
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

const star = [{}, {}, {}, {}, {}]

const clientFeedbackData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

const accordionData = [
  {
    id: '1',
    title: 'Q : Chatpang ใช้ทำอะไรได้บ้าง ?',
    des: `Chatpang สามารถช่วยคุณดึงคอมเม้นต์เข้า Inbox และช่วยแชทแทนคุณ ในเวลาที่คุณไม่ว่าง เพื่อให้ลูกค้าตัดสินใจซื้อได้ทันที! และประหยัดเวลาในการตอบแชท`,
  },
  {
    id: '2',
    title: 'Q : Chatpang เหมาะกับใคร ?',
    des: `Chatpang สามารถช่วยคุณดึงคอมเม้นต์เข้า Inbox และช่วยแชทแทนคุณ ในเวลาที่คุณไม่ว่าง เพื่อให้ลูกค้าตัดสินใจซื้อได้ทันที! และประหยัดเวลาในการตอบแชท`,
  },
  {
    id: '3',
    title: 'Q : Chatpang มีค่าบริการเท่าไร ?',
    des: `Chatpang สามารถช่วยคุณดึงคอมเม้นต์เข้า Inbox และช่วยแชทแทนคุณ ในเวลาที่คุณไม่ว่าง เพื่อให้ลูกค้าตัดสินใจซื้อได้ทันที! และประหยัดเวลาในการตอบแชท`,
  },
  {
    id: '4',
    title: 'Q : Chatpang มีค่าบริการเท่าไร ?',
    des: `Chatpang สามารถช่วยคุณดึงคอมเม้นต์เข้า Inbox และช่วยแชทแทนคุณ ในเวลาที่คุณไม่ว่าง เพื่อให้ลูกค้าตัดสินใจซื้อได้ทันที! และประหยัดเวลาในการตอบแชท`,
  },
]

const packageData = [
  {
    plane: 'Basic',
    price: '290',
    features: [
      { feature: 'ตอบคอมเม้นต์อัตโนมัติ' },
      { feature: 'ดึงคอมเม้นต์เข้า Inbox' },
      { feature: 'ใช้งานได้ 1 เพจ' },
    ],
  },
  {
    plane: 'VIP',
    price: '590',
    features: [
      { feature: 'ตอบคอมเม้นต์อัตโนมัติ' },
      { feature: 'ดึงคอมเม้นต์เข้า Inbox' },
      { feature: 'ใช้งานได้ 3 เพจ' },
    ],
  },
  {
    plane: 'Bussiness',
    price: '990',
    features: [
      { feature: 'ตอบคอมเม้นต์อัตโนมัติ' },
      { feature: 'ดึงคอมเม้นต์เข้า Inbox' },
      { feature: 'ใช้งานได้ 1 เพจ' },
      { feature: 'ระบบ Line แจ้งเตือน' },
    ],
  },
]

export default function Home() {
  const router = useRouter()
  const myRef = useRef()
  const [packages, setPackages] = useState([])
  const [selectedPackage, setPackage] = useState(null)

  const [reviews, setReviews] = useState([])

 async function getPackages() {
    try {
      const res = await axios('/packages')
      setPackages(res.data.packages)
    } catch (error) {
      console.log(error);
    }
  }
  function setSelectedPackage(id) {
    if (selected === id) {
      setPackage(null)
    } else {
      setPackage(id)
    }
  }

 async function getReviews() {
  try {
    const res = await axios('/reviews')
    setReviews(res.data.reviews)
  } catch (error) {
    console.log(error);
  }
  }

  function renderRating(num) {
    let star = []
    for (let i = 1; i <= num; i++) {
      star.push(i)
    }
    return (
        <div>
          {star.map((obj)=>{
            return(
              <FontAwesomeIcon key={obj} icon={faStar} />
            )
          })}
        </div>
      )
  }
  function renderReviewDetail(text) {
      if (text.length > 30) {
        return text.substring(0,31)+"..."
      }else{
        return text
      }
  }
  useEffect(()=>{
    getPackages()
    getReviews()
  },[])
  return (
    <>
      <div className="container-md">
        {/* Section 1 */}
        <div
          className="d-flex flex-column-reverse flex-md-row row-cols-2 p-2 p-md-0 h-100"
          style={{ minHeight: 'calc(100vh - 104px)' }}
          id="home"
        >
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <iframe
              src="https://www.youtube.com/embed/QIjZn_fiS3M"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              style={{ height: '100%', width: '100%', maxHeight: '518px' }}
            />
          </div>
          <div className="col-12 col-md-6 py-5 py-md-0 flex-column align-items-center justify-content-center d-flex">
            <img src="/images/landing-page/home-section-logo.svg" style={{ width: '100%', maxWidth: '376px' }}/>
            <div className="display-4 display-sm-2">ผู้ช่วยตอบแชทเก่ง!</div>
            <h2 className="fst-italic fw-normal">ของแม่ค้าออนไลน์</h2>
            <Button onClick={()=> router.push('/user')} variant="dark" className="rounded-pill">
              สนใจเริ่มใช้งาน
            </Button>
          </div>
        </div>

        {/* Section 2 */}
        <div
          className="d-flex flex-column flex-md-row h-auto align-items-center h-100 py-5 py-md-0 min-vh-100"
          id="about"
        >
          <div className="col-12 col-md-8 d-flex py-5 py-md-0 flex-column align-items-center justify-content-center ">
            <div className="d-flex">
              <img src="/images/landing-page/main-logo.svg" style={{ width: '100%', maxWidth: '131px' }} />
              <div className="display-4 display-md-4">
                ไม่พลาดทุกแชทของลูกค้า
                <br />
                ด้วยข้อความอัตโนมัติ
              </div>
            </div>
            <div className="f-flex flex-column mt-5">
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
        </div>

        {/* Section 3 */}
        <div className="d-flex flex-column align-items-center justify-content-center h-100 py-5 py-md-0">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            <img src="/images/landing-page/main-logo.svg" style={{ width: '100%', maxWidth: '72px' }} />
            <div className=" display-6 fw-bolder" id="benefit">Chatpang ทำอะไรได้บ้าง ?</div>
          </div>
          <div className="text-center">
            รวม 5 ฟังก์ชั่นของ <span className="text-secondary">Chatpang</span> ที่จะช่วยให้คุณตอบแชทกับลูกค้าได้ในทันที
          </div>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center"
            style={{ marginTop: '56px', gridAutoRows: '1fr' }}
          >
            {featureData.map((val, index) => (
              <div className="px-3 mt-5 h-100" key={index}>
                <div
                  className="px-2 pb-3 position-relative border-grey100 border rounded-3 d-flex flex-column align-items-center"
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
                  <div className=" fw-bold">{val.title}</div>
                  <div className="text-center text-break">{val.subTitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4 */}
        <div className="d-flex flex-column align-items-center justify-content-center h-100 py-5 py-md-0 my-5" id="review">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            <img src="/images/landing-page/main-logo.svg" style={{ width: '100%', maxWidth: '72px' }} />
            <div className=" display-6 fw-bolder">รีวิวจากลูกค้า</div>
          </div>

          <div className="h-100 w-100 px-0 px-md-5">
            <Carousel responsive={responsive}>
              {reviews.map((val, index) => (
                <div key={index} className="flex flex-column p-3">
                  {/* <img src="/images/landing-page/placeholder-video.svg" className="w-100" /> */}
                  <Player
                  url={val.item.linkUrl} 
                  controls={true}
                  muted={true}
                  width="280px"
                  height="280px"
                   />
                  <div
                    className="bg-grey50 shadow px-5 pt-4 pb-3 border rounded-3 position-relative"
                    style={{ marginTop: '4em' }}
                  >
                    <img
                      src={val.item.imgURL}
                      className="position-absolute m-auto"
                      style={{
                        maxWidth: '60px',
                        maxHeight:"60px",
                        left: 0,
                        right: 0,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        top: '-40px',
                        borderRadius:"50px"
                      }}
                    />
                    <div className=" d-flex flex-column align-items-center">
                      <div>{val.item.name}</div>
                      {/* <div> */}
                        {/* {star.map((val, index) => (
                          <img src="/images/landing-page/star-icon.svg" key={index} />
                        ))} */}
                        {renderRating(val.item.rating)}
                      {/* </div> */}
                      <div style={{minHeight:"50px"}} className="text-center">{renderReviewDetail(val.item.detail)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Section 5 */}
        <div className="d-flex flex-column align-items-center justify-content-center h-100 py-5 py-md-0 my-5" id="questions">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            <img src="/images/landing-page/main-logo.svg" style={{ width: '100%', maxWidth: '72px' }} />
            <div className=" display-6 fw-bolder">คำถามที่พบบ่อย</div>
          </div>
          <div className="text-center">
            รวมคำถามที่เราได้รับมาบ่อยๆ หากมีปัญหาอะไรเพิ่มเติมสามารถติดต่อได้ที่{' '}
            <span className="text-secondary">LINE : @chatpang</span>
          </div>

          <div className="mt-3 w-100">
            <Accordion defaultActiveKey="0">
              {accordionData.map((val, index) => (
                <Accordion.Item key={index} eventKey={val.id}>
                  <Accordion.Header>
                    <div
                      className="bg-primary position-absolute"
                      style={{ height: '100%', width: '40px', left: '0' }}
                    ></div>
                    <div className=" ms-4">{val.title}</div>
                  </Accordion.Header>
                  <Accordion.Body>{val.des}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Section 6 */}
        <div className="d-flex flex-column align-items-center justify-content-center h-100 py-5 py-md-0 py-5 my-5" id="packages">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            <img src="/images/landing-page/main-logo.svg" style={{ width: '100%', maxWidth: '72px' }} />
            <div className=" display-6 fw-bolder">แพ็คเกจสุดคุ้ม!</div>
          </div>

          <div className="row w-100 overflow-hidden" style={{ marginTop: '2em' }}>
          {/* <CardPrice data={packages} selected={selectedPackage} setSelectedPackage={setSelectedPackage}/> */}
            {packages.map((val, index) => (
              <div key={index} className="col-12 col-md-4 p-3">
                <div className="position-relative shadow rounded-2 d-flex flex-column justify-content-between align-items-center p-4 h-100">
                  <div className="d-flex flex-column align-items-center mb-5">
                    <div className="bg-primary rounded px-5 py-1">{val.item.name}</div>
                    <div className=" display-3 text-bold">{val.item.price}</div>
                    <div className="text-grey200">บาท/เดือน</div>
                    <div className="flex-column" style={{ marginTop: '24px' }}>
                      {val.item.detail.map((data, index) => (
                        <div key={index} className="d-flex align-items-center">
                          <img src="/images/landing-page/bullet-check.svg" style={{ height: '18px' }} />
                          <div className="ms-1 text-grey200">{data}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <button className="px-3 py-1 rounded border-0 bg-primary">สนใจสั่งซื้อ</button>
                  </div>
                  {val.item.name === 'Bussiness' ? (
                    <img
                      src="/images/landing-page/baged-best-seller.svg"
                      className=" position-absolute"
                      style={{ right: '0', top: '0', width: '70px' }}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 text-danger">
            ***สำหรับแพ็คเกจ Basic / VIP ถ้าต้องการใช้ระบบ Line แจ้งเตือน มีค่าบริการเพิ่มเติมเดือนละ 200 บาท***
          </div>
        </div>

        {/* Section 7 */}
        <div
          className="d-flex flex-column flex-md-row row-cols-2 p-2 p-md-0 h-100 align-items-center"
          style={{ minHeight: 'calc(80vh)' }}
          id="contract"
        >
          <div className="col-12 col-md-6 d-flex flex-column ms-md-5">
            <u className="display-5">ติดต่อสอบถามเพิ่มเติม</u>
            <div className="d-flex" style={{ marginTop: '24px' }}>
              <img src="/images/landing-page/location.png" style={{ width: '24px', height: '24px' }} />
              <div className="ms-4">
                บริษัท บีทีวาย มาเก็ตติ้ง จำกัด
                <br />
                169/93 หมู่บ้านอรินสิริ@ข้าวหลาม
                <br />
                ต.ห้วยกะปิ อ.เมือง จ.ชลบุรี 20000
              </div>
            </div>
            <div className="d-flex" style={{ marginTop: '16px' }}>
              <img src="/images/landing-page/call.png" style={{ width: '24px', height: '24px' }} />
              <div className="ms-4">087 135 2410 (คุณต๊อป)</div>
            </div>
            <div className="d-flex" style={{ marginTop: '16px' }}>
              <img src="/images/landing-page/line .png" style={{ width: '24px', height: '24px' }} />
              <div className="ms-4">@chatpang</div>
            </div>
            <div className="d-flex" style={{ marginTop: '16px' }}>
              <img src="/images/landing-page/email.svg" style={{ width: '24px', height: '24px' }} />
              <div className="ms-4">chatpang@gmail.com</div>
            </div>
            <div className="d-flex" style={{ marginTop: '16px' }}>
              <img src="/images/landing-page/timer.png" style={{ width: '24px', height: '24px' }} />
              <div className="ms-4">ทุกวัน 9.00 - 23.00</div>
            </div>
          </div>
          <div className="col-12 col-md-6 py-5 py-md-0 d-flex flex-column align-items-center justify-content-center">
            <img src="/images/landing-page/qr-code.svg" style={{ width: '200px' }} />
            <div className="d-flex mt-4 gap-3">
              <img src="/images/landing-page/facebook-round.svg" style={{ width: '42px' }} />
              <img src="/images/landing-page/line-round.svg" style={{ width: '42px' }} />
              <img src="/images/landing-page/ig-round.svg" style={{ width: '42px' }} />
              <img src="/images/landing-page/youtube-round.svg" style={{ width: '42px' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
