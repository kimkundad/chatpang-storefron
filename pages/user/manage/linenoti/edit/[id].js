import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChevronLeft, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { Avatar, Divider, InputNumber, Select } from 'antd'

import Sidebar from '../../../../../components/Sidebar'
import PageDropdown from '../../../../../components/PageDropdown'
import axios from '../../../../api/axios'
import useUser from '../../../../../Hooks/useUser'

const Edit = () => {
  const router = useRouter()

  const [pageID, setPageID] = useState('')
  const [lineName, setLineName] = useState('')
  const [lineAccessToken, setLineAccessToken] = useState('')
  const [lineTimer, setLineTimer] = useState(0)
  const { Option } = Select
  const [timeUnit, setTimeUnit] = useState('s')
  const [time, setTime] = useState()
  const id = router.query.id
console.log(id);
  const onSubmit = async () => {
    const data = {
      // pageId: pageID,
      // lineName: lineName,
      // lineAccessToken: lineAccessToken,
      // lineTimer: lineTimer,

      facebookUser: user.facebookUserId,
      token: lineAccessToken,
      name: lineName,
      duration: lineTimer,
      pages: [pageID],
      status: 'inactive',
    }
    // console.log(data)
    try {
      const res = await axios.put(`/public/line-notifications/${id}`, data, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      // console.log(res.data);
    } catch (error) {
      console.log(error)
    }
  }
  const onChangeTimeUnit = (value) => {
    // console.log(value)
    setTimeUnit(value)
    setTime()
  }

  const selectAfter = (
    <Select defaultValue={timeUnit} style={{ width: 100 }} onChange={onChangeTimeUnit}>
      <Option value="s">วินาที</Option>
      <Option value="m">นาที</Option>
      <Option value="h">ชั่วโมง</Option>
    </Select>
  )

  function onChangeTime(value) {
    setTime(value)
    let mili = 0
    switch (timeUnit) {
      case 's':
        mili = value * 1000
        break
      case 'm':
        mili = value * 60 * 1000
        break
      case 'h':
        mili = value * 60 * 60 * 1000
        break
      default:
        break
    }
    // console.log(mili)
    setLineTimer(mili)
  }
  //* select page by id
  const onSelect = (id) => {
    // console.log(id)
    setPageID(id)
  }
  const getLineList = async () => {
    try {
      const res = await axios.get(`/public/line-notifications/${id}`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      // console.log(res.data.notifications);
      // setData(res.data.data.results)
      let data = res.data.data.results
      setLineName(data.name)
      setLineTimer(data.duration)
      setPageID(data.pages)
      setLineAccessToken(data.token)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getLineList()
  }, [])
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Sidebar />
        <div className="userpage-wrapper text-center">
          <div className="page-header">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <span onClick={() => router.back()} className="userBackButton">
                  <FontAwesomeIcon className="me-2-md" icon={faChevronLeft} />
                  <span className="textBTN">ย้อนกลับ</span>
                </span>
                <span className="text-uppercase userDropdown">
                  <PageDropdown onSelect={onSelect} />
                </span>
              </div>
            </div>
            <div className="row mx-auto position-relative g-3 mt-2">
              {/* <div className="lineDetail col-12 mt-3"> */}
              <div className="col-xs-12 d-flex flex-column">
                <strong className="text-uppercase">แจ้งเตือนผ่าน Line Notify</strong>
                <span className="text-secondary">
                  แจ้งเตือนข้อความที่ยังไม่มีคนอ่าน ผ่านทางไลน์กลุ่มรู้จำนวนข้อความที่ค้างไว้ ลูกค้าไม่ต้องรอนาน
                </span>
              </div>
              <div className="col-md-4 text-end">
                <label htmlFor="lineName">ชื่อกลุ่มไลน์</label>
              </div>
              <div className="col-md-4 w-md-70 lineTokenInput  ms-md-auto">
                <input
                  value={lineName}
                  onChange={(e) => setLineName(e.target.value)}
                  className="mt-2"
                  type="text"
                  name="lineName"
                  id="token"
                />
              </div>
              <div className="col-md-12 w-auto d-flex mx-auto lineButtonContainer">
                <button onClick={() => onSubmit()} className="lineCustomBtn">
                  บันทึก
                </button>
                <button className="lineCustomBtn">ยกเลิก</button>
              </div>
              {/* </div> */}
            </div>
          </div>
          <Divider />
          <div className="row ">
            <div className="col-md-3 flex-column flex-md-row ms-md-auto lineTokenHeader">
              <strong className="d-inline-block">ใส่ Line Token</strong>
            </div>
            <div className="col-md-6 d-flex flex-xs-column lineTokenHeader">
              <span className="text-secondary">
                <FontAwesomeIcon icon={faExclamationCircle} /> <i>คลิกเพื่อดูวิดีโอการขอ Token</i>{' '}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 lineTokenInput  mx-md-auto flex-column flex-md-row">
              <input
                value={lineAccessToken}
                onChange={(e) => setLineAccessToken(e.target.value)}
                className="mt-2"
                type="text"
                id="token"
              />
              <button className="lineCustomBtn mt-2">บันทึก Token</button>
            </div>
          </div>
          <Divider />
          <div className="row">
            <div className="col-md-6 col-xs-12 mx-md-auto">
              <div className="lineTimingHeader">
                <strong>แจ้งเข้าไลน์กลุ่ม เมื่อยังไม่มีใครตอบลูกค้านานเกิน...</strong>
              </div>
              <div className="lineTimingInput">
                <InputNumber
                  controls={true}
                  value={time}
                  min={1}
                  max={timeUnit === 'h' ? 24 : 60}
                  addonAfter={selectAfter}
                  onChange={onChangeTime}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
