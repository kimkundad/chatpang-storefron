import React from 'react'
import Sidebar from '../../../components/Sidebar'

import Player from 'react-player'


const ad = () => {
  return (
    <div className='page-wrapper'>
        <div className='content container-fluid'>
            <Sidebar />
            <div className='userpage-wrapper'>
              <div className="page-header">
                <div className="row">
                  <div className="col text-center">
                    <h3 className="page-title">ระบบบรอดแคสต์เพิ่มยอดขาย ทั้งเพจ Facebook และ Line OA</h3>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-8 col-xs-12 mx-auto'>
                  <Player 
                  url='https://www.youtube.com/watch?v=1F9_V0ub2H8' 
                  controls={true}
                  muted={true}
                  className='w-auto my-4'
                  />
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center">
                    <h3 className="page-title">สอบถามได้ที่ LINE : @broadpang</h3>
                  </div>
                </div>
              </div>
              {/* content */}
            </div>
        </div>
    </div>
  )
}

export default ad