import React from 'react'
import Sidebar from '../../../components/Sidebar'

const ad = () => {
  return (
    <div className='page-wrapper'>
        <div className='content container-fluid'>
            <Sidebar />
            <div className='userpage-wrapper'>
              <div className="page-header">
                <div className="row">
                  <div className="col">
                    <h3 className="page-title">AD</h3>
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