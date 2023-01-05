import React, { useState } from 'react';
import { useRouter } from 'next/dist/client/router';

import useUser from '../../../Hooks/useUser';
import { Form } from 'react-bootstrap';
import { Box, Button, CircularProgress, Modal, Typography } from '@mui/material';
import axios from 'axios';
import qs from 'querystring';
const Credit = () => {
    const router = useRouter();
    const { user, setUserData } = useUser();
    const [pay, setPay] = useState({ publicKey: null, gbpReferenceNo: null });
    const [open, setOpen] = useState(false);
    const [done, setDone] = useState({ isDone: false, text: '', isError: false });
    const [contact, setContact] = useState({
        name: '',
        number: '',
        expiryMM: '',
        expiryYY: '',
        securityCode: '',
        errors: {},
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setDone({ ...done, isDone: false, text: '' });
    };

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleCardExpiry = (e) => {
        let expiryDate = e.target.value;

        if (e.keyCode !== 8) {
            if (expiryDate > 1 && expiryDate.length === 1) {
                expiryDate = '0';
            } else if (expiryDate.length === 2) {
                expiryDate;
            }

            setContact({ ...contact, [e.target.name]: e.target.value });
        } else {
            setContact({ ...contact, [e.target.name]: '' });
        }
    };

    const handleValidation = () => {
        const { name, number, expiryMM, expiryYY, securityCode, errors } = contact;
        let formIsValid = true;

        if (!name) {
            formIsValid = false;
            errors['name'] = 'is required';
        } else {
            errors['name'] = '';
        }

        if (!number) {
            formIsValid = false;
            errors['number'] = 'is required';
        } else {
            errors['number'] = '';
        }

        if (!expiryMM) {
            formIsValid = false;
            errors['expiryMM'] = 'is required';
        } else {
            errors['expiryMM'] = '';
        }
        if (!expiryYY) {
            formIsValid = false;
            errors['expiryYY'] = 'is required';
        } else {
            errors['expiryYY'] = '';
        }
        if (!securityCode) {
            formIsValid = false;
            errors['securityCode'] = 'is required';
        } else {
            errors['securityCode'] = '';
        }

        setContact({ ...contact, errors: errors });
        return formIsValid;
    };
    const getCardType = (number) => {
        if (contact.number === '') {
            return null;
        }
        if (number !== '' || number !== null) {
            const amexReg = new RegExp('^3[47]');
            const jbcReg = new RegExp('^35(2[89]|[3-8][0-9])');
            const masterReg = new RegExp('^5[1-5][0-9]');
            const visaReg = new RegExp('^4');

            if (number.toString().match(amexReg)) {
                return 'amex';
            } else if (number.toString().match(jbcReg)) {
                return 'jcb';
            } else if (number.toString().match(masterReg)) {
                return 'mastercard';
            } else if (number.toString().match(visaReg)) {
                return 'visa';
            } else {
                return 'invalid';
            }
        }
    };

    const handleNumbersOnly = (e) => {
        let flag;

        if (
            e.keyCode === 8 ||
            e.keyCode === 9 ||
            (e.keyCode === 16 && e.keyCode >= 9) ||
            e.keyCode === 37 ||
            e.keyCode === 39 ||
            e.keyCode === 46 ||
            (e.keyCode >= 48 && e.keyCode <= 57) ||
            (e.keyCode >= 96 && e.keyCode <= 105)
        ) {
            flag = false;
        } else {
            flag = true;
        }

        if (flag) {
            e.preventDefault();
        }
    };
    const handleSubmit = async (e) => {
        console.log('submit');
        e.preventDefault();
        const { name, number, expiryMM, expiryYY, securityCode } = contact;

        if (handleValidation()) {
            setContact({ ...contact, errors: {} });
            console.log({
                rememberCard: false,
                name,
                number,
                expiryMM,
                expiryYY,
                securityCode,
            });
        }
        handleOpen();
        // setTimeout(() => {
        //     setDone({ ...done, isDone: true, text: 'เรียบร้อย' });
        // }, 2000);
        const data = JSON.stringify({
            rememberCard: false,
            card: { name: name, number: number, expirationMonth: expiryMM, expirationYear: expiryYY, securityCode: securityCode },
        });
        try {
            const res = await axios.post('https://api.gbprimepay.com/v2/tokens', data, {
                headers: {
                    Authorization: 'Basic ' + btoa('5nuOY0TnsoyDls8oEZ76a3Y8gpGJmz2Y' + ':'),
                    'Content-Type': 'application/json',
                },
            });
            console.log(res.data);
            const { card, resultCode } = res.data;
            const token = card.token;
            let referenceNo = user.order.id;
            // 00 = สำเร็จ, 02 = ข้อมูลไม่ถูกต้อง, 54 = บัตรหมดอายุ
            // amount = user.order.net
            if (resultCode === '00') {
                const paymentData = JSON.stringify({
                    amount: user.order.net,
                    referenceNo: referenceNo,
                    otp: 'Y',
                    backgroundUrl: 'https://chat-pang-api-fy5xytbcca-as.a.run.app/public/orders-payment',
                    responseUrl: 'https://chatpang.com/user/payment/confirmorder'
                    card: {
                        token: token,
                    },
                });
                const gbRes = await axios.post('https://api.gbprimepay.com/v2/tokens/charge', paymentData, {
                    headers: {
                        Authorization: 'Basic ' + btoa('EoKpVnUv9z4Q1eQdqadondcgXDFFVOHR' + ':'),
                        'Content-Type': 'application/json',
                    },
                });
                const { gbpReferenceNo, resultCode, resultMessage } = gbRes.data;
                if (resultCode === '00') {
                    const req3DData = qs.stringify({
                        publicKey: '5nuOY0TnsoyDls8oEZ76a3Y8gpGJmz2Y',
                        gbpReferenceNo: gbpReferenceNo,
                    });
                    // const res3D = await axios.post('https://api.gbprimepay.com/v2/tokens/3d_secured', req3DData, {
                    //     headers: {
                    //         'Content-Type': 'application/x-www-form-urlencoded',
                    //     },
                    // });
                    // const { resultCode } = res3D.data;
                    // console.log(res3D.data);
                    // var myWindow = window.open("", "");
                    // myWindow.document.write(res3D.data)
                    // document.write(res3D.data)
                    // if (resultCode === '00') {
                    setPay({ publicKey: '5nuOY0TnsoyDls8oEZ76a3Y8gpGJmz2Y', gbpReferenceNo: gbpReferenceNo });
                    setDone({ ...done, isDone: true, text: 'กรุณากด จ่าย เพื่อไปหน้าการชำระเงิน', isError: false });
                    // } else {
                    // setDone({ isDone: true, text: 'เกิดข้อผิดพลาด', isError: true });
                    // }
                } else {
                    setDone({ isDone: true, text: `เกิดข้อผิดพลาด\n${resultMessage}`, isError: true });
                }
            } else if (resultCode === '54') {
                setDone({ isDone: true, text: 'บัตรหมดอายุ', isError: true });
            } else {
                setDone({ isDone: true, text: 'ข้อมูลไม่ถูกต้อง', isError: true });
            }
        } catch (error) {
            console.log(error);
            setDone({ isDone: true, text: 'เกิดข้อผิดพลาด', isError: true });
        }
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const onFormSubmit = (e) => {
        const form = new FormData(e.target)
        console.log(form.getAll);
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                    <div className="creditInput col-lg-3 col-md-6 col-9 d-flex flex-column">
                        <label>
                            Cardholder name <span className="text-center text-danger">{contact.errors.name}</span>
                        </label>
                        <input className="my-2 p-1" type="text" name="name" value={contact.name} onChange={handleChange} error={contact.errors.name} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="creditInput col-lg-3 col-md-6 col-9 d-flex flex-column">
                        <label>
                            Card Number{' '}
                            <span className="text-center text-danger">
                                {contact.errors.number} {getCardType(contact.number)}{' '}
                            </span>
                        </label>
                        <input
                            className="my-2 p-1"
                            type="text"
                            name="number"
                            value={contact.number}
                            onKeyDown={handleNumbersOnly}
                            onChange={handleChange}
                            error={contact.errors.number}
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="creditInput col-lg-1 col-md-2 col-4">
                        <label>
                            MM <span className="text-center text-danger">{contact.errors.expiryMM}</span>
                        </label>
                        <input
                            className="my-2 p-1"
                            type="text"
                            maxLength="2"
                            name="expiryMM"
                            value={contact.expiryMM}
                            onKeyDown={handleNumbersOnly}
                            onKeyUp={handleCardExpiry}
                            onChange={handleChange}
                            error={contact.errors.expiryMM}
                        />
                    </div>
                    <div className="creditInput col-lg-1 col-md-2 col-4">
                        <label>
                            YY <span className="text-center text-danger">{contact.errors.expiryYY}</span>
                        </label>
                        <input
                            className="my-2 p-1"
                            type="text"
                            maxLength="2"
                            name="expiryYY"
                            value={contact.expiryYY}
                            onKeyDown={handleNumbersOnly}
                            onKeyUp={handleCardExpiry}
                            onChange={handleChange}
                            error={contact.errors.expiryYY}
                        />
                    </div>
                    <div className="creditInput col-lg-1 col-md-2 col-4">
                        <label>
                            CVV <span className="text-center text-danger">{contact.errors.securityCode}</span>
                        </label>
                        <input
                            className="my-2 p-1"
                            type="tel"
                            maxLength="3"
                            name="securityCode"
                            value={contact.securityCode}
                            onKeyDown={handleNumbersOnly}
                            onChange={handleChange}
                            error={contact.errors.securityCode}
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="creditInput col-md-3 text-end">
                        <button className="btn btn-outline-secondary" onClick={() => router.back()}>
                            ย้อนกลับ
                        </button>
                        <button type="submit" className="ms-3">
                            ชำระ
                        </button>
                    </div>
                </div>
            </Form>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        การชำระเงิน
                    </Typography>
                    {done.isDone ? (
                        <>
                            <Typography id="modal-modal-description" sx={{ mt: 2, color: done.isError ? 'red' : 'green' }}>
                                {done.text}
                            </Typography>
                            <Box sx={{ width: '100%', textAlign: 'right', marginTop: '12px' }}>
                                {done.isError ? (
                                    <Button onClick={() => handleClose()} variant="contained" sx={{ marginLeft: 'auto', color: 'black' }}>
                                        ปิด
                                    </Button>
                                ) : (
                                    <form name='form' action='https://api.gbprimepay.com/v2/tokens/3d_secured' method='POST'>
                                        <input hidden type="text" name="publicKey" value={pay.publicKey} />
                                        <input hidden type="text" name="gbpReferenceNo" value={pay.gbpReferenceNo} />
                                        <Button type="submit" fullWidth variant="contained" sx={{ color: 'black' }}>
                                            จ่าย
                                        </Button>
                                    </form>
                                    // <Button onClick={() => router.push(`/user/payment/confirmorder`)} variant="contained" sx={{ marginLeft: 'auto', color: 'black' }}>
                                    //     ต่อไป
                                    // </Button>
                                )}
                            </Box>
                        </>
                    ) : (
                        <Typography id="modal-modal-description" sx={{ mt: 2, color: 'green' }}>
                            <CircularProgress />
                        </Typography>
                    )}
                </Box>
            </Modal>
        </>
    );
};

export default Credit;
