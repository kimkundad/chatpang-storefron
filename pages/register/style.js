import styled from 'styled-components';
import color from '../../styles/variables/color';

const RegisterContainerStyle = styled.div`
    min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
    //padding: 5%;
    position: relative;
    z-index: 1;
    margin-top: 20px;
    .registerBtnContainer button:last-child {
        background:${color.PRIMARY};
    }
    .customRegisterInput {
        border-radius: 10px;
        border: 1px solid;
        padding: 0 16px 0 16px;
    }
    .customRegisterBtn {
        border: 1px solid #0000;
        border-radius: 10px;
        font-weight: bold;
        width: fit-content;
        margin: 0 10px;
        padding: 0 16px;
        font-size: min(2rem, 3vw);
    }
`;

export default RegisterContainerStyle;
