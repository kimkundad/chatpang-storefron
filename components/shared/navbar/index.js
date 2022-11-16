import React, { useEffect, useState } from 'react';
import NavbarStyle from './style';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import color from '../../../styles/variables/color';
import Image from 'react-bootstrap/Image';
import font from '../../../styles/variables/font';
import dimension from '../../../styles/variables/dimension';
import navbar from '../../../styles/variables/navbar';
import * as constants from '../../../constants/indexConstant';
import { useRouter } from 'next/dist/client/router';
import useUser from '../../../Hooks/useUser';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
// import { Dropdown, Menu as MenuAnt } from 'antd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
const NavBar = React.forwardRef((props, ref) => {
    const pages = constants.NAV_BAR_KEY;
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [activeKey, setActiveKey] = useState('');
    const [anchorElUser, setAnchorElUser] = React.useState(null);
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

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const settings = [
        { title: 'หน้าหลัก', link: '/user/manage' },
        { title: 'แก้ไขข้อมูลส่วนตัว', link: `/user/edit/${user?.user?.id}` },
        // { title: 'จัดการเพจ', link: '/user/info/pagemanagement' },
        { title: 'จัดการบัญชีและสมาชิก', link: '/user/info/accountmanagement' },
        { title: 'ติดต่อเรา', link: '/contact' },
        { title: 'ออกจากระบบ', link: '' },
    ];

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
                                <Image onClick={() => path.includes('user') ? handleClick('index', '/user/manage') : handleClick('index', '/')} component="div" src="/images/logo.png" className="image-logo" />
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
                                <Image onClick={() => path.includes('user') ? handleClick('index', '/user/manage') : handleClick('index', '/')} component="div" src="/images/logo.png" className="image-logo-2" />
                            </Typography>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: 'none', md: 'flex' },
                                    justifyContent: 'flex-end',
                                    width: 'fit-content',
                                }}>
                                {!path.includes('user') && !path.includes('register') ? (
                                    pages.map((page) => (
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
                                ) : user.isLogin ? (
                                    <div>
                                        <IconButton
                                            size="large"
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={handleOpenUserMenu}
                                            color="inherit"
                                            sx={{
                                                fontSize: 'min(1rem, 2vw)',
                                            }}>
                                            <Typography textAlign="center">{user?.user?.name !== undefined ? user?.user?.name : 'User'}</Typography>
                                            <ExpandMoreIcon />
                                        </IconButton>
                                        <Menu
                                            sx={{ mt: '45px' }}
                                            id="menu-appbar"
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorElUser)}
                                            onClose={handleCloseUserMenu}>
                                            {settings.map((setting, index) => (
                                                <MenuItem
                                                    key={index}
                                                    onClick={() => {
                                                        setting.link.length === 0 ? onLogOut() : !setting.link.includes("contact") ? router.push(setting.link) : window.open(setting.link);
                                                    }}>
                                                    <Typography textAlign="center">{setting.title}</Typography>
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </div>
                                ) : (
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
                                )}
                            </Box>
                            {path.includes('user') ? (
                                <Box
                                    sx={{
                                        flexGrow: 1,
                                        display: { xs: 'flex', md: 'none' },
                                        justifyContent: 'flex-end',
                                    }}>
                                    {user.isLogin ? (
                                        <div>
                                            <IconButton
                                                size="large"
                                                aria-label="account of current user"
                                                aria-controls="menu-appbar"
                                                aria-haspopup="true"
                                                onClick={handleOpenUserMenu}
                                                color="inherit"
                                                sx={{
                                                    fontSize: 'min(1rem, 2vw)',
                                                }}>
                                                <PersonIcon />
                                                <ExpandMoreIcon />
                                            </IconButton>
                                            <Menu
                                                sx={{ mt: '45px' }}
                                                id="menu-appbar"
                                                anchorEl={anchorElUser}
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                keepMounted
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                open={Boolean(anchorElUser)}
                                                onClose={handleCloseUserMenu}>
                                                {settings.map((setting, index) => (
                                                    <MenuItem
                                                        key={index}
                                                        onClick={() => {
                                                            setting.link.length === 0 ? onLogOut() : !setting.link.includes("contact") ? router.push(setting.link) : window.open(setting.link);
                                                        }}>
                                                        <Typography textAlign="center">{setting.title}</Typography>
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </div>
                                    ) : (
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
                                    )}
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
