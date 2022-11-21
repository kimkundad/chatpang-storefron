import React, { useState } from 'react';
import AboutContainer from '../../components/containers/aboutContainer';
import MainLayout from '../../components/layouts/mainLayout/mainLayout';
import FooterComponent from '../../components/shared/footer';
import AboutStyle from './style';

export default function About() {
  const [navHeight, setNavHeight] = useState(64);
  return (
    <AboutStyle>
      <MainLayout navKey="about" setNavHeight={setNavHeight}>
        <AboutContainer navHeight={navHeight} />
        <FooterComponent />
      </MainLayout>
    </AboutStyle>
  );
}
