import { Fragment } from 'react';
// import { store, wrapper } from '../redux/stores';
import GlobalStyle from '../styles/global';
import Head from 'next/head';
import { createTheme, ThemeProvider } from '@mui/material';
import color from '../styles/variables/color';
import useWindowSize from '../modules/windowSize';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.css'

import { AppContextProvider } from '../context/AppContextProvider';

function MyApp({ Component, pageProps }) {
    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: color.PRIMARY,
                darker: '#053e85',
            },
            neutral: {
                main: '#64748B',
                contrastText: '#fff',
            },
            dark: {
                main: color.GRAY_COLOR_2,
            },
        },
    });
    let size = useWindowSize();
    return (
        <Fragment>
            <GlobalStyle screenWidth={size.width} screenHeight={size.height} />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, shrink-to-fit=no"></meta>
                {/* Font */}
                <link rel="stylesheet" type="text/css" href="/font.css"></link>
                <link rel="shortcut icon" href="images/logo1.ico" />
                <title>Chat Pang ผู้ช่วยตอบแชทเก่ง!</title>
            </Head>
            <AppContextProvider>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </AppContextProvider>
        </Fragment>
    );
}

export default MyApp;
