import React, { useState } from 'react';
import FunctionPageContainer from '../../components/containers/functionContainer';
import MainLayout from '../../components/layouts/mainLayout/mainLayout';
import FooterComponent from '../../components/shared/footer';

export default function FunctionPage() {
  const [navHeight, setNavHeight] = useState(64);
  return (
    <MainLayout navKey="function" setNavHeight={setNavHeight}>
      <FunctionPageContainer  navHeight={navHeight} />
      <FooterComponent />
    </MainLayout>
  );
}
