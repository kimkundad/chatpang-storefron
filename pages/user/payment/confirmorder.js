import { useRouter } from 'next/router'
import Stepper from '../../../components/Stepper'
import { Checkbox, Divider } from 'antd'
import React, { useState } from 'react'

import sampleSlip from '../../../resources/imgs/slip.jpg'
import useUser from '../../../Hooks/useUser'
import axios from '../../api/axios'
const Confirmorder = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  //! did not use
  // const [previewSlip, setPreviewSlip] = useState(false)

  function onChecked(e) {
    console.log(`check = ${e.target.checked}`)
  }
  //! did not use
  // function handleCancel() {
  //   setPreviewSlip(false)
  // }

  const getEndDate = async () => {
    let date = new Date()
    date.setDate(date.getDate() + 30)
    return date
  }
  const onsubmit = async () => {
    const signupData = {
      name: user?.user?.name,
      email: user?.user?.email,
      imgProfile: user?.user?.imgProfile,
      facebookToken: user?.user?.facebookToken,
      paymentData: [
        {
          id: user?.payment?._id,
          endAt: await getEndDate(),
          name: user?.package?.name,
          price: user?.package?.price,
          type: 'card',
        },
      ],
      packageData: [
        {
          id: user?.package?._id,
          endAt: await getEndDate(),
        },
      ],
    }
    // console.log(signupData)
    const createPageData = {
      pageId: user?.pages[0]?.id,
      userId: user?.user?.userId,
      pageName: user?.pages[0]?.name,
      pageAccessToken: user?.pages[0]?.access_token,
      pageImageUrl: user?.pages[0]?.picture?.data?.url,
    }
    // console.log(createPageData)
    try {
      const signupinfo = await axios.post('/user/signup', signupData)
      // console.log(signupinfo);
      const creatPageinfo = await axios.post('/pages', createPageData, {
        headers: { Authorization: 'Bearer ' + signupinfo?.data?.accessToken },
      })
      // console.log(creatPageinfo);
      setUserData({
        ...user,
        accessToken: signupinfo.data?.accessToken,
        user: signupinfo.data?.data,
      })
      router.push('/user/info/pagemanagement')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <Stepper step="2" />
          </div>
        </div>
        <div style={{ width: '50%' }} className="row m-auto">
          <div className="col-lg-12 d-flex justify-content-start">
            <Checkbox className="fs-3" onChange={onChecked}>
              รับสลิป
            </Checkbox>
          </div>
        </div>
        <div className="row m-auto mt-4 invoice-item p-3">
          <div className="row">
            <div className="col-lg-8 col-8 text-start">
              <strong className="text-secondary">รายละเอียดการชำระเงิน</strong>
              <div className="ps-3">
                <p className="mb-0">{`${
                  user?.payment?.type === 'card' ? 'ชำระด้วยบัตรเครดิต' : 'ชำระด้วย QR code'
                }`}</p>
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
                      {`${user?.package?.name} ราคา ${user?.package?.price} บาท / เดือน`}
                      <br />
                      {`ใช้งานได้ ${user?.pages?.length !== null ? user?.pages?.length : 0} เพจ`}
                    </td>
                    <td className="text-end">{`${user?.package?.price} บาท`}</td>
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
                    <td className="text-end p-0">{`${user?.package?.price} บาท`}</td>
                  </tr>
                  <tr>
                    <th>ภาษี (7%)</th>
                    <td className="text-end p-0">{`${(user?.package?.price * 7) / 100} บาท`}</td>
                  </tr>
                  <tr>
                    <th>ราคาสุทธิ:</th>
                    <td className="text-end p-0">{`${
                      parseInt(user?.package?.price) + parseInt((user?.package?.price * 7) / 100)
                    } บาท`}</td>
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
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirmorder
