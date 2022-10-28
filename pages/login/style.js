import styled from 'styled-components';
import color from '../../styles/variables/color';

const LoginContainerStyle = styled.div`
    min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
    //padding: 5%;
    position: relative;
    z-index: 1;
    margin-top: 20px;
    text-align:center;
`;

export default LoginContainerStyle;
