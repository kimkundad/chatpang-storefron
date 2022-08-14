import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import { Upload, Button, Avatar } from 'antd'

import useUser from '../../Hooks/useUser'
import axios from '../api/axios'

const Register = () => {
  const router = useRouter()
  const { user, setUserData } = useUser()
  const userId = router.query.fb
  console.log(userId)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneno, setPhoneno] = useState('')
  const [note, setNote] = useState('')
  const [facebookUserId, setFacebookUserId] = useState('')
  const [imageURL, setImageURL] = useState(undefined)

  const onSubmit = async (e) => {
    e.preventDefault()

    const registerData = {
      facebookId: facebookUserId,
      email: email,
      name: name,
      tel: phoneno,
      note: note,
      picture: imageURL,
    }

    try {
      //*register user then go to login user after that keep token in user context
      const res = await axios.post(`/public/facebook-users/${userId}/register`,registerData)
      if (res.data.data === 'Success') {
        router.replace(`/login/?fb=${userId}`)
      }
    } catch (error) {
      console.log(error)
      router.push('/user')
    }
  }

  //! did not use
  // const onUploadImage = async ({ file, fileList }) => {
  //     setImageObj(file)
  //     file.preview = await getBase64(file.originFileObj);
  //     setImageURL(file.preview)
  // }
  //! did not use
  // const onRemove = () => {
  //     setImageURL(undefined)
  // }

  // function getBase64(file) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader()
  //     reader.readAsDataURL(file)
  //     reader.onload = () => resolve(reader.result)
  //     reader.onerror = (error) => reject(error)
  //   })
  // }

  const getFacebookUserData = async () => {
    try {
      const res  = await axios.get(`/public/facebook-users/${userId}`)
      const { email, name, tel, picture, note, facebook_id } = res.data.data
      setEmail(email)
      setName(name)
      setPhoneno(tel)
      setNote(note)
      setImageURL(picture)
      setFacebookUserId(facebook_id)
      await setUserData({ ...user,user:res.data.data, facebookUserId : facebook_id })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    userId && getFacebookUserData()
  }, [userId])
  
  return (
    <div className="nosidebar-wrapper">
      <div className="text-center">
        <h1 className="font-weight-bold">ลงทะเบียนด้วย Facebook</h1>
      </div>
      <div className="container container-fluid">
        <div className="row justify-content-center text-center mt-5">
          <div className="col-lg-12 text-center d-flex w-25 flex-column">
            {imageURL !== undefined ? (
              <img src={imageURL} width="100px" height="100px" className="mx-auto mb-3" alt="profile" />
            ) : (
              <Avatar
                style={{ display: 'grid', placeItem: 'center' }}
                className="p-5 mx-auto mb-3"
                shape="square"
                size="large"
              />
            )}
            {/* //! did not use */}
            {/* <Upload maxCount={1} className='w-25 mx-auto' onRemove={onRemove} onChange={onUploadImage}>
                    <Button>เปลี่ยน</Button>
                </Upload> */}
          </div>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div style={{ maxWidth: '400px' }} className="row justify-content-center mt-5 mx-auto">
            <div className="col-lg-12 d-flex flex-column w-100">
              <label htmlFor="name">Username </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="custonRegisterImput text-secondary border-secondary"
                id="name"
                type="text"
                autoFocus
              />
            </div>
          </div>
          <div style={{ maxWidth: '400px' }} className="row justify-content-center mt-5 mx-auto">
            <div className="col-lg-12 d-flex flex-column w-100">
              <label htmlFor="email">E-mail</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="custonRegisterImput text-secondary border-secondary"
                id="email"
                type="email"
              />
            </div>
          </div>
          <div style={{ maxWidth: '400px' }} className="row justify-content-center mt-5 mx-auto">
            <div className="col-lg-12 d-flex flex-column w-100">
              <label htmlFor="tel">
                เบอร์โทรศัพท์<span className="text-danger">*</span>{' '}
              </label>
              <input
                value={phoneno}
                onChange={(e) => setPhoneno(e.target.value)}
                className="custonRegisterImput"
                id="tel"
                type="tel"
                autoFocus
                required
              />
            </div>
          </div>
          <div className="registerBtnContainer row justify-content-center mt-5 mx-auto">
            <div className="col-lg-12 d-flex justify-content-center">
              <button onClick={() => router.push('/user/')} className="customeRegisterBtn me-3">
                ยกเลิก
              </button>
              <button type="submit" className="customeRegisterBtn">
                ลงทะเบียน
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
