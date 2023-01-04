import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Stepper from '../../../components/Stepper/Stepper';
import Credit from './credit';
import QRcode from './QRcode';
import useUser from '../../../Hooks/useUser';
import axios from '../../api/axios';

import MainLayout from '../../../components/layouts/mainLayout/mainLayout';
import PaymentStyle from './style';
import { Divider } from '@mui/material';

const Paymentoptions = () => {
    // const router = useRouter()
    const { user, setUserData } = useUser();
    const [navHeight, setNavHeight] = useState(64);

    const [method, setMethod] = useState(true); //false = credit, true= qrcode
    const onChangeMethod = (e) => {
        setMethod(!method);
        // console.log(e.target.name)
    };

    const getOrderData = async () => {
        try {
            const res = await axios.get(`/public/orders/${user.order.id}`, { headers: { Authorization: `Bearer ${user.accessToken}` } });
            setUserData({ ...user, order: res.data.data });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        user.order.id && getOrderData();
    }, []);
    return (
        <MainLayout navHeight={navHeight}>
            <PaymentStyle navHeight={navHeight}>
                {/* <div className="container container-fluid"> */}
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <Stepper step="1" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {/* เอาออกเพื่อยืนยันกับลูกค้าก่อนว่าโอเคมั้ย */}
                    <div style={{ fontSize: '1.2rem' }} className="col-md-6 col-12 text-md-center">
                        <input type="checkbox" id="method1" name="card" onChange={(e) => onChangeMethod(e)} checked={!method} />
                        <label className="ms-2" htmlFor="method1">
                            Credit card / Debit card
                        </label>
                    </div>
                    <div style={{ fontSize: '1.2rem' }} className="col-md-3 col-12 text-md-center">
                        <input type="checkbox" id="method2" name="method" onChange={() => onChangeMethod()} checked={method} />
                        <label className="ms-2" htmlFor="method2">
                            QR CODE
                        </label>
                    </div>
                </div>
                <Divider />
                {method ? <QRcode /> : <Credit />}
                {/* <QRcode /> */}
                {/* </div> */}
            </PaymentStyle>
        </MainLayout>
    );
};

export default Paymentoptions;
