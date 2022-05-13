import React from 'react'

import Sidebar from '../../../components/Sidebar'
const index = () => {
  return (
    <div className='page-wrapper'>
        <div className='content container-fluid'>
            <Sidebar />
            <div className='userpage-wrapper'>
              <div className="page-header">
                <div className="row">
                  <div className="col">
                    <h3 className="page-title">กรุณาเลือกเพจ เพื่อทำการตั้งค่า Chatbot</h3>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default index