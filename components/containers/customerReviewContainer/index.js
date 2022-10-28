import { Button, Container, Grid, Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import { Image } from 'react-bootstrap';
import CustomerReviewStyle from './style';
import * as constants from '../../../constants/customerReviewConstant';
import ReviewCarousel from './ReviewCarousel';
import VideoCarousel from './videoCarousel';
import axios from 'axios';

const CustomerReview = React.forwardRef((props, ref) => {
    const [reviews, setReviews] = useState([])

    async function getReviews() {
        try {
          const res = await axios('https://chat-pang-api-fy5xytbcca-as.a.run.app/public/reviews')
          setReviews(res.data.data.results)
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(() => {
        getReviews()
      }, [])
    return (
        <CustomerReviewStyle className="bg" ref={ref} navHeight={props.navHeight}>
            <div className="app-container">
                <Grid container direction="row" spacing="2" textAlign="center" display="block" className="header-text-page">
                    <Typography variant="h4" fontWeight={600} fontSize={'1.7rem'} display="flex" justifyItems="center" justifyContent="center" alignItems="center">
                        <Image src="/images/miniLogo.png" fluid className="header-icon" />
                        {constants.HEADER_PAGE_TEXT}
                    </Typography>
                </Grid>

                {/* <Grid container direction="row" spacing="2" textAlign="center" display="block">
                    <Typography className="description" variant="span">
                        {constants.CONTENT_HEADER_TEXT}
                    </Typography>
                </Grid> */}
                <div className="review-wrapper">
                    <Grid container direction="row" display="block" spacing="2" alignContent="center" alignItems="center">
                        <VideoCarousel data={reviews} />
                        <ReviewCarousel data={reviews} />
                    </Grid>
                </div>
            </div>
        </CustomerReviewStyle>
    );
});

export default CustomerReview;
