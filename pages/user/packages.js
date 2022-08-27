import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
//component
import Stepper from '../../components/Stepper'
import CardPrice from '../../components/CardPrice'
import axios from '../api/axios'
import useUser from '../../Hooks/useUser'
import moment from 'moment'
const Packages = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  const [selected, setSelected] = useState(0)
  const [data, setData] = useState([])
  const [isError, setIsError] = useState(false)

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
      console.log(error)
    }
  }
  function setSelectedPackage(id) {
    // console.log(id)
    setIsError(false)
    if (selected === id) {
      setSelected(null)
    } else {
      setSelected(id)
    }
  }

  const onNext = async () => {
    const pack = data.filter((item) => item.id === selected)
    // user.package = pack[0].item
    // const date = new Date()
    //create Order
    const userOrder = {
      facebookUser: user.user.id,
      payment: {
        amount: pack[0].price,
        // paidDate: date.toLocaleDateString(),
        paidDate: moment().format("DD/MM/YYYY"),
        channel: 'GBPrimePay',
      },
      package: {
        _id: pack[0].id,
        name: pack[0].name,
        price: pack[0].price,
        quotaLimit: pack[0].quota_limit,
        pageLimit: pack[0].page_limit,
        lineNotificationLimit: pack[0].line_notification_limit,
        days: pack[0].days,
      },
      discount: 0,
      net: pack[0].price,
    }
    console.log(userOrder)
    try {
      const res = await axios.post(`/public/orders`, userOrder, {
        headers: { Authorization: `Bearer ${user.accessToken}` },
      })
      console.log(res.data)
      await setUserData({ ...user, package: pack[0], order: res.data.data })
      router.push('/user/payment/paymentoptions')
    } catch (error) {
      setIsError(true)
      console.log(error)
    }

    // await setUserData({ ...user, package: pack[0] })
  }
  const getFacebookUserData = async () => {
    try {
      const res = await axios.get(`/public/facebook-users/${user.userId}`)
      // console.log(res.data);
      const { facebook_id } = res.data.data
      await setUserData({ ...user, user: res.data.data, facebookUserId: facebook_id })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    user.userId && getFacebookUserData()
  }, [])
  useEffect(() => {
    getPackages()
  }, [])
  return (
    <div className="nosidebar-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 stepperContainer d-flex justify-content-center">
            <Stepper step="0" />
          </div>
        </div>
        {isError&&<div className="col-12 text-center">
          <span className="text-danger">ไม่สามารถสร้างออเดอร์ได้ ลองล็อคอินอีกครั้ง หรือ ติดต่อแอดมิน</span>
        </div>}
        <div className="col-md-12 cardPriceContainer">
          <CardPrice data={data} selected={selected} setSelectedPackage={setSelectedPackage} />
        </div>
        <div className="row justify-content-center">
          <div style={{ width: '40%' }} className="col-12 d-flex justify-content-md-end justify-content-center mt-5">
            <button onClick={() => onNext()} className="customBTN" disabled={selected === 0 ? true : false}>
              ต่อไป
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
