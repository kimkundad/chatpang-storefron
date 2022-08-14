import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Checkbox } from 'antd'
import Sidebar from '../../../components/Sidebar'
import axios from '../../api/axios'
import useUser from '../../../Hooks/useUser'

const Index = () => {
  const { user, setUserData } = useUser()
  const [checkAll, setCheckAll] = useState(false)
  const [checkList, setCheckList] = useState([])
  const [data, setData] = useState([])
  const onCheckAll = async () => {
    setCheckList(!checkAll ? data?.map((item) => item.id) : [])
    setCheckAll(!checkAll)
    await setUserData({
      ...user,
      selectedPage: !checkAll ? [...data] : [],
    })
  }

  const onCheck = async (e) => {
    const id = e.target.name
    // console.log(id)
    if (checkList.indexOf(id) === -1) {
      await setCheckList([...checkList, id])
      const item = data?.filter((item) => item.id === id)
      // console.log(item);
      user.selectedPage.push(item[0])
    } else {
      await setCheckList((prev) => prev.filter((v) => v !== id))
      user.selectedPage.filter((item) => item.id !== id)
    }
  }

  const getPageList = async () => {
    try {
      const res = await axios.get(`/public/facebook-pages/${user.facebookUserId}/facebook-user`, {
        headers: { Authorization: 'Bearer ' + user?.accessToken },
      })
      // console.log(res.data)
      // const arr = res.data.pages.map((item) => item.item)
      setData(res.data.data.results)
      // console.log(arr)
    } catch (error) {
      console.log(error)
    }
  }
  const renderData = () => {
    if (data?.length === 0) {
      return <p>ไม่มีข้อมูล</p>
    } else {
      return data.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>
              <input
                type="checkbox"
                name={item.id}
                onClick={(e) => onCheck(e)}
                checked={checkList?.includes(item?.pageId)}
              />
            </td>
          </tr>
        )
      })
    }
  }

  useEffect(() => {
    getPageList()
  }, [])
  return (
    <div className="page-wrapper">
      <div className="container container-fluid">
        <Sidebar />
        <div className="userpage-wrapper text-center">
          <div className="page-header">
            <div className="row">
              <div className="col-md-12">
                <h2 className="page-title">กรุณาเลือกเพจ เพื่อทำการตั้งค่า Chatbot</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 col-md-6 mx-auto my-3 d-flex">
              <span style={{ cursor: 'pointer' }} onClick={() => onCheckAll()} className="text-info  ms-auto">
                เลือกทั้งหมด
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-8 mx-auto d-flex">
              {/* <Checkbox.Group  onChange={onCheck} > */}
              <Table bordered hover style={{ minWidth: '60%' }}>
                <tbody>{renderData()}</tbody>
              </Table>
              {/* </Checkbox.Group> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
