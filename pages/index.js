import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { Col, Container, Row, Button } from "react-bootstrap";

const featureData = [
  {
    img: "/images/landing-page/feature-1.svg",
    title: "ดึงคอมเม้นต์เข้า INBOX",
    subTitle: `ไม่พลาดทุกคอมเม้นต์ ที่ลูกค้าสนใจสินค้า สามารถดึงไปคุยต่อในแชทได้ทันที!`,
  },
  {
    img: "/images/landing-page/feature-2.svg",
    title: "ตอบคอมเม้นต์อัตโนมัติ",
    subTitle: `ตั้งค่าตอบทุกคอมเม้นต์อัตโนมัติ ตามข้อความที่คุณต้องการ`,
  },
  {
    img: "/images/landing-page/feature-3.svg",
    title: "ตอบโพสต์อัตโนมัติ",
    subTitle: `ตอบทุกคอมเม้นต์ใต้โพส ตามข้อความ ที่คุณตั้งไว้ แม้คุณไม่ว่างตอบ`,
  },
  {
    img: "/images/landing-page/feature-4.svg",
    title: "ตอบ INBOX อัตโนมัติ",
    subTitle: `สร้างข้อความ พูดคุยกับลูกค้า แชทปิดการขายได้ทุกเวลา`,
  },
  {
    img: "/images/landing-page/feature-5.svg",
    title: "แจ้งเตือนเมื่อไม่มีคนตอบแชท",
    subTitle: `ทุกครั้งที่แชท ไม่มีคนตอบเป็นเวลานานๆ จะมีข้อความเเจ้งเตือนไปที่มือถือคุณ`,
  },
];


export default function Home() {
  return (
    <>
      <div className="container-md">
        {/* Section 1 */}
        <div
          className="d-flex flex-column-reverse flex-md-row row-cols-2 p-2 p-md-0 h-100"
          style={{ minHeight: "calc(100vh - 104px)" }}
        >
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <iframe
              src="https://www.youtube.com/embed/QIjZn_fiS3M"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              style={{ height: "100%", width: "100%", maxHeight: "518px" }}
            />
          </div>
          <div className="col-12 col-md-6 py-5 py-md-0 flex-column align-items-center justify-content-center d-flex">
            <img
              src="/images/landing-page/home-section-logo.svg"
              style={{ width: "100%", maxWidth: "376px" }}
            />
            <div className="display-5 display-sm-2">ผู้ช่วยตอบแชทเก่ง!</div>
            <h2 className="fst-italic fw-normal">ของแม่ค้าออนไลน์</h2>
            <Button variant="dark" className="rounded-pill">
              สนใจเริ่มใช้งาน
            </Button>
          </div>
        </div>

        {/* Section 2 */}
        <div className="d-flex flex-column flex-md-row h-auto align-items-center h-100 py-5 py-md-0 min-vh-100">
          <div className="col-12 col-md-8 d-flex py-5 py-md-0 flex-column align-items-center justify-content-center ">
            <div className="d-flex">
              <img
                src="/images/landing-page/main-logo.svg"
                style={{ width: "100%", maxWidth: "131px" }}
              />
              <div className="display-5 display-md-4">
                ไม่พลาดทุกแชทของลูกค้า
                <br />
                ด้วยข้อความอัตโนมัติ
              </div>
            </div>
            <div className="f-flex flex-column mt-5">
              <div className="d-flex align-items-center gap-1">
                <img
                  src="/images/landing-page/bullet-point.svg"
                  style={{ width: "80px" }}
                />
                <div className="ms-2 display-6 display-md-4">
                  ตอบคอมเม้นต์อัตโนมัติ
                </div>
              </div>
              <div className="d-flex align-items-center gap-1 mt-3">
                <img
                  src="/images/landing-page/bullet-point.svg"
                  style={{ width: "80px" }}
                />
                <div className="ms-2  display-6 display-md-4">
                  ดึงคอมเม้นต์เข้า Inbox
                </div>
              </div>
              <div className="d-flex align-items-center gap-1 mt-3">
                <img
                  src="/images/landing-page/bullet-point.svg"
                  style={{ width: "80px" }}
                />
                <div className="ms-2  display-6 display-md-4">
                  แจ้งเตือนแชทจาก LINE
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 d-flex align-items-center justify-content-center">
            <img
              src="/images/landing-page/about-image.svg"
              style={{ width: "100%", maxWidth: "780px" }}
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="d-flex flex-column align-items-center justify-content-center h-100 py-5 py-md-0 min-vh-100">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            <img
              src="/images/landing-page/main-logo.svg"
              style={{ width: "100%", maxWidth: "72px" }}
            />
            <div className=" display-6 fw-bolder">Chatpang ทำอะไรได้บ้าง ?</div>
          </div>
          <div className="text-center">
            รวม 5 ฟังก์ชั่นของ <span className="text-secondary">Chatpang</span>{" "}
            ที่จะช่วยให้คุณตอบแชทกับลูกค้าได้ในทันที
          </div>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center"
            style={{ marginTop: "56px" }}
          >
            {featureData.map((val, index) => (
              <div className="px-3 mt-5" key={index}>
                <div
                  className="w-100 px-2 pb-3 position-relative border-grey100 border rounded-3 d-flex flex-column align-items-center"
                  style={{ paddingTop: "56px" }}
                >
                  <img
                    src={val.img}
                    className="position-absolute m-auto"
                    style={{
                      maxWidth: "80px",
                      left: 0,
                      right: 0,
                      marginLeft: "auto",
                      marginRight: "auto",
                      top: "-40px",
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
        <div className="d-flex flex-column align-items-center justify-content-center h-100 py-5 py-md-0 min-vh-100">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            <img
              src="/images/landing-page/main-logo.svg"
              style={{ width: "100%", maxWidth: "72px" }}
            />
            <div className=" display-6 fw-bolder">Chatpang ทำอะไรได้บ้าง ?</div>
          </div>
          <div className="text-center">
            รวม 5 ฟังก์ชั่นของ <span className="text-secondary">Chatpang</span>{" "}
            ที่จะช่วยให้คุณตอบแชทกับลูกค้าได้ในทันที
          </div>
        </div>
      </div>
    </>
  );
}
