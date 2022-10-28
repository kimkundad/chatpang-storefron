import styled from 'styled-components';
import color from '../../../styles/variables/color';

const PageManagementStyle = styled.div`
    min-height: calc(95vh - ${(props) => props.navHeight}px) !important;
    position: relative;
    padding: 0px 5%;
    z-index: 1;
`;

const AccountManagementStyle = styled.div`
    min-height: calc(95vh - ${(props) => props.navHeight}px) !important;
    position: relative;
    padding: 0px 5%;
    z-index: 1;
`;

export default {
    PageManagementStyle,
    AccountManagementStyle,
};