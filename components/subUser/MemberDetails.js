import React, { useEffect, useState } from 'react'
import { Divider } from 'antd'
import { useRouter } from 'next/router'
import moment from 'moment'
import useUser from '../../Hooks/useUser'
import axios from '../../pages/api/axios'

const MemberDetails = () => {
  const router = useRouter()
  const { user } = useUser()
  // const [userInfo, setUserInfo] = useState(user?.user)
  // const [packageInfo, setPackageInfo] = useState(user?.package)
  // const [paymentInfo, setPaymentInfo] = useState({})
  // const getUserInfo = async () => {
  //   try {
  //     const res = await axios.get(`/user/getUser/${user?.user?._id}`, {
  //       headers: { Authorization: `Bearer ${user?.accessToken}` },
  //     })
  //     console.log(res.data);
  //     setUserInfo(res.data)
  //     getPaymentInfo(res.data.paymentData[0].id)
  //     getPackageInfo(res.data.packageData[0].id)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const getPaymentInfo = async (id) => {
  //   try {
  //     const res = await axios.get(`/payments/${id}`, {
  //       headers: { Authorization: `Bearer ${user?.accessToken}` },
  //     })
  //     console.log(res.data);
  //     setPaymentInfo(res.data)
  //    await setUserData({
  //       ...user,
  //       payment:res.data
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const getPackageInfo = async (id) => {
  //   try {
  //     const res = await axios.get(`/packages/${id}`, {
  //       headers: { Authorization: `Bearer ${user?.accessToken}` },
  //     })
  //     console.log(res.data);
  //     setPackageInfo(res.data)
  //    await setUserData({
  //       ...user,
  //       package:res.data
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const renderExp = () => {
    if (user?.user?.paymentData) {
      return moment(user?.user?.paymentData[0]?.endAt)?.format('DD/MM/YYYY')
    }else{
      return 'N/A'
    }
  }
  // useEffect(()=>{
  //   getUserInfo()
  // },[])
  return (
    <div className="row mt-4 invoice-item p-3" style={{ width: '100%' }}>
      <div className="row">
        <div className="col-lg-6 text-start">
          <strong className="text-secondary fs-4">รายละเอียดสมาชิก</strong>
          <div className="ps-3">
            <p className="mb-0 fs-5">อีเมล : {user?.payment?.customerEmail}</p>
            <p className="mb-0 fs-5">โทรศัพท์ : {user?.payment?.customerTelephone}</p>
          </div>
        </div>
        <Divider />
        <div className="row">
          <div className="col-lg-6 text-start">
            <strong className="text-secondary fs-4">การชำระเงิน</strong>
            <div className="ps-3">
              <p className="mb-0 fs-5">{user?.payment?.type === 'card' ? 'ชำระด้วยบัตรเครดิต / เดบิต' : 'ชำระด้วยการแสกน QR code'}</p>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="ps-3">
              <p style={{ cursor: 'pointer' }} onClick={()=> router.push('/user/payment/changepayment')} className="text-primary mb-0 fs-5">
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
                {user?.package?.name} ราคา {user?.payment?.amount} บาท / เดือน
                <br />
                วันที่เรียกเก็บครั้งต่อไปของคุณคือ {renderExp()}
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="ps-3">
              <p
                onClick={() => router.push('/user/changepackage')}
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
