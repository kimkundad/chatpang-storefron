import styled from 'styled-components';
import color from '../../../../styles/variables/color';

const ArticleCardStyle = styled.div`
  border-radius: 25px;
  border-style: solid;
  border-width: thin;
  border-color: ${color.GRAY_COLOR_4};
  min-height: 100px;
  //height: 100%;
  width: auto;
  position: relative;
  margin-top: 50px;
  /* margin-left: 50px; */
  //margin-right: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  background: ${color.WHITE_COLOR};
  cursor: pointer;

  img {
    width: 100%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }

  .circle-icon {
    width: 80px;
    height: 80px;
    position: absolute;
    top: -40px;
    left: -40px;
    border-radius: 50%;
    border: 1px solid #000000;
    border-radius: 40px;
    border-color: none;
    box-sizing: border-box;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;
    background: white;

    img {
      height: 50px;
      object-fit: cover;
      margin: 15px;
    }
  }

  .title-category {
    padding: 0px 25px;
    white-space: normal;
    color: ${color.BLACK_COLOR};
    font-weight: 800;
    line-height: 20px;
    font-style: normal;
    /* padding-bottom: 15px; */
    word-break: normal;
  }

  .content-article-card {
    color: ${color.GRAY_COLOR_2};
    margin: auto;
    height: auto;
    padding: 0px 20px 10px 20px;
    padding-top: 5px;
    font-weight: 200;
  }

  .footer {
    padding-bottom: 15px;
    text-align: center;
    /* position: absolute;
    bottom: 0;
    width: 100%; */
  }

  .footer-wrapper {
    display: flex;
    justify-content: center;

    span {
      margin-top: auto;
      margin-bottom: auto;
    }
  }

  .text-category {
    padding-left: 25px;
    color: ${color.BLUE_COLOR_1};

    .icon {
      color: ${color.GOLD_COLOR_1};
    }
  }

  @media screen and (max-width: 575px) {
    margin: 15px 20px;
  }
`;

export default ArticleCardStyle;
