import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import MemberDetails from '../../../components/subUser/MemberDetails';
import PaymentDetails from '../../../components/subUser/PaymentDetails';
import useUser from '../../../Hooks/useUser';
import axios from '../../api/axios';
import moment from 'moment';
const Accountmanagement = () => {
  const { TabPane } = Tabs;
  const { user, setUserData } = useUser()

  // const getUserInfo = async () => {
    // try {
      // const res  = await axios.get(`/public/facebook-users/${user.user.id}`)
      // console.log(res.data);
      // const latestPaymentId = res.data.paymentData[res.data.paymentData.length - 1].id
      // const latestPackageId = res.data.packageData[res.data.packageData.length - 1].id
      // const latestPackageEndAt = res.data.packageData[res.data.packageData.length - 1].endAt
    //  await getInfo(latestPaymentId,latestPackageId,latestPackageEndAt)
    // } catch (error) {
      // console.log(error)
    // }
  // }
  const getPurchaseData = async () => {
    try {
      const res3 = await axios.get(`/public/purchases/${user.user.id}/facebook-user`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      const res = await axios.get(`/public/orders/${user.user.id}/facebook-user`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      const res1 = await axios.get(`/public/order-histories/${user.user.id}/facebook-user`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      const res2 = await axios.get(`/public/orders/${user.user.order.id}`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      // console.log(res3.data);
     await setUserData({
        ...user,
        order:res2.data.data,
        orders:res.data.data.results,
        purchases:res3.data.data,
        orderHistory:res1.data.data.results
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    // getUserInfo()
    user.user.id && getPurchaseData()
  },[])

  return (
    <div className='page-wrapper'>
      <div className='content ' style={{margin:"0 150px"}}>
          <Tabs size='large' defaultActiveKey='1'>
              <TabPane tab="รายละเอียดสมาชิก" key="1">
                <MemberDetails />
              </TabPane>
              <TabPane tab="รายละเอียดการชำระเงิน" key="2">
                <strong className='fs-2'>สถานะสมาชิกของคุณ</strong>
                <PaymentDetails />
              </TabPane>
          </Tabs>
      </div>
    </div>
  )
}

export default Accountmanagement