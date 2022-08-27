import React, { useEffect, useState } from 'react'
import { Button, Table } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import axios from '../../api/axios'
import useUser from '../../../Hooks/useUser'

const Pagemanagement = () => {
  const router = useRouter()
  const [data, setData] = useState([])
  const [isAddAble, setIsAddAble] = useState(true)
  const { user, setUserData } = useUser()
  const [quotaInfo, setQuotaInfo] = useState({})
  // const facebookUserId = router.query.fb
  // console.log(user)
  const getQuotaInfo = async () => {
    try {
      const res = await axios.get(`/public/purchases/${user?.user?.id}/quota`, {
        headers: { Authorization: 'Bearer ' + user?.accessToken },
      })
      // console.log(res.data);
      // const arr = res.data.pages.map((item) => item.item)
      // setData(arr)
      setQuotaInfo(res.data.data)
      // console.log(arr);
    } catch (error) {
      console.log(error)
    }
  }

  //* check able to add more than 1 page
  const checkAddPage = () => {
    setIsAddAble(1 < user?.user?.pages)
    // return user?.user.status === 'inactive'
  }

  const onDeletePage = (id) => {
    try {
      const res = axios.delete(`/public/facebook-pages/${id}`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    
  }
  const column = [
    {
      title: <strong className="fs-4">เพจของคุณ ({data?.length})</strong>,
      dataIndex: 'name',
      key: 'name',
      render: (text) => <p className="fs-5">{text}</p>,
    },
    {
      title: <strong className="fs-4">คอมเม้นต์</strong>,
      dataIndex: 'comments',
      key: 'comments',
      render: (text) => <p className="fs-5">{text}</p>,
    },
    {
      title: <strong className="fs-4">เงื่อนไขทั้งหมด</strong>,
      dataIndex: 'tasks',
      key: 'tasks',
      render: (text) => <p className="fs-5">{text.length}</p>,
    },
    {
      title: <strong className="fs-4">จัดการ</strong>,
      dataIndex: 'id',
      key: 'id',
      render: (text) => <p onClick={()=>onDeletePage(text)} className="fs-5 text-danger">ลบ</p>,
    },
  ]

  const getAuthPages = () => {
    console.log('click')
    // window.open('https://chat-pang-api-fy5xytbcca-as.a.run.app/facebook/pages')
    router.replace('https://chat-pang-api-fy5xytbcca-as.a.run.app/facebook/pages')
  }

  const onAddPage = () => {
    console.log("add pages");
    router.replace('https://chat-pang-api-fy5xytbcca-as.a.run.app/facebook/pages')

  }
  // console.log(user);

  const getPurchaseData = async () => {
    try {
      const res3 = await axios.get(`/public/purchases/${user.user.id}/facebook-user`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      const res = await axios.get(`/public/orders/${user.user.id}/facebook-user`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      const res1 = await axios.get(`/public/order-histories/${user.user.id}/facebook-user`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      const res2 = await axios.get(`/public/orders/${user.user.order.id}`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      const res4 = await axios.get(`/public/facebook-pages/${user.userId}/facebook-user`, {
        headers: { Authorization: 'Bearer ' + user?.accessToken },
      })
      console.log(res4.data);
      await setUserData({
        ...user,
        order: res2.data.data,
        orders: res.data.data.results,
        purchases: res3.data.data,
        orderHistory: res1.data.data.results,
        pages: res4.data.data.results,
      })
      setData(res4.data.data.results)
      checkAddPage()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getQuotaInfo()
    getPurchaseData()
  }, [])
  return (
    <div className="page-wrapper">
      <div className="content" style={{ margin: '0 150px' }}>
        <div className="row">
          <div className="col-12">
            <div className="numberComment d-flex flex-column justify-content-center align-items-center">
              {quotaInfo ? (
                <>
                  <strong>
                    {quotaInfo.total_current_reply} / {quotaInfo.total_quota_limit}
                  </strong>
                  <span>คอมเม้นต์วันนี้</span>
                </>
              ) : (
                <span>ไม่มีข้อมูล</span>
              )}
            </div>
          </div>
          <div className="col-12">
            {user?.user?.pages !== 0 ? (
              <Button
                style={{ fontSize: '1.5rem', height: 'fit-content', width: '190px' }}
                className="my-4 d-flex justify-content-center align-items-center"
                type="primary"
                icon={<SettingOutlined />}
                onClick={() => onAddPage()}
                disabled={isAddAble}
              >
                เพิ่มหรือลบเพจ
              </Button>
            ) : (
              <Button
                style={{ fontSize: '1.5rem', height: 'fit-content', width: 'auto' }}
                className="my-4 d-flex justify-content-center align-items-center"
                type="primary"
                icon={<SettingOutlined />}
                onClick={() => getAuthPages()}
              >
                ขออนุญาตเข้าถึงเพจจาก Facebook
              </Button>
            )}
          </div>
          <span className="text-secondary fs-5">กดเลือกเพจทำการตั้งค่าการตอบคอมเม้นต์ และดึงคอมเม้นต์เข้า inbox</span>
        </div>
        <div className="row">
          <div className="table-responsive">
            <Table dataSource={data} columns={column} bordered />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagemanagement
