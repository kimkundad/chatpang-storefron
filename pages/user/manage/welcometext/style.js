import styled from 'styled-components';
import color from '../../../../styles/variables/color';

const GreetingStyle = styled.div`
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
    .userBackButton:hover {
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
    .userButton {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        background: ${color.GRAY_COLOR_1};
        width: fit-content;
        height: fit-content;
        padding: 10px 24px;
        border-radius: 10px;
        margin: 0 8px;
        cursor: pointer;
    }
    .userButton:hover {
        background: ${color.GRAY_COLOR_2};
        color: ${color.WHITE_COLOR};
    }
    .userEditButton {
        width: fit-content;
        height: fit-content;
        display: grid;
        place-items: center;
        margin: 0 auto;
        border-radius: 25px;
        background: var(--mainCBlack);
        padding: 5px 26px;
        color: var(--mainCRed_1);
        cursor: pointer;
    }
    .text-container {
        max-height: 550px;
        overflow-y: scroll;
    }
    .createHeader {
        font-size: min(2rem, 3vw);
    }
    .createContainer {
        font-size: min(2.5rem, 3vw);
        height: fit-content;
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .chatNameInput {
        display: flex;
        align-items: center;
    }
    .chatNameInput input {
        border: 1px solid ${color.BLACK_COLOR};
        border-radius: 10px;
        width: 100%;
    }
    .chatButtonContainer button {
        font-size: min(2.5rem, 3vw);
    }
    .chatCustomBtn,
    .replyCustomBtn {
        border: 1px solid ${color.BLACK_COLOR};
        border-radius: 25px;
        margin: 0 10px;
        padding: 0 16px;
        font-size: 1.2rem;
    }
    .replyButtonContainer {
        display: flex;
        justify-content: center;
    }
    .replyButtonContainer button {
        background-color: ${color.PRIMARY};
    }
    .replyCustomBtn {
        display: flex;
        align-items: center;
        font-size: min(2rem, 3vw) !important;
    }
    .replyCustomBtn span {
        margin-left: 16px;
    }
    .chatWording {
        min-width: 60%;
        font-size: min(1.5rem, 4vw);
    }
    .chatWording div h4 {
        min-width: 150px;
    }
    .chatWordInput {
        min-width: 60%;
    }
    .ant-input {
        font-size: min(2rem, 3vw) !important;
        min-height: 150px !important;
        height: 150px !important;
    }
    .chatComment {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .commentHeader {
        display: flex;
        height: 250px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .commentInput {
        max-width: 450px;
        height: auto;
    }
    .toggleCommentOptions {
        display: flex;
        justify-content: space-between;
        margin-top: 32px;
    }
    .toggleCommentOptions div {
        display: flex;
        align-items: center;
    }
`;

export default GreetingStyle;
