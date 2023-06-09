import { createGlobalStyle } from 'styled-components';
import color from './variables/color';
import dimension from './variables/dimension';
import font from './variables/font';
import windowSize from './variables/windowSize';

const GlobalStyle = createGlobalStyle`
html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${font.FONT_FAMILIES.PRIMARY}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: ${font.FONT_SIZE_PX.XL};
    font-weight: normal;
  }

  h1,h2,h3,h4,h5,h6, *{
    font-family: ${
        font.FONT_FAMILIES.PRIMARY
    }, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* form {
    width: 100%;
  } */

  *, :before, :after {
    box-sizing: border-box;
    font-family: ${font.FONT_FAMILIES.PRIMARY}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .app-container{
    padding: 0px ${(props) => (props.screenWidth - windowSize.STD_WIDTH) / 2}px;
    
    .flex{
      display: flex;
    }
  }

  .flex {
    display: flex;
  }

  .d-block{
    display: block;
  }

  .w-100{
    width: 100%;
  }

  .navbar{
      background: ${color.PRIMARY};
      color: ${color.BLACK_COLOR};
      font-family: ${
          font.FONT_FAMILIES.PRIMARY
      }, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
      font-size: ${font.FONT_SIZE_PX.BG} !important;
      font-weight: 400;
      font-style: normal;
      margin-top: 0px;
      margin-bottom: 0px;
  }

  .btn-green{
    background-color: green !important;
    color: ${color.WHITE_COLOR} !important;
  }

  .content-container{
    //padding: ${dimension.PADDING_XXL};
    padding: 50px 0px;
    margin: auto;
  }

  .container-wrapper{
    padding: 0px ;
  }

  .bg {
    background: url('/images/BG/bg.jpg');
    object-fit: cover;
    min-height: 200px;
    background-position: center;
  }

  iframe{
    border-radius: 20px;
    border: none;
  }

  .profile-icon{
    height: 50px;
    max-height: 50px;
    width: 50px;
    max-width: 50px;
    border-radius: 50%;
    display: inline-block;
    background-color: #FFFFFF;
    margin-left: 10px;
  }

  .chat-icon{
    position: absolute;
    right: 1%;
    bottom: 3%;
    width: 60px;
    height: 60px;
    z-index: 100;
    cursor: pointer !important;
  }

  .btn-button {
    border-radius: 50px !important;

    background-color: ${color.PRIMARY};
    margin-top: 20px;
    color: ${color.BLACK_COLOR};
    height: auto;
    //width: 35%;
    font-weight: 600;
    font-size: 37px;
    padding: 0px 50px;
    /* font-weight: bold; */
  }

  .btn-button:hover {
    background-color: ${color.YELLOW_COLOR_2};
    color: ${color.BLACK_COLOR};
  }

  .text-center{
    text-align: center;
  }

  .display-flex{
    display: flex;
  }

  .flex-center{
    align-content: center;
    align-items: center;
  }

  .flex-end{
    align-content: center;
    align-items: flex-end;
  }

  .justify-center{
    justify-content: center;
    justify-items: center;
  }

  .display-none{
    display: none !important;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${color.YELLOW_COLOR_2}; 
    opacity: 0.5;
    border-radius: 100px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  .toast-container{
  margin-top: 7vw;
  margin-right: 1.5vw;
}
.toast-content{
  font-size: clamp(1rem, calc(1rem, 5vw), 3.5rem);
}
.checkbox-customer{
  font-size:min(2rem, 4vw);
}
.table thead {
  /* background-color: transparent; */
  border-bottom: 0;
  background: ${color.BLACK_COLOR};
  color: ${color.PRIMARY};
  letter-spacing: 1.5px;
}
.table thead th {
  font-weight: 400;
  font-size: 1.5rem;
}
.table.table-center td,
.table.table-center th {
  vertical-align: middle;
}
.table-hover tbody tr:hover {
  background-color: #f6f6f7;
}
.table td,
.table th {
  vertical-align: middle;
  white-space: nowrap;
}
.table-bordered {
  border: 1px solid rgba(0, 0, 0, 0.05) !important;
}
.table-bordered td:first-child {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
.table-bordered td:last-child {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.table-bordered th,
.table-bordered td {
  border-color: rgba(0, 0, 0, 0.05);
}
.card-table .card-body {
  padding: 0;
}
.table > :not(:first-child) {
  border-top: 0 !important;
}
.card-table .card-body .table > thead > tr > th {
}
.card-table .card-body .table tr td:first-child,
.card-table .card-body .table tr th:first-child {
  padding-left: 1.5rem;
}
.card-table .card-body .table tr td:last-child,
.card-table .card-body .table tr th:last-child {
  padding-right: 1.5rem;
}
.card-table .table td,
.card-table .table th {
  border-top: 1px solid #e2e5e8;
  padding: 1rem 0.75rem;
  white-space: nowrap;
}
.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
  //xs mobile
  @media screen and (max-width: 575px) {
    html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${font.FONT_FAMILIES.PRIMARY}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: ${font.FONT_SIZE_PX.SM};
    font-weight: normal;
  }

  .content-container{
    padding: ${dimension.PADDING_XS};
    margin: auto;
    }

    .profile-icon{
    height: 50px;
    max-height: 50px;
    width: 100px;
    max-width: 50px;
    border-radius: 50%;
    display: inline-block;
    background-color: #FFFFFF;
    margin-left: 10px;
  }

  & .chat-icon{
    height: 35px;
    width: 35px;
    right: 5%;
    bottom: 7%;
  }

  & .btn-button{
    width: auto;
    padding: 5px 10%;
    font-size: 18px;
  }
    
  }

  //sm tablet
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 100%;
    overflow-x: hidden;

    .content-container{
    padding: ${dimension.PADDING_XS};
    margin: auto;
    }

    & .btn-button{
    width: auto;
    padding: 5px 10%;
    font-size: 18px;
  }

  & .chat-icon{
    height: 50px;
    width: 50px;
    right: 5%;
    bottom: 3%;
  }

  & .profile-icon{
    width: 50px;
    height: 50px !important;
  }
  }

  //md extra tablet
  @media screen and (min-width: 768px) and (max-width: 991px) {
    html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${font.FONT_FAMILIES.PRIMARY}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: ${font.FONT_SIZE_PX.LG};
    font-weight: normal;
  }

  & .btn-button{
    width: auto;
    padding: 5px 10%;
    font-size: 20px;
  }
  }

  //xl notebook
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    & .chat-icon{
    height: 50px;
    width: 50px;
    right: 5%;
    bottom: 3%;
  }

    & .btn-button{
    width: auto;
    padding: 5px 10%;
    font-size: 26px;
  }
   
  }


  //xl notebook
  @media screen and (min-width: 1201px) and (max-width: 1478px) {
    & .chat-icon{
    height: 40px;
    width: 40px;
    right: 1%;
    bottom: 3%;
  }
  
    & .btn-button{
    width: auto;
    padding: 5px 10%;
    font-size: 26px;
  }
   
  }

  @media screen and (min-width: 1479px) and (max-width: 1919px) {
    & .btn-button{
    width: auto;
    padding: 5px 10%;
    font-size: 26px;
  }
  }

`;
export default GlobalStyle;
