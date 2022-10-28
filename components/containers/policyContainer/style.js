import styled from 'styled-components';
import color from '../../../styles/variables/color';

const PolicyContainerStyle = styled.div`
  color: ${color.GRAY_COLOR_2};
  .header {
    margin-top: 0px;
    padding: 0px 20px 20px 20px;
    text-align: center;
    justify-content: center;
    white-space: pre-wrap;
    margin: auto;
  }

  .content {
    padding: 0px 20px 20px 20px;
    width: calc(100%);
    height: 100%;
    white-space: pre-wrap;
    margin-top: 0px;
    font-size: 18px;
  }

  .image-cover-logo {
    width: 400px;
    height: 120px;
    margin-top:20px;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
  }
`;

export default PolicyContainerStyle;
