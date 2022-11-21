import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import * as constants from '../../../constants/indexPage3Contants';
import { Image } from 'react-bootstrap';
import IndexPage3ContainerStyle from './style';
import useWindowSize from '../../../modules/windowSize';
import windowSize from '../../../styles/variables/windowSize';
import { useRouter } from 'next/dist/client/router';

const IndexPage3Container = React.forwardRef((props, ref) => {
    let size = useWindowSize();
    const router = useRouter();
    return (
        <IndexPage3ContainerStyle className="bg-1" navHeight={props.navHeight} screenWidth={size.width} screenHeight={size.height}>
            <div className="app-container">
                <div className="index-wrapper">
                    <Grid container spacing="2" justifyContent="center" justifyItems="center">
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="header">
                                <div className="text-header-1">
                                    {constants.HEADER_TEXT_1}
                                    <Image src="/images/icon/13.png" fluid className="header-icon" />
                                </div>
                                <Typography variant="h3">{constants.HEADER_TEXT_2}</Typography>
                                <div className="text-header-1" variant="h5" style={{ whiteSpace: 'normal' }}>
                                    {constants.HEADER_TEXT_3}
                                </div>
                            </div>

                            <div className="card-review ">
                                "จากที่ยุ่ง วุ่นวาน จนไม่มีเวลาพัก
                                <br /> เพราะต้องคอยตอบคอมเม้น แชท ของลูกค้า
                                <br />
                                เพื่อเเจ้งข้อมูลสินค้า เเละ โปรโมชั่น
                                <br />
                                พอมีเเชทปังเเป็นตัวช่วยทำให้ปิดการขาย เเละ เพิ่มยอดขายได้มากขึ้น
                                <br /> มีเวลาเพิ่มมากขึ้น ส่วนการบริการแอดมินน่ารักมากกกกก ถามเยอะแค่ไหน ก็ไม่บ่น
                            </div>

                            <Grid item style={{ marginTop: 20 }} alignItems="center" alignContent="center">
                                <div className="display-flex profile-wrapper">
                                    <div className="profile-icon"></div>
                                    <div className="profile-text">
                                        <span>{constants.PROFILE_INFO_TEXT}</span>
                                        <br />
                                        {constants.PROFILE_INFO_CONTENT}
                                    </div>
                                </div>
                            </Grid>
                        </Grid>

                        <Grid
                            item
                            alignContent="center"
                            alignItems="center"
                            container
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            xl={6}>
                            <div className="video-yt mx-auto">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/QIjZn_fiS3M"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        // direction="row"
                        spacing="2"
                        display="block"
                        textAlign="center"
                        // position="absolute"
                        sx={{ bottom: { lg: '5%', xl: '1%' }, width: '100%' }}>
                        <Button
                            variant="contained"
                            size="small"
                            className="btn-button review-btn"
                            onClick={() => {
                                router.replace('/customer-review');
                            }}>
                            รีวิวเพิ่มเติม
                        </Button>
                    </Grid>
                </div>
            </div>
        </IndexPage3ContainerStyle>
    );
});

export default IndexPage3Container;
