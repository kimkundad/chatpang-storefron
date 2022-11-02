import React, { useEffect, useState } from 'react'
import Divider from '@mui/material/Divider'
import { useRouter } from 'next/router'
import moment from 'moment'
import useUser from '../../Hooks/useUser'
import axios from '../../pages/api/axios'
import Link from 'next/link'

const MemberDetails = () => {
  const router = useRouter()
  const { user } = useUser()

  const renderExp = () => {
    if (user?.purchases !== 0) {
      return moment(user?.purchases[0]?.expire_date).format('DD/MM/YYYY')
    } else {
      return 'N/A'
    }
  }

  const IsHaveOrder = () => {
    return user?.user?.order !== null
  }
  const renderLink = () => {
    if (!user?.user?.order) {
      return (
        <Link href="/user/packages">
          <p className="text-danger mb-0 fs-6">ท่านยังไม่ได้เลือกเพจคลิ้กที่นี่เพื่อเลือกซื้อแพ็คเกจ</p>
        </Link>
      )
    } else {
      return (
        <Link href="/user/payment/paymentoptions">
          <p className="text-danger mb-0 fs-6">ท่านยังไม่ได้ชำระเงินคลิ้กที่นี่เพื่อชำระเงิน</p>
        </Link>
      )
    }
  }
  return (
    <div className="row mt-4  mx-auto invoice-item p-3" style={{ width: '100%' }}>
      <div className="row">
        <div className="col-lg-6 text-start">
          <strong className="text-secondary fs-4">รายละเอียดสมาชิก</strong>
          <div className="ps-3">
            <p className="mb-0 fs-5">อีเมล : {user?.user?.email}</p>
            <p className="mb-0 fs-5">โทรศัพท์ : {user?.user?.tel}</p>
          </div>
        </div>
        {IsHaveOrder() && <Divider />}
        {IsHaveOrder() && <div className="row">
          <div className="col-lg-6 text-start">
            <strong className="text-secondary fs-4">การชำระเงิน</strong>
            <div className="ps-3 fs-5">
              {/* <p className="mb-0 fs-5">{user?.payment?.type === 'card' ? 'ชำระด้วยบัตรเครดิต / เดบิต' : 'ชำระด้วยการแสกน QR code'}</p> */}
              ชำระด้วยการแสกน QR code
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="ps-3">
              <p
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/user/payment/changepayment')}
                className="text-primary mb-0 fs-5"
              >
                แก้ไขข้อมูลการชำระเงิน
              </p>
            </div>
          </div>
        </div>}
        <Divider />
        <div className="row">
          <div className="col-lg-6 text-start">
            <strong className="text-secondary fs-4">รายละเอียดแพ็คเกจ</strong>
            <div className="ps-3">
              {user?.order?.state === 'paid' ? (
                <p className="mb-0 fs-5">
                  {user?.order?.package?.name} ราคา {user?.order?.package?.price} บาท / เดือน
                  <br />
                  วันที่เรียกเก็บครั้งต่อไปของคุณคือ {renderExp()}
                </p>
              ) : (
                renderLink()
              )}
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="ps-3">
              {user?.order?.state === 'paid' && (
                <p
                  onClick={() => router.push('/user/changepackage')}
                  style={{ cursor: 'pointer' }}
                  className="text-primary mb-0 fs-5"
                >
                  เปลี่ยนแพ็คเกจ
                </p>
              )}
            </div>
          </div>
        </div>
        {/* <Divider />
        <div className="row">
          <div className="col-lg-12 text-end">
            <button className="btn btn-secondary fs-3">ยกเลิกการเป็นสมาชิก</button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default MemberDetails
