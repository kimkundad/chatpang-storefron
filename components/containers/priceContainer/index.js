import { Button, Container, Grid, Typography } from '@mui/material';
import React,{ useEffect, useState} from 'react';
import { Image } from 'react-bootstrap';
import PriceContainerStyle from './style';
import * as constants from '../../../constants/priceConstants';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useRef } from 'react';
import axios from '../../../pages/api/axios';

const PriceContainer = React.forwardRef((props, ref) => {
    const [open, setOpen] = React.useState({ 1: true, 2: false, 3: false });
    const [headerHeight, setHeaderHeight] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);
    const [cardHeight, setCardHeight] = useState(0);
    let router = useRouter();
    const headerRef = useRef({});
    const contentRef = useRef({});
    const cardRef = useRef({});

    const [packages, setPackages] = useState([])

    const handleClick = (index) => {
        let openTemp = open;
        openTemp[index] = !openTemp[index];
        setOpen((prev) => ({ ...prev, ...openTemp }));
    };

    async function getPackages() {
      try {
        const res = await axios('/public/packages')
        setPackages(res.data.data.results)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
        setHeaderHeight(headerRef.current.offsetHeight);
        setContentHeight(contentRef.current.offsetHeight);
        console.log(contentRef);
    }, [headerRef, contentRef, headerRef.current, contentRef.current, headerHeight, contentHeight]);

    useEffect(() => {
      getPackages()
    }, [])
    
    return (
        <PriceContainerStyle className="bg" ref={ref} navHeight={props.navHeight} cardHeight={cardHeight} headerHeight={headerHeight} contentHeight={contentHeight}>
            <div className="app-container">
                <div className="price-wrapper">
                    <Grid ref={headerRef} container direction="row" spacing="2" textAlign="center" display="block" className="header-text-page">
                        <Typography variant="div" display="flex" justifyItems="center" justifyContent="center" alignItems="center">
                            <div style={{ fontSize: 42, fontWeight: 600 }}>
                                <Image src="/images/miniLogo.png" fluid className="header-icon" />
                                {constants.HEADER_PAGE_TEXT}
                                <div className="text-description">{constants.HEADER_TEXT_1}</div>
                            </div>
                        </Typography>
                    </Grid>
                    <Container className="price-card-zone" maxWidth="xxl">
                        <Grid container direction="row" columnSpacing={{ sm: 2, md: 4 }} display="flex" textAlign="center" alignContent="center" alignItems="start">
                        {packages.map((item, index)=>(
                          <Grid container item xs={12} sm={4} md={4} lg={4} xl={4} key={index}>
                                <div className="card-add">
                                    <div className="card-header">
                                        <div className="text-header">
                                            <span>{item.name}</span>
                                            <div style={{ display: `${item?.special_text?.length !== 0 ? 'block' : 'none'}` }} className="best-sell">ขายดี</div>
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
                                        <Link href="#">
                                            <a target="_blank">
                                                <Button variant="contained" size="small" className="btn-button">
                                                    เลือกแพ็คเกจนี้
                                                </Button>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                        </Grid>
                        {/* <div className="div-space"></div> */}
                    </Container>
                </div>
            </div>
        </PriceContainerStyle>
    );
});

export default PriceContainer;
