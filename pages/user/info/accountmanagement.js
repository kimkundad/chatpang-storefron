import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import MemberDetails from '../../../components/subUser/MemberDetails';
import PaymentDetails from '../../../components/subUser/PaymentDetails';
import useUser from '../../../Hooks/useUser';
import axios from '../../api/axios';
const Accountmanagement = () => {
  const { TabPane } = Tabs;
  const { user, setUserData } = useUser()
  const getUserInfo = async () => {
    try {
      const res = await axios.get(`/user/getUser/${user?.user?._id}`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      // console.log(res.data);
     await getInfo(res.data.paymentData[0].id,res.data.packageData[0].id)
    } catch (error) {
      console.log(error)
    }
  }
  const getInfo = async (id,idPack) => {
    try {
      const res = await axios.get(`/payments/${id}`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      const resPack = await axios.get(`/packages/${idPack}`, {
              headers: { Authorization: `Bearer ${user?.accessToken}` },
            })
      // console.log(res.data);
      // console.log(resPack.data);
     await setUserData({
        ...user,
        payment:res.data,
        package:resPack.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getUserInfo()
  },[])

  return (
    <div className='page-wrapper'>
      <div className='content ' style={{margin:"0 150px"}}>
          <Tabs size='large' defaultActiveKey='1'>
              <TabPane tab="รายละเอียดสมาชิก" key="1">
                <MemberDetails />
              </TabPane>
              <TabPane tab="รายละเอียดการชำระเงิน" key="2">
                <strong className='fs-5'>สถานะสมาชิกของคุณ</strong>
                <PaymentDetails />
              </TabPane>
          </Tabs>
      </div>
    </div>
  )
}

export default Accountmanagement