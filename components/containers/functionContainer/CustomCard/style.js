import styled from 'styled-components';
import color from '../../../../styles/variables/color';
const CustomCardStyle = styled.div`
  border-radius: 25px;
  border-style: none;
  border-width: thin;
  border-color: ${color.GRAY_COLOR_3};
  min-height: 190px;
  width: 90%;
  padding: 2%;
  position: relative;
  margin-top: 50px;
  margin-left: 30px;
  margin-right: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  background: ${color.WHITE_COLOR};

  .circle-icon {
    width: 80px;
    height: 80px;
    position: absolute;
    top: -40px;
    left: -40px;
    border-radius: 50%;
    //border: 1px solid #000000;
    border-color: none;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;
    background: white;

    img {
      height: 55px;
      object-fit: cover;
      margin: 10px;
    }
  }

  .circle-icon-2 {
    width: 100;
    height: 100;
    position: absolute;
    top: -40px;
    left: -40px;
    border-radius: 50%;
    //border: 1px solid #000000;
    border-radius: 50px;
    border-color: none;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;
    background: white;

    img {
      height: 60px;
      object-fit: cover;
      margin: 15px;
    }
  }

  .title {
    /* padding: 10px 50px; */
    white-space: normal;
    color: ${color.BLACK_COLOR};
    font-weight: 800;
    line-height: 30px;
    font-style: normal;
    font-size: 25px;
    min-height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .content-container {
    padding: 25px 0px 0px !important;
  }

  .content-card {
    color: ${color.GRAY_COLOR_2};
    margin: auto;
    height: auto;
    padding: 0px 5px 10px 5px;
    padding-top: 5px;
    font-weight: 400;
    font-size: 22px;
  }

  //xs mobile
  @media screen and (max-width: 575px) {
    border-radius: 25px;
    border-style: none;
    border-width: thin;
    border-color: ${color.GRAY_COLOR_3};
    min-height: 190px;
    width: 85%;
    position: relative;
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    background: ${color.WHITE_COLOR};

    & .title {
      font-size: 24px !important;
    }

    & .content-card {
      font-size: 20px;
    }
  }

  //sm tablet
  @media screen and (min-width: 576px) and (max-width: 767px) {
    border-radius: 25px;
    border-style: none;
    border-width: thin;
    border-color: ${color.GRAY_COLOR_3};
    min-height: 190px;
    width: auto;
    position: relative;
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    background: ${color.WHITE_COLOR};
  }

  //md extra tablet
  @media screen and (min-width: 768px) and (max-width: 991px) {
    margin-left: 50px;
    margin-right: 50px;
  }

  //xl notebook
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

export default CustomCardStyle;
