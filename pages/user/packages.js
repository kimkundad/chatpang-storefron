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
  // const [package, setPackage] = useState({})
  const [data, setData] = useState([])
  //   console.log(router.query.userData);
  function setSelectedPackage(id) {
    if (selected === id) {
      setSelected(0)
    } else {
      setSelected(id)
    }
  }
  // const data = [
  //   {
  //     id: 1,
  //     title: 'Basic',
  //     price: '290',
  //     isBestSell: false,
  //     options: ['ตอบคอมเม้นต์อัตโนมัติ', 'ดึงคอมเม้นต์เข้า Inbox', 'ใช้งานได้ 1 เพจ'],
  //   },
  //   {
  //     id: 2,
  //     title: 'VIP',
  //     price: '590',
  //     isBestSell: false,
  //     options: ['ตอบคอมเม้นต์อัตโนมัติ', 'ดึงคอมเม้นต์เข้า Inbox', 'ใช้งานได้ 3 เพจ'],
  //   },
  //   {
  //     id: 3,
  //     title: 'Business',
  //     price: '990',
  //     isBestSell: true,
  //     options: ['ตอบคอมเม้นต์อัตโนมัติ', 'ดึงคอมเม้นต์เข้า Inbox', 'ใช้งานได้ 10 เพจ'],
  //   },
  // ]
  async function getPackages() {
    try {
      const res = await axios('/packages')
      setData(res.data.packages)
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
        <div className="row justify-content-center mt-5">
          <div style={{ minHeight: '350px' }} className="col-md-12 d-flex justify-content-center flex-wrap">
            <CardPrice data={data} selected={selected} setSelectedPackage={setSelectedPackage} />
          </div>
        </div>
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
