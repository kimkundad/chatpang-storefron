import styled from 'styled-components';
import dimension from '../../../styles/variables/dimension';

const DetailContainerStyle = styled.div`
  .title {
    text-align: center;
    margin-top: 50px;
  }

  .ml-2 {
    margin-left: 10px;
  }

  .mt-2 {
    margin-top: 20px;
  }

  .image-cover {
    object-fit: cover;
    width: 580px;
    border-radius: 25px;
  }

  .content-detail {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding: ${dimension.PADDING_SM};
  }

  .random-article {
    display: flex;
    justify-content: center;
    margin-top: 35px;
  }

  .random-article-icon {
    width: 100px;

    object-fit: cover;
  }

  .random-article-text {
    display: flex;
    align-items: center;
    font-size: 29px;
    font-weight: 500;
  }

  .random-article-wrapper {
    padding: ${dimension.PADDING_MD};
    display: flex;
  }

  .detail-wrapper {
    padding-bottom: 100px;
  }

  .random-article-list-block {
    padding: 0px 100px;
  }

  //xs mobile
  @media screen and (max-width: 575px) {
    .image-cover {
      object-fit: cover;
      width: 300px;
      height: auto;
      border-radius: 25px;
    }

    & .random-article-text {
      font-size: 25px;
      font-weight: 550;
    }

    .random-article-list-block {
      padding: 0px 20px;
    }
  }

  //sm tablet
  @media screen and (min-width: 576px) and (max-width: 767px) {
    .random-article-list-block {
      padding: 0px 10px;
    }
  }

  //md extra tablet
  @media screen and (min-width: 768px) and (max-width: 991px) {
    .random-article-list-block {
      padding: 0px 10px;
    }
  }
`;

export default DetailContainerStyle;
