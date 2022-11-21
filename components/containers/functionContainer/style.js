import styled from 'styled-components';
import color from '../../../styles/variables/color';
const FunctionContainerStyle = styled.div`
  min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
  position: relative;
  padding-top:${(props) => (props.navHeight)}px;
  //display: flex;
  .main-content {
    text-align: center;
    font-weight: 550px;
    padding: 0px 4%;
  }
  .image-cover-logo {
    width: 400px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
  }
  .header-icon {
    width: 90px;
  }
  .text-muted {
    color: ${color.GRAY_COLOR_2};
    font-size: 22px;
    font-style: italic;
    margin-top: 10%;
  }

  //xs mobile
  @media screen and (max-width: 575px) {
    .image-cover-logo {
      margin-top: 25px;
      width: 100%;
      height: 80px;
      margin-left: auto;
      margin-right: auto;
      object-fit: cover;
    }

    & .text-muted {
      font-size: 18px;
    }

    & .chat-icon {
      bottom: 1% !important;
    }
  }

  //sm tablet
  @media screen and (min-width: 576px) and (max-width: 767px) {
    .image-cover-logo {
      margin-top: 25px;
      width: 80%;
      height: 100px;
      margin-left: auto;
      margin-right: auto;
      object-fit: cover;
    }
  }

  //md extra tablet
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }

  //xl notebook
  @media screen and (min-width: 992px) and (max-width: 1200px) {
  }
`;

export default FunctionContainerStyle;
