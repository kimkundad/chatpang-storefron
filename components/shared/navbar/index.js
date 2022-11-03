import React, { useEffect, useState } from 'react';
import NavbarStyle from './style';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import color from '../../../styles/variables/color';
import Image from 'react-bootstrap/Image';
import font from '../../../styles/variables/font';
import dimension from '../../../styles/variables/dimension';
import navbar from '../../../styles/variables/navbar';
import * as constants from '../../../constants/indexConstant';
import { useRouter } from 'next/dist/client/router';
import useUser from '../../../Hooks/useUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, Menu as MenuAnt } from 'antd';

const NavBar = React.forwardRef((props, ref) => {
    const pages = constants.NAV_BAR_KEY;
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [activeKey, setActiveKey] = useState('');
    const router = useRouter();

    const { user, setUserData } = useUser();
    const userData = user.user;

    const path = router.pathname;

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleOpenSideBar = () => {
        props.toggleSide();
    };
    const handleClick = (name, link) => {
        // props.handleClick(name);
        router.replace(link);
        setActiveKey(name);
        setAnchorElNav(null);
    };

    const onLogOut = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('userId');
        }
        router.push('/');
        setUserData({ ...user, isLogin: false });
    };
    const menu = (
        <MenuAnt
            items={[
                {
                    label: user?.order?.state === 'paid' && (
                        <span style={{ fontSize: 'min(1.5rem,3vw)' }} onClick={() => router.push('/user/manage')}>
                            หน้าหลัก
                        </span>
                    ),
                    key: 0,
                },
                {
                    label: user?.order?.state === 'paid' && (
                        <span style={{ fontSize: 'min(1.5rem,3vw)' }} onClick={() => router.push(`/user/edit/${user?.user?.id}`)}>
                            แก้ไขข้อมูลส่วนตัว
                        </span>
                    ),
                    key: 1,
                },
                {
                    label: user?.order?.state === 'paid' && (
                        <span style={{ fontSize: 'min(1.5rem,3vw)' }} onClick={() => router.push('/user/info/pagemanagement')}>
                            จัดการเพจ
                        </span>
                    ),
                    key: 2,
                },
                {
                    label: (
                        <span style={{ fontSize: 'min(1.5rem,3vw)' }} onClick={() => router.push('/user/info/accountmanagement')}>
                            จัดการบัญชีและสมาชิก
                        </span>
                    ),
                    key: 3,
                },

                {
                    label: (
                        <span style={{ fontSize: 'min(1.5rem,3vw)' }} onClick={() => router.push('/contact')}>
                            ติดต่อเรา
                        </span>
                    ),
                    key: 4,
                },
                {
                    type: 'divider',
                },
                {
                    label: (
                        <span style={{ fontSize: 'min(1.5rem,3vw)' }} onClick={onLogOut}>
                            ออกจากระบบ
                        </span>
                    ),
                    key: 5,
                },
            ]}
        />
    );

    const userDropDown = () => {
        if (user.isLogin) {
            return (
                <Dropdown overlay={menu} trigger={['click']} className="user-dropdown ms-auto fw-bold d-flex align-items-center">
                    <a style={{ textDecoration: 'none', color: 'Black' }} onClick={(e) => e.preventDefault()}>
                        <span className="mx-2 d-none d-md-block">{user?.user?.name !== undefined ? user?.user?.name : 'User'}</span>
                        <FontAwesomeIcon className="me-2 d-block d-md-none" icon={faUser} />
                        <FontAwesomeIcon icon={faAngleDown} />
                    </a>
                </Dropdown>
            );
        } else {
            return (
                <Button
                    onClick={() => handleClick(pages[0].key, pages[pages.length - 1].link)}
                    className="font-set"
                    sx={{
                        color: pages[pages.length - 1].key === props.navKey ? color.WHITE_COLOR : color.BLACK_COLOR,
                        display: 'block',
                        fontFamily: font.FONT_FAMILIES.PRIMARY,
                        background: pages[pages.length - 1].key === props.navKey ? color.BLACK_COLOR : 'transparent',
                        borderRadius: 20,
                        padding: '5px 25px',
                        marginLeft: 'auto',
                    }}>
                    {pages[pages.length - 1].name}
                </Button>
            );
        }
    };

    return (
        <NavbarStyle navbarHeight={ref.current.offsetHeight} screenWidth={props.screenWidth}>
            <AppBar position="fixed" className="navbar" ref={ref}>
                <div className="app-container">
                    <div className="nav-padding">
                        <Toolbar disableGutters>
                            {/* menu when large screen */}
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: 'none', md: 'flex' },
                                }}>
                                <Image onClick={() => handleClick('index', '/')} component="div" src="/images/logo.png" className="image-logo" />
                            </Typography>
                            {/* Menu when small screen */}
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                {!path.includes('user') ? (
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="inherit">
                                        <MenuIcon />
                                    </IconButton>
                                ) : (
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenSideBar}
                                        color="inherit">
                                        <MenuIcon />
                                    </IconButton>
                                )}
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}>
                                    {pages.map((page) => (
                                        <MenuItem key={page.key} onClick={() => handleClick(page.key, page.link)}>
                                            <Typography textAlign="center">{page.name}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <Image onClick={() => handleClick('index', '/')} component="div" src="/images/logo.png" className="image-logo-2" />
                            </Typography>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: 'none', md: 'flex' },
                                    justifyContent: 'flex-start',
                                    //margin: 'auto',
                                }}>
                                {!path.includes('user') && !path.includes('register')
                                    ? pages.map((page) => (
                                          <Button
                                              key={page.key}
                                              onClick={() => handleClick(page.key, page.link)}
                                              className="font-set"
                                              sx={{
                                                  color: page.key === props.navKey ? color.WHITE_COLOR : color.BLACK_COLOR,
                                                  display: 'block',
                                                  fontFamily: font.FONT_FAMILIES.PRIMARY,
                                                  background: page.key === props.navKey ? color.BLACK_COLOR : 'transparent',
                                                  borderRadius: 20,
                                                  padding: '5px 25px',
                                                  margin: 'auto',
                                              }}>
                                              {page.name}
                                          </Button>
                                      ))
                                    : userDropDown()}
                            </Box>
                            {path.includes('user') ? (
                                <Box
                                    sx={{
                                        flexGrow: 1,
                                        display: { xs: 'flex', md: 'none' },
                                        justifyContent: 'flex-start',
                                        width:'fit-content',
                                    }}>
                                    {userDropDown()}
                                </Box>
                            ) : null}
                        </Toolbar>
                    </div>
                </div>
            </AppBar>
        </NavbarStyle>
    );
});

export default NavBar;
