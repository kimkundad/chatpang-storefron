import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Checkbox } from 'antd'
import Sidebar from '../../../components/Sidebar'
import axios from '../../api/axios'
import useUser from '../../../Hooks/useUser'

const initData = ['Board_1', 'Board_2', 'Board_3', 'Board_4', 'Board_5', 'Board_6', 'Board_7', 'Board_8']

const Index = () => {
  const { user } = useUser()
  const [checkAll, setCheckAll] = useState(false)
  const [checkList, setCheckList] = useState([])
  const [data, setData] = useState([])
  console.log(user);
  const onCheckAll = () => {
    setCheckList(!checkAll ? data : [])
    setCheckAll(!checkAll)
  }

  const onCheck = async (e) => {
    const value = e.target.name
    console.log(value)
    if (checkList.indexOf(value) === -1) {
      await setCheckList([...checkList, value])
    } else {
      await setCheckList((prev) => prev.filter((v) => v !== value))
    }
  }

  const getPageList = async () => {
    try {
      const res = await axios.get('/pages', { headers: { Authorization: 'Bearer ' + user?.accessToken } })
      console.log(res.data)
      const arr = res.data.pages.map((item) => item.item)
      setData(arr)
      console.log(arr)
    } catch (error) {
      console.log(error)
    }
  }

  const renderData = () => {
    if (data?.length === 0) {
      return <div>ไม่มีข้อมูล</div>
    } else {
      return data.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.pageName}</td>
            <td>
              <input type="checkbox" name={item.pageId} onClick={(e) => onCheck(e)} checked={checkList.includes(item.pageId)} />
            </td>
          </tr>
        )
      })
    }
  }
  useEffect(()=>{
    getPageList()
  },[])
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Sidebar />
        <div className="userpage-wrapper text-center">
          <div className="page-header">
            <div className="row">
              <div className="col-md-12">
                <h3 className="page-title">กรุณาเลือกเพจ เพื่อทำการตั้งค่า Chatbot</h3>
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
