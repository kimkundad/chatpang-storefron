import React, { useEffect, useState, useRef } from 'react';
import NavBar from '../../shared/navbar';
import useWindowSize from '../../../modules/windowSize';
import UserLayoutStyle from './style';
import Sidebar from '../../sidebar';

const UserLayout = ({ children }) => {
    const navRef = useRef({});
    const sidebarRef = useRef({});

    const [navbarHeight, setNavbarHeight] = useState(64);
    const [sideBarWidth, setSideBarWidth] = useState(0)

    const size = useWindowSize();

    const ToggleSidebar = () => {
        const display = sidebarRef.current.style.display
        if (display === "block") {
            sidebarRef.current.style.display ="none"
        } else {
            sidebarRef.current.style.display ="block"
        }
    }
    useEffect(() => {
        setNavbarHeight(navRef.current.offsetHeight);
    }, [navRef, navRef.current.offsetHeight, size]);

    useEffect(() => {
        if (size.width >= 991) {
            sidebarRef.current.style.display ="block"
        }else {
            sidebarRef.current.style.display ="none"
        }
    }, [size.width]);
    return (
        <UserLayoutStyle navbarHeight={navbarHeight} sidebarWidth={sidebarRef.current.offsetWidth}>
            <NavBar ref={navRef} screenWidth={size.width} toggleSide={()=>ToggleSidebar()}/>
            <Sidebar ref={sidebarRef} />
            <div className="content">
                {children}
            </div>
        </UserLayoutStyle>
    );
};

export default UserLayout;
