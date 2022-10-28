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
                    <Grid container direction="row" spacing="2" columnSpacing={3} justifyContent="center" justifyItems="center">
                        <Grid item container xs={12} sm={12} md={8} lg={6} xl={6}>
                            <div className="header">
                                <div className="text-header-1">
                                    {constants.HEADER_TEXT_1}
                                    <Image src="/images/miniLogo.png" fluid className="header-icon" />
                                </div>
                                <Typography variant="h3">{constants.HEADER_TEXT_2}</Typography>
                                <div className="text-header-1" variant="h5" style={{ whiteSpace: 'normal' }}>
                                    {constants.HEADER_TEXT_3}
                                </div>
                            </div>

                            <div className="card-review ">
                                "จากที่เงียบเหงา มานานเพราะ โดนปิดกั้นการมองเห็น
                                <br /> พอได้ใช้ระบบ ลูกค้าเก่าเริ่มทยอยกับมาซื้อแถมยัง
                                <br />
                                ได้ลูกค้าใหม่ๆเพิ่มขึ้นมาอีกเพียบ
                                <br />
                                บรอดแคสต์ทีนึง ก็ได้ค่าระบบคืนแล้วแถมกำไรยังตามมาอีกเรื่อยๆเลยจ้า
                                <br /> แอดมินน่ารักมากกกกก ถามเยอะแค่ไหน ก็ไม่บ่น
                                <br /> ไม่เข้าใจตรงไหน ก็ช่วยทำให้ บริการก่อน-หลังการขาย คือดีงานมมากค่ะ"
                            </div>

                            <Grid container direction="row" style={{ marginTop: 20 }} alignItems="center" alignContent="center">
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
                            container
                            xs={12}
                            sm={12}
                            md={4}
                            lg={6}
                            xl={6}
                            style={{
                                height: '100%',
                                marginBottom: { xl: 'auto' },
                                marginTop: 'auto',
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

                    <Grid
                        container
                        direction="row"
                        spacing="2"
                        display="block"
                        textAlign="center"
                        position="absolute"
                        sx={{ bottom: { lg: '5%', xl: '1%' }, width: size.width >= windowSize.STD_WIDTH ? windowSize.STD_WIDTH : size.width }}>
                        <Button variant="contained" size="small" className="btn-button review-btn" onClick={() => {
                          router.replace('/customer-review')
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
