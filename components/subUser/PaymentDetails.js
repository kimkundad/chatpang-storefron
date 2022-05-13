import React from 'react'
import { Divider,Table  } from 'antd'

const PaymentDetails = () => {
    const data = [
        {
            date:'04/03/2022',
            package:'ฺBasic',
            start :'04/03/2022 - 04/04/2022',
            paymentMethod:"โอนเข้าบัญชี",
            amount:"290"
        },
        {
            date:'04/03/2022',
            package:'VIP',
            start :'04/03/2022 - 04/04/2022',
            paymentMethod:"โอนเข้าบัญชี",
            amount:"590"
        },
        {
            date:'04/03/2022',
            package:'Business',
            start :'04/03/2022 - 04/04/2022',
            paymentMethod:"โอนเข้าบัญชี",
            amount:"990"
        },
    ]
    const column = [
        {
            title:<strong className='fs-4'>วันที่</strong>,
            dataIndex:'date',
            key:'date',
            render: text => <span className='fs-5'>{text}</span>
        },
        {
            title:<strong className='fs-4'>แพ็คเกจ</strong>,
            dataIndex:'package',
            key:'package',
            render: text => <span className='fs-5'>{text}</span>
        },
        {
            title:<strong className='fs-4'>ระยะเวลาของการใช้งาน</strong>,
            dataIndex:'start',
            key:'start',
            render: text => <span className='fs-5'>{text}</span>
        },
        {
            title:<strong className='fs-4'>วิธีชำระเงิน</strong>,
            dataIndex:'paymentMethod',
            key:'paymentMethod',
            render: text => <span className='fs-5'>{text}</span>
        },
        {
            title:<strong className='fs-4'>จำนวนเงิน</strong>,
            dataIndex:'amount',
            key:'amount',
            render: text => <span className='fs-5'>{text}</span>
        },
    ]
  return (
    <div className='row mt-4' >
        <div className='row invoice-item p-3 mx-2' style={{width:"100%"}}>    
            <strong className='text-secondary fs-4'>แพ็คเกจของคุณ</strong>
            <div className='col-lg-6 text-start' >
                    <div className='ps-3'>
                        <p className='mb-0 fs-5'>Basic ราคา 290 บาท / เดือน<br/>
                        ไม่จำกัด Facebook page<br/>
                        ตอบกลับ 100 คอมเม้นต์ต่อวัน
                        </p>
                    </div>
            </div>
            <Divider />
            <div className='row'>
            <strong className='text-secondary fs-4'>ค่าบริการที่เรียกเก็บในรอบถัดไป</strong>
                <div className='col-lg-6 text-start' >
                        <div className='ps-3'>
                            <p className='mb-0 fs-5'>18 มีนาคม 2565</p>
                        </div>
                </div>
            </div>
        </div>
        <div className='row mt-4'>
            <div className='table-responsive'>
                <Table 
                dataSource={data} 
                columns={column}
                bordered
                />
            </div>
        </div>
    </div>
  )
}

export default PaymentDetails