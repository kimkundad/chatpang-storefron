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
import { useRouter } from 'next/router'

import axios from '../../../../api/axios'
import useUser from '../../../../../Hooks/useUser'
import Sidebar from '../../../../../components/Sidebar'

const Edit = () => {
  const router = useRouter()
  const { user } = useUser()
  const id = router.query.campaignId
  const { TextArea } = Input
  const [img, setImg] = useState('')
  const [campaignName, setCampaignName] = useState('')
  const [keywordName, setKeywordName] = useState('')
  const [details, setDetails] = useState({})

  //!กลับมาทำต่อ
  const onSubmit = async (e) => {
    e.preventDefault()
    const data = {
      campaignName: campaignName,
      keywordName: keywordName,
      keywordDetail: [
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
      const res = await axios.post('/keywords', data, { headers: { Authorization: `Bearer ${user?.accessToken}` } })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getKeywordSettingById = async () => {
    try {
      const res = await axios.get(`/keywords/detail/${id}`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      const data = res.data
      console.log(res.data)
      setCampaignName(data.campaignName)
      setKeywordName(data.keywordName)
      setDetails(
        {
          name: data.keywordDetail[0].name,
          type: 'text',
        },
        {
          name: data.keywordDetail[1].name,
          type: 'image',
        }
      )
      setImg(data.keywordDetail[1].name)
    } catch (error) {
      console.log(error)
    }
  }
  const getImagePath = async (file) => {
    const formData = new FormData()
    formData.append('image', file, file.name)
    try {
      const res = await axios.post('/configs/upload', formData)
      console.log(res.data)
      return res.data.data
    } catch (error) {
      console.log(error)
    }
  }
  const onClear = () => {
    setCampaignName('')
    setKeywordName('')
    setKeywordDetail('')
  }
  const onUpload = (file) => {
    setImg(URL.createObjectURL(file))
    setDetails({ ...details, type: file })
  }
  useEffect(() => {
    getKeywordSettingById()
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
            <div className="col-md-4 text-center order-md-0 order-3 chatButtonContainer">
              <button onClick={(e) => onSubmit(e)} className="chatCustomBtn">
                บันทึก
              </button>
              <button onClick={onClear} className="chatCustomBtn">
                ยกเลิก
              </button>
            </div>
            <div className="col-md-4 text-md-end text-start">
              <strong className="me-3">Keywords</strong>
            </div>
            <div className="col-md-4 chatNameInput">
              <input type="text" name="name" value={keywordName} onChange={(e) => setKeywordName(e.target.value)} />
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
                maxLength={200}
                value={details.name}
                onChange={(e) => setDetails({ ...details, name: e.target.value })}
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
