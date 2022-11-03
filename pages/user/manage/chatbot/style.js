import styled from 'styled-components';
import color from '../../../../styles/variables/color';

const ChatBotStyle = styled.div`
    /* margin-top:120px;
padding-left:10px; */
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
        font-size: min(1rem, 6vw);
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
        left: 10px;
    }
    .userEditButton {
        width: fit-content;
        height: fit-content;
        display: grid;
        place-items: center;
        margin: 0 auto;
        border-radius: 25px;
        background: ${color.BLACK_COLOR};
        padding: 5px 26px;
        color: ${color.PRIMARY};
        cursor: pointer;
    }
    .noData {
        font-size: min(1.5rem, 6vw);
        color: ${color.RED_COLOR_1};
    }
    .userButton {
        display: flex;
        align-items: center;
        font-size: min(1rem, 4vw);
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
    .chatButtonContainer button {
        font-size: min(2.5rem, 3vw);
    }
    .chatButtonContainer button:first-child {
        background-color: ${color.PRIMARY};
    }
    .chatCustomBtn {
        border: 1px solid ${color.BLACK_COLOR};
        border-radius: 25px;
        margin: 0 10px;
        padding: 0 16px;
        font-size: 1.2rem;
    }
    .commentHeader {
        display: flex;
        height: 250px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
    .chatWording {
        min-width: 65%;
        font-size: min(1.5rem, 4vw);
    }
    .chatWording div h4 {
        min-width: 150px;
    }
    .chatWordInput {
        min-width: 60%;
    }
    .textBTN {
        font-size: min(2rem, 3vw) !important;
        margin-left: 16px;
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
    /* .commentInput {
        display: grid;
        place-items: center;
    } */
    .commentInput {
        /* max-width: 450px; */
        height: auto;
    }
    .commentInput textarea {
        width: 100%;
        padding: 2%;
    }
    //xs mobile
    @media screen and (max-width: 575px) {
        .textBTN {
            display: none;
        }
        .chatNameInput {
            width: 80%;
        }
        .commentHeader {
            height: fit-content;
        }
        .commentInput {
            padding: 0px 40px;
        }
        .toggleCommentOptions {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            & div {
                width: 50%;
            }
        }
        .chatWording{
            padding: 0px 40px;
        }
    }
    //sm tablet
    @media screen and (min-width: 576px) and (max-width: 767px) {
        .textBTN {
            display: none;
        }
        .chatNameInput {
            width: 80%;
        }
        .commentHeader {
            height: fit-content;
        }
        .commentInput {
            padding: 0px 40px;
        }
        .toggleCommentOptions {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            & div {
                width: 50%;
            }
        }
    }
    //md extra tablet
    @media screen and (min-width: 768px) and (max-width: 991px) {
        .commentHeader {
            height: fit-content;
        }
        .commentInput {
            padding: 0px 40px;
        }
    }
    //xl notebook
    @media screen and (min-width: 1200px) and (max-width: 1535px) {
        .commentInput {
            padding: 0px 40px;
        }
    }
    //xxl notebook
    @media screen and (min-width: 1920px) {
    }
`;

export default ChatBotStyle;
