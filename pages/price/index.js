import React, { useState } from 'react';
import PriceContainer from '../../components/containers/priceContainer';
import MainLayout from '../../components/layouts/mainLayout/mainLayout';
import FooterComponent from '../../components/shared/footer';

export default function PricePage() {
  const [navHeight, setNavHeight] = useState(64);
  return (
    <MainLayout navKey="price" setNavHeight={setNavHeight}>
      <PriceContainer navHeight={navHeight} />
      <FooterComponent />
    </MainLayout>
  );
}
