import styled from 'styled-components';
import color from '../../../styles/variables/color';
import windowSize from '../../../styles/variables/windowSize';

const UserLayoutStyle = styled.div`
    min-height: calc(100vh - ${(props) => props.navbarHeight}px);
    font-size: min(1.5rem, 3vw);
    .content {
        padding:${(props) => props.navbarHeight}px 2em 0px 2em;
        margin-left: 240px;
        position: relative;
        transition: all 0.4s ease;
        overflow-y: auto;
        overflow-x: hidden;
        min-height: calc(100vh - ${(props) => props.navbarHeight}px);
    }
    //xs mobile
    @media screen and (max-width: 575px) {
        .content {
            margin-left: 0px;
        }
    }
    //sm tablet
    @media screen and (min-width: 576px) and (max-width: 767px) {
        .content {
            margin-left: 0px;
        }
    }
    //md extra tablet
    @media screen and (min-width: 768px) and (max-width: 991px) {
        .content {
            margin-left: 0px;
        }
    }
    //xl notebook
    @media screen and (min-width: 1200px) and (max-width: 1535px) {
    }
`;

export default UserLayoutStyle;
