import React, { useEffect, useState, useRef } from 'react'
import Sidebar from '../../../../../components/Sidebar'

import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Divider, Input, Switch } from 'antd'
import axios from '../../../../api/axios'
import useUser from '../../../../../Hooks/useUser'
import { Alert } from 'react-bootstrap'
import TagsInput from '../../../../../components/tagsinput/TagsInput'
const Edit = () => {
  const router = useRouter()
  const { user } = useUser()
  const id = router.query.id
  const { TextArea } = Input
  const [pageID, setPageID] = useState(router.query.pageId)

  // const [img1, setImg1] = useState('')
  // const [img2, setImg2] = useState('')
  // const hiddenfileInbox = useRef(null)
  // const hiddenfileComment = useRef(null)

  const [campaignName, setCampaignName] = useState('')
  const [txtInboxComment, setTxtInboxComment] = useState('')

  // const [fileInboxComment, setFileInboxComment] = useState('')

  const [isInboxComment, setIsInboxComment] = useState(false)
  const [txtComment, setTxtComment] = useState('')

  // const [fileComment, setFileComment] = useState('')

  const [isComment, setIsComment] = useState(false)
  const [isLikeComment, setIsLikeComment] = useState(false)
  const [isDuplicateComment, setIsDuplicateComment] = useState(false)
  const [isHideComment, setIsHideComment] = useState(false)
  const [words, setWords] = useState([])
  const [tags, setTags] = useState([])
  const [hiddenWords, setHiddenWords] = useState([])
  const [facebookUserId, setFacebookUserId] = useState('')
  //*check status
  const [isSuccess, setIsSuccess] = useState({
    show: false,
    isSuccess: false,
    text: '',
  })
  const onSubmit = async (e) => {
    e.preventDefault()
    // const regExURL = /https?:\/\//
    // const pathInbox = regExURL.test(fileInboxComment) ? fileInboxComment : await getImagePath(fileInboxComment)
    // const pathComment = regExURL.test(fileComment) ? fileComment : await getImagePath(fileComment)
    const data = {
      messages: {
        active: isInboxComment,
        values: [txtInboxComment],
      },
      comments: {
        active: isComment,
        values: [txtComment],
      },
      keywords: words,
      hashtags: tags,
      hiddens: hiddenWords,
      name: campaignName,
      likeComment: isLikeComment,
      replySamePerson: isDuplicateComment,
      hideComment: isHideComment,
      facebookUser: user.facebookUserId,
    }
    // console.log(data)
    try {
      const res = await axios.put(`/campaigns/${id}`, data, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      })
      setCampaignName(res.data.data.name)
      setTxtInboxComment(res.data.data.messages.values[0])
      // setFileInboxComment('')
      setIsInboxComment(res.data.data.messages.active)
      setTxtComment(res.data.data.comment.values[0])
      // setFileComment('')
      setIsComment(res.data.data.comment.active)
      setIsLikeComment(res.data.data.like_comment)
      setIsDuplicateComment(res.data.data.reply_same_person)
      setIsHideComment(res.data.data.hide_comment)
      setWords(res.data.data.keywords)
      setTags(res.data.data.hashtags)
      setHiddenWords(res.data.data.hiddens)
      setFacebookUserId(res.data.data.facebook_user)
      setIsSuccess({
        show: true,
        isSuccess: true,
        text: 'แก้ไขแคมเปญสำเร็จ',
      })
      handleNotify()
      // console.log(res.data)
    } catch (error) {
      console.log(error)
      setIsSuccess({
        show: true,
        isSuccess: false,
        text: 'แก้ไขแคมเปญไม่สำเร็จ',
      })
      handleNotify()
    }
  }

  const handleNotify = () => {
    setTimeout(() => {
      setIsSuccess({
        show: false,
        isSuccess: false,
        text: '',
      })
      router.back()
    }, 2000)
  }
  // const setImageInbox = (e) => {
  //   // console.log(e.target.files[0])
  //   setFileInboxComment(e.target.files[0])
  //   setImg1(URL.createObjectURL(e.target.files[0]))
  // }
  // const setImageComment = (e) => {
  //   // console.log(e.target.files[0])
  //   setFileComment(e.target.files[0])
  //   setImg2(URL.createObjectURL(e.target.files[0]))
  // }
  // const getImagePath = async (file) => {
  //   const formData = new FormData()
  //   formData.append('image', file, file.name)
  //   try {
  //     const res = await axios.post('/configs/upload', formData)
  //     // console.log(res.data)
  //     return res.data.data
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const getChatSettingById = async () => {
    try {
      const res = await axios.get(`/campaigns/${id}`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      })
      // console.log(res.data)
      // const data = res.data.data
      setCampaignName(res.data.data.name)
      setTxtInboxComment(res.data.data.messages.values[0])
      // setFileInboxComment('')
      setIsInboxComment(res.data.data.messages.active)
      setTxtComment(res.data.data.comment.values[0])
      // setFileComment('')
      setIsComment(res.data.data.comment.active)
      setIsLikeComment(res.data.data.like_comment)
      setIsDuplicateComment(res.data.data.reply_same_person)
      setIsHideComment(res.data.data.hide_comment)
      setWords(res.data.data.keywords)
      setTags(res.data.data.hashtags)
      setHiddenWords(res.data.data.hiddens)
      setFacebookUserId(res.data.data.facebook_user)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getChatSettingById()
  }, [])
  return (
    <div className="page-wrapper">
      {isSuccess.show && (
        <Alert className="text-center" variant={isSuccess.isSuccess ? 'success' : 'danger'}>
          <span>{isSuccess.text}</span>
        </Alert>
      )}
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
            {/* <div className='mx-auto chatNameInput'> */}
            <div className="col-md-4 d-flex justify-content-md-end justify-content-center">
              <h4 className="me-3 text-md-end my-auto">ชื่อแคมเปญ</h4>
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
            {/* </div> */}
          </div>
          <Divider />
          <div className="row g-3">
            {/* <div className='col-md-8 mx-auto chatComment'> */}
            <div className="col-md-3 commentHeader">
              <h4 className="ms-md-3 me-2">ข้อความตอบเข้าอินบ็อกซ์</h4>
              <Switch
                style={{ width: 'fit-content' }}
                size="small"
                value={isInboxComment}
                onChange={(e) => setIsInboxComment(!isInboxComment)}
                checked={isInboxComment}
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
            {/* {img1 ? (
              <div className="col-md-2 uploadComment">
                <img className="imgUpload" src={img1} alt="img" />
                <div className="imgUploadOptions">
                  <div onClick={() => setImg1('')} className="optionsIcon">
                    <FontAwesomeIcon icon={faTrash} />
                  </div></div>
              </div>
            ) : (
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
            )} */}
          </div>
          <Divider />
          <div className="row text-center g-3">
            {/* <div className='col-md-8 mx-auto chatComment'> */}
            <div className="col-md-3 commentHeader">
              <h4 className="ms-md-3 me-2">คอมเม้นต์ใต้โพสต์</h4>
              <Switch
                style={{ width: 'fit-content' }}
                size="small"
                value={isComment}
                onChange={() => setIsComment(!isComment)}
                checked={isComment}
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
                    onChange={() => setIsLikeComment(!isLikeComment)}
                    checked={isLikeComment}
                  />
                  <h4 className="ms-3 my-auto">ถูกใจคอมเม้นต์</h4>
                </div>
                <div>
                  <Switch
                    size="small"
                    value={isDuplicateComment}
                    onChange={() => setIsDuplicateComment(!isDuplicateComment)}
                    checked={isDuplicateComment}
                  />
                  <h4 className="ms-3 my-auto">ไม่ตอบซ้ำคนเดิม</h4>
                </div>
                <div>
                  <Switch
                    size="small"
                    value={isHideComment}
                    onChange={() => setIsHideComment(!isHideComment)}
                    checked={isHideComment}
                  />
                  <h4 className="ms-3 my-auto">ซ่อนคอมเม้นต์</h4>
                </div>
              </div>
            </div>
            {/* {img2 ? (
              <div className="col-md-2 uploadComment">
                <img className="imgUpload" src={img2} alt="img" />
                <div className="imgUploadOptions">
                  <div onClick={() => setImg2('')} className="optionsIcon">
                    <FontAwesomeIcon icon={faTrash} />
                  </div></div>
              </div>
            ) : (
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
            )} */}
          </div>
          <Divider />
          <div className="row justify-content-center">
            <div className="col-md-6 mx-auto chatWording text-start text-md-end">
              <div className="d-flex flex-column flex-md-row my-3">
                <h4 className="me-3 my-auto">ตอบเฉพาะคำเหล่านี้</h4>
                <div className="chatWordInput">
                  <TagsInput tags={words} setTags={setWords} />
                  {/* <input value={words} onChange={(e) => setWords(e.target.value)} name="tags" /> */}
                </div>
              </div>
              <div className="d-flex my-3 flex-column flex-md-row">
                <h4 className="me-3 my-auto">ตอบเฉพาะแฮทแท็กนี้</h4>
                <div className="chatWordInput">
                  <TagsInput tags={tags} setTags={setTags} />

                  {/* <input value={tags} onChange={(e) => setTags(e.target.value)} name="specificWord" /> */}
                </div>
              </div>
              <div className="d-flex my-3 flex-column flex-md-row">
                <h4 className="me-3 my-auto">ซ่อนคำเหล่านี้</h4>
                <div className="chatWordInput">
                  <TagsInput tags={hiddenWords} setTags={setHiddenWords} />

                  {/* <input value={hiddenWords} onChange={(e) => setHiddenWords(e.target.value)} name="tags" /> */}
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
