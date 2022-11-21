import React, { useState } from 'react'
import { Divider, Table } from 'antd'
import useUser from '../../Hooks/useUser'
import moment from 'moment'
const PaymentDetails = () => {
  const { user } = useUser()
  const [paymentHistory, setPaymentHistory] = useState(user?.purchases.length !== 0 ? user?.purchases : [])
  const column = [
    {
      title: <strong className="fs-5">วันที่</strong>,
      dataIndex: 'created_at',
      key: 'created_at',
      render: (text) => {
        return <span className="fs-6">{text !== undefined && moment(text).format('DD/MM/YYYY')}</span>
      },
    },
    {
      title: <strong className="fs-5">แพ็คเกจ</strong>,
      dataIndex: 'order',
      key: 'order',
      render: (item) => {
        const text = item?.package?.name
        return <span className="fs-6">{text}</span>
      },
    },
    {
      title: <strong className="fs-5">ระยะเวลาของการใช้งาน</strong>,
      dataIndex: 'expire_date',
      render: (text) => {
        let t = moment(text).format('DD/MM/YYYY')
        let x = moment(text).subtract(1, 'M').add(1, 'd').format('DD/MM/YYYY')
        return <span className="fs-6">{`${x} - ${t}`}</span>
      },
    },
    {
      title: <strong className="fs-5">วิธีชำระเงิน</strong>,
      dataIndex: 'type',
      key: 'type',
      render: (text) => <span className="fs-6">{text === 'card' ? 'บัตรเครดิต' : 'QR CODE'}</span>,
    },
    {
      title: <strong className="fs-5">จำนวนเงิน</strong>,
      dataIndex: 'order',
      key: 'order',
      render: (item) => {
        const text = item?.package?.price
        return <span className="fs-6">{text}</span>
      },
    },
  ]

  const renderExp = () => {
    // console.log(Object.values(user?.package).length !== 0)
    if (user?.purchases.length !== 0) {
      return moment(user?.purchases[0]?.expire_date).format('DD/MM/YYYY')
    } else {
      return 'N/A'
    }
  }
  return (
    <div className="row mt-4 px-2">
      <div className="row invoice-item p-3 mx-auto">
        <strong className="text-secondary fs-5">แพ็คเกจของคุณ</strong>
        <div className="col-lg-6 text-start">
          <div className="ps-3">
            {Object.values(user?.package).length === 0 ? (
              <p className="mb-0 fs-6">N/A</p>
            ) : (
              <p className="mb-0 fs-6">
                {user?.package?.name} ราคา {user?.package?.price} บาท / เดือน
                <br />
                {user?.package.length !== 0 &&
                  user?.package?.options?.map((text, index) => {
                    return (
                      <span className='fs-6' key={index}>
                        {text}
                        <br />
                      </span>
                    )
                  })}
              </p>
            )}
          </div>
        </div>
        <Divider />
        <div className="row">
          <strong className="text-secondary fs-5">ค่าบริการที่เรียกเก็บในรอบถัดไป</strong>
          <div className="col-lg-6 text-start">
            <div className="ps-3">
              <p className="mb-0 fs-6">{renderExp()}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="table-responsive">
          <Table dataSource={paymentHistory} columns={column} bordered />
        </div>
      </div>
    </div>
  )
}

export default PaymentDetails
