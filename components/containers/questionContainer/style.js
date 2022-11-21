import styled from 'styled-components';
import color from '../../../styles/variables/color';
import dimension from '../../../styles/variables/dimension';
import windowSize from '../../../styles/variables/windowSize';

const QuestionContainerStyle = styled.div`
  min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
  display: flex;
  position: relative;
  overflow: hidden;
  padding-top:${(props) => (props.navHeight)}px;
  .question-wrapper {
    margin: 0px auto;

    h4 {
      font-weight: 600;
    }
  }
  .header-text-page {
    padding: ${dimension.PADDING_MD};
  }
  .header-icon {
    width: 90px;
  }

  .question-zone {
    padding: 10px 12% 50px;
    //width: 100vw;
    width: ${(props) => (props.screenWidth >= windowSize.STD_WIDTH ? windowSize.STD_WIDTH : props.screenWidth)}px;

    /* width: 100vw; */
    /* border: solid; */
  }

  .quest-header {
    border: solid thin;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background: ${color.YELLOW_COLOR_1};
    min-height: 60px;

    display: flex;
    margin-top: 15px;
    font-weight: 600;
    font-size: 28px;
    padding: 10px 0px;
    cursor: pointer;

    span {
      margin-left: 25px;
      margin-top: auto;
      margin-bottom: auto;
    }

    .icon-expand {
      margin-left: auto;
      margin-right: 25px;
      cursor: pointer;
    }
  }

  .quest-answer {
    border: solid thin;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background: ${color.WHITE_COLOR};
    min-height: 60px;
    width: 95%;
    padding-right: 10px;
    display: flex;
    margin-top: 15px;
    margin-left: auto;
    font-size: 24px;
    font-style: italic;

    span {
      margin-top: auto;
      margin-bottom: auto;
    }
  }

  .tab-color {
    background: ${color.YELLOW_COLOR_1};
    min-height: 60px;
    min-width: 25px;
    margin-right: 15px;
  }

  .close-answer {
    display: none !important;
  }

  /* .quest-header {
    border: solid thin;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background: ${color.YELLOW_COLOR_1};
    min-height: 60px;
    width: 100%;
    display: flex;
    margin-top: 15px;
    //padding: 20px 10px;
    cursor: pointer;

    span {
      margin-left: 25px;
      margin-top: auto;
      margin-bottom: auto;
    }

    .icon-expand {
      margin-left: auto;
      margin-right: 25px;
      cursor: pointer;
    }
  }

  .quest-answer {
    border: solid thin;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background: ${color.YELLOW_COLOR_3};
    min-height: 60px;
    width: 95%;
    display: flex;
    margin-top: 15px;
    margin-left: auto;

    span {
      margin-top: auto;
      margin-bottom: auto;
    }
  } */

  //xs mobile
  @media screen and (max-width: 575px) {
    //min-height: 400px !important;
    display: block;
    & .quest-header {
      padding: 5px 15px;
    }
    & .quest-answer {
      padding: 0px 15px 0px 0px;
    }

    .question-zone {
      padding: 0px 40px 50px;
    }

    & .chat-icon {
      bottom: 0 !important;
    }
  }

  //sm tablet
  @media screen and (min-width: 576px) and (max-width: 767px) {
    /* min-height: 400px !important; */
    min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
    display: block;
    & .quest-header {
      padding: 5px 15px;
    }
    & .quest-answer {
      padding: 0px 15px 0px 0px;
    }

    .question-zone {
      padding: 0px 40px 15%;
    }

    & .chat-icon {
      bottom: 0 !important;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    /* min-height: 400px !important; */
    min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
    display: block;
  }
`;

export default QuestionContainerStyle;
