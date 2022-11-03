import styled from 'styled-components';

const InfoStyle = styled.div`
    min-height: calc(95vh - ${(props) => props.navHeight}px) !important;
    position: relative;
    padding-right:5%;
    padding-left:5%;
    padding-top:120px;
    z-index: 1;
    margin: 20px 10vw 0 10vw;
    .invoice-item {
        width: 50%;
        border: 1px solid #c4c4c4;
        border-radius: 10px;
        position: relative;
    }
    .ant-tabs-tab-btn {
        font-size: 2vw;
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
        width: 190px;
        height: 150px;
        font-size: 1.5rem;
        font-weight: 700;
        border-radius: 10px;
    }
    .table-responsive {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }
`;

export default InfoStyle;
