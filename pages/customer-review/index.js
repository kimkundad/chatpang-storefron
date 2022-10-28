import React, { useEffect, useState } from 'react';
import CustomerReview from '../../components/containers/customerReviewContainer';
import MainLayout from '../../components/layouts/mainLayout/mainLayout';
import FooterComponent from '../../components/shared/footer';

export default function CustomerReviewPage() {
    const [navHeight, setNavHeight] = useState(64);
    return (
        <MainLayout navKey="customerReview" setNavHeight={setNavHeight}>
            <CustomerReview navHeight={navHeight} />
            <FooterComponent />
        </MainLayout>
    );
}
