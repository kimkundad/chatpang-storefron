import styled from 'styled-components';
import color from '../../../styles/variables/color';
import font from '../../../styles/variables/font';
import navbar from '../../../styles/variables/navbar';
import windowSize from '../../../styles/variables/windowSize';

const NavbarStyle = styled.nav`
    background: ${color.PRIMARY};
    color: ${color.BLACK_COLOR};
    height: ${(props) => props.navbarHeight}px;
    position: fixed;
    z-index: 100;
    /* .app-container {
        width: 100%;
    } */
    .nav-container {
        padding: 0px ${(props) => (props.screenWidth - windowSize.STD_WIDTH) / 2}px;
    }

    .nav-padding {
        padding: 0px 25px;
        width: 100vw;
    }

    .font-set {
        font-family: ${font.FONT_FAMILIES.PRIMARY} !important;
        font-weight: 600;
        font-size: 22px;
        line-height: 32.52px;
        text-align: center;
    }
    .name-user,.icon-user{
        font-size:min(1rem, 4vw);
    }
    .image-logo {
        max-height: ${navbar.LOGO_HEIGHT};
        //max-width: 100%;
        width: ${navbar.LOGO_WIDTH};
        object-fit: cover;
        margin: 0 5vw;
        //margin: auto !important;
    }

    .image-logo-2 {
        max-height: 64px;
        //max-width: 100%;
        width: 80%;
        object-fit: cover;
        margin: auto !important;
    }

    //xs mobile
    @media screen and (max-width: 575px) {
        .image-logo {
            max-height: ${navbar.LOGO_HEIGHT_XS};
            width: ${navbar.LOGO_WIDTH_XS};
            max-width: 100%;
            object-fit: cover;
        }
    }

    //sm tablet
    @media screen and (min-width: 576px) and (max-width: 767px) {
        & .image-logo {
            max-height: ${navbar.LOGO_HEIGHT_SM};
            max-width: 100%;
            object-fit: cover;
        }

        & .image-logo-2 {
            max-height: 92px;
            width: 60% !important;
            object-fit: cover;
            margin: auto !important;
        }
    }

    //md extra tablet
    @media screen and (min-width: 768px) and (max-width: 991px) {
        & .image-logo {
            height: ${navbar.LOGO_HEIGHT_MD};
            width: ${navbar.LOGO_WIDTH_MD};
            object-fit: cover;
        }

        & .image-logo-2 {
            max-height: 92px;
            width: 60% !important;
            object-fit: cover;
            margin: auto !important;
        }

        & .font-set {
            font-size: 20px !important;
        }
    }

    //xl notebook
    @media screen and (min-width: 1200px) and (max-width: 1535px) {
    }

    //xxl notebook
    @media screen and (min-width: 1920px) {
        & .font-set {
            font-size: 30px;
        }
    }
`;
export default NavbarStyle;
