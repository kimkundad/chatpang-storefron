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
import { faStar, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
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
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest
  return (
    <div className="carousel-button-group">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={currentSlide === 0 ? 'disable' : ''}
        onClick={() => previous()}
      />
      <FontAwesomeIcon icon={faChevronRight} onClick={() => next()} />
    </div>
  )
}
const ButtonGroup2 = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest
  return (
    <div className="carousel-button-group2">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={currentSlide === 0 ? 'disable' : ''}
        onClick={() => previous()}
      />
      <FontAwesomeIcon icon={faChevronRight} onClick={() => next()} />
    </div>
  )
}

export default function Home() {
  const router = useRouter()
  const [packages, setPackages] = useState([])
  const [selectedPackage, setPackage] = useState(null)

  const [reviews, setReviews] = useState([])
  const [questions, setQuestions] = useState([])

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [title, setTitle] = useState('')
  const [messages, setMessages] = useState('')
  const [agree, setAgree] = useState(false)

  async function getPackages() {
    try {
      const res = await axios('/public/packages')
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
      console.log(error)
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
      <div className="review-content-rating">
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
      <div className="w-100 m-0 p-0">
        {/* Section 1 */}
        <section className="d-flex flex-column-reverse flex-md-row row-cols-2" id="home">
          <div className="home-video-container col-12 col-md-6 d-flex align-items-center justify-content-center">
            <iframe
              src="https://www.youtube.com/embed/QIjZn_fiS3M"
              className="responsive-iframe"
              allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="col-12 col-md-6 py-5 py-md-0 flex-column align-items-center justify-content-center d-flex">
            <img className="home-logo" src="/images/logo/newLogo.png" />
            <div className="index-text">
              ผู้ช่วยตอบแชทคนเก่ง! <br />
              ของแม่ค้าออนไลน์
            </div>
            <Button onClick={() => router.push('/user')} className="btn custom-index-btn rounded-pill">
              สนใจเริ่มใช้งาน
            </Button>
          </div>
        </section>

        {/* Section 2 */}
        <section className="d-flex flex-column flex-md-row py-3 py-md-0" id="about">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-md-row align-items-center justify-content-center w-100">
              <img src="/images/logo/miniLogo.png" style={{ width: '25%' }} />
              <div className="text-section-subheader text-center">
                ไม่พลาดทุกแชทของลูกค้า
                <br />
                ด้วยข้อความอัตโนมัติ
              </div>
            </div>
            <div className="d-flex flex-column mt-5 w-100 align-items-center">
              <div className="d-flex align-items-center gap-2">
                <img src="/images/landing-page/bullet-point.svg" style={{ width: '42px' }} />
                <div className="ms-2 about-text">ตอบคอมเม้นต์อัตโนมัติ</div>
              </div>
              <div className="d-flex align-items-center gap-2 mt-5">
                <img src="/images/landing-page/bullet-point.svg" style={{ width: '42px' }} />
                <div className="ms-2 about-text">ดึงคอมเม้นต์เข้า Inbox</div>
              </div>
              <div className="d-flex align-items-center gap-2 mt-5">
                <img src="/images/landing-page/bullet-point.svg" style={{ width: '42px' }} />
                <div className="ms-2 about-text">แจ้งเตือนแชทจาก LINE</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-6 d-none d-md-flex align-items-center justify-content-center">
            <img className="about-img" src="/images/landing-page/about-image.svg" />
          </div>
        </section>

        {/* Section 3 */}
        <section className="d-flex flex-column align-items-center py-5" id="function">
          <div className="d-flex section-padding-top flex-column flex-md-row align-items-center justify-content-center">
            <img src="/images/logo/miniLogo.png" style={{ width: '100%', maxWidth: '110px' }} />
            <div className="text-section-header">Chatpang ทำอะไรได้บ้าง ?</div>
          </div>
          <div className="function-subtitle text-center">
            รวม 5 ฟังก์ชั่นของ <span>Chatpang</span> ที่จะช่วยให้คุณตอบแชทกับลูกค้าได้ในทันที
          </div>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center"
            style={{ gridAutoRows: '1fr' }}
          >
            {featureData.map((val, index) => (
              <div className="mt-5 mt-lg-3" key={index}>
                <div className="function-containers">
                  <div className="icon">
                    <img src={val.img} alt="function-icon" />
                  </div>
                  <div className=" fw-bold function-text-header">{val.title}</div>
                  <div className="text-center text-break function-text-body">{val.subTitle}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section
          className="d-flex flex-column align-items-center py-5"
          id="review"
          // id='benefit'
        >
          <div className="d-flex section-padding-top flex-column flex-md-row align-items-center justify-content-center">
            <img src="/images/logo/miniLogo.png" style={{ width: '100%', maxWidth: '150px' }} />
            <div className="text-section-header">รีวิวจากลูกค้า</div>
          </div>

          <div className="h-100 w-100 px-0 px-md-5 my-auto review-user-container">
            <Carousel
              responsive={responsive}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup />}
              infinite={true}
            >
              {reviews.map((val, index) => (
                <div key={index} className="flex flex-column p-3">
                  <div className="ratio ratio-4x3">
                    {val.video_url ? (
                      <Player
                        width="100%"
                        height="100%"
                        url={val.video_url}
                        className="video-yt"
                        style={{ borderRadius: '20px !important' }}
                      />
                    ) : (
                      <div
                        className="mx-auto text-center"
                        style={{ borderRadius: '20px !important', fontSize: 'clamp(1rem, 1rem + 1.5vw, 2.5rem)' }}
                      >
                        NO VDO
                      </div>
                    )}
                  </div>
                  {/* <div
                    className="bg-grey50 shadow px-3 pt-4 pb-1 border rounded-3 position-relative"
                    style={{ marginTop: '4em' }}
                  >
                    <img src={val.picture} className="review-content-picture" />
                    <div className=" d-flex flex-column align-items-center">
                      <div className="review-content-name">{val.name}</div>
                      {renderRating(val.rate)}
                      <div className="review-content-body text-center">{renderReviewDetail(val.description)}</div>
                    </div>
                  </div> */}
                </div>
              ))}
            </Carousel>
            <Carousel
              responsive={responsive}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup2 />}
              infinite={true}
            >
              {reviews.map((val, index) => (
                <div key={index} className="flex flex-column p-3">
                  <div
                    className="bg-grey50 shadow px-3 pt-4 pb-1 border rounded-3 position-relative"
                    style={{ marginTop: '4em' }}
                  >
                    <img src={val.picture} className="review-content-picture" />
                    <div className=" d-flex flex-column align-items-center">
                      <div className="review-content-name">{val.name}</div>
                      {renderRating(val.rate)}
                      <div className="review-content-body text-center">{renderReviewDetail(val.description)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Section 5 */}
        <section className="d-flex flex-column align-items-center py-5" id="questions">
          <div className="d-flex section-padding-top flex-column flex-md-row align-items-center justify-content-center">
            <img src="/images/logo/miniLogo.png" style={{ width: '100%', maxWidth: '150px' }} />
            <div className="text-section-header">คำถามที่พบบ่อย</div>
          </div>
          <div className="text-center question-subheader">
            รวมคำถามที่เราได้รับมาบ่อยๆ หากมีปัญหาอะไรเพิ่มเติมสามารถติดต่อได้ที่{' '}
            <span className="text-secondary">LINE : @chatpang</span>
          </div>

          <div className="mt-3 w-100 my-auto">
            {questions?.length === 0 ? (
              <div className="text-center">ไม่มีข้อมูล</div>
            ) : (
              <QAContainer data={questions} />
            )}
          </div>
        </section>

        {/* Section 6 */}
        <section className="d-flex flex-column align-items-center justify-content-center py-5" id="packages">
          <div className="d-flex section-padding-top flex-column flex-md-row align-items-center justify-content-center">
            <img src="/images/logo/miniLogo.png" style={{ width: '100%', maxWidth: '150px' }} />
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
          className="d-flex flex-column flex-md-row align-items-center justify-content-center h-100 py-5 py-md-0 py-5"
          id="contract"
        >
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
            <div>
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
                <div className="ms-4 fs-4">development.bty@gmail.com</div>
              </div>
              <div className="d-flex" style={{ marginTop: '16px' }}>
                <img src="/images/landing-page/timer.png" style={{ width: '24px', height: '24px' }} />
                <div className="ms-4 fs-4">ทุกวัน 9.00 - 23.00</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 py-5 py-md-0 d-flex flex-column align-items-center justify-content-center">
            <div>
              <img src="/images/landing-page/qr-code.svg" style={{ width: '100%' }} />
            </div>
            <div className="d-flex mt-4 gap-3">
              <img src="/images/landing-page/facebook-round.svg" style={{ width: '42px' }} />
              <img src="/images/landing-page/line-round.svg" style={{ width: '42px' }} />
              <img src="/images/landing-page/ig-round.svg" style={{ width: '42px' }} />
              <img src="/images/landing-page/youtube-round.svg" style={{ width: '42px' }} />
            </div>
          </div>
          <div className="col-12 col-md-4 msg-container">
            <h4>ส่งข้อความถึงเรา</h4>
            <div className="input-container">
              <label htmlFor="name">
                ชื่อ<span className="text-danger">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="ระบุชื่อ"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="lastname">
                นามสกุล<span className="text-danger">*</span>
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="ระบุนามสกุล"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">
                E-mail<span className="text-danger">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="ระบุ E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="tel">
                เบอร์โทรศัพท์<span className="text-danger">*</span>
              </label>
              <input
                id="tel"
                type="tel"
                placeholder="ระบุเบอร์โทรศัพท์"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="title">
                เรื่องที่ติดต่อ<span className="text-danger">*</span>
              </label>
              <input
                id="title"
                type="text"
                placeholder="ระบุเรื่องที่ติดต่อ"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="messages">
                ข้อความ<span className="text-danger">*</span>
              </label>
              <textarea
                id="messages"
                value={messages}
                onChange={(e) => setMessages(e.target.value)}
                maxLength={600}
                className="messages-input"
                name="messages"
                rows={6}
                placeholder="ระบุข้อความ"
              />
              <span className="ms-auto">{messages.length}/600</span>
            </div>
            <div>
              <input
                className="me-3"
                type="checkbox"
                name="agree"
                value={agree}
                onChange={() => setAgree(!agree)}
                checked={agree}
              />
              <span className='text-decoration-underline'>
                ยินยอมให้ทางบริษัทเก็บข้อมูลตาม<b>นโยบายข้อมูลส่วนบุคคล</b>
              </span>
            </div>
            <button className='submit-msg-btn'>ส่งข้อความ</button>
          </div>
        </section>
      </div>
    </>
  )
}
