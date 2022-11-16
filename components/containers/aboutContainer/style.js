import styled from 'styled-components';

const AboutContainerStyle = styled.div`
    min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
    //padding: 5%;
    position: relative;
    z-index: 1;
    padding-top:${(props) => (props.navHeight)}px;
    .about-header {
        //margin: auto;
    }
    .header {
        display: block;
        width: 100%;
    }

    .header-icon {
        width: 90px;
    }

    .img-content {
        /* width: 600px;
    height: 500px; */
        width: 90%;
        height: calc(100vh - ${(props) => props.navHeight}px) !important;
        object-fit: cover;
    }

    .image-cover-logo {
        width: 700px;
        height: 200px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 6%;
        object-fit: cover;
    }

    .list-text {
        display: block !important;
        font-size: 37px !important;
        font-weight: 600;
        font-style: italic;
        margin-top: 5%;

        .list-item {
            display: flex;
            align-items: center;
            align-content: center;
            line-height: 45px;
        }

        img {
            width: 30px;
            margin-right: 15px;
        }
    }

    //xs mobile
    @media screen and (max-width: 575px) {
        .header {
            display: block;
            width: 100%;
        }

        .header-icon {
            width: 90px;
        }

        & .img-content {
          width: 80%;

            height: 300px !important;
            margin-top: 20px !important;
        }

        & .about-header {
            h4 {
                font-weight: 550;
                font-size: 30px;
            }
        }

        .image-cover-logo {
            width: 85%;
            height: 80px;
            margin-left: auto;
            margin-right: auto;
            object-fit: cover;
        }

        & .list-text {
            display: block !important;
            font-size: 22px !important;

            .list-item {
                display: flex;
                align-items: center;
                align-content: center;
                font-weight: 400;
            }

            img {
                width: 30px;
                margin-right: 15px;
            }
        }

        & .chat-icon {
            bottom: 1% !important;
        }
    }

    //sm tablet
    @media screen and (min-width: 576px) and (max-width: 767px) {
        & .about-header {
            h4 {
                font-weight: 550;
                font-size: 45px;
            }
        }

        .image-cover-logo {
            width: 70%;
            height: 108px;
            margin-left: auto;
            margin-right: auto;
            object-fit: cover;
        }

        & .list-text {
            display: block !important;
            font-size: 28px !important;
        }

        .img-content {
            /* width: 600px;
    height: 500px; */
            width: 500px;
            height: 400px;
            object-fit: cover;
        }
    }

    //md extra tablet
    @media screen and (min-width: 768px) and (max-width: 991px) {
        .img-content {
            /* width: 600px;
    height: 500px; */
            width: 650px;
            height: 500px;
            object-fit: cover;
        }
    }

    //xl notebook
    @media screen and (min-width: 992px) and (max-width: 1200px) {
        & .about-header {
            h4 {
                font-weight: 550;
                font-size: 45px;
            }
        }

        .image-cover-logo {
            width: 80%;
            height: 108px;
            margin-left: auto;
            margin-right: auto;
            object-fit: cover;
        }

        & .list-text {
            display: block !important;
            font-size: 28px !important;
        }

        .img-content {
            /* width: 600px;
    height: 500px; */
            width: 580px;
            height: auto !important;
            // object-fit: cover;
        }
    }

    //xxl notebook
    @media screen and (min-width: 1201px) and (max-width: 1478px) {
        // min-height: calc(100vh - ${(props) => props.navHeight}px) !important;

        .image-cover-logo {
            width: 75%;
            height: 108px;
            margin-left: auto;
            margin-right: auto;
            object-fit: cover;
        }

        & .list-text {
            display: block !important;
            font-size: 28px !important;
        }

        .img-content {
            /* width: 600px;
    height: 500px; */
            width: 80%;
            /* height: auto !important; */
            // object-fit: cover;
        }
    }

    //xxl notebook
    @media screen and (min-width: 1478px) and (max-width: 1919px) {
        min-height: calc(100vh - ${(props) => props.navHeight}px) !important;
    }
`;

export default AboutContainerStyle;
