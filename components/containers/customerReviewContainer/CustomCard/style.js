import styled from 'styled-components';
import color from '../../../../styles/variables/color';
import font from '../../../../styles/variables/font';
const CustomCardStyle = styled.div`
  border-radius: 25px;
  border-style: none;
  border-width: thin;
  border-color: ${color.GRAY_COLOR_3};
  min-height: 100px;
  width: 90%;
  position: relative;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  background: ${color.WHITE_COLOR};
  font-family: ${font.FONT_FAMILIES.PRIMARY};
  font-size: ${font.FONT_SIZE_PX.LG};

  .circle-icon {
    width: 80px;
    height: 80px;
    position: absolute;
    top: -40px;
    left: calc(50% - 40px);
    border-radius: 50%;
    //border: 1px solid #000000;
    border-radius: 40px;
    border-color: none;
    box-sizing: border-box;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;
    background: white;

    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      border: solid;
      object-fit: cover;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      //margin: 15px;
    }
  }

  .title {
    padding: 10px 50px 0px;
    color: ${color.BLACK_COLOR};
    font-weight: 600;
    line-height: 20px;
    font-style: normal;
    padding-top: 50px;
    text-align: center;
    font-size: 24px;
  }

  .content-card {
    color: ${color.GRAY_COLOR_2};
    margin: auto;
    height: auto;
    padding: 0px 20px 10px 20px;
    padding-top: 5px;
    font-weight: 400;
    color: ${color.GRAY_COLOR_3};
    font-size: 22px;
  }

  .star-icon {
    font-size: 18px;
    color: ${color.YELLOW_COLOR_1};
  }

  .icon-zone {
    text-align: center;
  }

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;

export default CustomCardStyle;
