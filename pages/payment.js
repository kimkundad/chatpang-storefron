import { Card } from 'react-bootstrap'
import { useRouter } from 'next/router'

const Payment = () => {
  const router = useRouter()

  return (
    <div className='page-wrapper' >
        <div className='row' >
            <div className='col-lg-12 d-flex justify-content-center'>
                <ul className='breadcrumb' >
                    <li className="breadcrumb-item active">เลือกแพ็คเกจ</li>
                    <li className="breadcrumb-item">การชำระเงิน</li>
                    <li className="breadcrumb-item">ยืนยันการสั่งซื้อ</li>
                </ul>
            </div>
        </div>
        <div className='row justify-content-center' >
            <div className='col-lg-12 d-flex justify-content-center' >
                <Card className='mx-3'>
                    <Card.Body className='justify-content-center'>
                        <Card.Title className='cardTitle'>Basic</Card.Title>
                        <Card.Text>
                            <div className='text-center mb-3'>
                                <h1 className='mb-0'>290</h1>
                                <p>บาท/เดือน</p>
                            </div>
                            <ul>
                                <li>ตอบคอมเม้นต์อัตโนมัติ</li>
                                <li>ดึงคอมเม้นต์เข้า Inbox</li>
                                <li>ใช้งานได้ 1 เพจ</li>
                            </ul>
                        </Card.Text>
                        <div className='text-center'>
                            <button className='btn btn-primary'>ซื้อ</button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='mx-3'>
                    <Card.Body>
                        <Card.Title className='cardTitle'>VIP</Card.Title>
                        <Card.Text>
                            <div className='text-center mb-3'>
                                <h1 className='mb-0'>590</h1>
                                <p>บาท/เดือน</p>
                            </div>
                            <ul>
                                <li>ตอบคอมเม้นต์อัตโนมัติ</li>
                                <li>ดึงคอมเม้นต์เข้า Inbox</li>
                                <li>ใช้งานได้ 1 เพจ</li>
                            </ul>
                        </Card.Text>
                        <div className='text-center'>
                            <button className='btn btn-primary'>ซื้อ</button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='mx-3'>
                    <Card.Body>
                        <Card.Title className='cardTitle'>Business</Card.Title>
                        <Card.Text>
                            <div className='text-center mb-3'>
                                <h1 className='mb-0'>990</h1>
                                <p>บาท/เดือน</p>
                            </div>
                            <ul>
                                <li>ตอบคอมเม้นต์อัตโนมัติ</li>
                                <li>ดึงคอมเม้นต์เข้า Inbox</li>
                                <li>ใช้งานได้ 1 เพจ</li>
                            </ul>
                        </Card.Text>
                        <div className='text-center'>
                            <button className='btn btn-primary'>ซื้อ</button>
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

export default Payment