import React, { useState } from 'react';
import PolicyContainer from '../../components/containers/policyContainer';
import MainLayout from '../../components/layouts/mainLayout/mainLayout';

export default function PolicyPage() {
  const [navHeight, setNavHeight] = useState(64);
  return (
    <MainLayout navKey="none" setNavHeight={setNavHeight}>
      <PolicyContainer navHeight={navHeight} />
    </MainLayout>
  );
}
