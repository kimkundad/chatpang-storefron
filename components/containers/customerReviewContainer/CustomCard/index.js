import React from 'react';
import { Image } from 'react-bootstrap';
import CustomCardStyle from './style';

function CustomCard({ children, title, src = '' }) {
  return (
    <CustomCardStyle>
      <div className="circle-icon">
        <Image fluid src={src} />
      </div>
      <Title>{title}</Title>
      <div className="content-card">{children}</div>
    </CustomCardStyle>
  );
}

function Title({ children }) {
  return <div className="title">{children}</div>;
}

export default CustomCard;
