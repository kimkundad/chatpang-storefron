import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Image } from 'react-bootstrap';
import AboutContainerStyle from './style';
import * as constants from '../../../constants/aboutContants';

const AboutContainer = React.forwardRef((props, ref) => {
    return (
        <AboutContainerStyle className="bg" ref={ref} navHeight={props.navHeight}>
            <div className="app-container">
                <Grid container direction="row" spacing="2" textAlign="center" className="header-text-page">
                    <Grid container item direction="column" alignContent="center" xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="img-content">
                        <Image src="images/icon/about-image.png" fluid alt='chatpang'/>
                    </div>
                    </Grid>
                    <Grid container item direction="column" alignContent="center" alignItems="center" className="about-header" xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className="image-cover-logo">
                            <Image src="/images/logo.png" fluid alt='chatpang'/>
                        </div>
                        <Typography style={{ fontWeight: 600, fontSize: '1.8rem', marginTop: 20 }} variant="h4">
                            {/* {constants.HEADER_TEXT_1} */}
                            ไม่พลาดทุกแชทของลูกค้า
                            <br />
                            ด้วยข้อความอัตโนมัติ
                        </Typography>

                        <Grid
                            container
                            direction="row"
                            display={'block'}
                            spacing="2"
                            className="header-text-page"
                            style={{ marginTop: { xs: 20, lg: 30, xl: 30 }, width: 'auto', marginBottom: 50 }}>
                            {constants.LIST_TEXT.map((item) => (
                                <div className="list-text" key={`Typography_${item.key}`}>
                                    <div variant="div" className="list-item">
                                        <Image src="images/icon/check-mark.png" />
                                        {item.text}
                                    </div>
                                </div>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </AboutContainerStyle>
    );
});

export default AboutContainer;
