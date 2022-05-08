import React from 'react'
import { Tabs } from 'antd';
import MemberDetails from '../components/subUser/MemberDetails';
import PaymentDetails from '../components/subUser/PaymentDetails';
const Accountmanagement = () => {
  const { TabPane } = Tabs;
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