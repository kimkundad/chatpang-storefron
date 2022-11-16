import styled from 'styled-components';
import color from '../../../styles/variables/color';
import dimension from '../../../styles/variables/dimension';

const PriceContainerStyle = styled.div`
  min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
  //display: flex;
  position: relative;
  padding: 0px 5%;
  padding-top:${(props) => (props.navHeight)}px;
  .price-wrapper {
    margin: 0px auto;
    //border: solid;
    min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
  }

  & .btn-button {
    font-size: 30px;
  }
  .header-text-page {
    padding: ${dimension.PADDING_MD};
  }
  .header-icon {
    width: 90px;
  }

  .text-muted {
    color: ${color.GRAY_COLOR_2};
  }

  .text-description {
    font-size: 18px;
    color: ${color.GRAY_COLOR_2};
  }

  .price-card-zone {
    padding: 2% 6%;
    min-height: calc(100vh - ${(props) => props.navHeight}px - ${(props) => props.headerHeight}px) !important;
    //border: solid;
  }

  .best-sell {
    border-radius: 25px;
    background: ${color.RED_COLOR_1};
    padding: 5px 5%;
    font-size: 22px !important;
    color: ${color.WHITE_COLOR};
    position: absolute;
    right: 5%;
    top: calc((100% - 38px) / 2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
  }

  .card-add {
    // height: ${(props) => props.contentHeight}px;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 2px 10px 4px rgba(0, 0, 0, 0.25);
    padding-bottom: 80px;
    position: relative;
    //margin-bottom: 20px;
    background: ${color.WHITE_COLOR};
    //border: solid;
    margin: 0px auto 20px;
    width: 90%;
  }

  .cards {
    width: 90%;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 2px 10px 4px rgba(0, 0, 0, 0.25);
    height: auto;
    padding-bottom: 80px;
    position: relative;
    //margin-bottom: 20px;
    background: ${color.WHITE_COLOR};
    //border: solid;
    margin: 0px auto 20px;

    button {
      margin-top: auto !important;
    }
  }

  .card-footer {
    position: absolute;
    display: block;
    bottom: 15px;
    width: 100%;
  }

  .card-header {
    min-height: 80px;
    /* border-bottom: solid ${color.GRAY_COLOR_3} thin; */
    background: ${color.YELLOW_COLOR_1};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    align-content: center;
    align-items: center;
    position: relative;

    .text-header {
      width: 100%;
      display: flex;
      justify-content: center;
      font-weight: 600 !important;
    }

    span {
      font-size: 52px;
      align-content: center;
      align-items: center;
      font-weight: 600;
    }

    span::first-child {
      margin-left: auto;
    }
    span::last-child {
      margin-right: auto;
    }
  }

  .card-detail {
    overflow-y: auto;
    min-height: 414px;
  }

  .price {
    font-size: 60px;
    font-weight: 800;
    margin-top: 15px;
  }
  .div-space {
    padding: 35px;
  }

  .old-price {
    position: relative;
    font-size: 28px !important;
  }

  .old-price:before {
    position: absolute;
    content: '';
    left: 0;
    top: 50%;
    right: 0;
    border-top: 1px solid;
    border-color: inherit;

    color: ${color.RED_COLOR_1};

    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    -o-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  .label {
    background: ${color.RED_COLOR_1};
    border-radius: 50%;
  }

  .list-text {
    display: block !important;
    text-align: start;
    margin-top: 10px;

    .list-item {
      margin-left: 25px;
      margin-right: 25px;
      display: flex;
      align-items: center;
      align-content: center;
      font-size: 26px;
      font-style: italic;
    }

    img {
      width: 25px;
      margin-right: 15px;
    }
  }

  //xs mobile
  @media screen and (max-width: 575px) {
    & .cards {
      width: auto;
      height: auto;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 15%;
      min-height: auto;
    }

    & .card-add {
      width: 90%;
    }

    & .chat-icon {
      bottom: 0.5% !important;
    }

    & .text-description {
      font-size: 16px;
      color: ${color.GRAY_COLOR_2};
    }

    & .btn-button {
      width: auto;
      font-size: 18px;
    }

    & .best-sell {
      /* position: unset; */
      /* display: flex; */
      right: 6%;
    }

    & .text-header {
      min-height: 100px;
      display: flex;
      align-items: center;
    }

    & .list-text {
      display: block !important;
      text-align: start;
      margin-top: 10px;

      .list-item {
        margin-left: 25px;
        margin-right: 25px;
        display: flex;
        align-items: center;
        align-content: center;
        font-size: 20px;
        font-style: italic;
      }

      img {
        width: 25px;
        margin-right: 15px;
      }
    }
  }

  //sm tablet
  @media screen and (min-width: 576px) and (max-width: 767px) {
    min-height: 400px !important;
    & .cards {
      width: auto;
      height: auto;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 10%;
      min-height: auto;
    }

    & .card-add {
      width: auto;
    }

    & .btn-button {
      width: auto;
      font-size: 18px;
    }

    & .chat-icon {
      bottom: 0.5% !important;
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
      & .MuiGrid-root {
        width: 100%;
        display: block;
        margin-left: 0px;
        max-width: unset !important;
      }

      & .card-detail {
        overflow-y: auto;
        min-height: 400px;
      }

      & .best-sell {
        position: unset;
        display: flex;
      }

      & .text-header {
        min-height: 100px;
        display: flex;
        align-items: center;
      }
    }
  }

  //md extra tablet
  @media screen and (min-width: 768px) and (max-width: 991px) {
    min-height: 400px !important;

    & .cards {
      width: auto;
      //height: calc(${(props) => props.contentHeight}px - ${(props) => props.contentHeight}px * 0.6);
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 10%;
      min-height: auto;
    }

    & .card-detail {
      overflow-y: auto;
      min-height: 500px;
    }

    & .card-add {
      width: auto;
    }

    & .card-header {
      min-height: 100px;
      & .text-header {
        display: block;
      }
    }

    & .best-sell {
      position: relative;
      display: block;
      top: unset;
      right: unset;
      padding: 0px;
      width: 65%;
      margin: auto;
      margin-bottom: 5%;
    }
    .list-text {
      display: block !important;
      text-align: start;

      .list-item {
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        align-content: center;
        font-size: 18px;
      }

      img {
        width: 25px;
        margin-right: 15px;
      }
    }

    & .btn-button {
      width: auto;
      font-size: 20px;
    }
  }

  //xxl extra tablet
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    min-height: 400px !important;

    & .cards {
      width: auto;
      //min-height: calc(${(props) => props.contentHeight}px - ${(props) => props.contentHeight}px * 0.63);
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 50%;
      min-height: auto;
    }

    & .card-detail {
      overflow-y: auto;
      min-height: 434px;
    }

    & .card-add {
      width: auto;
    }

    & .card-header {
      min-height: 100px;
      & .text-header {
        display: block;
      }
    }

    & .best-sell {
      position: relative;
      display: block;
      top: unset;
      right: unset;
      padding: 0px;
      width: 65%;
      margin: auto;
      margin-bottom: 5%;
    }
    .list-text {
      display: block !important;
      text-align: start;

      .list-item {
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        align-content: center;
        font-size: 18px;
      }

      img {
        width: 25px;
        margin-right: 15px;
      }
    }

    & .btn-button {
      width: auto;
      font-size: 20px;
    }
  }

  //xxl extra tablet
  @media screen and (min-width: 1201px) and (max-width: 1478px) {
    min-height: 400px !important;

    & .cards {
      width: 90%;
      //height: calc(${(props) => props.contentHeight}px - ${(props) => props.contentHeight}px * 0.35);
      margin-left: auto;
      margin-right: auto;
      /* margin-bottom: 50%; */
      min-height: auto;
    }

    & .card-add {
      width: 90%;
    }

    & .card-detail {
      overflow-y: auto;
      //min-height: 500px;
    }

    & .card-header {
      /* min-height: 100px; */
      & .text-header {
        display: flex;
      }

      span {
        font-size: 42px;
        align-content: center;
        align-items: center;
        font-weight: 600;
      }
    }

    & .best-sell {
      position: absolute;
      display: block;
      top: calc((100% - 29px) / 2);
      right: 15px;
      width: auto;
      padding: 2px 10px;
      margin: auto;
      font-size: 18px !important;
      margin-bottom: 5%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
      box-sizing: border-box;
    }
    .list-text {
      display: block !important;
      text-align: start;
      margin-top: 5px;

      .list-item {
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        align-content: center;
        font-size: 20px;
      }

      img {
        width: 25px;
        margin-right: 15px;
      }
    }

    & .btn-button {
      width: auto;
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1479px) and (max-width: 1919px) {
    & .card-detail {
      overflow-y: auto;
      min-height: 536px;
    }
  }

  @media screen and (min-width: 3100px) {
    & .card-detail {
      overflow-y: auto;
      min-height: 500px;
    }
  }

  @media screen and (min-width: 5200px) {
    & .card-detail {
      overflow-y: auto;
      min-height: 550px;
    }
  }
`;

export default PriceContainerStyle;
