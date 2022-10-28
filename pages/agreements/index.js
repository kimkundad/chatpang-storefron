import React, { useState } from 'react';
import AgreementContainer from '../../components/containers/agreementContainer';
import MainLayout from '../../components/layouts/mainLayout/mainLayout';

export default function AgreementPage() {
  const [navHeight, setNavHeight] = useState(64);
  return (
    <MainLayout navKey="none" setNavHeight={setNavHeight}>
      <AgreementContainer navHeight={navHeight} />
    </MainLayout>
  );
}
