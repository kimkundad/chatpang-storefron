import styled from 'styled-components';
import color from '../../../styles/variables/color';
import dimension from '../../../styles/variables/dimension';
import windowSize from '../../../styles/variables/windowSize';
const IndexPage2ContainerStyle = styled.div`
  background: url('/images/BG/bg.jpg') !important;
  object-fit: cover;
  background-position: center;
  background-position: center;
  //min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
  min-height: ${(props) => (props.screenHeight >= windowSize.STD_HEIGHT ? windowSize.STD_HEIGHT - props.navHeight : props.screenHeight - props.navHeight)}px;
  display: flex;
  width: 100%;
  z-index: 1;
  position: relative;
  overflow: hidden;

  .vector {
    min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
    width: 85%;
    z-index: -1;
    position: absolute;
    bottom: 0;
    right: 0;
    /* background: url('/images/icon/Vector1.png') !important; */
  }

  .index-footer {
    //display: flex;
    width: 100% !important;

    .footer-item {
      position: relative;
      width: 100%;
      display: flex;
    }
    img {
      width: 80px;
      height: 80px;
    }

    .footer-content-3 {
      display: flex;
      height: auto;
      padding: 5px 5% 5px 10%;
      background: ${color.BLACK_COLOR};
      color: ${color.WHITE_COLOR};
      border-radius: 25px;
      position: absolute;
      bottom: 0;
      z-index: -1;
      left: 7%;
      font-size: 30px;
      //margin-left: -70px;
    }

    .footer-content-1 {
      display: flex;
      height: auto;
      padding: 5px 5% 5px 15%;
      background: ${color.BLACK_COLOR};
      color: ${color.WHITE_COLOR};
      border-radius: 25px;
      position: absolute;
      bottom: 0;
      z-index: -1;
      left: 8%;
      font-size: 30px;
      //margin-left: -70px;
    }

    .footer-content-2 {
      display: flex;
      height: auto;
      padding: 5px 5% 5px 15%;
      background: ${color.BLACK_COLOR};
      color: ${color.WHITE_COLOR};
      border-radius: 25px;
      position: absolute;
      bottom: 0;
      z-index: -1;
      left: 8%;
      font-size: 30px;
      //margin-left: -70px;
    }
  }

  .index-wrapper {
    padding: 5% 5%;
    width: ${(props) => (props.screenWidth >= windowSize.STD_WIDTH ? windowSize.STD_WIDTH : props.screenWidth)}px;
    margin: auto;
  }

  .header {
    display: block;
    width: 100%;
    padding-bottom: 35px;
    h4 {
      font-weight: 600;
    }
    h3 {
      font-weight: 600;
    }
  }

  .header-icon {
    width: auto;
    height: 150px;
  }

  .text-header-1 {
    font-size: 42px;
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-top: 10%;
  }

  .text-content {
    font-size: 30px;
    font-weight: 600;
    padding-top: 3%;
  }

  .video-yt {
    width: 90%;
    height: 540px;
  }

  .display {
    display: flex;
  }

  .display-rs {
    display: none;
  }

  .index-container {
    padding: 50px ${dimension.PADDING_XXL};
  }

  //xs mobile
  @media screen and (max-width: 575px) {
    min-height: 400px !important;
    .video-yt {
      height: 200px;
    }

    .display {
      display: none;
    }

    .display-rs {
      display: flex;
    }

    height: auto !important;

    & .header {
      font-size: 16px;
    }

    & .header-icon {
      width: 100px;
      height: 100px;
    }

    & .text-header-1 {
      font-size: 32px;
      display: flex;
      align-items: center;
      font-weight: 600;
      margin-top: 10%;
    }

    & .text-content {
      font-size: 18px;
      font-weight: 600;
      padding-top: 3%;
    }
  }

  //sm tablet
  @media screen and (min-width: 576px) and (max-width: 767px) {
    min-height: 400px !important;
    .display {
      display: none;
    }

    & .video-yt {
      width: 90%;
      height: 250px;
    }

    .display-rs {
      display: flex;
    }

    & .header {
      font-size: 18px;

      h4 {
        font-size: 35px;
      }

      h3 {
        font-size: 52px;
      }
    }

    height: auto !important;

    & .header {
      font-size: 16px;
    }

    & .header-icon {
      width: 100px;
      height: 100px;
    }

    & .text-header-1 {
      font-size: 32px;
      display: flex;
      align-items: center;
      font-weight: 600;
      margin-top: 10%;
    }

    & .text-content {
      font-size: 18px;
      font-weight: 600;
      padding-top: 3%;
    }
  }

  //md extra tablet
  @media screen and (min-width: 768px) and (max-width: 991px) {
    min-height: 400px !important;
    .display {
      display: none;
    }

    .display-rs {
      display: flex;
    }
    .video-yt {
      width: 90%;
      height: 400px;
    }

    height: auto !important;

    & .header {
      font-size: 16px;
    }

    & .header-icon {
      width: 100px;
      height: 100px;
    }

    & .text-header-1 {
      font-size: 36px;
      display: flex;
      align-items: center;
      font-weight: 600;
      margin-top: 10%;
    }

    & .text-content {
      font-size: 24px;
      font-weight: 500;
      padding-top: 3%;
    }
  }

  //xl notebook
  @media screen and (min-width: 992px) and (max-width: 1200px) {
  }

  //xxl notebook
  @media screen and (min-width: 1201px) and (max-width: 1478px) {
    .video-yt {
      width: 100%;
      height: 450px;
    }

    & .text-header-1 {
      font-size: 40px;
    }

    & .header-icon {
      width: 120px;
      height: 120px;
    }

    & .index-footer {
      //display: flex;
      width: 100% !important;
      font-weight: 600;

      .footer-content-3 {
        display: flex;
        height: auto;
        padding: 5px 5% 5px 10%;
        background: ${color.BLACK_COLOR};
        color: ${color.WHITE_COLOR};
        border-radius: 25px;
        position: absolute;
        bottom: 0;
        z-index: -1;
        left: 8%;
        font-size: 24px;
        //margin-left: -70px;
      }

      .footer-content-1 {
        display: flex;
        height: auto;
        padding: 5px 5% 5px 15%;
        background: ${color.BLACK_COLOR};
        color: ${color.WHITE_COLOR};
        border-radius: 25px;
        position: absolute;
        bottom: 0;
        z-index: -1;
        left: 8%;
        font-size: 24px;
        //margin-left: -70px;
      }

      .footer-content-2 {
        display: flex;
        height: auto;
        padding: 5px 5% 5px 15%;
        background: ${color.BLACK_COLOR};
        color: ${color.WHITE_COLOR};
        border-radius: 25px;
        position: absolute;
        bottom: 0;
        z-index: -1;
        left: 13%;
        font-size: 24px;
        //margin-left: -70px;
      }
    }

    & .text-content {
      font-size: 24px;
    }
  }

  //xxxl notebook
  @media screen and (min-width: 1479px) and (max-width: 1919px) {
    & .text-header-1 {
      font-size: 36px;
      display: flex;
      align-items: center;
      font-weight: 600;
      margin-top: 10%;
    }

    & .text-content {
      font-size: 24px;
      font-weight: 500;
      padding-top: 3%;
    }

    & .video-yt {
      height: 300px;
    }

    & .index-wrapper {
      padding: 2% 2%;
    }

    & .header-icon {
      width: 100px;
      height: 100px;
    }

    & .index-footer {
      //display: flex;
      width: 100% !important;

      .footer-content-3 {
        display: flex;
        height: auto;
        padding: 5px 5% 5px 10%;
        background: ${color.BLACK_COLOR};
        color: ${color.WHITE_COLOR};
        border-radius: 25px;
        position: absolute;
        bottom: 0;
        z-index: -1;
        left: 10%;
        font-size: 20px;
        //margin-left: -70px;
      }

      .footer-content-1 {
        display: flex;
        height: auto;
        padding: 5px 5% 5px 15%;
        background: ${color.BLACK_COLOR};
        color: ${color.WHITE_COLOR};
        border-radius: 25px;
        position: absolute;
        bottom: 0;
        z-index: -1;
        left: 12%;
        font-size: 20px;
        //margin-left: -70px;
      }

      .footer-content-2 {
        display: flex;
        height: auto;
        padding: 5px 5% 5px 15%;
        background: ${color.BLACK_COLOR};
        color: ${color.WHITE_COLOR};
        border-radius: 25px;
        position: absolute;
        bottom: 0;
        z-index: -1;
        left: 12%;
        font-size: 20px;
        //margin-left: -70px;
      }
    }
  }
`;

export default IndexPage2ContainerStyle;
