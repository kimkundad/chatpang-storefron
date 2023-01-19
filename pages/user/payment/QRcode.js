import Divider from '@mui/material/Divider';
import React, { useState } from 'react';
// import Image from 'next/image'
import { useRouter } from 'next/dist/client/router';

// import QRCode from '../../../resources/imgs/qrcash.0a134114.png'
import useUser from '../../../Hooks/useUser';
import axios from '../../api/axios';
import { useQRCode } from 'next-qrcode';
import moment from 'moment';
import { Box, Button, Modal, Typography } from '@mui/material';
const QRcode = () => {
    const { user, setUserData } = useUser();
    const router = useRouter();
    const [isPending, setIsPending] = useState(false);
    const [isDuplicate, setIsDuplicate] = useState(false);
    const { Image } = useQRCode();
    const [qrcode, setQrcode] = useState('');

    const [open, setOpen] = useState(false);
    const [done, setDone] = useState({ text: '', isError: false });

    const selectedPackage = user.package;
    // console.log(selectedPackage);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setDone({ ...done, text: '' });
    };
    const onSubmit = async () => {
        const userOrder = {
            facebookUser: user.user.id,
            payment: {
                amount: user?.selectedpackage?.price || selectedPackage.price,
                paidDate: moment(),
                channel: 'GBPrimePay',
            },
            package: {
                _id: user?.selectedpackage?.id || selectedPackage.id,
                name: user?.selectedpackage?.name || selectedPackage.name,
                price: user?.selectedpackage?.price || selectedPackage.price,
                quotaLimit: user?.selectedpackage?.quota_limit || selectedPackage.quota_limit,
                pageLimit: user?.selectedpackage?.page_limit || selectedPackage.page_limit,
                lineNotificationLimit: user?.selectedpackage?.line_notification_limit || selectedPackage.line_notification_limit,
                days: user?.selectedpackage?.days || selectedPackage.days,
            },
            discount: 0,
            net: user?.selectedpackage?.price || selectedPackage.price,
        };
        try {
            const res = await axios.post(`/public/orders`, userOrder, {
                headers: { Authorization: `Bearer ${user.accessToken}` },
            });
            setUserData({ ...user, order: res.data.data });
            const qrcode = await axios.get(`public/orders-payment/${res.data.data.id}/qrcode`);
            // console.log(qrcode.data);
            //* check that qr code for this order has been created
            if (qrcode.data.data.result_code === '90') {
                setIsDuplicate(true);
            } else {
                setQrcode(qrcode.data.data.qrcode);
            }
        } catch (error) {
            console.log(error);
            handleOpen()
            setDone({ text: `เกิดข้อผิดพลาด กรุณาติดต่อแอดมิน`, isError: true });
        }
    };

    const onNext = async () => {
        try {
            const res = await axios.get(`/public/facebook-users/${user.user.id}`);
            // console.log(res.data.data)
            //* check payment status
            if (res.data.data.purchases !== 0) {
                setUserData({
                    ...user,
                    user: res.data.data,
                });
                router.push('/user/payment/confirmorder');
            } else {
                setIsPending(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const RenderQRCode = () => {
        if (qrcode) {
            return (
                <div className="row justify-content-center">
                    <span className="text-center mt-3 qrcode-title">SCAN QR_CODE ด้วยแอพพลิเคชั่นธนาคารของท่าน</span>
                    {isPending && (
                        <>
                            <span className="text-center text-danger mt-1 qrcode-details">
                                การจ่ายเงินของท่านยังไม่สมบูรณ์
                                <br /> กรุณาเช็คว่าท่านได้กดยืนยันการจ่ายเงินเรียบร้อยหรือยัง
                            </span>
                            <span className="text-start  text-md-center text-danger mt-1 qrcode-details">
                                - ถ้ายังกรุณาทำการยืนยันการจ่ายเงินให้เรียบร้อยแล้ว กด <strong>ต่อไป</strong> อีกครั้ง <br />- ถ้าเรียบร้อยเเล้วกรุณา ติดต่อ คนดูแลระบบ{' '}
                            </span>
                        </>
                    )}
                    <div className="col-md-6 d-flex qrcodeImg flex-column">
                        <Image
                            text={qrcode}
                            options={{
                                type: 'image/jpeg',
                                quality: 0.3,
                                level: 'M',
                                margin: 3,
                                scale: 4,
                                width: 200,
                                color: {
                                    dark: '#000',
                                    light: '#FFF',
                                },
                            }}
                            alt="qrcode"
                        />
                        <div className="text-end qrcodeBtnContainer">
                            <button onClick={() => router.back}>ย้อนกลับ</button>
                            <button className="ms-2" onClick={() => onNext()}>
                                ต่อไป
                            </button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row justify-content-center">
                    {isDuplicate && (
                        <div className="col-md-12 d-flex justify-content-center text-center">
                            <span className="text-danger">
                                ออเดอร์นี้ได้เคยสร้าง QR code แล้ว ไม่สามารถสร้างได้อีก
                                <br />
                                กรุณาเลือกแพ็คเกจเเล้วทำการจ่ายเงินใหม่
                            </span>
                        </div>
                    )}
                    <div className="col-md-6 d-flex qrcodeInput">
                        <button className="btn btn-outline-secondary" onClick={() => router.back()}>
                            ย้อนกลับ
                        </button>
                        {isDuplicate ? (
                            <button onClick={() => router.replace('/user/packages')}>ไปหน้าเลือกแพ็คเกจ</button>
                        ) : (
                            <>
                                <button onClick={() => onSubmit()}>สร้าง QR CODE</button>
                            </>
                        )}
                        {/* <button onClick={() => router.replace('/user/info/pagemanagement')}>
             SKIP FOR TEST USER
            </button> */}
                    </div>
                </div>
            );
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
    return (
        <>
            <div className="row justify-content-center">
                <div className="col text-center qrcodeDetail mx-auto">
                    <p>รายละเอียดการชำระเงิน</p>
                    <Divider />
                    <p>Package : {selectedPackage?.name}</p>
                    <p>ราคา : {selectedPackage?.price} บาท</p>
                </div>
            </div>
            {RenderQRCode()}
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        การชำระเงิน
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, color: done.isError ? 'red' : 'green' }}>
                        {done.text}
                    </Typography>
                    <Box sx={{ width: '100%', textAlign: 'right', marginTop: '12px' }}>
                        <Button onClick={() => handleClose()} variant="contained" sx={{ marginLeft: 'auto', color: 'black' }}>
                            ปิด
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default QRcode;
