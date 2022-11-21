import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
// import { Upload, Button, Avatar } from 'antd';

import RegisterContainerStyle from './style';
import MainLayout from '../../components/layouts/mainLayout/mainLayout';

import useUser from '../../Hooks/useUser';
import axios from '../api/axios';
import Avatar from '@mui/material/Avatar';

const Register = () => {
    const router = useRouter();
    const [navHeight, setNavHeight] = useState(64);

    const { user, setUserData } = useUser();
    const userId = router.query.fb;
    // console.log(userId);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [note, setNote] = useState('');
    const [facebookUserId, setFacebookUserId] = useState('');
    const [imageURL, setImageURL] = useState(undefined);

    const [error, setError] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (phoneno?.length === 0) {
            setError(true);
        } else {
            const registerData = {
                facebookId: facebookUserId,
                email: email,
                name: name,
                tel: phoneno + '',
                note: note,
                picture: imageURL,
            };

            try {
                //*register user then go to login user after that keep token in user context
                const res = await axios.post(`/public/facebook-users/${userId}/register`, registerData);
                if (res.data.data === 'Success') {
                    router.replace(`/login/?fb=${userId}`);
                }
            } catch (error) {
                console.log(error);
                router.push('/user');
            }
        }
    };

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
            const res = await axios.get(`/public/facebook-users/${userId}`);
            const { email, name, tel, picture, note, facebook_id } = res.data.data;
            setEmail(email);
            setName(name);
            setPhoneno(tel);
            setNote(note);
            setImageURL(picture);
            setFacebookUserId(facebook_id);
            await setUserData({ ...user, user: res.data.data, facebookUserId: facebook_id });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        userId && getFacebookUserData();
    }, [userId]);

    return (
        // <div id="register" className="nosidebar-wrapper">
        <MainLayout setNavHeight={setNavHeight}>
            <RegisterContainerStyle navHeight={navHeight}>
                <div className="text-center">
                    <h1 className="font-weight-bold">ลงทะเบียนด้วย Facebook</h1>
                </div>
                <div className="container container-fluid">
                    <div className="row justify-content-center text-center mt-4">
                        <div className="col-lg-12 text-center d-flex w-25 flex-column">
                            {imageURL !== undefined ? (
                                <img src={imageURL} width="100px" height="100px" className="mx-auto" alt="profile" />
                            ) : (
                                <div className="m-auto">
                                    <Avatar sx={{ width: 100, height: 100 }} variant="square">
                                        NO PHOTO
                                    </Avatar>
                                </div>
                            )}
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
                        {error && (
                            <div className="row">
                                <span className="mx-auto text-center text-danger">กรุณากรอกเบอร์โทรศัพท์</span>
                            </div>
                        )}
                        <div className="registerBtnContainer row justify-content-center mt-2 mx-auto">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <button onClick={() => router.push('/user/')} className="customRegisterBtn me-3">
                                    ยกเลิก
                                </button>
                                <button type="submit" className="customRegisterBtn">
                                    ลงทะเบียน
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </RegisterContainerStyle>
        </MainLayout>
        // </div>
    );
};

export default Register;
