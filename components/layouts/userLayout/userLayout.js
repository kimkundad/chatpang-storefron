import React, { useEffect, useState, useRef } from 'react';
import NavBar from '../../shared/navbar';
import useWindowSize from '../../../modules/windowSize';
import UserLayoutStyle from './style';
import Sidebar from '../../sidebar';

const UserLayout = ({ children }) => {
    const navRef = useRef({});
    const sidebarRef = useRef({});

    const [navbarHeight, setNavbarHeight] = useState(64);

    const size = useWindowSize();
    useEffect(() => {
        setNavbarHeight(navRef.current.offsetHeight);
    }, [navRef, navRef.current.offsetHeight, size]);
    return (
        <UserLayoutStyle navbarHeight={navbarHeight}>
            <NavBar ref={navRef} screenWidth={size.width} />
            <Sidebar />
            <div className="content">
                {children}
            </div>
        </UserLayoutStyle>
    );
};

export default UserLayout;
