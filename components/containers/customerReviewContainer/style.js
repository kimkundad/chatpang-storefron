import styled from 'styled-components';
import color from '../../../styles/variables/color';
import dimension from '../../../styles/variables/dimension';

const CustomerReviewStyle = styled.div`
  min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
  position: relative;
  padding-top:${(props) => (props.navHeight)}px;
  .review-wrapper {
    padding: 2%;
  }
  .image-cover-logo {
    width: 280px;
    height: 80px;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
  }

  .header {
    display: block;
    width: 100%;
  }

  .header-text-page {
    padding: ${dimension.PADDING_MD};
    font-weight: 600;
  }

  .header-icon {
    width: 90px;
  }

  .customer-container {
    padding: 30px ${dimension.PADDING_LG};
  }

  .description {
    font-weight: 500;
    font-size: 26px;
    font-style: italic;
    color: ${color.GRAY_COLOR_3};
  }

  //xs mobile
  @media screen and (max-width: 575px) {
    .customer-container {
      padding: 30px 5px;
    }

    & .description {
      padding: 5%;
      font-size: 18px;
    }

    & .chat-icon {
      bottom: 1% !important;
    }
  }

  //sm tablet
  @media screen and (min-width: 576px) and (max-width: 767px) {
    & .description {
      padding: 5%;
      font-size: 22px;
    }
  }
`;

export default CustomerReviewStyle;
