import styled from 'styled-components';
import color from '../../../styles/variables/color';

const ContactUsContainerStyle = styled.div`
  min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
  //padding: 1.5% 3% 2%;
  .space-input {
    padding-left: 50px;
    padding-right: 25px;
    /* padding-top: 5%; */
  }

  & .app-container {
    padding-top: 3%;
    padding-bottom: 3%;
  }

  .contact-container {
    padding: 2.5% 5%;
  }

  textarea {
    padding-left: 25px !important;
  }

  .icon {
    width: 35px;
  }

  .header-text {
    text-decoration: underline;
    padding: 5% 6% 20px;
    font-size: 60px;
    font-weight: 600;
  }

  .submit-btn {
    font-size: 24px;
  }

  .contact {
    display: inline-block;
    padding-left: 15px;
    text-align: left;
    margin: auto 0px;
    font-size: 34px;
  }

  .display-flex {
    display: flex;
  }

  .text-center {
    text-align: center;
  }

  .qrCode {
    width: 80%;
    max-width: 300px;
    margin-top: auto;
    margin-bottom: auto;
    border: solid thin;
    border-color: ${color.GRAY_COLOR_1};
  }

  .msg-error {
    color: ${color.RED_COLOR_1};
    text-align: center;
    font-size: 16px;
  }

  .msg {
    color: ${color.GRAY_COLOR_2};
    text-align: right;
    padding: 0px 25px;
    font-size: 16px;
  }

  .error {
    border-color: ${color.RED_COLOR_1};
    fieldset {
      border-color: ${color.RED_COLOR_1};
    }
  }

  .icon-social {
    display: flex;
    width: 80px;
    height: 80px;
    padding: 10px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .form-card {
    width: 100%;
    //width:auto;
    padding: 0px 25px;
    margin-left: auto;
    font-size: 24px;
    font-weight: 600;
    //margin-right: auto;

    .card {
      width: 100%;
      min-height: 300px;
      border: solid thin;
      border-radius: 25px;
      background: white;
    }

    #message,
    fieldset {
      border-radius: 25px !important;
    }
    #message {
      padding: 10px 15px;
      font-size: 26px !important;
    }

    #message:focus {
      outline: blue !important;
    }
  }

  .mt-2 {
    margin-top: 10px;
  }

  .image-cover-logo {
    width: 250px;
    height: 70px;
    object-fit: cover;
  }

  .red-text {
    color: red;
  }

  .policy {
    text-decoration: underline;
    font-size: 16px !important;
  }

  //xs mobile
  @media screen and (max-width: 575px) {
    & .space-input {
      padding-left: 25px;
      padding-right: 25px;

      span {
        font-size: 20px !important;
      }
    }

    & .form-card {
      padding: 0px;
      margin-left: auto;
      width: 100%;
      font-size: 20px;
    }

    & .qrCode {
      margin: auto !important;
      margin-top: 5% !important;
    }

    & .icon-social {
      width: 60px !important;
      height: 60px !important;
    }

    & .header-text {
      font-size: 35px;
    }

    & .contact {
      font-size: 18px;
    }

    & .submit-btn {
      font-size: 18px;
    }
  }

  //sm tablet
  @media screen and (min-width: 576px) and (max-width: 767px) {
    .space-input {
      padding-left: 25px;
      padding-right: 25px;
    }

    & .form-card {
      padding: 0px;
      margin-left: auto;
      width: 100%;
      font-size: 20px;
    }

    & .qrCode {
      margin: auto !important;
      margin-top: 5% !important;
    }

    & .icon-social {
      width: 60px !important;
      height: 60px !important;
    }

    & .header-text {
      font-size: 35px;
    }

    & .contact {
      font-size: 20px;
    }

    & .submit-btn {
      font-size: 18px;
    }
  }

  //md extra tablet
  @media screen and (min-width: 768px) and (max-width: 991px) {
    .space-input {
      padding-left: 25px;
      padding-right: 25px;
    }

    & .form-card {
      padding: 0px;
      margin-left: auto;
      width: 100%;
      font-size: 24px;
    }

    & .qrCode {
      margin: auto !important;
      margin-top: 5% !important;
      width: 50%;
    }

    & .icon-social {
      width: 80px !important;
      height: 80px !important;
    }

    & .header-text {
      font-size: 35px;
    }

    & .contact {
      font-size: 26px;
    }
  }

  //md extra tablet
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    .space-input {
      padding-left: 25px;
      padding-right: 25px;
    }

    & .form-card {
      padding: 0px;
      margin-left: auto;
      width: 100%;
    }

    & .qrCode {
      margin: auto !important;
      margin-top: 10% !important;
      width: 60%;
      align-content: center;
    }

    & .icon-social {
      width: 80px !important;
      height: 80px !important;
    }

    & .header-text {
      font-size: 35px;
    }

    & .contact {
      font-size: 22px;
    }
  }

  //xxl extra tablet
  @media screen and (min-width: 1201px) and (max-width: 1478px) {
    .space-input {
      padding-left: 25px;
      padding-right: 25px;
    }

    & .form-card {
      padding: 0px;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
      font-size: 22px;
    }

    & .qrCode {
      margin: auto !important;
      margin-top: auto !important;
      width: 70%;
      align-content: center;
    }

    & .icon-social {
      width: 80px !important;
      height: 80px !important;
    }

    & .header-text {
      font-size: 42px;
      font-weight: 600;
    }

    & .contact {
      font-size: 28px;
    }
  }
`;

export default ContactUsContainerStyle;
