import { Card } from 'react-bootstrap'
import { useRouter } from 'next/router'
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
//component
import Stepper from '../components/Stepper'
const Packages = () => {
  const router = useRouter()
  const [selected, setSelected] = useState(null)

  function setSelectedPackage(id) {
      if (selected === id) {
        setSelected(null)
      }else{
        setSelected(id)
      }
  }
  return (
    <div className='page-wrapper' >
        <div className='row' >
            <div className='col-lg-12 d-flex justify-content-center'>
                <Stepper step="0" />
            </div>
        </div>
        <div className='row justify-content-center mt-5' >
            <div className='col-lg-12 d-flex justify-content-center' >
                <Card className='mx-3 cardContainer' onClick={()=>setSelectedPackage(0)}>
                    <Card.Body className='justify-content-center'>
                        <Card.Title className='cardTitle'>Basic</Card.Title>
                        <Card.Text>
                            <div className='text-center mb-3'>
                                <h1 className='mb-0'>290</h1>
                                <p>บาท/เดือน</p>
                            </div>
                            <ul className='m-0 p-0'>
                                <li><FontAwesomeIcon className='me-2' icon={faCircleCheck} /><span>ตอบคอมเม้นต์อัตโนมัติ</span></li>
                                <li><FontAwesomeIcon className='me-2' icon={faCircleCheck} /><span>ดึงคอมเม้นต์เข้า Inbox</span></li>
                                <li><FontAwesomeIcon className='me-2' icon={faCircleCheck} /><span>ใช้งานได้ 1 เพจ</span></li>
                            </ul>
                        </Card.Text>
                        <div className='text-center'>
                        <span style={{display:`${selected === 0 ? "grid":"none"}`}} className='selectBtnCustom'><FontAwesomeIcon icon={faCircleCheck} /></span>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='mx-3 cardContainer' onClick={()=>setSelectedPackage(1)}>
                    <Card.Body>
                        <Card.Title className='cardTitle'>VIP</Card.Title>
                        <Card.Text>
                            <div className='text-center mb-3'>
                                <h1 className='mb-0'>590</h1>
                                <p>บาท/เดือน</p>
                            </div>
                            <div>
                                <ul className='m-0 p-0'>
                                    <li><FontAwesomeIcon className='me-2' icon={faCircleCheck} /><span>ตอบคอมเม้นต์อัตโนมัติ</span></li>
                                    <li><FontAwesomeIcon className='me-2' icon={faCircleCheck} /><span>ดึงคอมเม้นต์เข้า Inbox</span></li>
                                    <li><FontAwesomeIcon className='me-2' icon={faCircleCheck} /><span>ใช้งานได้ 1 เพจ</span></li>
                                </ul>
                            </div>
                        </Card.Text>
                        <div className='text-center'>
                        <span style={{display:`${selected === 1 ? "grid":"none"}`}} className='selectBtnCustom'><FontAwesomeIcon icon={faCircleCheck} /></span>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='mx-3 cardContainer' onClick={()=>setSelectedPackage(2)}>
                    <Card.Body>
                        <Card.Title className='cardTitle'>Business</Card.Title>
                        <Card.Text>
                            <div className='text-center mb-3'>
                                <h1 className='mb-0'>990</h1>
                                <p>บาท/เดือน</p>
                            </div>
                            <ul className='m-0 p-0'>
                                <li><FontAwesomeIcon className='me-2' icon={faCircleCheck} /><span>ตอบคอมเม้นต์อัตโนมัติ</span></li>
                                <li><FontAwesomeIcon className='me-2' icon={faCircleCheck} /><span>ดึงคอมเม้นต์เข้า Inbox</span></li>
                                <li><FontAwesomeIcon className='me-2' icon={faCircleCheck} /><span>ใช้งานได้ 1 เพจ</span></li>
                            </ul>
                        </Card.Text>
                        <div className='text-center'>
                            <span style={{display:`${selected === 2 ? "grid":"none"}`}} className='selectBtnCustom'><FontAwesomeIcon icon={faCircleCheck} /></span>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col-12 d-flex justify-content-end w-50 mt-3'>
                <button onClick={()=> router.push('/bankacc')} className='customBTN'>ต่อไป</button>
            </div>
        </div>
    </div>
  )
}

export default Packages