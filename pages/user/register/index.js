import React,{useState} from 'react'
import { useRouter } from 'next/dist/client/router';
import { Upload, Button, Avatar } from 'antd';

import useUser from '../../../Hooks/useUser';

const Register = () => {
const router = useRouter()
const { user, setUserData } =useUser()
// const { userData } = router.query
const  userData  = {
    name:'test',
    email:'test@gmail.com',
    phoneno:'0123456789',
    image:undefined
}
const [ name, setName ] = useState(user.user.name)
const [ email, setEmail ] = useState(user.user.email)
const [ phoneno, setPhoneno ] = useState(user.user.phoneno)
const [ imageObj, setImageObj ] =useState(null)
const [ imageURL, setImageURL ] =useState(user.user.image=== undefined ? undefined : user.user.image)

    const onSubmit = async (e) => {
        e.preventDefault()
        const data ={
            name:name,
            email:email,
            phoneno:phoneno,
            image:imageObj === null ? imageURL : imageObj
        }
       await setUserData({...user,user:data})
        console.log(user);
    }
    const onUploadImage = async ({ file, fileList }) => {
        setImageObj(file)
        file.preview = await getBase64(file.originFileObj);
        setImageURL(file.preview)
    }

    const onRemove = () => {
        setImageURL(undefined)
    }

    function getBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      }
  return (
    <div className='page-wrapper'>
        <div className='text-center'>
            <h1 className='font-weight-bold'>ลงทะเบียนด้วย Facebook</h1>
        </div>
        <div className='content'>
        <div className="row justify-content-center mt-5">
            <div className="col-lg-12 text-center d-flex w-75 flex-column">
                {imageURL !== undefined ?
                <img src={imageURL} className='mx-auto mb-3' style={{width:'250px'}} alt="profile"/>
                : 
                <Avatar style={{display:'grid', placeItem:'center'}}  className='p-5 mx-auto mb-3' shape='square' size='large' />
                }
                <Upload maxCount={1} className='w-25 mx-auto' onRemove={onRemove} onChange={onUploadImage}>
                    <Button>เปลี่ยน</Button>
                </Upload>
            </div>
        </div>
        <form onSubmit={(e)=> onSubmit(e)} >
        <div style={{ maxWidth:"300px"}} className="row justify-content-center mt-5 mx-auto">
            <div className="col-lg-12 d-flex flex-column w-100">
                <label htmlFor='name' >ชื่อ - นามสกุล <span className='text-danger'>*</span> </label>
                <input 
                // value={name} 
                onChange={(e)=> setName(e.target.value)} 
                className='custonRegisterImput' 
                id='name' 
                type='text'  
                defaultValue={userData.name}
                />
            </div>
        </div>
        <div style={{ maxWidth:"300px"}} className="row justify-content-center mt-5 mx-auto">
            <div className="col-lg-12 d-flex flex-column w-100">
                <label htmlFor='email' >E-mail<span className='text-danger'>*</span> </label>
                <input 
                // value={email} 
                onChange={(e)=> setEmail(e.target.value)} 
                className='custonRegisterImput' 
                id='email' 
                type='email'  
                defaultValue={userData.email}    
                />
            </div>
        </div>
        <div style={{ maxWidth:"300px"}} className="row justify-content-center mt-5 mx-auto">
            <div className="col-lg-12 d-flex flex-column w-100">
                <label htmlFor='tel' >เบอร์โทรศัพท์<span className='text-danger'>*</span> </label>
                <input 
                // value={phoneno} 
                onChange={(e)=> setPhoneno(e.target.value)} 
                className='custonRegisterImput' 
                id='tel' 
                type='tel'
                defaultValue={userData.phoneno}
                  />
            </div>
        </div>
        <div className="registerBtnContainer row justify-content-center mt-5 mx-auto">
            <div className="col-lg-12 d-flex w-75 justify-content-center">
                <button onClick={()=> router.replace('/')} className='customeRegisterBtn w-50 me-3'>ยกเลิก</button>
                <button type='submit' className='customeRegisterBtn w-50'>เข้าระบบ</button>
            </div>
        </div>
        </form>
        </div>
    </div>
  )
}

export default Register