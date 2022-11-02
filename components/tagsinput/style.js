import styled from 'styled-components';
import color from '../../styles/variables/color';
const TagStyle = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    min-height: 48px;
    width: 100%;
    padding: 0 8px;
    border: 1px solid ${color.BLACK_COLOR};
    border-radius: 10px;
    .tags-input-container:focus-within {
        border: 1px solid #0052cc;
    }
    .tags-input {
        flex: 1;
        border: none;
        height: 46px;
        font-size: 18px;
        padding: 4px 0 0 0;
    }
    .tags-input:focus {
        outline: transparent;
    }
    #tags {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 8px 0 0 0;
    }
    .tag {
        width: auto;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        padding: 0 8px;
        font-size: 18px;
        list-style: none;
        border-radius: 6px;
        margin: 0 8px 8px 0;
        background: #0052cc;
    }
    .tag-title {
        margin-top: 3px;
    }
    .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: #0052cc;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
    }
`;

export default TagStyle;
