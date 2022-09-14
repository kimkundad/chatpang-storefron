import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import axios from '../../api/axios'
import useUser from '../../../Hooks/useUser'
import { Table, Form, ToastContainer } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import CusToasts from '../../../components/CusToasts'

const Pagemanagement = () => {
  const router = useRouter()
  const [data, setData] = useState([])
  const [isAddAble, setIsAddAble] = useState(true)
  const { user, setUserData } = useUser()
  const [quotaInfo, setQuotaInfo] = useState({})

  const [show, setShow] = useState(false)
  const [toastData, setToastData] = useState({ type: 'Light', text: '' })
  const toggleShow = () => setShow(!show)

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

  const onDeletePage = async (id) => {
    try {
      const res = await axios.delete(`/public/facebook-pages/${id}`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      // console.log(res)
      getPurchaseData()
    } catch (error) {
      console.log(error)
    }
  }

  const onAddPage = () => {
    console.log('add pages')
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
      // console.log(res4.data)
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
  const renderTable = () => {
    return data.map((item, index) => {
      return (
        <tr key={index}>
          <td className="text-center">
            <span>{item?.status}</span>
            <Form.Check
              type="switch"
              checked={item?.status === 'active'}
              // label={item.status}
              onClick={() => onChangeStatus(index, item)}
            />
          </td>
          <td>{item?.name}</td>
          {/* <td>{item?.name}</td> */}
          <td>
            <div>
              {/* <span onClick={() => onDeletePage(item.id)} className="userEditButton"> */}
              <FontAwesomeIcon onClick={() => onDeletePage(item.id)} style={{ cursor: 'pointer' }} className="text-danger" icon={faTrash} />
              {/* </span> */}
            </div>
          </td>
        </tr>
      )
    })
  }

  const onChangeStatus = async (index, item) => {
    // console.log(id)
    let temp = [...data]
    // temp[index].status = status ? 'inactive' : 'active'
    temp[index] = item?.status === 'active' ? await setStatusInActive(item.id) : await setStatusActive(item.id)
    setData(temp)
  }

  const setStatusActive = async (id) => {
    try {
      const res = await axios.patch(
        `/public/facebook-pages/${id}/active`,
        { id: id },
        {
          headers: { Authorization: `Bearer ${user?.accessToken}` },
        }
      )
      setToastData({ type: 'Light', text: 'อัพเดตสถานะเป็น active' })
      toggleShow()
      return res.data.data
    } catch (error) {
      console.log(error)
      setToastData({ type: 'Danger', text: 'ไม่สามารถอัพเดตสถานะได้' })
    }
  }

  const setStatusInActive = async (id) => {
    try {
      const res = await axios.patch(
        `/public/facebook-pages/${id}/inactive`,
        { id: id },
        {
          headers: { Authorization: `Bearer ${user?.accessToken}` },
        }
      )
      setToastData({ type: 'Light', text: 'อัพเดตสถานะเป็น Inactive' })
      toggleShow()
      return res.data.data
    } catch (error) {
      console.log(error)
      setToastData({ type: 'Danger', text: 'ไม่สามารถอัพเดตสถานะได้' })
    }
  }

  useEffect(() => {
    let isCancel = false
    if (!isCancel) {
      getQuotaInfo()
      getPurchaseData()
    }
    return () => {
      isCancel = true
    }
  }, [])
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="row">
          <div className="col-12">
            <ToastContainer position="top-end" className="toast-container">
              <CusToasts show={show} toggleShow={toggleShow} type={toastData.type} text={toastData.text} />
            </ToastContainer>
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
            {/* {user?.user?.pages !== 0 ? ( */}
            <Button
              style={{ fontSize: '1.5rem', height: 'fit-content', width: '190px' }}
              className="my-4 d-flex justify-content-center align-items-center"
              type="primary"
              icon={<SettingOutlined />}
              onClick={() => onAddPage()}
              // disabled={isAddAble}
            >
              เพิ่มหรือลบเพจ
            </Button>
            {/* ) : (
              <Button
                style={{ fontSize: '1.5rem', height: 'fit-content', width: 'auto' }}
                className="my-4 d-flex justify-content-center align-items-center"
                type="primary"
                icon={<SettingOutlined />}
                onClick={() => getAuthPages()}
              >
                ขออนุญาตเข้าถึงเพจจาก Facebook
              </Button>
            )} */}
          </div>
          <span className="text-secondary fs-5">กดเลือกเพจทำการตั้งค่าการตอบคอมเม้นต์ และดึงคอมเม้นต์เข้า inbox</span>
        </div>
        <div className="row">
          <div className="table-responsive">
            {/* <Table dataSource={data} columns={column} bordered /> */}
            <Table bordered>
              <thead>
                <tr>
                  <th className="text-center">สถานะ</th>
                  <th>เพจของคุณ ({data?.length})</th>
                  {/* <th>คอมเม้นต์</th> */}
                  <th>จัดการ</th>
                </tr>
              </thead>
              <tbody>{renderTable()}</tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagemanagement
