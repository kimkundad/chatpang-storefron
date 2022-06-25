import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import CardPrice from '../../../components/CardPrice'
import useUser from '../../../Hooks/useUser'
import axios from '../../api/axios'

const Index = () => {
  const router = useRouter()
  const { user } = useUser()
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
      const res = await axios('/packages')
      setData(res.data.packages)
    } catch (error) {
      console.log(error)
    }
  }
  function setSelectedPackage(id) {
    console.log(id)
    if (selected === id) {
      setSelected(null)
    } else {
      setSelected(id)
    }
  }

  const onSubmit = async () => {
    const pack = data.filter((item) => item.item._id === selected)
    user.package = pack[0].item
    await setUserData({ ...user, package: pack[0].item })
    router.push('/user/payment/paymentoptions')
  }
  useEffect(() => {
    getPackages()
  }, [])
  return (
    <div className="nosidebar-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 stepperContainer d-flex justify-content-center">
            <h3>เปลี่ยนแพ็คเกจ</h3>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div style={{ minHeight: '450px' }} className="col-md-12 d-flex justify-content-center text-center flex-md-row flex-column">
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
