import React,{useState} from 'react'
import { useRouter } from 'next/dist/client/router';
import { Upload, Button, Avatar } from 'antd';

import useUser from '../../../Hooks/useUser';
import Image from 'next/image';
import  axios from '../../api/axios';

const Register = () => {
const router = useRouter()
const { user, setUserData } =useUser()
// const { userData } = router.query
//! did not use
// const  userData  = {
//     name:'test',
//     email:'test@gmail.com',
//     phoneno:'0123456789',
//     imgProfile:undefined
// }
const [ name, setName ] = useState(user?.user.name)
const [ email, setEmail ] = useState(user?.user.email)
const [ phoneno, setPhoneno ] = useState(user?.user.phoneno)
// const [ imageObj, setImageObj ] =useState(null)
const [ imageURL, setImageURL ] =useState(user?.user.imgProfile=== undefined ? undefined : user.user.imgProfile)

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            user.user.phoneNo = phoneno
            console.log(user);
            await setUserData({...user,user:user.user})
            router.push('/user/packages')
        } catch (error) {
            console.log(error);
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

    function getBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      }
  return (
    <div className='nosidebar-wrapper'>
        <div className='text-center'>
            <h1 className='font-weight-bold'>ลงทะเบียนด้วย Facebook</h1>
        </div>
        <div className='container container-fluid'>
        <div className="row justify-content-center mt-5">
            <div className="col-lg-12 text-center d-flex w-25 flex-column">
                {imageURL !== undefined ?
                <img src={imageURL} width="100px" height="100px" className='mx-auto mb-3' alt="profile"/>
                : 
                <Avatar style={{display:'grid', placeItem:'center'}}  className='p-5 mx-auto mb-3' shape='square' size='large' />
                }
                {/* //! did not use */}
                {/* <Upload maxCount={1} className='w-25 mx-auto' onRemove={onRemove} onChange={onUploadImage}>
                    <Button>เปลี่ยน</Button>
                </Upload> */}
            </div>
        </div>
        <form onSubmit={(e)=> onSubmit(e)} >
        <div style={{ maxWidth:"300px"}} className="row justify-content-center mt-5 mx-auto">
            <div className="col-lg-12 d-flex flex-column w-100">
                <label htmlFor='name' >Username </label>
                <input 
                value={name} 
                onChange={(e)=> setName(e.target.value)} 
                className='custonRegisterImput text-secondary border-secondary' 
                id='name' 
                type='text'  
                disabled
                />
            </div>
        </div>
        <div style={{ maxWidth:"300px"}} className="row justify-content-center mt-5 mx-auto">
            <div className="col-lg-12 d-flex flex-column w-100">
                <label htmlFor='email' >E-mail</label>
                <input 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)} 
                className='custonRegisterImput text-secondary border-secondary' 
                id='email' 
                type='email'   
                disabled
                />
            </div>
        </div>
        <div style={{ maxWidth:"300px"}} className="row justify-content-center mt-5 mx-auto">
            <div className="col-lg-12 d-flex flex-column w-100">
                <label htmlFor='tel' >เบอร์โทรศัพท์<span className='text-danger'>*</span> </label>
                <input 
                value={phoneno} 
                onChange={(e)=> setPhoneno(e.target.value)} 
                className='custonRegisterImput' 
                id='tel' 
                type='tel'
                autoFocus
                required
                  />
            </div>
        </div>
        <div className="registerBtnContainer row justify-content-center mt-5 mx-auto">
            <div className="col-lg-12 d-flex w-75 justify-content-center">
                <button onClick={()=> router.push('/user/')} className='customeRegisterBtn w-50 me-3'>ยกเลิก</button>
                <button type='submit' className='customeRegisterBtn w-50'>เข้าระบบ</button>
            </div>
        </div>
        </form>
        </div>
    </div>
  )
}

export default Register