import { useRouter } from 'next/router'
import Stepper from '../../../components/Stepper/Stepper';
import Divider from '@mui/material/Divider';
import React, { useEffect, useState } from 'react'

import useUser from '../../../Hooks/useUser'

import MainLayout from '../../../components/layouts/mainLayout/mainLayout';
import PaymentStyle from './style';
import { Box } from '@mui/material';
import axios from '../../api/axios';

export async function getServerSideProps({ req, res }) {
console.log("get props");
  return {
    props: {
      message: "Payment success",
    }
  };
}

const Confirmorder = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  const [navHeight, setNavHeight] = useState(64);
  let userId = ''
  let token = ''
  const onsubmit = async () => {
    // router.replace('https://chat-pang-api-fy5xytbcca-as.a.run.app/facebook/pages')
    router.replace('/user/manage/pagemanagement')
  }
  useEffect(async ()=>{
    if (!user.isLogin) {
        if (typeof window !== 'undefined') {
            userId = localStorage.getItem('userId')
            token = localStorage.getItem('token')
            if (token) {
            const res = await axios.get(`/public/facebook-users/${userId}`)
            const data = res.data.data
            const resp = await axios.get(`public/packages/${data.order.package.id}`)
            const res3 = await axios.get(`/public/facebook-pages/${userId}/facebook-user`, {
                headers: { Authorization: 'Bearer ' + token },
            });
              setUserData({
                  ...user,
                  user: data,
                  facebookUserId: data.facebook_id,
                  accessToken: token,
                  userId: userId,
                  package: resp.data.data,
                  isLogin: true,
                  order:data.order,
                  pages: res3.data.data.results
                })
              }else{
              router.replace('/')
            }
        }
    }
},[user.isLogin])
  return (
    <MainLayout>
      <PaymentStyle navHeight={navHeight}>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <Stepper step="2" />
          </div>
        </div>
        <div className="row m-auto mt-4 invoice-item p-3">
          <div className="row">
            <div className="col-lg-8 col-8 text-start">
              <strong className="text-secondary">รายละเอียดการชำระเงิน</strong>
              <div className="ps-3">
                <p className="mb-0">
                  ชำระด้วย QR code
                </p>
              </div>
            </div>
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
                  <tr>
                    <th>ราคาสุทธิ:</th>
                    <td className="text-end p-0">{user?.order?.package?.price} บาท</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <div className="row justify-content-center"> */}
          <Box display="flex" justifyContent="end" sx={{ width:{xs:'90%', md:'50%'}, margin:"0px auto"}} className="d-flex justify-content-end mt-3">
            <span onClick={() => router.back()} className="btn text-secondary">
              ย้อนกลับ
            </span>
            <button onClick={() => onsubmit()} className="customBTN">
              ต่อไป
            </button>
          </Box>
        {/* </div> */}
      </PaymentStyle>
    </MainLayout>
  )
}

export default Confirmorder
