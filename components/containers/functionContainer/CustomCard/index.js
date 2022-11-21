import classNames from 'classnames';
import React from 'react';
import { Image } from 'react-bootstrap';
import CustomCardStyle from './style';

function CustomCard({ children, title, src = '', pad, srcClass }) {
  return (
    <CustomCardStyle>
      <div className={classNames({ 'circle-icon': !srcClass })}>
        <Image fluid src={src} className={classNames({ 'circle-icon': srcClass })} />
      </div>
      <Title>{title}</Title>
      {pad && <br />}
      <div className="content-card">{children}</div>
    </CustomCardStyle>
  );
}

export default CustomCard;

export const Title = ({ children }) => {
  return <div className="title">{children}</div>;
};
