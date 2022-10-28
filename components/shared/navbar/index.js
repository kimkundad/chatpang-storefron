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

const NavBar = React.forwardRef((props, ref) => {
    const pages = constants.NAV_BAR_KEY;
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [activeKey, setActiveKey] = useState('');
    const router = useRouter();
    // console.log(router.pathname);
    const path = router.pathname;
    console.log(path.includes('user'));
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleClick = (name, link) => {
        // props.handleClick(name);
        router.replace(link);
        setActiveKey(name);
        setAnchorElNav(null);
    };

    return (
        <NavbarStyle navbarHeight={ref.current.offsetHeight} screenWidth={props.screenWidth}>
            <AppBar position="fixed" className="navbar" ref={ref}>
                <div className="app-container">
                    <div className="nav-padding">
                        <Toolbar disableGutters sx={{
                          display: { xs: 'none', md: 'flex' },
                          justifyContent:'space-between',
                        }}>
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

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, position: 'absolute' }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit">
                                    <MenuIcon />
                                </IconButton>
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
                        </Toolbar>
                    </div>
                </div>
            </AppBar>
        </NavbarStyle>
    );
});

export default NavBar;
