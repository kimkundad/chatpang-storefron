import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import MainLayoutStyle from './style';
import Navbar from '../../shared/navbar';
import useWindowSize from '../../../modules/windowSize';
import AlertModal from '../../shared/AlertModal';
import { useDispatch, useSelector } from 'react-redux';
import { clearNavKey, closeAlert, setNavKey } from '../../../redux/globalRedux/action';
import DialogLoading from '../../shared/loadingDialog';
import { setLoadingOff, setLoadingOn } from '../../../redux/indexRedux/action';
const MainLayout = React.forwardRef(
  (
    { children, scrollTo, componentRef, setNavHeight, setShowArticleDetail, isShowArticleDetail, isAgreement, setAgreement, isPolicy, setPolicy, routeToLanding, navKey, ...props },
    ref
  ) => {
    const navRef = useRef({});
    const mainRef = useRef({});
    const contentRef = useRef({});
    const [navbarHeight, setNavbarHeight] = useState(64);
    const [activeTab, setActiveTab] = useState('');
    const [clickName, setClickName] = useState('');
    const [mainHeight, setMainHeight] = useState(null);
    const size = useWindowSize();
    

    useImperativeHandle(ref, () => ({
      contentRef: contentRef.current,
      //handdleClickNav: handleClick,
    }));

    useEffect(() => {
      setNavbarHeight(navRef.current.offsetHeight);
      if (setNavHeight) {
        setNavHeight(navRef.current.offsetHeight);
      }
      setMainHeight(mainRef.current.clientHeight);
    }, [navRef, mainRef, navRef.current.offsetHeight, mainRef.current.clientHeight, size, contentRef.current.scrollTop, clickName, navKey, activeTab]);
    return (
      <MainLayoutStyle navbarHeight={navbarHeight} mainHeight={mainHeight} ref={ref}>
        {/* <DialogLoading open={indexIsLoading} /> */}
        <div className="main" ref={mainRef}>
          <Navbar ref={navRef} navbarHeight={navbarHeight} navKey={navKey} screenWidth={size.width} /*handleClick={handleClick}*/ keyActiveTab={activeTab} />
          <div
            className="content"
            ref={contentRef}
          >
            {children}
          </div>
        </div>
      </MainLayoutStyle>
    );
  }
);
export default MainLayout;
