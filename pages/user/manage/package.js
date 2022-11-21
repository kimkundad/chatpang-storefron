import React, { useEffect, useState, } from 'react';
// import PriceContainer from '../../../components/containers/priceContainer';
import { Button, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { Image } from 'react-bootstrap';

import UserLayout from '../../../components/layouts/userLayout/userLayout';
import ManageStyle from './style';

import axios from '../../api/axios';
import { useRouter } from 'next/router';
const Package = () => {
    const router = useRouter()
    const [navHeight, setNavHeight] = useState(64);
    const [packages, setPackages] = useState([]);

    const onChangePackage = (packageId) => {
        router.push({pathname: '/user/changepackage', query:{ packageId : packageId  }},'/user/changepackage')
    }

    async function getPackages() {
        try {
            const res = await axios('/public/packages');
            setPackages(res.data.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        packages.length === 0 && getPackages();
    }, []);

    return (
        <UserLayout>
            <ManageStyle>
                <div className="page-header">
                    <div className="row">
                        <div className="col text-center">
                            <strong className="page-title packageHeader">แพ็คเกจสุดคุ้ม</strong>
                        </div>
                    </div>
                </div>
                <Container className="price-card-zone" maxWidth="xl">
                    <Grid container direction="row" columnSpacing={{ sm: 2, md: 4 }} display="flex" textAlign="center" alignContent="center" alignItems="start">
                        {packages.map((item, index) => (
                            <Grid container item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
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
                                        {/* <Link href="#"> */}
                                            <a target="_blank">
                                                <Button onClick={()=> onChangePackage(item.id)} variant="contained" size="small" className="btn-button">
                                                    เลือกแพ็คเกจนี้
                                                </Button>
                                            </a>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                    {/* <div className="div-space"></div> */}
                </Container>
            </ManageStyle>
        </UserLayout>
    );
};

export default Package;
