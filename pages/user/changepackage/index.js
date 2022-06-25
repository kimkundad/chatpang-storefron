import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import CardPrice from '../../../components/CardPrice'
import useUser from '../../../Hooks/useUser'
import axios from '../../api/axios'

const Index = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  const [selected, setSelected] = useState(0)
  const [data, setData] = useState([])
  const [newPackageList, setNewPackageList] = useState([])
  //*check status
  const [isSuccess, setIsSuccess] = useState({
    show: false,
    isSuccess: false,
    text: '',
  })
  function setSelectedPackage(id) {
    if (selected === id) {
      setSelected(0)
    } else {
      setSelected(id)
    }
  }
  async function getPackages() {
    try {
      const res = await axios('/packages')
      setData(res.data.packages)
    } catch (error) {
      console.log(error)
    }
  }
  const getEndDate = async () => {
    let date = new Date()
    date.setDate(date.getDate() + 30)
    return date
  }

  function setSelectedPackage(id) {
    // console.log(id)
    if (selected === id) {
      setSelected(null)
    } else {
      setSelected(id)
    }
  }
  // const setPackageList = async (id) => {
  //   const tempArr = user?.user?.packageData
  //   // console.log(tempArr)
  //   tempArr.push({
  //     id: id,
  //     endAt: await getEndDate(),
  //   })
  //   setNewPackageList(tempArr)
  // }
  const onSubmit = async () => {
    const pack = await data.filter((item) => item.item._id === selected)
    const packInfo = pack[0].item
    // console.log(packInfo)
    // await setPackageList(selected)

    const updatePayment = {
      number: user?.user?.cardNo,
      month: user?.user?.cardMonth,
      year: user?.user?.cardYear,
      code: user?.user?.cardCode,
      name: user?.user?.cardName,
      email: user?.user?.email,
      type: 'card',
      referenceNo: '20171128001',
      amount: packInfo?.price,
      //   phone: user?.user?.phoneNo,
      detail: packInfo?.name,
    }
    // console.log(updatePayment)
    try {
      const res1 = await axios.post('/payments', updatePayment, { headers: { 'Content-Type': 'application/json' } })
      const payment = res1.data.createdPayment
      // console.log(payment)
      const updateData = {
        // name: user?.user?.name,
        // email: user?.user?.email,
        // imgProfile: user?.user?.imgProfile,
        // facebookToken: user?.user?.facebookToken,
        paymentData: [
          ...user?.user?.paymentData,
          {
            id: payment?._id,
            endAt: await getEndDate(),
            name: packInfo?.name,
            price: packInfo?.price,
            type: 'card',
          },
        ],
        packageData: [
          ...user?.user?.packageData,
          {
            id: selected,
            endAt: await getEndDate(),
          },
        ],
      }
      // console.log(updateData)
      const res = await axios.patch(`/user/updateUser/${user?.user?._id}`, updateData, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user?.accessToken}` },
      })
      // console.log(res.data)
      setIsSuccess({
        show: true,
        isSuccess: true,
        text: 'เปลี่ยนแพ็คเกจสำเร็จ',
      })
      handleNotify()
    } catch (error) {
      console.log(error)
      setIsSuccess({
        show: true,
        isSuccess: false,
        text: 'เปลี่ยนแพ็คเกจไม่สำเร็จ',
      })
      handleNotify()
    }
    // await setUserData({ ...user, package: pack[0].item })
  }
  const handleNotify = () => {
    setTimeout(() => {
      setIsSuccess({
        show: false,
        isSuccess: false,
        text: '',
      })
      router.back()
    }, 2000)
  }
  useEffect(() => {
    getPackages()
  }, [])
  return (
    <div className="nosidebar-wrapper">
      {isSuccess.show && (
        <Alert className="text-center" variant={isSuccess.isSuccess ? 'success' : 'danger'}>
          <span>{isSuccess.text}</span>
        </Alert>
      )}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 stepperContainer d-flex justify-content-center">
            <h3>เปลี่ยนแพ็คเกจ</h3>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div
            style={{ minHeight: '450px' }}
            className="col-md-12 d-flex justify-content-center text-center flex-md-row flex-column"
          >
            <CardPrice data={data} selected={selected} setSelectedPackage={setSelectedPackage} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 d-flex justify-content-md-end justify-content-center mt-5">
            <button onClick={() => onSubmit()} className="customBTN" disabled={selected === 0 ? true : false}>
              บันทึก
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
