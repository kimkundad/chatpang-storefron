import React, { useState } from 'react'
import { Divider, Table } from 'antd'
import useUser from '../../Hooks/useUser'
import moment from 'moment'
const PaymentDetails = () => {
  const { user } = useUser()
  const [paymentHistory, setPaymentHistory] = useState(user?.user?.paymentData)
  const column = [
    {
      title: <strong className="fs-4">วันที่</strong>,
      dataIndex: 'createAt',
      defaultSortOrder: 'ascend',
      key: 'createAt',
      render: (text) => <span className="fs-5">{text !== undefined && moment(text).format('DD/MM/YYYY')}</span>,
    },
    {
      title: <strong className="fs-4">แพ็คเกจ</strong>,
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span className="fs-5">{text}</span>,
    },
    {
      title: <strong className="fs-4">ระยะเวลาของการใช้งาน</strong>,
      dataIndex: 'createAt',
      render: (text) => {
        let x = moment(text).format('DD/MM/YYYY')
        let t = moment(text).add(1, 'M').format('DD/MM/YYYY')
        return <span className="fs-5">{`${x} - ${t}`}</span>
      },
    },
    {
      title: <strong className="fs-4">วิธีชำระเงิน</strong>,
      dataIndex: 'type',
      key: 'type',
      render: (text) => <span className="fs-5">{text === 'card' ? 'บัตรเครดิต' : 'QR CODE'}</span>,
    },
    {
      title: <strong className="fs-4">จำนวนเงิน</strong>,
      dataIndex: 'price',
      key: 'price',
      render: (text) => <span className="fs-5">{text}</span>,
    },
  ]

  const renderExp = () => {
    if (user?.user?.paymentData) {
      return moment(user?.user?.paymentData[0]?.endAt)?.format('DD/MM/YYYY')
    } else {
      return 'N/A'
    }
  }
  return (
    <div className="row mt-4">
      <div className="row invoice-item p-3 mx-2" style={{ width: '100%' }}>
        <strong className="text-secondary fs-4">แพ็คเกจของคุณ</strong>
        <div className="col-lg-6 text-start">
          <div className="ps-3">
            <p className="mb-0 fs-5">
              {user?.payment?.detail} ราคา {user?.payment?.amount} บาท / เดือน
              <br />
              {user?.package?.detail?.map((text, index) => {
                return (
                  <span key={index}>
                    {text}
                    <br />
                  </span>
                )
              })}
            </p>
          </div>
        </div>
        <Divider />
        <div className="row">
          <strong className="text-secondary fs-4">ค่าบริการที่เรียกเก็บในรอบถัดไป</strong>
          <div className="col-lg-6 text-start">
            <div className="ps-3">
              <p className="mb-0 fs-5">{renderExp()}</p>
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
