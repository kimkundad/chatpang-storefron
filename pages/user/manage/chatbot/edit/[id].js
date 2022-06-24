import React, { useEffect, useState, useRef } from 'react'
import Sidebar from '../../../../../components/Sidebar'

import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Avatar, Divider, Input, Switch } from 'antd'
import { InputTags } from 'react-bootstrap-tagsinput'
import axios from '../../../../api/axios'
import useUser from '../../../../../Hooks/useUser'
import PAxios from 'axios'
const Edit = () => {
  const router = useRouter()
  const { user } = useUser()
  const id = router.query.id
  const { TextArea } = Input
  const [pageID, setPageID] = useState(router.query.pageId)

  const hiddenfileInbox = useRef(null)
  const hiddenfileComment = useRef(null)
  const [campaignName, setCampaignName] = useState('')
  const [txtInboxComment, setTxtInboxComment] = useState('')
  const [fileInboxComment, setFileInboxComment] = useState('')
  const [isInboxComment, setIsInboxComment] = useState(false)
  const [txtComment, setTxtComment] = useState('')
  const [fileComment, setFileComment] = useState('')
  const [isComment, setIsComment] = useState(false)
  const [isLikeComment, setIsLikeComment] = useState(false)
  const [isDuplicateComment, setIsDuplicateComment] = useState(false)
  const [isHideComment, setIsHideComment] = useState(false)
  const [words, setWords] = useState('')
  const [tags, setTags] = useState('')
  const [hiddenWords, setHiddenWords] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const regExURL = /https?:\/\//
    const pathInbox = regExURL.test(fileInboxComment) ? fileInboxComment : await getImagePath(fileInboxComment)
    const pathComment = regExURL.test(fileComment) ? fileComment : await getImagePath(fileComment)
    const data = {
      campaignName: campaignName,
      txtInboxComment: txtInboxComment,
      fileInboxComment: pathInbox,
      isInboxComment: isInboxComment,
      txtComment: txtComment,
      fileComment: pathComment,
      isComment: isComment,
      isLikeComment: isLikeComment,
      isDuplicateComment: isDuplicateComment,
      isHideComment: isHideComment,
      txtData: [
        {
          txtSpecWord: words,
          txtSpecHashTag: tags,
          txtHideWord: hiddenWords,
        },
      ],
    }
    console.log(data)
    try {
      const res = await axios.patch(`/chatbots/${id}`,data, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`
        }
      })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }

  }

  const setImageInbox = (e) => {
    console.log(e.target.files[0])
    setFileInboxComment(e.target.files[0])
  }
  const setImageComment = (e) => {
    console.log(e.target.files[0])
    setFileComment(e.target.files[0])
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
  const getChatSettingById = async () => {
    try {
      const res = await axios.get(`/chatbots/detail/${id}`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      console.log(res.data)
      const data = res.data
      setCampaignName(data.campaignName)
      setTxtInboxComment(data.txtInboxComment)
      setFileInboxComment(data.fileInboxComment)
      setIsInboxComment(data.isInboxComment)
      setTxtComment(data.txtComment)
      setFileComment(data.fileComment)
      setIsComment(data.isComment)
      setIsLikeComment(data.isLikeComment)
      setIsDuplicateComment(data.isDuplicateComment)
      setIsHideComment(data.isHideComment)
      setWords(data.txtData[0].txtSpecWord)
      setTags(data.txtData[0].txtSpecHashTag)
      setHiddenWords(data.txtData[0].txtHideWord)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getChatSettingById()
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
          <div className="row g-3">
            <div className="col-md-3 commentHeader">
              <strong className="ms-3">ข้อความตอบเข้าอินบ็อกซ์</strong>
              <Switch
                style={{ width: 'fit-content' }}
                size="small"
                value={isInboxComment}
                checked={isInboxComment}
                onChange={(e) => setIsInboxComment(!isInboxComment)}
              />
            </div>
            <div className="col-md-6 commentInput">
              <TextArea
                showCount
                value={txtInboxComment}
                onChange={(e) => setTxtInboxComment(e.target.value)}
                maxLength={200}
                placeholder="พิมพ์ข้อความที่นี้..."
                autoSize={{ minRows: 4, maxRows: 6 }}
              />
            </div>
            <div className="col-md-2 uploadComment">
              <input
                ref={hiddenfileInbox}
                type="file"
                name="fileInbox"
                className="inputfile"
                accept="image/*"
                onChange={(e) => setImageInbox(e)}
              />
              <label onClick={() => hiddenfileInbox.current.click()} htmlFor="file">
                UPLOAD
              </label>
            </div>
          </div>
          <Divider />
          <div className="row text-center g-3">
            <div className="col-md-3 commentHeader">
              <strong className="ms-3">คอมเม้นต์ใต้โพสต์</strong>
              <Switch
                style={{ width: 'fit-content' }}
                size="small"
                value={isComment}
                checked={isComment}
                onChange={() => setIsComment(!isComment)}
              />
            </div>
            <div className="col-md-6 commentInput">
              <TextArea
                showCount
                value={txtComment}
                onChange={(e) => setTxtComment(e.target.value)}
                maxLength={200}
                placeholder="พิมพ์ข้อความที่นี้..."
                autoSize={{ minRows: 4, maxRows: 6 }}
              />
              <div className="toggleCommentOptions">
                <div>
                  <Switch
                    size="small"
                    value={isLikeComment}
                    checked={isLikeComment}
                    onChange={() => setIsLikeComment(!isLikeComment)}
                  />
                  <strong className="ms-3">ถูกใจคอมเม้นต์</strong>
                </div>
                <div>
                  <Switch
                    size="small"
                    value={isDuplicateComment}
                    checked={isDuplicateComment}
                    onChange={() => setIsDuplicateComment(!isDuplicateComment)}
                  />
                  <strong className="ms-3">ไม่ตอบซ้ำคนเดิม</strong>
                </div>
                <div>
                  <Switch
                    size="small"
                    value={isHideComment}
                    checked={isHideComment}
                    onChange={() => setIsHideComment(!isHideComment)}
                  />
                  <strong className="ms-3">ซ่อนคอมเม้นต์</strong>
                </div>
              </div>
            </div>
            <div className="col-md-2 uploadComment">
              <input
                ref={hiddenfileComment}
                type="file"
                name="fileInbox"
                className="inputfile"
                accept="image/*"
                onChange={(e) => setImageComment(e)}
              />
              <label onClick={() => hiddenfileComment.current.click()} htmlFor="file">
                UPLOAD
              </label>
            </div>
          </div>
          <Divider />
          <div className="row">
            <div className="col-md-6 mx-auto chatWording">
              <div className="d-flex my-3">
                <strong className="me-3">ตอบเฉพาะคำเหล่านี้</strong>
                <div className="chatWordInput">
                  <input type="text" value={words} onChange={(e) => setWords(e.target.value)} name="words" />
                </div>
              </div>
              <div className="d-flex my-3">
                <strong className="me-3">ตอบเฉพาะแฮทแท็กนี้</strong>
                <div className="chatWordInput">
                  <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} name="specificWord" />
                </div>
              </div>
              <div className="d-flex my-3">
                <strong className="me-3">ซ่อนคำเหล่านี้</strong>
                <div className="chatWordInput">
                  <input type="text" value={hiddenWords} onChange={(e) => setHiddenWords(e.target.value)} name="tags" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
