import styled from 'styled-components';
import color from '../../../../styles/variables/color';

const LineNotiStyle = styled.div`
    .page-header {
        margin-bottom: 1.875rem;
        margin-top: 20px;
        text-align: center;
    }
    .userDropdown {
        display: flex;
        align-items: center;
        font-size: 1rem;
        border: 1.5px solid ${color.BLACK_COLOR};
        border-radius: 25px;
        width: fit-content;
        height: fit-content;
        padding: 10px 24px;
    }

    .userDropdown > .form-select {
        border: none;
        font-size: min(1rem, 2vw);
        width: auto;
    }
    .line-header {
        font-size: 1.2rem;
    }
    .lineTokenHeader {
        text-align: left;
        font-size: 1.5rem;
        letter-spacing: 1.5px;
    }
    .lineTokenHeader span:last-child {
        font-size: 1rem;
        margin: auto 0;
        cursor: pointer;
    }
    .lineTokenInput {
        display: flex;
        align-items: center;
    }
    .lineTokenInput input {
        border: 1px solid ${color.BLACK_COLOR};
        border-radius: 10px;
        width: 100%;
    }
    .lineTokenInput button {
        background-color: ${color.PRIMARY};
        min-width: 20%;
    }
    .lineTiming {
        width: 60%;
        max-width: 60%;
        text-align: left;
    }
    .lineTimingHeader {
        font-size: 1rem;
        letter-spacing: 1.5px;
    }
    .lineTimingInput .ant-input-number-input {
        border-radius: 25px;
        height: 40px;
        width: 100px;
        font-size: min(2rem, 3vw);
    }
    .lineTimingInput span.ant-select-selection-item {
        font-size: min(1.5rem, 2vw);
    }
    .lineEditButton {
        font-size: 1.5rem;
        margin: 0 16px;
        cursor: pointer;
    }
    .lineEditButton:nth-last-child(1) {
        color: ${color.RED_COLOR_1};
    }
    .lineButtonContainer button:first-child {
        background-color: ${color.PRIMARY};
    }
    .lineCustomBtn {
        background-color: ${color.PRIMARY};
        border: 1px solid ${color.BLACK_COLOR};
        border-radius: 25px;
        margin: 0 10px;
        padding: 0 16px;
        font-size: 2vw;
    }
    .userBackButton:hover{
        background: rgb(63, 63, 63);
    }
    .userBackButton {
        width: fit-content;
        height: fit-content;
        display: flex;
        align-items: center;
        margin: 0 auto;
        border-radius: 10px;
        background: ${color.BLACK_COLOR};
        padding: 10px 26px;
        color: ${color.PRIMARY};
        cursor: pointer;
        position: absolute;
        left: 0;
    }
`;

export default LineNotiStyle;
