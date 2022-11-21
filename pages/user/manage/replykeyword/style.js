import styled from 'styled-components';
import color from '../../../../styles/variables/color';

const KeywordStyle = styled.div`
    padding-bottom: 50px;
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
    .createContainer {
        font-size: min(1.3rem, 3vw);
        height: fit-content;
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .commentHeader {
        display: flex;
        height: 250px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .commentInput {
        /* max-width: 450px; */
        height: auto;
    }
    .commentInput textarea {
        width: 100%;
        padding: 2%;
        border-radius:20px;
    }
    /* .replyKeywordBtn {
        font-size: 1.5rem;
        height: 250px;
    } */
    .uploadIMG {
        position: relative;
        border-radius: 10px;
        border: 1px solid #888;
        margin: 16px 0;
        overflow: hidden;
        height: auto;
        display: grid;
        place-items: center;
    }
    .uploadIMG img {
        max-width: 90%;
        max-height: 90%;
        cursor: pointer;
        opacity: 1;
        position: relative;
        z-index: 4;
    }
    .uploadIMG:hover img {
        opacity: 0.5;
    }
    .uploadIMG span {
        position: absolute;
        bottom: 50%;
        z-index: 20;
        opacity: 0;
    }
    .uploadIMG:hover span {
        opacity: 1;
    }
    .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
    .inputfile + label {
        font-size: 1.25em;
        font-weight: 700;
        color: black;
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        cursor: pointer; /* "hand" cursor */
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
        font-size: min(1rem, 6vw) !important;
    }
    .replyCustomBtn span {
        margin-left: 16px;
    }
    .replyCustomBtn {
        border: 1px solid var(--mainCBlack);
        border-radius: 25px;
        margin: 0 10px;
        padding: 8px 16px;
        font-size: 1.2rem;
    }
    .textBTN {
        font-size: min(2rem, 3vw) !important;
        margin-left: 16px;
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
            padding-left:50px;
        }
        .commentInput {
            padding: 0px 20px;
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

export default KeywordStyle;
