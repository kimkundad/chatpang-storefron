import styled from 'styled-components';
import color from '../../../../styles/variables/color';
const VideoCarouselStyle = styled.div`
  .ar-arrow-prev {
    position: absolute;
    left: -100px;
    top: 50%;
    z-index: 0;
    cursor: pointer;
  }

  .ar-arrow-next {
    position: absolute;
    right: -100px;
    top: 50%;
    z-index: 0;
    cursor: pointer;
  }

  .carousel-wrapper {
    width: 100%;
  }

  .arrow-carousel {
    font-size: 80px;
    color: #000;
  }
  .video-yt {
    width: 90%;
    height: 250px;
  }

  .paginate {
    display: inline-block;
    border: none;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 2px;
    background: ${color.GRAY_COLOR_1};
    cursor: pointer;
  }

  .paginate:hover {
    border: none;
    background: ${color.PRIMARY};
  }

  .active {
    background: ${color.PRIMARY};
    border: none;
    outline: ${color.GRAY_COLOR_1};
  }

  @media screen and (max-width: 575px) {
    .arrow-carousel {
      font-size: 80px;
      color: #000;
      display: none;
    }

    .video-yt {
      height: 300px;
      width: 100%;
    }
  }

  //md extra tablet
  @media screen and (min-width: 768px) and (max-width: 991px) {
    .video-yt {
      height: 300px;
    }
  }
`;

export default VideoCarouselStyle;

export const VideoCardStyle = styled.div`
  min-height: 500px;
  min-width: 300px;
  display: flex;

  //xs mobile
  @media screen and (max-width: 575px) {
  }

  //sm tablet
  @media screen and (min-width: 576px) and (max-width: 767px) {
  }

  //md extra tablet
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }

  //xl notebook
  @media screen and (min-width: 992px) and (max-width: 1200px) {
  }
`;

export const Item = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  background-color: transparent;
  color: #fff;
  margin: 15px 15px 0px;
  font-size: 4em;
`;
