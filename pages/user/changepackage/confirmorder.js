import { useRouter } from 'next/router'
import Stepper from '../../../components/Stepper'
import { Checkbox, Divider } from 'antd'
import React, { useState, useEffect } from 'react'

import sampleSlip from '../../../resources/imgs/slip.jpg'
import useUser from '../../../Hooks/useUser'
import axios from '../../api/axios'
const Confirmorder = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()

  // function onChecked(e) {
  //   console.log(`check = ${e.target.checked}`)
  // }
  //! did not use
  // function handleCancel() {
  //   setPreviewSlip(false)
  // }

  const onsubmit = async () => {
    router.push('/user/info/pagemanagement')
  }
  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <Stepper step="2" />
          </div>
        </div>
        {/* <div style={{ width: '50%' }} className="row m-auto">
          <div className="col-lg-12 d-flex justify-content-start">
            <Checkbox className="fs-3" onChange={onChecked}>
              รับสลิป
            </Checkbox>
          </div>
        </div> */}
        <div className="row m-auto mt-4 invoice-item p-3">
          <div className="row">
            <div className="col-lg-8 col-8 text-start">
              <strong className="text-secondary">รายละเอียดการชำระเงิน</strong>
              <div className="ps-3">
                <p className="mb-0">
                  {/* {`${
                  user?.payment?.type === 'card' ? 'ชำระด้วยบัตรเครดิต' : 
                  'ชำระด้วย QR code'
                }`} */}
                  ชำระด้วย QR code
                </p>
                {/* <span>หมายเลข:{`${user?.payment?.type}`}</span> */}
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
            <div className="col-lg-8 col-8 text-start">
              <strong className="text-secondary">รายละเอียดแพ็คเกจ</strong>
            </div>
          </div>
          <div className="row ps-4 ">
            <div className="col-lg-12">
              <table>
                <thead>
                  <tr>
                    <th className="text-start">รายการ</th>
                    <th className="text-end">ราคา</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {`${user?.package?.name} ราคา ${user?.order?.package?.price} บาท / เดือน`}
                      <br />
                      {`ใช้งานได้ ${
                        user?.order?.package?.page_limit !== null ? user?.order?.package?.page_limit : 0
                      } เพจ`}
                    </td>
                    <td className="text-end">{`${user?.order?.package?.price} บาท`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Divider />
          <div className="row">
            <div className="col-md-8 ms-auto">
              <table className="table">
                <tbody>
                  <tr>
                    <th>ราคารวม:</th>
                    <td className="text-end p-0">{`${user?.order?.package?.price} บาท`}</td>
                  </tr>
                  {/* <tr>
                    <th>ภาษี (7%)</th>
                    <td className="text-end p-0">{`${(user?.package?.price * 7) / 100} บาท`}</td>
                  </tr> */}
                  <tr>
                    <th>ราคาสุทธิ:</th>
                    <td className="text-end p-0">{user?.order?.package?.price} บาท</td>
                    {/* <td className="text-end p-0">{`${
                      parseInt(user?.package?.price) + parseInt((user?.package?.price * 7) / 100)
                    } บาท`}</td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div style={{ width: '50%' }} className="col-12 d-flex justify-content-end mt-3">
            <span onClick={() => router.back()} className="btn text-secondary">
              ย้อนกลับ
            </span>
            <button onClick={() => onsubmit()} className="customBTN">
              ต่อไป
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirmorder
