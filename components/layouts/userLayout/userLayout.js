import React, { useEffect, useState, useRef } from 'react';
import NavBar from '../../shared/navbar';
import useWindowSize from '../../../modules/windowSize';
import UserLayoutStyle from './style';
import Sidebar from '../../sidebar';
import useUser from '../../../Hooks/useUser';
import { useRouter } from 'next/router';
import axios from '../../../pages/api/axios';

const UserLayout = ({ children }) => {
    const navRef = useRef({});
    const sidebarRef = useRef({});

    const router = useRouter()

    const { user, setUserData } = useUser()

    const [navbarHeight, setNavbarHeight] = useState(64);
    const [sideBarWidth, setSideBarWidth] = useState(0)

    const size = useWindowSize();

    let userId = ''
    let token = ''

    

    const ToggleSidebar = () => {
        const display = sidebarRef.current.style.display
        if (display === "block") {
            sidebarRef.current.style.display ="none"
        } else {
            sidebarRef.current.style.display ="block"
        }
    }
    //persist login
    useEffect(async ()=>{
        if (!user.isLogin) {
            if (typeof window !== 'undefined') {
                userId = localStorage.getItem('userId')
                token = localStorage.getItem('token')
                if (token) {
                const res = await axios.get(`/public/facebook-users/${userId}`)
                const data = res.data.data
                const resp = await axios.get(`public/packages/${data.order.package.id}`)
                  setUserData({
                      ...user,
                      user: data,
                      facebookUserId: data.facebook_id,
                      accessToken: token,
                      userId: userId,
                      package: resp.data.data,
                      isLogin: true,
                      order:data.order
                    })
                  }else{
                  router.replace('/')
                }
            }
        }
    },[user.isLogin])
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
