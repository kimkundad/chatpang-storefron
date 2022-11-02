import styled from 'styled-components';
import color from '../../../styles/variables/color';
import windowSize from '../../../styles/variables/windowSize';

const UserLayoutStyle = styled.div`
    min-height: calc(100vh - ${(props) => props.navbarHeight}px);
    font-size: min(1.5rem, 3vw);
    .content {
        margin-left: 240px;
        position: relative;
        transition: all 0.4s ease;
        overflow-y: auto;
        overflow-x: hidden;
        min-height: calc(100vh - ${(props) => props.navbarHeight}px);
    }
`;

export default UserLayoutStyle;
