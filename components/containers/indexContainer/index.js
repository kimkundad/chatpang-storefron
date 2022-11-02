import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Image } from 'react-bootstrap';
import Link from 'next/link';
import IndexContainerStyle from './style';
import * as constants from '../../../constants/indexConstant';
import useWindowSize from '../../../modules/windowSize';
const IndexContainer = React.forwardRef((props, ref) => {
    let size = useWindowSize();
   
    return (
        <IndexContainerStyle className="bg-1" ref={ref} navHeight={props.navHeight} screenHeight={size.height}>
            <div className="app-container flex">
                <Grid container direction="row" spacing="2" className="row-content" alignItems="center">
                    <Grid item container xs={12} sm={12} md={6} lg={6} xl={6} alignItems="center" justifyContent="center" alignContent="center">
                        <iframe
                            width="100%"
                            height="100%"
                            className="video-yt"
                            src="https://www.youtube.com/embed/QIjZn_fiS3M"
                            allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        // style={{
                        //   height: '100%',
                        //   marginBottom: 'auto',
                        //   marginTop: 'auto',
                        //   paddingLeft: 50,
                        // }}
                    >
                        <div className="image-cover-logo" style={{ marginTop: '5vw' }}>
                            <Image style={{margin:'auto'}} src="/images/logo.png" fluid />
                        </div>
                        <div
                            className="header text-center"
                            style={{
                                marginBottom: 'auto',
                            }}>
                            <div className="index-text">
                                ผู้ช่วยตอบแชทคนเก่ง! <br /> สำหรับแม่ค้าออนไลน์
                            </div>

                            {/* <div className="index-text"></div> */}
                            <Link href="/user">
                                <Button variant="contained" size="small" className="btn-button btn-index" style={{ marginTop: 50 }}>
                                    สนใจเริ่มใช้งาน
                                </Button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </IndexContainerStyle>
    );
});
export default IndexContainer;
