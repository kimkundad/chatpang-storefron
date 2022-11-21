import styled from 'styled-components';

const AgreementStyle = styled.div`
padding-top:${(props) => (props.navHeight)}px;
  .header {
    margin-top: 25px;
    padding: 0px 20px 20px 20px;
  }

  .content {
    padding: 0px 20px 20px 20px;
    width: calc(100%);
    height: 100%;
    white-space: pre-wrap;
    margin-top: 0px;
    font-size: 16px;
  }

  .image-cover-logo {
    width: 330px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
  }
`;

export default AgreementStyle;
