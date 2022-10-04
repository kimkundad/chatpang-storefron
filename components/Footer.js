import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLine, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faPhone, faEnvelope, faStopwatch } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import BG from '../public/images/bg/footer_bg.png'
import LOGO from '../public/imgs/newLogo.png'
// import Link from 'next/link'
// import { Link } from 'react-scroll'
import Link from 'next/link'

const Footer = () => {
  return (
    <div id='footer' className="footer">
      <Image className="footer-bg" src={BG} alt="bg" layout='fill' />
      <div className="row footer-container">
        <div className="col-md-4 col-12 d-flex flex-column align-items-center justify-content-end mb-3">
          <Image src={LOGO} width="240" height="80" alt="logo" />
          <div className="footer-title">ผู้ช่วยตอบแชทเก่ง</div>
          <div className="footer-sub-title">สำหรับแม่ค้าออนไลน์</div>
          <div className="address">
            <div className="company-name">บริษัท บีทีวาย มาเก็ตติ้ง จำกัด</div>
            <div>169/93 หมู่บ้านอรินสิริ@ข้าวหลาม</div>
            <div>ต.ห้วยกะปิ อ.เมือง จ.ชลบุรี 20000</div>
          </div>
        </div>
        <div className="col-md-2 footer-padding col-6 d-flex flex-column">
          <strong>บริการ</strong>
          <Link href="about">
            <div className="link">
            เกี่ยวกับเรา
            </div>
          </Link>

          <Link href="function">
            <div className="link">ฟังก์ชั่น</div>
          </Link>

          <Link href="review">
            <div className="link">รีวิวจากลูกค้า</div>
          </Link>
        </div>
        <div className="col-md-2 footer-padding col-6 d-flex flex-column">
          <strong>ซัพพอร์ต</strong>
          <Link href="#">
            <div className="link">คู่มือการใช้งาน</div>
          </Link>

          <Link href="/">
            <div className="link">ฟังก์ชั่น</div>
          </Link>

          <Link href="/">
            <div className="link">รีวิวจากลูกค้า</div>
          </Link>
        </div>
        <div className="col-md-2 footer-padding col-6 d-flex flex-column">
          <strong>บริษัท</strong>
          <Link href="/tos">
            <div className="link">เงื่อนไขการใช้งาน</div>
          </Link>

          <Link href="/privacy">
            <div className="link">
            นโยบายความเป็นส่วนตัว
            </div>
          </Link>

          <Link href="/">
            <div className="link">บทความ</div>
          </Link>
        </div>
        <div className="col-md-2 footer-padding col-6 d-flex flex-column align-items-center">
          <strong>ติดต่อเรา</strong>
          <div className="contact-container">
            <Image className="bg" width={200} height={40} src="/images/bg/Asset_11.png" alt="asset" />
            <div className="text-in-img">Chatpang</div>
          </div>
          <div className="contact-container">
            <Image className="bg" width={200} height={40} src="/images/bg/Asset_9.png" alt="asset" />
            <div className="text-in-img">@Chatpang</div>
          </div>
          <div className="contact-container">
            <Image className="bg" width={200} height={40} src="/images/bg/Asset_10.png" alt="asset" />
            <div className="text-in-img">Chatpang</div>
          </div>
          <div className="contact-container">
            <Image className="bg" width={200} height={40} src="/images/bg/Asset_8.png" alt="asset" />
            <div className="text-in-img">087-1352410</div>
          </div>
        </div>
      </div>
      <div className="copy-right">Copyright 2022 © Chatpang</div>
    </div>
  )
}

export default Footer
