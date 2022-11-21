import React, { useEffect, useState } from 'react';
import CustomerReview from '../../components/containers/customerReviewContainer';
import MainLayout from '../../components/layouts/mainLayout/mainLayout';
import FooterComponent from '../../components/shared/footer';
// import { useDispatch } from 'react-redux';
import { fetchUserReviewAction, fetchYoutubeReviewAction } from '../../redux/indexRedux/action';

export default function CustomerReviewPage() {
    const [navHeight, setNavHeight] = useState(64);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchYoutubeReviewAction());
    //     dispatch(fetchUserReviewAction());
    // }, []);
    return (
        <MainLayout navKey="customerReview" setNavHeight={setNavHeight}>
            <CustomerReview navHeight={navHeight} />
            <FooterComponent />
        </MainLayout>
    );
}
