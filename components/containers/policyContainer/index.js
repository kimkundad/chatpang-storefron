import { Container, Typography } from '@mui/material';
import React from 'react';
import PolicyContainerStyle from './style';
import * as constants from '../../../constants/policyConstants';
import { Image } from 'react-bootstrap';

const PolicyContainer = React.forwardRef((props, ref) => {
  return (
    <PolicyContainerStyle ref={ref} navHeight={props.navHeight}>
      <Container maxWidth="xl">
        <div className="header">
          <Image src="/images/logo.png"s className="image-cover-logo" />
          {constants.POLICY_HEADER}
        </div>
        <div className="content">{constants.POLICY_CONTENT}</div>
      </Container>
    </PolicyContainerStyle>
  );
});

export default PolicyContainer;
