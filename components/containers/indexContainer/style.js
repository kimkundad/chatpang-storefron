import styled from 'styled-components';
import useWindowSize from '../../../modules/windowSize';
import windowSize from '../../../styles/variables/windowSize';

const IndexContainerStyle = styled.div`
  background: url('/images/BG/bg.jpg') !important;
  object-fit: cover;
  background-position: center;
  background-position: center;
  //min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
  min-height: ${(props) => (props.screenHeight >= windowSize.STD_HEIGHT ? windowSize.STD_HEIGHT - props.navHeight : props.screenHeight - props.navHeight)}px;
  display: flex;
  //padding: 0px 5%;
  position: relative;

  .row-content {
    padding: 5%;
  }

  .image-cover-logo {
    ${'' /* width: 980px; */}
    ${'' /* height: 250px; */}
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
  }

  .header {
    display: block;
    width: 100%;
    padding-bottom: 40px;
  }

  .index-text {
    font-weight: 600;
    font-size: 80px;
    line-height: 100.88px;
  }

  .video-yt {
    height: 500px;
    width: 960px;
    margin: auto;
  }

  .btn-index {
    font-weight: 600;
    font-size: 42px;
    padding: 0px 50px;
  }
  //xs mobile
  @media screen and (max-width: 575px) {
    min-height: 400px !important;
    .image-cover-logo {
      width: 300px;
      height: 100px;
      margin-left: auto;
      margin-right: auto;
      object-fit: cover;
    }

    & .video-yt {
      height: 175px;
      width: 100%;
      margin-top: 10%;
    }

    .index-text {
      font-weight: 600;
      font-size: 20px;
    }
    height: auto !important;

    & .btn-index {
      font-weight: 600;
      font-size: 18px;
      padding: 5px 50px;
    }
  }

  //sm tablet
  @media screen and (min-width: 576px) and (max-width: 767px) {
    min-height: 400px !important;
    .image-cover-logo {
      width: 300px;
      height: 100px;
      margin-left: auto;
      margin-right: auto;
      object-fit: cover;
    }

    & .btn-index {
      font-weight: 600;
      font-size: 18px;
      padding: 5px 50px;
    }

    .video-yt {
      height: 200px;
      width: 500px;
      margin-top: 10%;
    }

    .index-text {
      font-weight: 600;
      font-size: 20px;
    }
    height: auto !important;
  }

  //md extra tablet
  @media screen and (min-width: 768px) and (max-width: 991px) {
    min-height: 400px !important;
    .image-cover-logo {
      width: 400px;
      height: 100px;
      margin-left: auto;
      margin-right: auto;
      object-fit: cover;
    }

    & .btn-index {
      font-weight: 600;
      font-size: 24px;
      padding: 5px 50px;
    }

    .index-text {
      font-weight: 600;
      font-size: 29px;
    }
    height: auto !important;

    & .video-yt {
      height: 400px;
      margin: 40px 0px;
    }
  }

  //xl notebook
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    .index-text {
      font-weight: 600;
      font-size: 39px;
    }
  }

  //xl notebook
  @media screen and (min-width: 1201px) and (max-width: 1368px) {
    .index-text {
      font-weight: 600;
      font-size: 50px;
    }
  }

  @media screen and (min-width: 1369px) and (max-width: 1478px) {
    .index-text {
      font-weight: 600;
      font-size: 65px;
    }
  }
`;

export default IndexContainerStyle;
