import React,{ useState } from 'react'
import Sidebar from '../../../../../components/Sidebar'


import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Avatar, Divider, Input, Switch } from 'antd';
import { InputTags } from 'react-bootstrap-tagsinput'

const Edit = () => {
    const router = useRouter()
    const id = router.query
    const { TextArea } = Input;
    const [ words, setWords ] = useState([])
    const [ tags, setTags ] = useState([])
    const [ hiddenWords, setHiddenWords ] = useState([])

  return (
    <div className='page-wrapper' >
      <div className='content container-fluid' >
          <Sidebar />
          <div className='userpage-wrapper text-center'>
            <div className="page-header">
              <div className="row" >
                <div className="col-md-12 d-flex justify-content-center">
                  <span onClick={()=> router.back()} className='userBackButton' ><FontAwesomeIcon className='me-2-md' icon={faChevronLeft} /><span className='textBTN'>ย้อนกลับ</span></span>
                  <span className='text-uppercase userDropdown' ><Avatar className='me-2' icon={<FontAwesomeIcon icon={faUser} />} />Board pang</span>
                </div>
              </div>
            </div>
            {/* content */}
            <div className='row g-3'>
                    <div className='col-md-4 text-md-end text-start'>
                      <strong className='me-3' >ชื่อแคมเปญ</strong>
                    </div>
                    <div className='col-md-4 mx-auto chatNameInput'>
                      <input type='text' name="name"  />
                    </div>
                    <div className='col-md-4 text-center chatButtonContainer'>
                        <button className='chatCustomBtn'>บันทึก</button>
                        <button className='chatCustomBtn'>ยกเลิก</button>
                    </div>
            </div>
            <Divider />
            <div className='row g-3' >
                <div className='col-md-3 commentHeader'>
                    <strong className='ms-3' >ข้อความตอบเข้าอินบ็อกซ์</strong>
                    <Switch style={{width:"fit-content"}} size='small' />
                  </div>
                  <div className='col-md-6 commentInput'>
                    <TextArea
                    showCount
                    maxLength={200}
                    placeholder='พิมพ์ข้อความที่นี้...'
                    autoSize={{ minRows: 4, maxRows: 6 }}
                    />
                  </div>
                  <div className='col-md-2 uploadComment'>
                      <span>Upload</span>
                  </div>
            </div>
            <Divider />
            <div className='row text-center g-3' >
                  <div className='col-md-3 commentHeader'>
                    <strong className='ms-3' >คอมเม้นต์ใต้โพสต์</strong>
                    <Switch style={{width:"fit-content"}} size='small' />
                  </div>
                  <div className='col-md-6 commentInput'>
                    <TextArea
                    showCount
                    maxLength={200}
                    placeholder='พิมพ์ข้อความที่นี้...'
                    autoSize={{ minRows: 4, maxRows: 6 }}
                    />
                    <div className='toggleCommentOptions'>
                      <div>
                        <Switch size='small' />
                        <strong className='ms-3' >ถูกใจคอมเม้นต์</strong>
                      </div>
                      <div>
                        <Switch size='small' />
                        <strong className='ms-3' >ไม่ตอบซ้ำคนเดิม</strong>
                      </div>
                      <div>
                        <Switch size='small' />
                        <strong className='ms-3' >ซ่อนคอมเม้นต์</strong>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-2 uploadComment'>
                      <span>Upload</span>
                  </div>
            </div>
            <Divider />
            <div className='row' >
                <div className='col-md-6 mx-auto chatWording'>
                  <div className='d-flex my-3'>    
                      <strong className='me-3' >ตอบเฉพาะคำเหล่านี้</strong>
                      <div className='chatWordInput'>
                        <InputTags
                          values={words} 
                          onTags={(value) => setWords(value.values)}
                          name="tags" />
                      </div>
                  </div>
                  <div className='d-flex my-3'>
                      <strong className='me-3' >ตอบเฉพาะแฮทแท็กนี้</strong>
                      <div className='chatWordInput'>
                        <InputTags
                          values={tags} 
                          onTags={(value) => setTags(value.values)}
                          name="specificWord" />
                      </div>
                  </div>
                  <div className='d-flex my-3'>
                      <strong className='me-3' >ซ่อนคำเหล่านี้</strong>
                      <div className='chatWordInput'>
                        <InputTags
                          values={hiddenWords} 
                          onTags={(value) => setHiddenWords(value.values)}
                          name="tags" />
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