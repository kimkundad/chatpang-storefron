import React, { useEffect, useState } from 'react'
import { Divider } from 'antd'
import { useRouter } from 'next/router'
import moment from 'moment'
import useUser from '../../Hooks/useUser'
import axios from '../../pages/api/axios'

const MemberDetails = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  const [userInfo, setUserInfo] = useState(user?.user)
  const [packageInfo, setPackageInfo] = useState(user?.package)
  const [paymentInfo, setPaymentInfo] = useState({})
  const getUserInfo = async () => {
    try {
      const res = await axios.get(`/user/getUser/${user?.user?._id}`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      console.log(res.data);
      setUserInfo(res.data)
      getPaymentInfo(res.data.paymentData[0].id)
    } catch (error) {
      console.log(error)
    }
  }
  const getPaymentInfo = async (id) => {
    try {
      const res = await axios.get(`/payments/${id}`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      console.log(res.data);
      setPaymentInfo(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getUserInfo()
  },[])
  return (
    <div className="row mt-4 invoice-item p-3" style={{ width: '100%' }}>
      <div className="row">
        <div className="col-lg-6 text-start">
          <strong className="text-secondary fs-4">รายละเอียดสมาชิก</strong>
          <div className="ps-3">
            <p className="mb-0 fs-5">อีเมล : {paymentInfo?.customerEmail}</p>
            <p className="mb-0 fs-5">โทรศัพท์ : {paymentInfo?.customerTelephone}</p>
          </div>
        </div>
        <Divider />
        <div className="row">
          <div className="col-lg-6 text-start">
            <strong className="text-secondary fs-4">การชำระเงิน</strong>
            <div className="ps-3">
              <p className="mb-0 fs-5">{paymentInfo?.type === 'card' ? 'ชำระด้วยบัตรเครดิต / เดบิต' : 'ชำระด้วยการแสกน QR code'}</p>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="ps-3">
              <p style={{ cursor: 'pointer' }} className="text-primary mb-0 fs-5">
                แก้ไขข้อมูลการชำระเงิน
              </p>
            </div>
          </div>
        </div>
        <Divider />
        <div className="row">
          <div className="col-lg-6 text-start">
            <strong className="text-secondary fs-4">รายละเอียดแพ็คเกจ</strong>
            <div className="ps-3">
              <p className="mb-0 fs-5">
                {packageInfo?.name} ราคา {paymentInfo?.amount} บาท / เดือน
                <br />
                วันที่เรียกเก็บครั้งต่อไปของคุณคือ {packageInfo?.exp}
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="ps-3">
              <p
                onClick={() => router.push('/user/packages')}
                style={{ cursor: 'pointer' }}
                className="text-primary mb-0 fs-5"
              >
                เปลี่ยนแพ็คเกจ
              </p>
            </div>
          </div>
        </div>
        <Divider />
        <div className="row">
          <div className="col-lg-12 text-end">
            <button className="btn btn-secondary">ยกเลิกการเป็นสมาชิก</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberDetails
