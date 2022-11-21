import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Upload, Button, Avatar } from 'antd';

import useUser from '../../../Hooks/useUser';
import axios from '../../api/axios';
import MainLayout from '../../../components/layouts/mainLayout/mainLayout';
import RegisterContainerStyle from './style';

const Edit = () => {
    const router = useRouter();
    const { user, setUserData } = useUser();
    const userId = router.query.id;
    const [navHeight, setNavHeight] = useState(64);

    const [name, setName] = useState(user?.user?.name || '');
    const [email, setEmail] = useState(user?.user?.email || '');
    const [phoneno, setPhoneno] = useState(user?.user?.tel || '');
    const [imageURL, setImageURL] = useState(user?.user?.picture);
    const [img, setImg] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();

        const editData = {
            email: email,
            name: name,
            tel: phoneno,
            picture: imageURL,
        };

        try {
            //*register user then go to login user after that keep token in user context
            const res = await axios.patch(`/public/facebook-users/${userId}/profile`, editData, {
                headers: { Authorization: 'Bearer ' + user?.accessToken },
            });
            await setUserData({ ...user, user: res.data.data });
            window.history.back();
        } catch (error) {
            console.log(error);
            router.push('/user');
        }
    };

    //! did not use
    //   const onUploadImage = async ({ file, fileList }) => {
    //     // const url = createImageBitmap()
    //     setImg()
    //     console.log(file);
    //   }
    //! did not use
    //   const onRemove = () => {
    //       setImageURL(undefined)
    //   }

    // function getBase64(file) {
    //   return new Promise((resolve, reject) => {
    //     const reader = new FileReader()
    //     reader.readAsDataURL(file)
    //     reader.onload = () => resolve(reader.result)
    //     reader.onerror = (error) => reject(error)
    //   })
    // }

    //   const getFacebookUserData = async () => {
    //     try {
    //       const res  = await axios.get(`/public/facebook-users/${userId}`)
    //       const { email, name, tel, picture, note, facebook_id } = res.data.data
    //       setEmail(email)
    //       setName(name)
    //       setPhoneno(tel)
    //       setNote(note)
    //       setImageURL(picture)
    //       setFacebookUserId(facebook_id)
    //       await setUserData({ ...user,user:res.data.data, facebookUserId : facebook_id })
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }

    //   useEffect(() => {
    //     userId && getFacebookUserData()
    //   }, [userId])

    return (
        <MainLayout setNavHeight={setNavHeight}>
            <RegisterContainerStyle navHeight={navHeight}>
                <div className="text-center">
                    <h1 className="font-weight-bold">แก้ไขข้อมูล</h1>
                </div>
                <div className="container container-fluid">
                    <div className="row justify-content-center text-center mt-5">
                        <div className="col-lg-12 text-center d-flex w-25 flex-column">
                            {imageURL !== undefined ? (
                                <img src={imageURL} width="100px" height="100px" className="mx-auto mb-3" alt="profile" />
                            ) : (
                                <Avatar style={{ display: 'grid', placeItem: 'center' }} className="p-5 mx-auto mb-3" shape="square" size="large" />
                            )}
                            {/* //! did not use */}
                            {/* <Upload maxCount={1} className='w-25 mx-auto' onRemove={onRemove} onChange={onUploadImage}>
                    <Button>เปลี่ยน</Button>
                </Upload> */}
                        </div>
                    </div>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div style={{ maxWidth: '400px' }} className="row justify-content-center mt-3 mx-auto">
                            <div className="col-lg-12 d-flex flex-column w-100">
                                <label htmlFor="name">Username </label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="customRegisterInput text-secondary border-secondary"
                                    id="name"
                                    type="text"
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div style={{ maxWidth: '400px' }} className="row justify-content-center mt-2 mx-auto">
                            <div className="col-lg-12 d-flex flex-column w-100">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="customRegisterInput text-secondary border-secondary"
                                    id="email"
                                    type="email"
                                />
                            </div>
                        </div>
                        <div style={{ maxWidth: '400px' }} className="row justify-content-center mt-2 mx-auto">
                            <div className="col-lg-12 d-flex flex-column w-100">
                                <label htmlFor="tel">
                                    เบอร์โทรศัพท์<span className="text-danger">*</span>{' '}
                                </label>
                                <input
                                    onFocus={() => setError(false)}
                                    value={phoneno}
                                    onChange={(e) => setPhoneno(e.target.value)}
                                    className="customRegisterInput"
                                    id="tel"
                                    type="tel"
                                    autoFocus
                                    required
                                />
                            </div>
                        </div>
                        <div className="registerBtnContainer row justify-content-center mt-2 mx-auto">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <button onClick={() => router.push('/user/')} className="customRegisterBtn me-3">
                                    ยกเลิก
                                </button>
                                <button type="submit" className="customRegisterBtn">
                                    แก้ไขข้อมูล
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </RegisterContainerStyle>
        </MainLayout>
    );
};

export default Edit;
