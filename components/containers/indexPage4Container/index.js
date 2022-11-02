import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import * as constants from '../../../constants/indexPage4Contants';
import { Image } from 'react-bootstrap';
import IndexPage4ContainerStyle from './style';
import color from '../../../styles/variables/color';
import useWindowSize from '../../../modules/windowSize';
import { useRouter } from 'next/dist/client/router';

const IndexPage4Container = React.forwardRef((props, ref) => {
    let iconRef = useRef({});
    let size = useWindowSize();
    const router = useRouter();
    return (
        <IndexPage4ContainerStyle 
        className="bg" 
        // iconWidth={iconRef.current.width} 
        navHeight={props.navHeight} 
        screenHeight={size.height}>
            <div className="app-container">
                {/* <Image ref={iconRef} src="/images/logo/9.png" className="img-logo-absolute" /> */}
                {/* <Image className="vector" src="/images/icon/Vector3.png" /> */}
                <div className="content-data">
                    <div className="div-w-100">
                        <Grid container direction="row" spacing="2" textAlign="center" alignItems="center" className="header-text-page">
                            <Grid container item md={12} lg={12} xl={12} sm={12} xs={12} display="block">
                                <Typography variant="h3" style={{ padding: '0px 0px 1%' }}>
                                    {constants.HEADER_TEXT_1}
                                    <span className="price">{constants.HEADER_TEXT_PRICE}</span>
                                    <br className="break-line"></br>
                                    {constants.HEADER_TEXT_2}
                                </Typography>

                                {constants.LIST_TEXT.map((item) => (
                                    <div className="list-text" key={`Typography_${item.key}`}>
                                        <Typography variant="p" className="list-item">
                                            <Image src="images/icon/check-mark.png" />
                                            {item.text}
                                        </Typography>
                                    </div>
                                ))}
                            </Grid>
                        </Grid>

                        <Grid container direction="row" spacing="2" display="flex" textAlign="center">
                            <Grid container item md={12} lg={12} xl={12} sm={12} xs={12} display="block">
                                <Button
                                    variant="contained"
                                    size="small"
                                    className="btn-button review-btn"
                                    onClick={() => {
                                        router.replace('/price');
                                    }}>
                                    ดูแพ็คเกจ
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            {/* <Grid
        container
        //direction="row"
        spacing="2"
        alignContent="center"
        justifyContent="center"
        position="absolute"
        sx={{ bottom: 0, background: color.PRIMARY, maxHeight: { lg: 100 }, minHeight: { lg: 100 }, zIndex: 1, padding: { md: '5px 5%', xs: '5% 5%' } }}>
        <Grid container item md={12} lg={3} xl={3} sm={12} xs={12} display="block" textAlign="center" alignContent="center">
          <Image className="footer-img" src="/images/logo.png" />
          <div className="footer-text">ระบบบอรดแคสต์เพิ่มยอดขาย สำหรับแม่ค้าออนไลน์</div>
        </Grid>
        <Grid onClick={() => props.setAgreement(true)} container direction="column" item md={4} lg={2} xl={2} sm={3} xs={12} alignItems="center" justifyContent="center">
          <div className="footer-text2">เงื่่อนไขการใช้งาน</div>
        </Grid>
        <Grid onClick={() => props.setPolicy(true)} container direction="column" item md={4} lg={2} xl={2} sm={3} xs={12} alignItems="center" justifyContent="center">
          <div className="footer-text2">นโยบายความเป็นส่วนตัว</div>
        </Grid>

        <Grid container direction="column" item md={4} lg={3} xl={3} sm={3} xs={12} alignItems="center" justifyContent="center">
          <a target="_blank" href="https://www.facebook.com/broadpangmkt/">
            <div className="footer-follow-me">
              <Image className="follow-icon" src="/images/icon/facebook.png" />
              <div className="footer-text2">ติดตามเรา</div>
            </div>
          </a>
        </Grid>
      </Grid> */}
        </IndexPage4ContainerStyle>
    );
});

export default IndexPage4Container;
