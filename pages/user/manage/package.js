import React, { useEffect, useState } from 'react'

import CardPrice from '../../../components/CardPrice'
import Sidebar from '../../../components/Sidebar'

import axios from '../../api/axios'
const Package = () => {
  const [selected, setSelected] = useState(null)
  const [data, setData] = useState([])
  async function getPackages() {
    try {
      const res = await axios('/packages')
      setData(res.data.packages)
    } catch (error) {
      console.log(error);
    }
  }
  function setSelectedPackage(id) {
    if (selected === id) {
      setSelected(null)
    } else {
      setSelected(id)
    }
  }

  useEffect(()=>{
    getPackages()
  },[])
  return (
    <div className="page-wrapper">
      <div className="container container-fluid">
        <Sidebar />
        <div className="userpage-wrapper">
          <div className="page-header">
            <div className="row">
              <div className="col text-center">
                <strong className="page-title packageHeader">แพ็คเกจสุดคุ้ม</strong>
              </div>
            </div>
          </div>
          <div className="row">
            <div style={{ minHeight: '380px' }} className="cardPriceContainer col-md-12 w-xs-25 d-md-flex justify-content-center">
              <CardPrice data={data} selected={selected} setSelectedPackage={setSelectedPackage} />
            </div>
          </div>
          {/* content */}
        </div>
      </div>
    </div>
  )
}

export default Package
