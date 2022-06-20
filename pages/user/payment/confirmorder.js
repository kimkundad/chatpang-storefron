import { useRouter } from 'next/router'
import Stepper from '../../../components/Stepper'
import { Checkbox, Modal, Divider } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'

import sampleSlip from '../../../resources/imgs/slip.jpg'
import useUser from '../../../Hooks/useUser'
import axios from '../../api/axios'

const Confirmorder = () => {
  const router = useRouter()
  const { user } = useUser()
  const [previewSlip, setPreviewSlip] = useState(false)

  function onChecked(e) {
    console.log(`check = ${e.target.checked}`)
  }
  function handleCancel() {
    setPreviewSlip(false)
  }

  const onsubmit = async () => {
    const sigupData = {
      name: user?.name,
      email: user?.email,
      imgProfile: user?.imgProfile,
      facebookToken: user?.facebookToken,
      paymentData: [
        {
          id: user?.payment?._id,
        },
      ],
      packageData: [
        {
          id: user?.package?._id,
        },
      ],
    }
    const createPageData = {
      pageId: user?.pages?.id,
      userId: 'string',
      pageName: user?.pages?.name,
      pageAccessToken: user?.pages?.access_token,
      pageImageUrl: user?.pages?.picture?.data?.url,
    }
    // try {
      // const sigupinfo = await axios.post('/user/signup',sigupData)
      // const creatPageinfo = await axios.post('/pages',createPageData)
      console.log(sigupData);
      console.log(createPageData);
      router.push('/user/info/pagemanagement')
    // } catch (error) {
      // console.log(error)
    // }
  }
  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <Stepper step="2" />
          </div>
        </div>
        <div style={{ width: '30%' }} className="row m-auto">
          <div className="col-lg-12 d-flex justify-content-start">
            <Checkbox className="fs-3" onChange={onChecked}>
              รับสลิป
            </Checkbox>
          </div>
        </div>
        <div className="row m-auto mt-4 invoice-item p-3">
          <div className="row">
            <div className="col-lg-6 text-start">
              <strong className="text-secondary">รายละเอียดการชำระเงิน</strong>
              <div className="ps-3">
                <p className="mb-0">ชำระด้วยบัตรเครดิต</p>
                <span>หมายเลข:{`${user?.payment.number}`}</span>
              </div>
            </div>
            {/* <div className="col-lg-6 text-end">
              <strong className="text-secondary">หลักฐานการชำระเงิน</strong>
              <div>
                <Image onClick={() => setPreviewSlip(true)} src={sampleSlip} alt="slip" width={120} height={150} />
                <Modal visible={previewSlip} title="หลักฐานการโอนของคุณ" footer={null} onCancel={handleCancel}>
                  <Image alt="example" style={{ width: '100%' }} src={sampleSlip} />
                </Modal>
              </div>
              <span style={{ cursor: 'pointer' }} className="text-info" onClick={() => setPreviewSlip(true)}>
                ดูสลิปการโอน
              </span>
            </div> */}
          </div>
          <Divider />
          <div className="row">
            <div className="col-lg-6 text-start">
              <strong className="text-secondary">รายละเอียดแพ็คเกจ</strong>
            </div>
          </div>
          <div className="row ps-4">
            {/* <div className='col-lg-12'> */}
            <table>
              <thead>
                <tr>
                  <th className="text-start">รายการ</th>
                  <th className="text-center">ราคา</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {`${user?.package?.name} ราคา ${user?.package?.price} บาท / เดือน`}
                    <br />
                    {`ใช้งานได้ ${user?.pages?.length !== null ? user?.pages?.length : 0} เพจ`}
                  </td>
                  <td className="text-end">{`${user?.package?.price} บาท`}</td>
                </tr>
              </tbody>
            </table>
            {/* </div> */}
          </div>
          <Divider />
          <div className="row">
            <div className="col-md-6 ms-auto">
              <table className="table">
                <tbody>
                  <tr>
                    <th>ราคารวม:</th>
                    <td className="text-end p-0">{`${user?.package?.price} บาท`}</td>
                  </tr>
                  <tr>
                    <th>ภาษี (7%)</th>
                    <td className="text-end p-0">{`${(user?.package?.price * 7) / 100} บาท`}</td>
                  </tr>
                  <tr>
                    <th>ราคาสุทธิ:</th>
                    <td className="text-end p-0">{`${user?.package?.price + (user?.package?.price * 7) / 100} บาท`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div style={{ width: '30%' }} className="col-12 d-flex justify-content-end mt-3">
            <span onClick={() => router.back()} className="btn text-secondary">
              ย้อนกลับ
            </span>
            <button onClick={() => onsubmit()} className="customBTN">
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirmorder
