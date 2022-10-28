import { Container, Typography } from '@mui/material';
import React from 'react';
import AgreementStyle from './style';
import * as constants from '../../../constants/agreementConstants';
import { Image } from 'react-bootstrap';

const AgreementContainer = React.forwardRef((props, ref) => {
  return (
    <AgreementStyle>
      <Container maxWidth="xl">
        <div className="header">
          <div className="text-center">
            <Image src="/images/logo.png" className="image-cover-logo" />
          </div>
          <Typography variant="span">{constants.AGREEMENT_HEADER}</Typography>
        </div>
        <div className="content">{constants.AGREEMENT_CONTENT}</div>
      </Container>
    </AgreementStyle>
  );
});

export default AgreementContainer;
