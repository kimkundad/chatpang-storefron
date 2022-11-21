import React, { useRef, useState } from 'react';
import IndexContainer from '../components/containers/indexContainer';
import MainLayout from '../components/layouts/mainLayout/mainLayout';
import IndexStyle from './Index/style';
import * as constants from '../constants/indexConstant';
import _ from 'lodash';
import IndexPage2Container from '../components/containers/indexPage2Container';
import IndexPage3Container from '../components/containers/indexPage3Container';
import IndexPage4Container from '../components/containers/indexPage4Container';
import FooterComponent from '../components/shared/footer';
import classNames from 'classnames';

export default function Home() {
    const indexRef = useRef({});
    const mainRef = useRef({});
    const initial = _.reduce(constants.NAV_BAR_KEY, (prev, cur) => {
        let result = { ...prev };
        result[cur.key] = 0;
        _.unset(result, 'name');
        _.unset(result, 'key');
        return result;
    });
    const [scrollTo, setScrollTo] = useState(initial);
    const [componentRef, setComponentRef] = useState(initial);
    const [isShowAllArticle, setShowAllArticle] = useState(false);
    const [isAgreement, setAgreement] = useState(false);
    const [isPolicy, setPolicy] = useState(false);
    const [navHeight, setNavHeight] = useState(64);

    const navHandleClick = (key) => {
        mainRef.current.handdleClickNav(key);
    };

    return (
        <IndexStyle>
            <MainLayout
                navKey="index"
                scrollTo={scrollTo}
                ref={mainRef}
                setAgreement={setAgreement}
                setPolicy={setPolicy}
                componentRef={componentRef}
                setShowArticleDetail={setShowAllArticle}
                isPolicy={isPolicy}
                isAgreement={isAgreement}
                setNavHeight={setNavHeight}
                isShowArticleDetail={isShowAllArticle}>
                <div className={classNames({ 'display-none': isShowAllArticle || isAgreement || isPolicy })}>
                    <IndexContainer handleClick={navHandleClick} ref={indexRef} navHeight={navHeight} />
                    <IndexPage2Container handleClick={() => navHandleClick('about')} navHeight={navHeight} />
                    <IndexPage3Container handleClick={() => navHandleClick('customerReview')} navHeight={navHeight} />
                    <IndexPage4Container handleClick={() => navHandleClick('price')} navHeight={navHeight} setAgreement={setAgreement} setPolicy={setPolicy} />
                </div>
                <FooterComponent />
            </MainLayout>
        </IndexStyle>
    );
}
