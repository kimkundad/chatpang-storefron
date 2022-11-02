import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import IndexPage2ContainerStyle from './style';
import * as constants from '../../../constants/indexPage2Contants';
import { Image } from 'react-bootstrap';
import useWindowSize from '../../../modules/windowSize';
import windowSize from '../../../styles/variables/windowSize';
import { useRouter } from 'next/dist/client/router';

const IndexPage2Container = React.forwardRef((props, ref) => {
    let size = useWindowSize();
    const router = useRouter();
    return (
        <IndexPage2ContainerStyle className="bg-1" navHeight={props.navHeight} screenWidth={size.width} screenHeight={size.height}>
         
            <div className="app-container">
                <div className="index-wrapper">
                    <Grid container direction="row" spacing="2" justifyContent="center" justifyItems="center">
                        <Grid item container xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="header">
                                <div className="text-header-1">
                                    <br />
                                    {constants.HEADER_TEXT_1}
                                    <Image src="/images/miniLogo.png" fluid className="header-icon" />
                                </div>
                                <Typography variant="h3">{constants.HEADER_TEXT_2}</Typography>
                                <div className="text-content" style={{ fontStyle: 'italic' }}>
                                    เพราะ Chatpang เป็นตัวช่วยที่ดีมากในการตอบคอมเม้น เเละ Chat ของลูกค้า
                                    <br />
                                    สามารถใช้งานได้แบบง่ายๆ ตั้งค่าในการตอบ และ ระบุ keywords ได้
                                    <br />
                                    ของเรา ยิ่งเรามีโปรโมชั่นเด็ดๆส่งกลับหาลูกค้าเก่าก็สามารถเพิ่มยอดขายได้
                                    <br />
                                    และยิ่งเรามีการสื่อสารกับลูกค้าอยู่เป็นประจำก็ทำให้ลูกค้าไม่ลืมเพจเรา
                                </div>
                            </div>

                            <div className="header display-rs">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    className="video-yt"
                                    src="https://www.youtube.com/embed/QIjZn_fiS3M"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ marginLeft: 'auto', marginRight: 'auto' }}></iframe>
                            </div>

                            <div className="header text-center">
                                <Button
                                    variant="contained"
                                    size="small"
                                    className="btn-button"
                                    style={{ marginTop: '2.8%', marginBottom: '10%' }}
                                    onClick={() => {
                                        router.replace('/about');
                                    }}>
                                    เกี่ยวกับเรา
                                </Button>
                            </div>
                        </Grid>

                        <Grid
                            item
                            container
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            xl={6}
                            className="display"
                            style={{
                                height: '100%',
                                marginBottom: 'auto',
                                marginTop: 'auto',
                                paddingLeft: 25,
                                paddingRight: 25,
                            }}>
                            <iframe
                                width="100%"
                                height="100%"
                                className="video-yt"
                                src="https://www.youtube.com/embed/QIjZn_fiS3M"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ marginLeft: 'auto', marginRight: 'auto' }}></iframe>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </IndexPage2ContainerStyle>
    );
});

export default IndexPage2Container;
