import styled from 'styled-components';
import color from '../../../styles/variables/color';
import navbar from '../../../styles/variables/navbar';
import windowSize from '../../../styles/variables/windowSize';

const MainLayoutStyle = styled.div`
  .vector {
    right: 0;
    bottom: 0;
  }

  .main {
  }

  .content {
    /* margin-top: ${(props) => {
      return props.navbarHeight || '64px';
    }}px; */
    height: calc(100vh);
    //max-width: calc(100%);
    overflow-y: auto;
    overflow-x: hidden;
    //padding: 0px ${(props) => (props.screenWidth - windowSize.STD_WIDTH) / 2}px;
  }
`;

export default MainLayoutStyle;
