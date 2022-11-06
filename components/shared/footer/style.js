import styled from 'styled-components';
import color from '../../../styles/variables/color';
import dimension from '../../../styles/variables/dimension';
import font from '../../../styles/variables/font';
import windowSize from '../../../styles/variables/windowSize';

const FooterComponentStyle = styled.div`
    max-height: ${(props) => props.containHeight}px;
    width: ${(props) => props.screenWidth}px;
    /* background: ${color.PRIMARY}; */
    position: relative;
    font-size: 22px !important;
    overflow: hidden;

    .padding-link {
        padding: 93px 0px 0px !important;
    }

    .footer-content {
        position: absolute;
        left: 0px;
        bottom: 50px;
        padding: 0px 50px 0px 20px;
    }

    .container-footer {
        padding: 10% 5% 0px;
        height: ${(props) => props.containHeight}px;
        position: absolute;
        bottom: 10px;
        left: ${(props) => (props.screenWidth >= windowSize.STD_WIDTH ? (props.screenWidth - windowSize.STD_WIDTH) / 2 + 'px' : 'unset')};
    }

    .footer-title {
        font-weight: 600;
        font-size: 40px;
    }

    .footer-sub-title {
        font-weight: 400;
        font-size: 32px;
        padding: 5px 50px;
        border-radius: 25px;
        background: ${color.BLACK_COLOR};
        color: ${color.WHITE_COLOR};
        width: 80%;
        text-align: center;
    }

    .services {
        font-size: 46px;
        font-weight: 800;
        text-align: left;
        width: 100%;
    }

    .footer-bg {
        //background: url('/images/BG/bg.jpg');
        .img-footer-bg-1 {
            object-fit: none;
            width: ${(props) => props.screenWidth}px;
            height: 2000px;
            object-position: 0 -1600px;
        }

        .img-footer-bg {
            display: flex;
            width: ${(props) => props.screenWidth}px;
            position: absolute;
            bottom: -5px;
            z-index: 0;

            img {
                width: ${(props) => props.screenWidth}px;
            }
        }
    }

    .image-cover-logo {
        width: auto;
        height: 100px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        object-fit: cover;
    }

    .text-center {
        text-align: center;
    }

    .icon {
        display: flex;
        width: 50px;
        height: 50px;
        padding: 5px;
        object-fit: cover;
        border-radius: 50%;
        cursor: pointer;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .address {
        font-size: 36px;
        padding: 5px;

        .company-name {
            font-weight: 600;
            font-size: 34px;
        }

        div {
            margin-top: 10px;
            font-size: 30px;
        }
    }

    .phone {
        width: auto;
        font-size: ${font.FONT_SIZE_PX.MD};
        text-align: center;
        margin-bottom: 10px;
    }

    .footer-right {
        align-items: center;
        display: flex;
        margin-left: auto;
        margin-right: auto;
    }

    .footer-center {
        //align-items: center;
        display: flex;
        width: 100%;
        padding: 25px 75px;
    }

    .follow-me {
        display: flex;
        position: relative;
        //border-bottom-left-radius: 80px;
        /* background: url('/images/BG/Asset3.png'); */
        padding: 5px 0px 0px 100;
        cursor: pointer;
        align-items: center;
        align-content: center;
        margin-top: 15px;
        font-size: 30px;
        font-weight: 600;
        width: 350px;
        height: 50px;
        align-content: center;
        justify-content: center;

        img {
            z-index: 10;
        }

        div {
            z-index: -1;
        }
    }

    .follow-header {
        padding-left: 60px;
    }

    .item-social {
        display: block !important;
        width: 100%;
        text-align: center;
    }

    .img-bg-click {
        position: absolute;
        left: 0px;
        top: -0.1rem;

        img {
            width: 350px;
            height: 50px;
        }
    }

    .icon-follow {
        display: flex;
        position: absolute;
        left: -5px;
        width: 60px;
        height: 60px;
        padding: 5px;
        object-fit: cover;
        border-radius: 50%;
    }

    .copy-right {
        font-size: 30px;
        text-align: center;
        width: 100%;
        position: absolute;
        bottom: 0px;
        left: 0px;
    }

    .link {
        cursor: pointer;
        width: 100%;
        text-align: left;
        font-size: 30px;
        padding: 5px;
        margin-top: 10px;
    }

    //xs extra tablet
    @media screen and (max-width: 575px) {
        max-height: 1750px;

        background: ${color.PRIMARY};

        .container-footer {
            padding: 1% 0;
            height: ${(props) => props.containHeight}px;
            //bottom: 10px;
        }
        .image-cover-logo {
            width: fit-content;
        }
        .footer-content {
            position: unset;
        }

        .follow-header {
            padding: 0px;
        }

        .footer-bg {
            //background: url('/images/BG/bg.jpg');
            //display: none;
            .img-footer-bg-1 {
                display: none;
            }
            min-height: 1750px;

            .img-footer-bg {
                display: flex;
                width: ${(props) => props.screenWidth}px;
                height: 1750px;
                position: absolute;

                bottom: -5px;
                z-index: 0;

                img {
                    width: 6000px;
                    object-position: 0 100px;
                }
            }
        }

        & .footer-title {
            font-size: 30px;
        }

        & .footer-sub-title {
            font-size: 24px;
        }

        & .address {
            font-size: 24px;

            & .company-name {
                font-size: 30px !important;
            }

            & div {
                font-size: 24px;
            }
        }

        & .services {
            font-size: 38px;
            justify-content: center;
            align-content: center;
            text-align: center;
        }

        & .link {
            text-align: center;
            font-size: 24px;
        }

        & .footer-center {
            padding: 0px;
        }

        & .follow-me {
            font-size: 24px;
            width: ${(props) => props.screenWidth - 60}px;
        }

        & .img-bg-click {
            width: ${(props) => props.screenWidth - 60}px;

            img {
                width: ${(props) => props.screenWidth - 70}px;
            }
        }
        .padding-link {
            padding: 36px 0px 0px !important;
        }
    }

    @media screen and (min-width: 576px) and (max-width: 899px) {
        max-height: 1550px;

        background: ${color.PRIMARY};

        & .image-cover-logo {
            width: auto;
            height: 105px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 50px;
            object-fit: cover;
        }

        .footer-content {
            position: unset;
        }

        .follow-header {
            padding: 0px;
        }

        .container-footer {
            /* padding: 10% 5% 0px; */
            height: ${(props) => props.containHeight + 150}px;
            //bottom: 10px;
            padding-top: 350px;
        }

        .footer-bg {
            //background: url('/images/BG/bg.jpg');
            //display: none;
            .img-footer-bg-1 {
                display: none;
            }
            min-height: 1550px;

            .img-footer-bg {
                display: flex;
                width: ${(props) => props.screenWidth}px;
                height: 1750px;
                position: absolute;

                bottom: -5px;
                z-index: 0;

                img {
                    width: 6000px;
                    object-position: 0 100px;
                }
            }
        }

        & .footer-title {
            font-size: 30px;
            width: 100%;
            text-align: center;
        }

        & .footer-sub-title {
            font-size: 24px;
        }

        & .address {
            font-size: 24px;

            & .company-name {
                font-size: 30px !important;
            }

            & div {
                font-size: 24px;
            }
        }

        & .services {
            font-size: 38px;
            justify-content: center;
            align-content: center;
            text-align: center;
        }

        /* & .p-side-2 {
            padding: 0px 15px;
        } */

        & .link {
            text-align: center;
            font-size: 24px;
        }

        & .footer-center {
            padding: 0px;
        }

        & .follow-me {
            font-size: 24px;
            margin: 15px auto 0px;
            width: ${(props) => (props.screenWidth - 60 >= 350 ? 350 : props.screenWidth - 60)}px;
        }

        & .img-bg-click {
            width: ${(props) => props.screenWidth - 60}px;
            left: unset;

            img {
                width: ${(props) => (props.screenWidth - 70 >= 340 ? 340 : props.screenWidth - 70)}px;
            }
        }

        & .item-social {
            & a {
                justify-content: center;
            }
        }
        .padding-link {
            padding: 36px 0px 0px !important;
        }
    }
    //xxl extra tablet
    @media screen and (min-width: 900px) and (max-width: 991px) {
        max-height: 1100px;

        background: ${color.PRIMARY};

        .footer-content {
            position: unset;
        }

        .follow-header {
            padding: 0px;
        }

        .container-footer {
            padding: 10% 5% 0px;
            height: ${(props) => props.containHeight}px;
            //bottom: 10px;
            padding-top: 700px;
        }

        .footer-bg {
            //background: url('/images/BG/bg.jpg');
            //display: none;
            .img-footer-bg-1 {
                display: none;
            }
            min-height: 1100px;

            .img-footer-bg {
                display: flex;
                width: ${(props) => props.screenWidth}px;
                height: 1750px;
                position: absolute;

                bottom: -5px;
                z-index: 0;

                img {
                    width: 6000px;
                    object-position: 0 100px;
                }
            }
        }

        & .footer-title {
            font-size: 30px;
        }

        & .footer-sub-title {
            font-size: 24px;
        }

        & .address {
            font-size: 24px;

            & .company-name {
                font-size: 30px !important;
            }

            & div {
                font-size: 24px;
            }
        }

        & .services {
            font-size: 38px;
            justify-content: center;
            align-content: center;
            text-align: center;
        }

        & .p-side-2 {
            padding: 0px 15px;
        }

        & .link {
            text-align: center;
            font-size: 24px;
        }

        & .footer-center {
            padding: 0px;
        }

        & .follow-me {
            font-size: 24px;
            margin: 15px auto 0px;
            width: ${(props) => (props.screenWidth - 60 >= 350 ? 350 : props.screenWidth - 60)}px;
        }

        & .img-bg-click {
            width: ${(props) => props.screenWidth - 60}px;
            left: unset;

            img {
                width: ${(props) => (props.screenWidth - 70 >= 340 ? 340 : props.screenWidth - 70)}px;
            }
        }

        & .item-social {
            & a {
                justify-content: center;
            }
        }
    }
    //xxl extra tablet
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        max-height: 1100px;

        background: ${color.PRIMARY};

        .footer-content {
            position: unset;
        }

        .follow-header {
            padding: 0px;
        }

        .container-footer {
            padding: 10% 5% 0px;
            height: ${(props) => props.containHeight}px;
            bottom: -600px;
        }

        & .copy-right {
            bottom: 609px;
            left: 0;
        }

        .footer-bg {
            //background: url('/images/BG/bg.jpg');
            //display: none;
            .img-footer-bg-1 {
                display: none;
            }
            min-height: 1100px;

            .img-footer-bg {
                display: flex;
                width: ${(props) => props.screenWidth}px;
                height: 1750px;
                position: absolute;

                bottom: -5px;
                z-index: 0;

                img {
                    width: 6000px;
                    object-position: 0 100px;
                }
            }
        }

        & .footer-title {
            font-size: 30px;
        }

        & .footer-sub-title {
            font-size: 24px;
        }

        & .address {
            font-size: 24px;

            & .company-name {
                font-size: 30px !important;
            }

            & div {
                font-size: 24px;
            }
        }

        & .services {
            font-size: 38px;
            justify-content: center;
            align-content: center;
            text-align: center;
        }

        & .p-side-2 {
            padding: 0px 30px;
        }

        & .link {
            text-align: center;
            font-size: 24px;
        }

        & .footer-center {
            padding: 0px;
        }

        & .follow-me {
            font-size: 24px;
            margin: 15px auto 0px;
            width: ${(props) => (props.screenWidth - 60 >= 350 ? 350 : props.screenWidth - 60)}px;
        }

        & .img-bg-click {
            width: ${(props) => props.screenWidth - 60}px;
            left: unset;

            img {
                width: ${(props) => (props.screenWidth - 70 >= 340 ? 340 : props.screenWidth - 70)}px;
            }
        }

        & .item-social {
            & a {
                justify-content: center;
            }
        }
    }

    //xxl extra tablet
    @media screen and (min-width: 1200px) and (max-width: 1919px) {
        & .image-cover-logo {
            width: auto;
            height: 80px;
            margin-top: 0px;
        }

        & .padding-link {
            padding: 80px 0px 0px !important;
        }

        & .footer-content {
            padding: 0px 40px 0px 40px;
        }

        & .follow-header {
            padding: 0px;
        }

        & .follow-me {
            padding: 10px 50px;
        }

        .container-footer {
            padding: 10% 5% 0px;
            height: ${(props) => props.containHeight}px;
            bottom: 0px;
        }

        & .footer-title {
            font-size: 30px;
        }

        & .footer-sub-title {
            font-size: 24px;
        }

        & .address {
            font-size: 24px;

            & .company-name {
                font-size: 24px !important;
            }

            & div {
                font-size: 24px;
            }
        }

        & .services {
            font-size: 30px;
            justify-content: center;
            align-content: center;
        }

        & .p-side-2 {
            padding: 0px 0px;
        }

        & .link {
            text-align: left;
            font-size: 24px;
        }

        & .follow-me {
            font-size: 24px;
            margin: 15px auto 0px;
            width: ${(props) => (props.screenWidth - 60 >= 350 ? 350 : props.screenWidth - 60)}px;
        }

        & .img-bg-click {
            width: 100%;
            height: 35px;

            img {
                width: 280px;
                height: 35px;
            }
        }

        & .item-social {
            & a {
                justify-content: center;
            }
        }

        & .footer-center {
            padding: 0px;
            padding: 0px 15px;
        }

        & .follow-me {
            margin-top: 10px;
            height: auto;
            padding: 2px 50px;
            margin-top: 5px 0px;
            width: 100%;
        }

        & .icon-follow {
            width: 45px;
            height: 45px;
        }

        @media screen and (min-width: 1400px) and (max-width: 1500px) {
            & .icon-follow {
                left: 5px;
            }
        }

        @media screen and (min-width: 1500px) and (max-width: 1599px) {
            & .icon-follow {
                left: 10px;
            }
        }

        @media screen and (min-width: 1600px) and (max-width: 1699px) {
            & .icon-follow {
                left: 25px;
            }
        }

        @media screen and (min-width: 1700px) and (max-width: 1799px) {
            & .icon-follow {
                left: 40px;
            }
        }

        @media screen and (min-width: 1800px) and (max-width: 1899px) {
            & .icon-follow {
                left: 50px;
            }
        }

        @media screen and (min-width: 1900px) {
            & .icon-follow {
                left: ${(props) => props.screenWidth / 50}px;
            }

            & .footer-content {
                position: unset;
            }
        }
    }

    @media screen and (min-width: 2000px) {
        & .img-footer-bg-1 {
            object-fit: cover !important;
        }
        & .footer-content {
            position: unset;
        }
    }
`;
export default FooterComponentStyle;
