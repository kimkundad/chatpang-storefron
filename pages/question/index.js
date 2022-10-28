import React, { useState } from 'react';
import QuestionContainer from '../../components/containers/questionContainer';
import MainLayout from '../../components/layouts/mainLayout/mainLayout';
import FooterComponent from '../../components/shared/footer';

export default function QuestionPage() {
  const [navHeight, setNavHeight] = useState(64);
  return (
    <MainLayout navKey="question" setNavHeight={setNavHeight}>
      <QuestionContainer navHeight={navHeight} />
      <FooterComponent />
    </MainLayout>
  );
}
