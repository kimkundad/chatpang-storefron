import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
//component
import Stepper from '../../../components/Stepper/Stepper';
// import CardPrice from '../../components/CardPrice'
import axios from '../../api/axios';
import useUser from '../../../Hooks/useUser';
import moment from 'moment';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Image } from 'react-bootstrap';

import SelectedPackagesStyle from './style';
import MainLayout from '../../../components/layouts/mainLayout/mainLayout';

const Packages = () => {
    const router = useRouter();

    const [navHeight, setNavHeight] = useState(64);

    const { user, setUserData } = useUser();
    const [selected, setSelected] = useState(0);
    const [packages, setPackages] = useState([]);

    const [isError, setIsError] = useState(false);

    // function setSelectedPackage(id) {
    //     if (selected === id) {
    //         setSelected(0);
    //     } else {
    //         setSelected(id);
    //     }
    // }
    async function getPackages() {
        try {
            const res = await axios('/public/packages');
            setPackages(res.data.data.results);
        } catch (error) {
            console.log(error);
        }
    }
    // function setSelectedPackage(id) {
    //     setIsError(false);
    //     if (selected === id) {
    //         setSelected(null);
    //     } else {
    //         setSelected(id);
    //     }
    // }

    const onNext = async (id) => {
        const pack = packages.filter((item) => item.id === id);
        const userOrder = {
            facebookUser: user.user.id,
            payment: {
                amount: pack[0].price,
                paidDate: moment(),
                channel: 'GBPrimePay',
            },
            package: {
                _id: pack[0].id,
                name: pack[0].name,
                price: pack[0].price,
                quotaLimit: pack[0].quota_limit,
                pageLimit: pack[0].page_limit,
                lineNotificationLimit: pack[0].line_notification_limit,
                days: pack[0].days,
            },
            discount: 0,
            net: pack[0].price,
        };
        // console.log(userOrder);
        try {
            const res = await axios.post(`/public/orders`, userOrder, {
                headers: { Authorization: `Bearer ${user.accessToken}` },
            });
            // console.log(res.data)
            await setUserData({ ...user, package: pack[0], order: res.data.data });
            router.push('/user/payment/paymentoptions');
        } catch (error) {
            setIsError(true);
            console.log(error);
        }
    };
    const getFacebookUserData = async () => {
        try {
            const res = await axios.get(`/public/facebook-users/${user.userId}`);
            // console.log(res.data);
            const { facebook_id } = res.data.data;
            await setUserData({ ...user, user: res.data.data, facebookUserId: facebook_id });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        user.userId && getFacebookUserData();
    }, []);
    useEffect(() => {
        getPackages();
    }, []);
    return (
        <MainLayout setNavHeight={setNavHeight}>
            <SelectedPackagesStyle navHeight={navHeight}>
                <div className="row">
                    <div className="col-md-12 stepperContainer d-flex justify-content-center">
                        <Stepper step="0" />
                    </div>
                </div>
                {isError && (
                    <div className="col-12 text-center">
                        <span className="text-danger">ไม่สามารถสร้างออเดอร์ได้ ลองล็อคอินอีกครั้ง หรือ ติดต่อแอดมิน</span>
                    </div>
                )}
                <Container className="price-card-zone" maxWidth="xxl">
                    <Grid container direction="row" columnSpacing={{ sm: 2, md: 4 }} display="flex" textAlign="center" alignContent="center" alignItems="start">
                        {packages.map((item, index) => (
                            <Grid container item xs={12} sm={4} md={4} lg={4} xl={4} key={index}>
                                <div className="card-add">
                                    <div className="card-header">
                                        <div className="text-header">
                                            <span>{item.name}</span>
                                            <div style={{ display: `${item?.special_text?.length !== 0 ? 'block' : 'none'}` }} className="best-sell">
                                                ขายดี
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-detail">
                                        <div className="price">{item?.price} บาท</div>
                                        {/* <span className="">
                                            (ปกติ <span className="old-price">{constants.LIST_DATA_PRICE[0].oldPrice}</span> บาท)
                                        </span> */}

                                        {item.options.map((option, index) => (
                                            <div className="list-text text-muted" key={`Description_${index}}`}>
                                                <Typography variant="p" className="list-item">
                                                    <Image src="/images/icon/check-mark (1).png" />
                                                    {option}
                                                </Typography>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="card-footer">
                                        <Button onClick={() => onNext(item.id)} variant="contained" size="small" className="btn-button">
                                            เลือกแพ็คเกจนี้
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                {/* <div className="row justify-content-center">
          <div style={{ width: '40%' }} className="col-12 d-flex justify-content-md-end justify-content-center mt-5">
            <button onClick={() => onNext()} className="customBTN" disabled={selected === 0 ? true : false}>
              ต่อไป
            </button>
          </div>
        </div> */}
            </SelectedPackagesStyle>
        </MainLayout>
    );
};

export default Packages;
