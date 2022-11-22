import styled from 'styled-components';
import color from '../../../styles/variables/color';

const PaymentStyle = styled.div`
    min-height: calc(95vh - ${(props) => props.navHeight}px) !important;
    position: relative;
    padding: 0px 5%;
    padding-top:${(props) => props.navHeight + 40}px;
    z-index: 1;
    .qrcodeDetail {
        font-size: 2rem;
        border: 1px solid ${color.GRAY_COLOR_2};
        border-radius: 10px;
        padding: 16px;
        width:90%;
        max-width:750px;
    }
    .qrcodeDetail p{
        margin-bottom:0;
    }
    .option{
        font-size:1.3rem;
    }
    .qrcodeImg {
        width: 250px;
    }
    .qrcodeBtnContainer button{
        font-size:min(1.3rem, 6vw) !important;
    }
    .qrcodeInput {
        width: 100%;
    }
    .qrcodeInput input,
    .qrcodeImg input {
        border: 1px solid ${color.BLACK_COLOR};
        border-radius: 10px;
        width: 100%;
    }
    .qrcodeInput button,
    .qrcodeImg button,
    .creditInput button {
        background-color: ${color.PRIMARY};
        width: fit-content;
        border-radius: 10px;
        border: none;
        font-size: min(2rem, 3vw);
        padding: 10px 16px;
        margin: 16px auto;
    }
    .creditInput button:first-child,
    .qrcodeInput button:first-child,
    .qrcodeImg button:first-child {
        font-weight: 500;
        background: none;
    }
    .creditInput input {
        border: 1px solid ${color.BLACK_COLOR};
        border-radius: 10px;
        width: 100%;
    }
    .qrcode-title {
        font-size: 3vw;
    }
    .qrcode-title {
        font-size: 2vw;
    }
    .invoice-item {
        width: 50%;
        border: 1px solid #c4c4c4;
        border-radius: 10px;
        position: relative;
    }
    .customBTN {
        background-color: ${color.PRIMARY};
        width: fit-content;
        height: fit-content;
        padding: 5px 32px;
        border-radius: 10px;
        font-weight: 700;
        border: none;
        box-shadow: 0px 10px 20px rgba(128, 128, 128, 0.25);
    }
    .customBTN:focus {
        background-color: ${color.RED_COLOR_1};
    }
`;

export default PaymentStyle;
