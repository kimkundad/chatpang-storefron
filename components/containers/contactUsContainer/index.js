import { Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, TextareaAutosize, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ContactUsContainerStyle from './style';
import * as constants from '../../../constants/contactUsConstants';
import { Image } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import classNames from 'classnames';
// import CoreService from '../../../services/coreService';
// import { callApiSuccess, closeAlert } from '../../../redux/globalRedux/action';
import axios from 'axios';

const ContactUsContainer = React.forwardRef((props, ref) => {
    // const dispatch = useDispatch();
    const initialValue = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        title: '',
        message: '',
        checkAgreement: false,
    };
    const [errorMsg, setErrorMsg] = useState({});
    const [contactInput, setContactInput] = useState(initialValue);
    // const isLoading = useSelector((state) => state.global.options.isLoading);
    // const alert = useSelector((state) => state.global.options.alert);
    const validateInput = () => {
        let error = {};
        let result = Object.keys(contactInput).map((key) => contactInput[key] !== '' && contactInput[key] !== null && contactInput[key] !== undefined);
        let isValidEmail = contactInput.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
        let isFalseExist = result.includes(false);
        if (!isValidEmail) {
            error.email = 'กรุณาใส่ email ให้ถูกต้อง';
        }
        let isCheckAgreement = contactInput.checkAgreement;
        setErrorMsg({ isError: !isFalseExist, error: error, isHaveError: !isValidEmail, isCheckAgreement });
        return { isError: !isFalseExist, error: error, isHaveError: !isValidEmail, isCheckAgreement };
    };

    const handleChange = (e) => {
        let name = e.target.name;
        let temp = contactInput;
        temp[name] = e.target.value;
        if (name === 'phone') {
            temp[name] = e.target.value.replace(/[^0-9]|\^/g, '');
        }

        if (e.target.type === 'checkbox') {
            temp[name] = e.target.checked;
        }
        setContactInput({ ...temp });
        validateInput();
    };

    const handleSubmit = async (e) => {
        if (errorMsg.isHaveError) {
            setErrorMsg((prev) => ({
                ...prev,
                isHandleSubmit: true,
            }));
            e.preventDefault();
            return false;
        } else {
            let payload = {
                firstName: contactInput.firstname,
                lastName: contactInput.lastname,
                email: contactInput.email,
                mobileNo: contactInput.phone,
                subject: contactInput.title,
                messages: contactInput.message,
                checkAgreement: contactInput.checkAgreement,
            };

            try {
                const res = await axios.post('https://boardpang-api.herokuapp.com/line/pushLine', JSON.stringify(payload), {
                    headers: { 'Content-Type': 'application/json', 'x-api-version': '1.0.0' },
                });
            } catch (error) {
                console.log(error);
            }
            // let service = new CoreService();
            // let result = service.sendDataToLineNotification(payload);
            // dispatch(callApiSuccess());
            setContactInput(initialValue);
        }

        e.preventDefault();
    };

    return (
        <ContactUsContainerStyle ref={ref} className="bg" navHeight={props.navHeight}>
            <div className="app-container">
                <Container maxWidth="xxl">
                    <Grid container direction="row" display="flex" alignContent="center" justifyContent="center" justifyItems="center">
                        <Grid container item xs={12} sm={12} md={6} lg={8} xl={8}>
                            <Grid container direction="row" justifyItems="center">
                                <Grid container item direction="column" xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <Typography className="header-text" variant="h5">
                                        {constants.HEADER_TEXT}
                                    </Typography>
                                    <Grid container direction="row" style={{ marginTop: 30 }}>
                                        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <div className="display-flex">
                                                <div className="contact">
                                                    <Image className="icon" src="images/icon/placeholder.png" />
                                                </div>
                                                <div className="contact">{constants.CONTACT_ADDRESS}</div>
                                            </div>
                                        </Grid>
                                    </Grid>

                                    <Grid container direction="row" style={{ marginTop: 25 }}>
                                        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <div className="display-flex">
                                                <div className="contact">
                                                    <Image className="icon" src="images/icon/phone-call.png" />
                                                </div>
                                                <div className="contact">{constants.PHONE_TEXT}</div>
                                            </div>
                                        </Grid>
                                    </Grid>

                                    <Grid container direction="row" style={{ marginTop: 25 }}>
                                        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <div className="display-flex">
                                                <div className="contact">
                                                    <Image className="icon" src="images/icon/line.png" />
                                                </div>
                                                <div className="contact">{constants.LINE_TEXT}</div>
                                            </div>
                                        </Grid>
                                    </Grid>

                                    <Grid container direction="row" style={{ marginTop: 25 }}>
                                        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <div className="display-flex">
                                                <div className="contact">
                                                    <Image className="icon" src="images/icon/email.png" />
                                                </div>
                                                <div className="contact">{constants.GMAIL_TEXT}</div>
                                            </div>
                                        </Grid>
                                    </Grid>

                                    <Grid container direction="row" style={{ marginTop: 25 }}>
                                        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <div className="display-flex">
                                                <div className="contact">
                                                    <Image className="icon" src="images/icon/stopwatch.png" />
                                                </div>
                                                <div className="contact">{constants.TIME_TEXT}</div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid
                                    container
                                    item
                                    direction="column"
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={6}
                                    xl={6}
                                    alignContent={{ xs: 'center', md: 'start', lg: 'center' }}
                                    justifyContent="center"
                                    alignItems="center">
                                    <Image className="qrCode" src="images/qrCode/qr.png" />
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justifyItems="center" justifyContent="center" alignItems="end" sx={{ padding: { xs: '50px', md: '10px' } }}>
                                {/* <a target="_blank" href="https://www.facebook.com/broadpangmkt/"> */}
                                <Image src="/images/icon/facebook.png" fluid className="icon-social" />
                                {/* </a> */}
                                {/* <a target="_blank" href="https://lin.ee/wtEcDjy"> */}
                                <Image src="/images/icon/line.png" fluid className="icon-social" />
                                {/* </a> */}
                                {/* <a target="_blank" href="https://www.instagram.com/broadpang_/"> */}
                                <Image src="/images/icon/instagram.png" fluid className="icon-social" />
                                {/* </a> */}
                                {/* <a target="_blank" href="https://www.youtube.com/channel/UCghU79wMstfm0MD0XxRzx9g"> */}
                                <Image src="/images/icon/youtube.png" fluid className="icon-social" />
                                {/* </a> */}
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <div className="form-card">
                                <form onSubmit={handleSubmit}>
                                    <div className="card">
                                        <div className="text-center mt-2">
                                            <Typography variant="h4" fontWeight={600} fontSize={'1.7rem'}>
                                                ส่งข้อความถึงเรา
                                            </Typography>
                                        </div>

                                        <Grid container direction="row" display="flex" justifyContent="flex-start" style={{ marginTop: 15 }}>
                                            <Grid container item direction="column" md={3}>
                                                <span style={{ marginTop: 'auto', marginBottom: 'auto', paddingLeft: '25px' }}>
                                                    ชื่อ<span className="red-text">*</span>
                                                </span>
                                            </Grid>

                                            <Grid container item direction="column" md={9} className="space-input">
                                                <TextField
                                                    className={classNames({ error: _.get(errorMsg, 'error.firstname', '') !== '' && errorMsg.isHandleSubmit })}
                                                    name="firstname"
                                                    onChange={handleChange}
                                                    placeholder="ระบุชื่อ"
                                                    size="small"
                                                    id="outlined-basic"
                                                    value={contactInput.firstname}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                        {errorMsg.isHandleSubmit && (
                                            <div className="msg-error">
                                                <span>{_.get(errorMsg, 'error.firstname')}</span>
                                            </div>
                                        )}

                                        <Grid container direction="row" display="flex" justifyContent="flex-start" style={{ marginTop: 15 }}>
                                            <Grid container item direction="column" md={3}>
                                                <span style={{ marginTop: 'auto', marginBottom: 'auto', paddingLeft: '25px' }}>
                                                    นามสกุล<span className="red-text">*</span>
                                                </span>
                                            </Grid>

                                            <Grid container item direction="column" md={9} className="space-input">
                                                <TextField
                                                    className={classNames({ error: _.get(errorMsg, 'error.lastname', '') !== '' && errorMsg.isHandleSubmit })}
                                                    name="lastname"
                                                    onChange={handleChange}
                                                    value={contactInput.lastname}
                                                    placeholder="ระบุนามสกุล"
                                                    size="small"
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                        {errorMsg.isHandleSubmit && (
                                            <div className="msg-error">
                                                <span>{_.get(errorMsg, 'error.lastname')}</span>
                                            </div>
                                        )}

                                        <Grid container direction="row" display="flex" justifyContent="flex-start" style={{ marginTop: 15 }}>
                                            <Grid container item direction="column" md={3}>
                                                <span style={{ marginTop: 'auto', marginBottom: 'auto', paddingLeft: '25px' }}>
                                                    E-mail<span className="red-text">*</span>
                                                </span>
                                            </Grid>

                                            <Grid container item direction="column" md={9} className="space-input">
                                                <TextField
                                                    className={classNames({ error: _.get(errorMsg, 'error.email', '') !== '' && errorMsg.isHandleSubmit })}
                                                    name="email"
                                                    onChange={handleChange}
                                                    placeholder="ระบุ E-mail"
                                                    value={contactInput.email}
                                                    size="small"
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                        {errorMsg.isHandleSubmit && (
                                            <div className="msg-error">
                                                <span>{_.get(errorMsg, 'error.email', '')}</span>
                                            </div>
                                        )}

                                        <Grid container direction="row" display="flex" justifyContent="flex-start" style={{ marginTop: 15 }}>
                                            <Grid container item direction="column" md={3}>
                                                <span style={{ marginTop: 'auto', marginBottom: 'auto', paddingLeft: '25px' }}>
                                                    เบอร์โทรศัพท์<span className="red-text">*</span>
                                                </span>
                                            </Grid>

                                            <Grid container item direction="column" md={9} className="space-input">
                                                <TextField
                                                    size="small"
                                                    onChange={handleChange}
                                                    inputProps={{ maxLength: 10 }}
                                                    placeholder="ระบุเบอร์โทรศัพท์"
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                    value={contactInput.phone}
                                                    name="phone"
                                                    className={classNames({ error: _.get(errorMsg, 'error.phone', '') !== '' })}
                                                />
                                            </Grid>
                                        </Grid>
                                        {errorMsg.isHandleSubmit && (
                                            <div className="msg-error">
                                                <span>{_.get(errorMsg, 'error.phone')}</span>
                                            </div>
                                        )}

                                        <Grid container direction="row" display="flex" justifyContent="flex-start" style={{ marginTop: 15 }}>
                                            <Grid container item direction="column" md={3}>
                                                <span style={{ marginTop: 'auto', marginBottom: 'auto', paddingLeft: '25px' }}>
                                                    เรื่องที่ติดต่อ<span className="red-text">*</span>
                                                </span>
                                            </Grid>
                                            <Grid container item direction="column" md={9} className="space-input">
                                                <TextField
                                                    className={classNames({ error: _.get(errorMsg, 'error.title', '') !== '' })}
                                                    onChange={handleChange}
                                                    value={contactInput.title}
                                                    placeholder="ระบุเรื่องที่ติดต่อ"
                                                    name="title"
                                                    size="small"
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                        {errorMsg.isHandleSubmit && (
                                            <div className="msg-error">
                                                <span>{_.get(errorMsg, 'error.title')}</span>
                                            </div>
                                        )}

                                        <Grid container direction="row" display="flex" justifyContent="flex-start" style={{ marginTop: 15 }}>
                                            <Grid container item direction="column" md={3}>
                                                <span style={{ marginTop: 'auto', marginBottom: 'auto', paddingLeft: '25px' }}>
                                                    ข้อความ<span className="red-text">*</span>
                                                </span>
                                            </Grid>
                                        </Grid>

                                        <Grid container direction="row" display="flex" justifyContent="flex-start">
                                            <Grid container item direction="column" md={12} style={{ paddingLeft: 25 }} className="space-input">
                                                <TextareaAutosize
                                                    aria-label="empty textarea"
                                                    id="message"
                                                    className={classNames({ error: _.get(errorMsg, 'error.message', '') !== '' })}
                                                    value={contactInput.message}
                                                    maxRows={3}
                                                    minRows={3}
                                                    name="message"
                                                    onChange={handleChange}
                                                    placeholder="ระบุข้อความ...."
                                                    style={{ width: '100%', fontSize: 24, marginTop: 20 }}
                                                    maxLength={600}
                                                />
                                            </Grid>
                                        </Grid>
                                        <div className="msg">
                                            <span>{contactInput.message.length}/600</span>
                                        </div>
                                        {errorMsg.isHandleSubmit && (
                                            <div className="msg-error">
                                                <span>{_.get(errorMsg, 'error.message')}</span>
                                            </div>
                                        )}

                                        <Grid container direction="row" display="flex" justifyContent="flex-start">
                                            <Grid container item direction="column" md={12}>
                                                <FormGroup style={{ paddingLeft: '25px' }}>
                                                    <FormControlLabel
                                                        className="policy"
                                                        control={<Checkbox size="small" checked={contactInput.checkAgreement} onChange={handleChange} name="checkAgreement" />}
                                                        label={
                                                            <span style={{ fontSize: 16 }}>
                                                                {constants.POLICY_TEXT} <b>{constants.POLICY_TEXT_2}</b>
                                                            </span>
                                                        }
                                                    />
                                                </FormGroup>
                                            </Grid>
                                        </Grid>

                                        <Grid container direction="row" display="flex" justifyContent="flex-start" style={{ marginBottom: 15 }}>
                                            <Grid container item direction="column" md={12}>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    size="small"
                                                    className="btn-button submit-btn"
                                                    style={{ width: 'auto', margin: 'auto', padding: '5px 20%' }}
                                                    disabled={!errorMsg.isError || !errorMsg.isCheckAgreement}>
                                                    ส่งข้อความ
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </form>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </ContactUsContainerStyle>
    );
});

export default ContactUsContainer;
