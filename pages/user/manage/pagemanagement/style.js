import styled from 'styled-components';

const InfoStyle = styled.div`
    min-height: calc(95vh - ${(props) => props.navHeight}px) !important;
    position: relative;
    padding-right: 5%;
    padding-left: 5%;
    padding-top:${(props) => props.navHeight + 40}px;
    z-index: 1;
    margin: 20px 10vw 0 10vw;
    .invoice-item {
        width: 100%;
        border: 1px solid #c4c4c4;
        border-radius: 10px;
        position: relative;
    }
    .ant-tabs-tab-btn {
        font-size: min(1.3rem, 6vw);
    }
    .ant-table-cell strong {
        font-size: 1.5vw !important;
    }
    .ant-table-cell span {
        font-size: 1.5vw !important;
    }
    .toast-container {
        margin-top: 7vw;
        margin-right: 1.5vw;
    }
    .toast-content {
        font-size: clamp(1rem, calc(1rem, 5vw), 3.5rem);
    }
    .numberComment {
        border: 1px solid #c4c4c4;
        padding: 14px;
        width: fit-content;
        height: 150px;
        font-size: 1.5rem;
        font-weight: 700;
        border-radius: 10px;
    }
    .table-responsive {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }
    //xs mobile
    @media screen and (max-width: 575px) {
        margin: 20px 5vw 0 5vw;
        padding-right: 0px;
        padding-left: 0px;
    }
    //sm tablet
    @media screen and (min-width: 576px) and (max-width: 767px) {
    }
    @media screen and (min-width: 600px) and (max-width: 767px) {
    }
    //md extra tablet
    @media screen and (min-width: 768px) and (max-width: 991px) {
    }
    //xxl extra tablet
    @media screen and (min-width: 992px) and (max-width: 1200px) {
    }
`;

export default InfoStyle;
