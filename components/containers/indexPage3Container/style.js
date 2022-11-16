import styled from 'styled-components';
import windowSize from '../../../styles/variables/windowSize';
const IndexPage3ContainerStyle = styled.div`
  background: url('/images/BG/bg.jpg') !important;
  object-fit: cover;
  background-position: center;
  //min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
  min-height: ${(props) => (props.screenHeight >= windowSize.STD_HEIGHT ? windowSize.STD_HEIGHT - props.navHeight : props.screenHeight - props.navHeight)}px;
  width:100vw;
  /* display: flex; */
  z-index: 1;
  position: relative;
  overflow: hidden;

  .vector {
    min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
    width: 85%;
    z-index: -1;
    position: absolute;
    top: -1.5%;
    /* background: url('/images/icon/Vector1.png') !important; */
  }

  .index-wrapper {
    padding: 5%;
  }

  .header {
    display: block;
    width: 100%;

    h3 {
      font-weight: 600;
    }
  }

  .header-icon {
    width: auto;
    height: 130px;
  }

  .text-header-1 {
    font-size: 42px;
    font-weight: 600;
  }

  .card-review {
    background-color: #ffffff;
    min-height: 100px;
    margin-top: 5%;
    border-radius: 40px;
    padding: 20px;
    font-style: italic;
    font-size: 30px;
    font-weight: 600;
  }

  .review-btn {
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .profile-text {
    margin-left: 15px;
    span {
      font-weight: 600;
    }
  }

  .profile-wrapper {
    padding: 15px 0px;
    align-items: center;
  }

  .video-yt {
    width: 90%;
    height: 620px;
    margin: auto;
  }

  //xs mobile
  @media screen and (max-width: 575px) {
    .video-yt {
      /* width: 100%; */
      height: 200px;
    }

    .review-btn {
      margin-top: 25px;
      margin-bottom: 25px;
      width: auto;
    }

    .card-review {
      font-size: 18px;
      width:100%;
    }

    .index-wrapper {
      padding: 5% 5%;
    }

    .text-header-1 {
      font-size: 32px;
      font-weight: 600;
    }

    .header-icon {
      height: auto !important;
      width: 100px !important;
    }
  }

  //sm tablet
  @media screen and (min-width: 576px) and (max-width: 767px) {
    .review-btn {
      margin-top: 25px;
      margin-bottom: 25px;
      width: auto;
    }

    & .card-review {
      font-size: 18px;
    }

    & .index-wrapper {
      padding: 5% 5%;
    }

    & .profile-text {
      font-size: 18px !important;
    }

    & .video-yt {
      height: 250px;
    }

    & .header-icon {
      height: auto !important;
      width: 120px !important;
    }

    & .header {
      h5 {
        font-size: 30px;
      }

      h4 {
        font-size: 48px;
      }
    }

    & .text-header-1 {
      font-size: 32px;
      font-weight: 600;
    }

    & .header-icon {
      height: auto !important;
      width: 100px !important;
    }

    & .card-review {
      font-size: 18px;
    }
  }

  //md extra tablet
  @media screen and (min-width: 768px) and (max-width: 991px) {
    .video-yt {
      width: 85%;
      height: 300px;
    }

    .review-btn {
      margin-top: 25px;
      margin-bottom: 25px;
      width: auto;
    }

    & .text-header-1 {
      font-size: 32px;
      font-weight: 600;
    }

    & .header-icon {
      height: auto !important;
      width: 100px !important;
    }

    & .index-wrapper {
      padding: 5% 5% ;
    }

    & .card-review {
      font-size: 24px;
      font-weight: 500;
    }
  }

  //xl notebook
  @media screen and (min-width: 992px) and (max-width: 1200px) {
  }

  //xxl notebook
  @media screen and (min-width: 1201px) and (max-width: 1478px) {
    //xl notebook
    .video-yt {
      width: 90%;
      height: 450px;
      margin:auto;
    }

    & .text-header-1 {
      font-size: 34px;
    }

    & .header-icon {
      /* height: 100px; */
      width: 140px;
    }

    & .profile-icon {
      width: 60px;
    }

    & .card-review {
      font-size: 24px;
    }

    & .profile-text {
      font-size: 20px !important;
    }

    .review-btn {
      margin-top: 25px;
      margin-bottom: 25px;
      width: auto;
    }
  }

  //xxxl notebook
  @media screen and (min-width: 1479px) and (max-width: 1919px) {
    & .video-yt {
      width: 75%;
      height: 400px;
    }

    & .text-header-1 {
      font-size: 32px;
      font-weight: 600;
    }

    & .header-icon {
      height: 65px !important;
      width: 65px !important;
    }

    & .card-review {
      font-size: 22px;
    }

    .review-btn {
      margin-top: 25px;
      margin-bottom: 25px;
      width: auto;
    }
  }
`;

export default IndexPage3ContainerStyle;
