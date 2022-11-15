import styled from 'styled-components';
import color from '../../../styles/variables/color';
import windowSize from '../../../styles/variables/windowSize';
const IndexPage4ContainerStyle = styled.div`
  //min-height: 700px !important;
  //min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
  min-height: ${(props) => (props.screenHeight >= windowSize.STD_HEIGHT ? windowSize.STD_HEIGHT - props.navHeight : props.screenHeight - props.navHeight)}px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  .vector {
    min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
    width: 85%;
    z-index: -1;
    position: absolute;
    bottom: -1%;
    left: 0;
    /* background: url('/images/icon/Vector1.png') !important; */
  }

  .break-line {
    display: none;
  }

  .header {
    display: block;
    width: 100%;
  }

  .header-icon {
    width: 90px;
  }

  .review-btn {
    //width: 20%;
    margin-top: 5% !important;
  }

  .img-logo-absolute {
    height: calc((100vh - ${(props) => props.navHeight}px) * 0.8) !important;
    /* float: right; */
    right: -2%;
    position: absolute;
    bottom: 50px;
    object-fit: fill;
    /* width: 800px; */
    //margin-top: 100px;

    //opacity: 0.5;
  }

  .follow-icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  .footer-follow-me {
    padding: 5px 5%;
    display: flex;
    font-size: 18px;
    font-weight: 600;
    border-radius: 25px;
    background: ${color.BLACK_COLOR};
    color: ${color.WHITE_COLOR};
    width: max-content;
    cursor: pointer;
    z-index: 100;

    a {
      position: relative;
    }
  }

  .footer-img {
    height: 35px;
    width: 180px;
    object-fit: cover;
  }

  .footer-text {
    font-size: 16px;
    font-weight: 500;
    padding: 0;
    z-index: 98;
  }

  .footer-text2 {
    font-size: 18px;
    font-weight: 500;
    padding: 0;
    cursor: pointer;
    z-index: 99;
  }

  .div-w-100 {
    width: 100%;
    position: relative;
    height: auto;

    h3 {
      font-weight: 600;
    }
  }

  .content-data {
    //padding: 3% 50px 50px;
    width: 100%;
    /* height: calc((100vh - ${(props) => props.navHeight}px) - 100px) !important; */
    align-items: center;
    justify-items: center;
    display: flex;
    z-index: 1;
    padding:5vw 0;
    .price {
      color: ${color.RED_COLOR_1} !important;
      font-size: 150% !important;
    }

    .items {
      display: inline-flex !important;
      width: auto;
      border: solid;
    }

    .list-text {
      display: flex !important;
      font-size: 35px;
      margin-top: 1%;
      font-weight: 500;

      .list-item {
        margin-left: 80px;
        display: flex;
        align-items: center;
        align-content: center;
        width: 450px;
        margin: auto;
        line-height: 40px;
        font-weight: 500 !important;
      }

      img {
        width: 30px;
        margin-right: 15px;
      }
    }
  }

  //xs mobile
  @media screen and (max-width: 575px) {
    /* min-height: 880px !important; */
    padding:5vw 0;
    .review-btn {
      width: auto;
      margin-top: 20px !important;
    }

    & .footer-follow-me {
      width: max-content;
    }

    .break-line {
      display: flex;
    }
    & .img-logo-absolute {
      object-fit: fill;
      width: 30%;
      height: auto !important;
      bottom: 10px;
      opacity: 1;
    }

    & .content-data {
      width: 100%;
      /* min-height: calc(100vh + 170px) !important; */
      height:fit-content;
      align-items: center;
      padding: 5%;
      position: relative;

      .price {
        color: ${color.RED_COLOR_1} !important;
      }

      .items {
        display: inline-flex !important;
        width: auto;
        border: solid;
      }

      & .list-text {
        display: flex !important;
        font-weight: 500;
        font-size: 18px;

        padding: 0% 5%;

        & .list-item {
          margin-left: 80px;
          display: flex;
          align-items: center;
          align-content: center;
          width: 300px;
          margin: auto;
          font-weight: lighter;
        }

        img {
          width: 30px;
          margin-right: 15px;
        }
      }
    }
  }

  //sm tablet
  @media screen and (min-width: 576px) and (max-width: 767px) {
    min-height: 500px !important;

    .review-btn {
      width: auto;
      margin-top: 20px !important;
    }

    .break-line {
      display: flex;
    }
    & .img-logo-absolute {
      object-fit: fill;
      width: 40%;
      height: auto !important;
      bottom: 150px;
      opacity: 1;
    }

    & .content-data {
      width: 100%;
      min-height: calc(100vh + 420px) !important;
      align-items: center;
      padding: 5%;
      position: relative;

      .price {
        color: ${color.RED_COLOR_1} !important;
      }

      .items {
        display: inline-flex !important;
        width: auto;
        border: solid;
      }

      & .list-text {
        display: flex !important;
        font-weight: 500;
        font-size: 18px;

        padding: 0% 5%;

        & .list-item {
          margin-left: 80px;
          display: flex;
          align-items: center;
          align-content: center;
          width: 300px;
          margin: auto;
          font-weight: lighter;
        }

        img {
          width: 30px;
          margin-right: 15px;
        }
      }
    }
  }

  //md extra tablet
  @media screen and (min-width: 768px) and (max-width: 991px) {
    min-height: 500px !important;
    position: relative;

    .review-btn {
      width: auto;
      margin-top: 20px !important;
    }

    & .img-logo-absolute {
      object-fit: fill;
      width: 40%;
      height: auto !important;
      bottom: 50px;
      opacity: 1;
    }

    & .content-data {
      width: 100%;
      min-height: calc(100vh + 150px) !important;
      align-items: center;
      padding: 5%;
      position: relative;

      .price {
        color: ${color.RED_COLOR_1} !important;
      }

      .items {
        display: inline-flex !important;
        width: auto;
        border: solid;
      }

      & .list-text {
        display: flex !important;
        font-weight: 500;
        font-size: 24px;

        padding: 0% 5%;

        & .list-item {
          margin-left: 80px;
          display: flex;
          align-items: center;
          align-content: center;
          width: 300px;
          margin: auto;
          font-weight: lighter;
        }

        img {
          width: 30px;
          margin-right: 15px;
        }
      }
    }
  }

  //xl notebook
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    & .img-logo-absolute {
      object-fit: fill;
      width: 60%;
      height: auto !important;
      bottom: 20%;
      right: -2%;
      opacity: 1;
    }

    .review-btn {
      width: auto;
      margin-top: 20px !important;
    }

    & .content-data {
      width: 100%;
      min-height: calc(100vh + 450px) !important;
      align-items: center;
      padding: 5%;
      position: relative;

      .price {
        color: ${color.RED_COLOR_1} !important;
      }

      .items {
        display: inline-flex !important;
        width: auto;
        border: solid;
      }

      & .list-text {
        display: flex !important;
        font-weight: 500;
        font-size: 24px;

        padding: 0% 5%;

        & .list-item {
          margin-left: 80px;
          display: flex;
          align-items: center;
          align-content: center;
          width: 300px;
          margin: auto;
          font-weight: lighter;
        }

        img {
          width: 30px;
          margin-right: 15px;
        }
      }
    }
  }

  @media screen and (min-width: 1201px) and (max-width: 1478px) {
    & .img-logo-absolute {
      height: calc((100vh - ${(props) => props.navHeight}px) * 0.7) !important;
    }

    & .review-btn {
      width: auto;
      margin-top: 20px !important;
    }
  }

  @media screen and (min-width: 1920px) {
    max-height: calc(100vh - ${(props) => props.navHeight}px) !important;
  }
`;

export default IndexPage4ContainerStyle;
