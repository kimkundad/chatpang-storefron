import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
//component
import Stepper from '../../components/Stepper'
import CardPrice from '../../components/CardPrice'
import axios from '../api/axios'
import useUser from '../../Hooks/useUser'
const Packages = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  const [selected, setSelected] = useState(0)
  const [data, setData] = useState([])
  function setSelectedPackage(id) {
    if (selected === id) {
      setSelected(0)
    } else {
      setSelected(id)
    }
  }
  async function getPackages() {
    try {
      const res = await axios('/public/packages')
      setData(res.data.data.results)
    } catch (error) {
      console.log(error);
    }
  }
  function setSelectedPackage(id) {
    console.log(id);
    if (selected === id) {
      setSelected(null)
    } else {
      setSelected(id)
    }
  }

  const onSubmit = async () => {
    const pack = data.filter(item => item.item._id === selected)
    user.package = pack[0].item
    await setUserData({...user,package:pack[0].item})
    router.push('/user/payment/paymentoptions')
  }
  useEffect(()=>{
    getPackages()
  },[])
  return (
    <div className="nosidebar-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 stepperContainer d-flex justify-content-center">
            <Stepper step="0" />
          </div>
        </div>
        {/* <div className="row justify-content-center mt-5"> */}
          <div className="col-md-12 cardPriceContainer">
            <CardPrice data={data} selected={selected} setSelectedPackage={setSelectedPackage} />
          </div>
        {/* </div> */}
        <div className="row justify-content-center">
          <div style={{ width: '40%' }} className="col-12 d-flex justify-content-md-end justify-content-center mt-5">
            <button onClick={() => onSubmit()} className="customBTN" disabled={selected===0?true:false}>
              ต่อไป
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
