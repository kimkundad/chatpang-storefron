import React, { useState } from 'react';
import ContactUsContainer from '../../components/containers/contactUsContainer';
import MainLayout from '../../components/layouts/mainLayout/mainLayout';
import FooterComponent from '../../components/shared/footer';

export default function ContactPage() {
  const [navHeight, setNavHeight] = useState(64);
  return (
    <MainLayout navKey="contact" setNavHeight={setNavHeight}>
      <ContactUsContainer navHeight={navHeight} />
      <FooterComponent />
    </MainLayout>
  );
}
