import { Button, Grid, Paper } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import Carousel from 'react-elastic-carousel';
import ReviewCarouselStyle, { Item, ReviewCardStyle, VideoCardStyle } from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames';
import * as constants from '../../../../constants/customerReviewConstant';
import StarIcon from '@mui/icons-material/Star';
import CustomCard from '../CustomCard';
import VideoCarouselStyle from './style';
import useWindowSize from '../../../../modules/windowSize';

export default function VideoCarousel({data}) {
    let carousel = useRef({});
    const size = useWindowSize();
    const [show, setShow] = useState(3);
    useEffect(() => {
        //console.log(size);
        if (size.width <= 1200) {
            setShow(1);
        } else {
            setShow(3);
        }
    }, [size]);
    const breakPoints = [
        { width: 1, itemsToShow: 3 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 1200, itemsToShow: 3 },
    ];
    const [items, setItems] = useState(constants.ITEM_CAROUSEL);
    const [selectItem, setSelectItem] = useState(0);
    const goto = (event) => {
        let index = event.index;
        if (index === items.length) {
            setSelectItem(0);
            carousel.current.goTo(0);
        } else if (index < 0) {
            setSelectItem(items.length);
            carousel.current.goTo(items.length);
        } else {
            setSelectItem(index);
            carousel.current.goTo(index);
        }
    };

    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer =
            type === 'PREV' ? <ArrowBackIosIcon style={{ fontSize: { xs: 25, md: 50, lg: 50 } }} /> : <ArrowForwardIosIcon style={{ fontSize: { xs: 25, md: 50, lg: 50 } }} />;
        return (
            <Button
                onClick={() => {
                    //console.log(isEdge);
                    if (isEdge && type === 'NEXT') {
                        carousel.current.goTo(0);
                    } else if (isEdge && type === 'PREV') {
                        carousel.current.goTo(items.length - 1);
                    } else {
                        onClick();
                    }
                }}
                className="arrow-carousel">
                {pointer}
            </Button>
        );
    };

    const customPaginate = ({ pages, activePage, onClick }) => {
        return (
            <Grid container direction="row" textAlign="center" display="block">
                {pages.map((page) => {
                    const isActivePage = activePage === page;

                    if (show === 3) return null;
                    if (show === 1) return <div onClick={() => onClick(page)} key={page} className={classNames('paginate', { active: isActivePage })}></div>;
                })}
            </Grid>
        );
    };
    return (
        <VideoCarouselStyle>
            <div className="carousel-wrapper">
                <Carousel
                    ref={carousel}
                    renderArrow={myArrow}
                    renderPagination={customPaginate}
                    //breakPoints={breakPoints}
                    itemsToShow={show}
                    disableArrowsOnEnd={false}
                    autoPlaySpeed={3000}
                    enableAutoPlay={true}>
                    {data.map((item, index) => (
                        <Item key={`${index}_video_carousel`}>
                            <iframe
                                width="100%"
                                height="100%"
                                src={item.video_url.replace('watch?v=','embed/')}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="video-yt"
                                style={{ marginLeft: 'auto', marginRight: 'auto' }}></iframe>
                        </Item>
                    ))}
                </Carousel>
            </div>
        </VideoCarouselStyle>
    );
}

export function ReviewCard({ children }) {
    return <VideoCardStyle>{children}</VideoCardStyle>;
}
