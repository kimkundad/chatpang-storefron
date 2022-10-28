import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Image } from 'react-bootstrap';
import FunctionContainerStyle from './style';
import * as constants from '../../../constants/functionConstants';
import CustomCard from './CustomCard';

const FunctionPageContainer = React.forwardRef((props, ref) => {
    return (
        <FunctionContainerStyle className="bg" ref={ref} navHeight={props.navHeight}>
            <div className="app-container">
                <Container maxWidth="xxl" className="content-container">
                    <div className="main-content">
                        <Grid container direction="row" spacing="2" textAlign="center" display="block" className="header-text-page">
                            <Typography variant="h4" fontWeight={600} fontSize={'1.7rem'} display="flex" justifyItems="center" justifyContent="center" alignItems="center">
                                <Image src="/images/miniLogo.png" fluid className="header-icon" />
                                {constants.HEADER_TEXT_1}
                            </Typography>
                            <Typography variant="p" className="text-muted">
                                {constants.HEADER_DESCRIPTION}
                            </Typography>
                        </Grid>
                        {/* <Image component="div" src="/images/logo.png" fluid className="image-cover-logo" />
                        <Typography variant="h5" style={{ fontWeight: 600, marginBottom: 10, fontSize: '1.4rem' }}>
                            {constants.HEADER_TEXT_1}
                        </Typography> */}
                        <Grid
                            container
                            direction="row"
                            columnSpacing={{ xs: 2, lg: 8 }}
                            rowSpacing={{ xs: 2, lg: 2 }}
                            alignContent="center"
                            alignItems="start"
                            sx={{ marginTop: { lg: '2%' }, marginBottom: { lg: '2%' } }}>
                            <Grid item container direction="column" xs={12} sm={12} md={6} lg={4} xl={4} alignContent="center" justifyContent="center">
                                <CustomCard title={<div>ดึงคอมเม้นต์เข้า INBOX</div>} src="/images/icon/feature-1.svg" srcClass>
                                    ไม่พลาดทุกคอมเม้นต์
                                    <br />
                                    ที่ลูกค้าสนใจสินค้า
                                    <br />
                                    สามารถดึงไปคุยต่อในแชทได้ทันที!
                                </CustomCard>
                            </Grid>
                            <Grid item container direction="column" xs={12} sm={12} md={6} lg={4} xl={4} alignContent="center" justifyContent="center">
                                <CustomCard title="ตอบคอมเม้นต์อัตโนมัติ" src="/images/icon/feature-2.svg">
                                    ตั้งค่าตอบทุกคอมเม้นต์อัตโนมัติ
                                    <br />
                                    ตามข้อความที่คุณต้องการ
                                </CustomCard>
                            </Grid>
                            <Grid item container direction="column" xs={12} sm={12} md={6} lg={4} xl={4} alignContent="center" justifyContent="center">
                                <CustomCard title="ตอบโพสต์อัตโนมัติ" src="/images/icon/feature-3.svg">
                                    ตอบทุกคอมเม้นต์ใต้โพส
                                    <br />
                                    ตามข้อความ ที่คุณตั้งไว้
                                    <br />
                                    แม้คุณไม่ว่างตอบ
                                </CustomCard>
                            </Grid>
                            {/* <Grid item container direction="column" xs={12} sm={12} md={6} lg={4} xl={4} alignContent="center" justifyContent="center">
                <CustomCard title="ตอบ INBOX อัตโนมัติ" src="/images/icon/feature-4.svg">
                สร้างข้อความ พูดคุยกับลูกค้า
                  <br />
                  แชทปิดการขายได้ทุกเวลา
                </CustomCard>
              </Grid>
              <Grid item container direction="column" xs={12} sm={12} md={6} lg={4} xl={4} alignContent="center" justifyContent="center">
                <CustomCard title="แจ้งเตือนเมื่อไม่มีคนตอบแชท" src="/images/icon/feature-5.svg">
                ทุกครั้งที่แชท ไม่มีคนตอบเป็นเวลานานๆ
                  <br />
                  จะมีข้อความเเจ้งเตือนไปที่มือถือคุณ
                </CustomCard>
              </Grid> */}
                            {/* <Grid item container direction="column" xs={12} sm={12} md={6} lg={4} xl={4} alignContent="center" justifyContent="center">
                <CustomCard
                  title={
                    <div>
                      คลังความรู้
                      <br />
                      สำหรับแม่ค้าออนไลน์
                    </div>
                  }
                  src="/images/icon/knowledge.png">
                  คอร์สเรียนเกี่ยวกับการตลาดออนไลน์
                  <br />
                  ในหลายแพลตฟอร์ม สามารถเข้าไปเรียนรู้
                  <br />
                  เพิ่มสกิลให้กับตัวเองได้เลย
                </CustomCard>
              </Grid> */}
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            columnSpacing={{ xs: 2, lg: 8 }}
                            rowSpacing={{ xs: 2, lg: 2 }}
                            alignContent="center"
                            alignItems="center"
                            sx={{ marginTop: { lg: '2%' }, marginBottom: { lg: '2%' } }}>
                            <Grid item container direction="column" xs={12} sm={12} md={6} lg={4} xl={4} alignContent="center" justifyContent="center">
                                <CustomCard title="ตอบ INBOX อัตโนมัติ" src="/images/icon/feature-4.svg">
                                    สร้างข้อความ พูดคุยกับลูกค้า
                                    <br />
                                    แชทปิดการขายได้ทุกเวลา
                                </CustomCard>
                            </Grid>
                            <Grid item container direction="column" xs={12} sm={12} md={6} lg={4} xl={4} alignContent="center" justifyContent="center">
                                <CustomCard title="แจ้งเตือนเมื่อไม่มีคนตอบแชท" src="/images/icon/feature-5.svg">
                                    ทุกครั้งที่แชท ไม่มีคนตอบเป็นเวลานานๆ
                                    <br />
                                    จะมีข้อความเเจ้งเตือนไปที่มือถือคุณ
                                </CustomCard>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </FunctionContainerStyle>
    );
});

export default FunctionPageContainer;
