import styled from 'styled-components';
import color from '../../styles/variables/color';

const SidebarStyle = styled.div`
    left: 0;
    position: fixed;
    transition: all 0.2s ease-in-out 0.3s;
    width: 240px;
    min-height: calc(100vh - ${(props) => props.navbarHeight}px);
    top:${(props) => props.navbarHeight + 40}px;
    z-index: 200;
    box-shadow: 0 0 13px 0 rgba(82, 63, 105, 0.2);
    overflow-y: hidden;
    display:block;
    background-color:${color.WHITE_COLOR};
    .open {
        width: auto;
        -webkit-transition: all 0.4s ease;
        -moz-transition: all 0.4s ease;
        transition: all 0.4s ease;
    }
    .sideBarToggle {
        font-size: 1.5rem;
    }
    .sidebar-inner {
        height: 100%;
        min-height: 100%;
        transition: all 0.2s ease-in-out 0s;
    }
    .sidebar-menu ul {
        font-size: 15px;
        list-style-type: none;
        margin: 0;
        padding:0 0 15px 0;
        position: relative;
    }
    .sidebar-menu li a {
        color: ${color.GRAY_COLOR_3};
        display: block;
        font-size: 15px;
        height: auto;
        padding: 0 20px;
    }
    .menu-title {
        color: #9e9e9e;
        display: flex;
        font-size: 14px;
        padding: 5px 15px;
        white-space: nowrap;
        justify-content: center;
    }
    .menu-title.active {
        background: ${color.GRAY_COLOR_1};
    }
    .menu-title li {
        background: red;
    }
    .menu-title > i {
        float: right;
        line-height: 40px;
    }
    .sidebar-menu li.menu-title a {
        /* color: #ff9b44; */
        font-size: 1.2rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        padding: 0;
    }
    .sidebar-menu li.menu-title a.btn {
        color: ${color.WHITE_COLOR};
        display: block;
        float: none;
        font-size: 15px;
        margin-bottom: 15px;
        padding: 10px 15px;
    }
    .sidePackageInfo {
        display: flex;
        justify-content: space-between;
        padding: 16px 10px;
        align-items: center;
        color: ${color.WHITE_COLOR};
        background-color: ${color.BLACK_COLOR};
        font-size: min(1rem, 3vw);
    }
    .sidePackage-title {
        font-size: min(1rem, 1.5vw);
        margin: 0 auto;
        padding: 4px 8px;
        border-radius: 30px;
        background-color: ${color.PRIMARY};
        text-align:center;
    }
    .packInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: min(1rem, 1.5vw);
        width: 90%;
    }
    //xs mobile
    @media screen and (max-width: 575px) {
        width: 160px;
        z-index:20;
        top:${(props) => props.navbarHeight + 8}px;
    }
    //sm tablet
    @media screen and (min-width: 576px) and (max-width: 767px) {}
     //md extra tablet
     @media screen and (min-width: 768px) and (max-width: 991px) {}
     //xl notebook
    @media screen and (min-width: 1200px) and (max-width: 1535px) {
    }
`;

export default SidebarStyle;
