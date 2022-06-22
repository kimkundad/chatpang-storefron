import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faUser,
  faChevronLeft,
  faCircleChevronDown,
  faCircleChevronUp,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import { Avatar, Divider, Input, Switch } from 'antd'
import { InputTags } from 'react-bootstrap-tagsinput'

import { useRouter } from 'next/router'
import Sidebar from '../../../../../components/Sidebar'
import axios from '../../../../api/axios'
import useUser from '../../../../../Hooks/useUser'

const Edit = () => {
  const router = useRouter()
  const { user } = useUser()
  const id = router.query.id
  const { TextArea } = Input

  const [img, setImg] = useState('')
  const [campaignName, setCampaignName] = useState('')
  const [details, setDetails] = useState({
    name: '',
    type: '',
  })
  const onSubmit = async (e) => {
    e.preventDefault()
    const data = {
      campaignName: campaignName,
      receptionDetail: [
        {
          name: details.name,
          type: 'text',
        },
        {
          name: details.type !== '' && (await getImagePath(details.type)),
          type: 'image',
        },
      ],
    }

    console.log(data)

    try {
      const res = await axios.post('/receptions', data, { headers: { Authorization: `Bearer ${user?.accessToken}` } })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getReceptionSetting = async () => {
    try {
      const res = await axios.get(`/receptions/detail/${id}`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      console.log(res.data)
      const data = res.data
      setCampaignName(data.campaignName)
      setImg(data.receptionDetail[1].name)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getReceptionSetting()
  }, [])
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Sidebar />
        <div className="userpage-wrapper text-center">
          <div className="page-header">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
                <span onClick={() => router.back()} className="userBackButton">
                  <FontAwesomeIcon className="me-2-md" icon={faChevronLeft} />
                  <span className="textBTN">ย้อนกลับ</span>
                </span>
                {/* <span className="text-uppercase userDropdown">
                  <Avatar className="me-2" icon={<FontAwesomeIcon icon={faUser} />} />
                  Board pang
                </span> */}
              </div>
            </div>
          </div>
          {/* content */}
          <div className="row g-3">
            <div className="col-md-4 text-md-end text-start">
              <strong className="me-3">ชื่อแคมเปญ</strong>
            </div>
            <div className="col-md-4 mx-auto chatNameInput">
              <input
                type="text"
                name="name"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                autoFocus={true}
              />
            </div>
            <div className="col-md-4 text-center chatButtonContainer">
              <button onClick={(e) => onSubmit(e)} className="chatCustomBtn">
                บันทึก
              </button>
              <button className="chatCustomBtn">ยกเลิก</button>
            </div>
          </div>
          <Divider />
          <div className="row g-md-3">
            <div className="col-md-3 col-xs-12 commentHeader">
              <strong className="ms-md-3 me-auto me-md-0">ข้อความ</strong>
            </div>
            <div className="col-md-6 col-9 commentInput">
              <TextArea
                showCount
                value={details.name}
                onChange={(e) => setDetails({ ...details, name: e.target.value })}
                maxLength={200}
                placeholder="พิมพ์ข้อความที่นี้..."
                autoSize={{ minRows: 4, maxRows: 6 }}
              />
            </div>
            <div className="col-md-2 col-2 d-flex justify-content-center align-items-center replyKeywordBtn">
              <div className="h-auto d-flex flex-column me-4">
                <span>
                  <FontAwesomeIcon icon={faCircleChevronUp} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faCircleChevronDown} />
                </span>
              </div>
              <div className="replyDeleteBTN">
                <span style={{ color: 'red' }}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </span>
              </div>
            </div>
          </div>
          <Divider />
          <div className="row g-md-3">
            <div className="col-md-3 col-xs-12 commentHeader">
              <strong className="ms-md-3 me-auto me-md-0">รูปภาพ</strong>
            </div>
            <div className="col-md-6 col-9 commentInput">
              {/* <TextArea
                
                showCount
                maxLength={200}
                placeholder="พิมพ์ข้อความที่นี้..."
                autoSize={{ minRows: 4, maxRows: 6 }}
              /> */}
              {img ? (
                <img width={50} src={img} alt="img" />
              ) : (
                <>
                  <input type="file" onChange={(e) => onUpload(e.target.files[0])} />
                  <label htmlFor="file">UPLOAD</label>
                </>
              )}
            </div>
            <div className="col-md-2 col-3 d-flex justify-content-center align-items-center replyKeywordBtn">
              <div className="h-auto d-flex flex-column me-4">
                <span>
                  <FontAwesomeIcon icon={faCircleChevronUp} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faCircleChevronDown} />
                </span>
              </div>
              <div className="replyDeleteBTN">
                <span style={{ color: 'red' }}>
                  <FontAwesomeIcon
                    onClick={() => {
                      setImg('')
                      setDetails({ ...details, type: '' })
                    }}
                    icon={faTrashAlt}
                  />
                </span>
              </div>
            </div>
          </div>
          <Divider />
          <div className="row g-3">
            <div className="col-md-4 mx-auto text-center replyButtonContainer">
              <button className="replyCustomBtn">
                <FontAwesomeIcon icon={faPlus} /> เพิ่มข้อความ
              </button>
              <button className="replyCustomBtn">
                <FontAwesomeIcon icon={faPlus} /> เพิ่มรูปภาพ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
