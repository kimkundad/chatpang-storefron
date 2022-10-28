import FooterComponentStyle from './style';
import React from 'react';
import { Container, Grid } from '@mui/material';
import { Image } from 'react-bootstrap';
import * as constants from '../../../constants/footerContants';
import Link from 'next/link';
import useWindowSize from '../../../modules/windowSize';
import windowSize from '../../../styles/variables/windowSize';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const FooterComponent = React.forwardRef((props, ref) => {
  let size = useWindowSize();
  let containRef = useRef({});
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    setFooterHeight(containRef ? containRef.current.offsetHeight : 0);
    console.log(containRef && containRef.current && containRef.current.offsetHeight ? containRef.current.offsetHeight : 668);
  }, [containRef.current, footerHeight, size]);
  return (
    <FooterComponentStyle screenWidth={size.width} containHeight={containRef && containRef.current && containRef.current.offsetHeight ? containRef.current.offsetHeight : 668}>
      <div className="footer-bg">
        <Image className="img-footer-bg-1" src="/images/BG/bg.jpg" />
        <div className="img-footer-bg" ref={containRef}>
          <img ref={containRef} src="/images/BG/footer.png" />
        </div>
      </div>

      <Container
        maxWidth="xl"
        className="container-footer"
        style={{
          zIndex: 99,
          width: size.width >= windowSize.STD_WIDTH ? windowSize.STD_WIDTH : size.width,
          maxWidth: size.width >= windowSize.STD_WIDTH ? windowSize.STD_WIDTH : size.width,
        }}>
        <Grid className="footer-content" container direction="row" justifyItems="center" justifyContent="center" alignItems="start">
          <Grid alignContent="center" alignItems="center" justifyContent="center" container item xs={12} sm={12} md={9} lg={3} xl={3} className="p-side-2">
            <Image component="div" src="/images/logo.png" fluid className="image-cover-logo" />
            <div className="footer-title">ระบบบรอดแคสต์เพิ่มยอดขาย</div>
            <div className="footer-sub-title">สำหรับแม่ค้าออนไลน์</div>

            <Grid container direction="row" justifyItems="center" justifyContent="center">
              <div className="address">
                <div className="company-name">บริษัท บีทีวาย มาเก็ตติ้ง จำกัด</div>
                <div>169/93 หมู่บ้านอรินสิริ@ข้าวหลาม</div>
                <div>ต.ห้วยกะปิ อ.เมือง จ.ชลบุรี 20000</div>
              </div>
            </Grid>
          </Grid>

          <Grid className="padding-link" container item xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className="footer-center ">
              <Grid container direction="row" justifyItems="center" justifyContent="center" alignContent="center" alignItems="flex-start" textAlign="center">
                <Grid container item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <div className="services">บริการ</div>
                  <Link href="/about">
                    <div
                      className="link"
                      //onClick={() => props.handleClick('article')}
                    >
                      เกี่ยวกับเรา
                    </div>
                  </Link>

                  <Link href="/function">
                    <div
                      className="link"
                      //onClick={() => props.handleClick('article')}
                    >
                      ฟังก์ชั่น
                    </div>
                  </Link>

                  <Link href="/customer-review">
                    <div
                      className="link"
                      //onClick={() => props.handleClick('article')}
                    >
                      รีวิวจากลูกค้า
                    </div>
                  </Link>

                  <div> </div>
                </Grid>

                <Grid container item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <div className="services">ซัพพอร์ต</div>
                  <Link href="/about">
                    <div
                      className="link"
                      //onClick={() => props.handleClick('article')}
                    >
                      คู่มือการใช้งาน
                    </div>
                  </Link>

                  <Link href="/function">
                    <div
                      className="link"
                      //onClick={() => props.handleClick('article')}
                    >
                      ฟังก์ชั่น
                    </div>
                  </Link>

                  <Link href="/customer-review">
                    <div
                      className="link"
                      //onClick={() => props.handleClick('article')}
                    >
                      รีวิวจากลูกค้า
                    </div>
                  </Link>
                  <div> </div>
                </Grid>

                <Grid container item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <div className="services">บริษัท</div>

                  <Link href="/agreements">
                    <div className="link">เงื่อนไขการใช้งาน</div>
                  </Link>

                  <Link href="/policy">
                    <div className="link">นโยบายความเป็นส่วนตัว</div>
                  </Link>

                  <Link href="/article">
                    <div className="link">บทความ</div>
                  </Link>
                  <div> </div>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid container item xs={12} sm={12} md={12} lg={3} xl={3} padding={{ xs: '0px', lg: '50px 0px' }}>
            <div className="footer-center">
              <Grid container direction="row" justifyItems="center" justifyContent="center" alignContent="center" textAlign="center">
                <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="services text-center follow-header">ติดต่อเรา</div>

                  <div className="item-social">
                    <a target="_blank" href="https://www.facebook.com/broadpangmkt/">
                      <div className="follow-me">
                        <div className="img-bg-click">
                          <Image src="/images/BG/Asset3.png" />
                        </div>
                        <Image className="icon-follow" src="/images/icon/Asset 4.png" />
                        <div>Chatpang</div>
                      </div>
                    </a>
                  </div>

                  <div className="item-social">
                    <a target="_blank" href="https://www.facebook.com/broadpangmkt/">
                      <div className="follow-me">
                        <div className="img-bg-click">
                          <Image src="/images/BG/Asset3.png" />
                        </div>
                        <Image className="icon-follow" src="/images/icon/Asset 6.png" />
                        @Chatpang
                      </div>
                    </a>
                  </div>

                  <div className="item-social">
                    <a target="_blank" href="https://www.facebook.com/broadpangmkt/">
                      <div className="follow-me">
                        <div className="img-bg-click">
                          <Image src="/images/BG/Asset3.png" />
                        </div>
                        <Image className="icon-follow" src="/images/icon/Asset 5.png" />
                        Chatpang
                      </div>
                    </a>
                  </div>

                  <div className="item-social">
                    <a target="_blank" href="https://www.facebook.com/broadpangmkt/">
                      <div className="follow-me">
                        <div className="img-bg-click">
                          <Image src="/images/BG/Asset3.png" />
                        </div>
                        <Image className="icon-follow" src="/images/icon/Asset 7.png" />
                        087-1352410
                      </div>
                    </a>
                  </div>

                  <div> </div>
                </Grid>
              </Grid>
            </div>

            <div> </div>
          </Grid>
        </Grid>
        <div className="copy-right">Copyright 2022 © Chatpang</div>
      </Container>
    </FooterComponentStyle>
  );
});

export default FooterComponent;
