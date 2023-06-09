import styled from 'styled-components';
import color from '../../styles/variables/color';

const StepperStyle = styled.div`
    background-color: transparent;
    color: ${color.GRAY_COLOR_2};
    font-size: 1rem;
    font-weight: 500;
    margin-top: 20px;
    /* margin-bottom: 0; */
    padding: 0;
    li.breadcrumb-item::before {
        content: '' !important;
    }
    li.breadcrumb-item {
        background: ${color.WHITE_COLOR};
        font-size: 1.5rem;
        display: grid;
        place-items: center;
        padding-left: 35px;
        position: relative;
        outline: 1px solid black;
    }
    li.breadcrumb-item div {
        padding: 10px;
    }
    li.breadcrumb-item div .icon {
        margin: 0 10px;
    }
    li.breadcrumb-item:last-child {
        border-radius: 0 10px 10px 0;
    }
    li.breadcrumb-item:first-child {
        border-radius: 10px 0 0 10px;
    }
    li.breadcrumb-item.active {
        background: ${color.GRAY_COLOR_3};
        color: ${color.WHITE_COLOR};
        outline: 1px solid ${color.GRAY_COLOR_2};
        z-index: 50;
    }
    li.breadcrumb-item.active:not(:last-child)::after {
        border-left: 15px solid ${color.GRAY_COLOR_3};
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        content: '';
        height: 0;
        left: 100%;
        position: absolute;
        top: 25%;
        width: 0;
        z-index: 50;
    }
    li.breadcrumb-item:not(:first-child) {
        border-left: none;
    }
    //xs mobile
    @media screen and (max-width: 575px) {
        li.breadcrumb-item {
            font-size: 1rem;
            padding-left:14px;
        }
        li.breadcrumb-item div {
            padding: 10px  6px 10px 0px;
            margin-left:6px;
        }
        li.breadcrumb-item div .icon {
        margin:0 5px;
        /* font-size:0.8rem; */
        display:none;
    }
    }
    //sm tablet
    @media screen and (min-width: 576px) and (max-width: 767px) {
    }
    //md extra tablet
    @media screen and (min-width: 768px) and (max-width: 991px) {
    }
    //xl notebook
    @media screen and (min-width: 1200px) and (max-width: 1535px) {
    }
`;

export default StepperStyle;
