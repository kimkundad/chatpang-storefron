import React, { useState, createRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faChevronLeft,
  faCircleChevronDown,
  faCircleChevronUp,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import { Divider, Input } from 'antd'
import { useRouter } from 'next/router'

import Sidebar from '../../../../components/Sidebar'
import useUser from '../../../../Hooks/useUser'
import PageDropdown from '../../../../components/PageDropdown'
import axios from '../../../api/axios'

const CreateWelcome = () => {
  const router = useRouter()
  const { user } = useUser()
  const [pageID, setPageID] = useState(router.query.pageId)
  const { TextArea } = Input
  const [img, setImg] = useState({})
  const [campaignName, setCampaignName] = useState('')
  const [details, setDetails] = useState([
    {
      name: '',
      type: 'text',
    },
    {
      name: '',
      type: 'image',
    },
  ])

  const onSubmit = async (e) => {
    e.preventDefault()
    await convertToImagePath()
    const data = {
      pageId: pageID,
      campaignName: campaignName,
      receptionDetail: details,
    }
    console.log(data)
    try {
      const res = await axios.post('/receptions', data, { headers: { Authorization: `Bearer ${user?.accessToken}` } })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const convertToImagePath = async () => {
    for (const item of details) {
      if (item.type === 'image') {
        item.name = await getImagePath(item.name)
      }
    }
    setDetails(details)
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

  const onSelect = (id) => {
    console.log(id)
    setPageID(id)
  }

  //* function handle text and image

  const inputRef = details.reduce((acc, value, index) => {
    acc[index] = createRef()
    return acc
  }, {})
  const onUpload = async (index, file) => {
    let temObj = { ...img }
    temObj[index] = URL.createObjectURL(file)
    setImg(temObj)
  }
  const onDeleteImg = async (index) => {
    let temObj = { ...img }
    delete temObj[index]
    setImg(temObj)
  }

  const onHandleChangeDetail = async (e, index) => {
    let temArr = [...details]
    if (temArr[index].type === 'text') {
      temArr[index].name = e.target.value
    } else {
      const file = e.target.files[0]
      console.log(file)
      await onUpload(index, file)
      temArr[index].name = file
    }
    setDetails(temArr)
  }
  const handleAddText = () => {
    setDetails([...details, { name: '', type: 'text' }])
  }
  const handleAddImage = () => {
    setDetails([...details, { name: '', type: 'image' }])
  }
  const onDeleteDetails = (index) => {
    let tempArr = [...details]
    tempArr.splice(index, 1)
    setDetails(tempArr)
    onDeleteImg(index)
  }
  const handleClickFileInput = (index) => {
    console.log(inputRef[index])
    inputRef[index].current.click()
  }
  const onClickNext = (index) => {
    console.log(inputRef[index].current)
    inputRef[index].current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'end',
    })
  }
  const renderTextInput = () => {
    return details.map((data, index) => {
      if (data.type === 'text') {
        return (
          <div key={index} className="row g-md-3 createContainer">
          {/* <> */}
            <div className="col-md-3 col-xs-12 commentHeader">
              <strong className="ms-md-3 me-auto me-md-0">ข้อความ</strong>
            </div>
            <div className="col-md-6 col-9 commentInput">
              <TextArea
                showCount
                value={details.name}
                onChange={(e) => onHandleChangeDetail(e, index)}
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
                  <FontAwesomeIcon onClick={() => onClickNext(index)} icon={faCircleChevronDown} />
                </span>
              </div>
              <div className="replyDeleteBTN">
                <span style={{ color: 'red' }}>
                  <FontAwesomeIcon onClick={() => onDeleteDetails(index)} icon={faTrashAlt} />
                </span>
              </div>
            </div>
          {/* </> */}
          </div>
        )
      }
    })
  }
  const renderImageInput = () => {
    return details.map((data, index) => {
      if (data.type === 'image') {
        return (
          <div key={index} className="row g-md-3 createContainer">
            <div className="col-md-3 col-xs-12 commentHeader">
              <strong className="ms-md-3 me-auto me-md-0">รูป</strong>
            </div>
            <div className="col-md-6 col-9 commentInput">
              {img[index] !== undefined ? (
                <div onClick={() => onDeleteImg(index)} className="uploadIMG">
                  <img width={100} src={img[index]} alt="img" />
                </div>
              ) : (
                <>
                  <input
                    type="file"
                    ref={inputRef[index]}
                    className="inputfile"
                    onChange={(e) => onHandleChangeDetail(e, index)}
                  />
                  <label onClick={() => handleClickFileInput(index)} htmlFor="file">
                    อัพโหลดรูป
                  </label>
                </>
              )}
            </div>
            <div className="col-md-2 col-2 d-flex justify-content-center align-items-center replyKeywordBtn">
              <div className="d-flex flex-column me-4">
                <span>
                  <FontAwesomeIcon icon={faCircleChevronUp} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faCircleChevronDown} />
                </span>
              </div>
              <div className="replyDeleteBTN">
                <span style={{ color: 'red' }}>
                  <FontAwesomeIcon onClick={() => onDeleteDetails(index)} icon={faTrashAlt} />
                </span>
              </div>
            </div>
          </div>
        )
      }
    })
  }
  //* function handle text and image
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
                <span className="text-uppercase userDropdown">
                  <PageDropdown onSelect={onSelect} />
                </span>
              </div>
            </div>
          </div>
          {/* content */}
          <div className="row g-3 createHeader">
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
          {renderTextInput()}
          <Divider />
          {renderImageInput()}
          <Divider />
          <div className="row g-3 justify-content-center">
            <div className="col-md-4 replyButtonContainer">
              <button onClick={handleAddText} className="replyCustomBtn">
                <FontAwesomeIcon icon={faPlus} />
                <span>เพิ่มข้อความ</span>
              </button>
            </div>
            <div className="col-md-4 text-center replyButtonContainer">
              <button onClick={handleAddImage} className="replyCustomBtn">
                <FontAwesomeIcon icon={faPlus} />
                <span>เพิ่มรูปภาพ</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateWelcome
