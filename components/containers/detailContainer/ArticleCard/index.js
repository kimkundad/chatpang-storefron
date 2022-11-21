import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import CustomCardStyle from './style';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TimerIcon from '@mui/icons-material/Timer';
import color from '../../../../styles/variables/color';
import { useRouter } from 'next/dist/client/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticleDetail, setLoadingOn } from '../../../../redux/indexRedux/action';
import { Grid } from '@mui/material';

function ArticleCard({ children, title, tag, date, timeRead, src = '', articleId = 'invalid' }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [changeHandle, setChangeHandle] = useState(false);
  const articleInfo = useSelector((state) => state.index.constants.articleInfo);

  return (
    <CustomCardStyle
      onClick={() => {
        router.push(`/article/${articleId}`);
      }}>
      <div>
        <Image src={src} />
      </div>
      <div className="text-category">
        <LocalOfferIcon style={{ fontSize: 12, color: color.GOLD_COLOR_1 }} /> {tag}
      </div>
      <Title>{title}</Title>
      <div className="content-article-card">{children}</div>
      <div className="footer">
        <Grid container direction="row" style={{ paddingLeft: 25, paddingRight: 25 }}>
          <Grid container direction="column" item md={6} sm={12} xs={12} lg={6} alignItems="center">
            <Grid container direction="row" alignItems="center">
              <CalendarTodayIcon className="display-flex" style={{ fontSize: 15,alignItems: 'center' }} />
              <span className="display-flex" style={{ fontSize: 12,marginLeft: 5,alignItems: 'center' }}>
                {date}
              </span>
            </Grid>
          </Grid>

          <Grid container direction="column" item md={6} sm={12} xs={12} lg={6} justifyContent="end">
            <Grid container direction="row" alignItems="center" justifyContent="end" justifyItems="center">
              <TimerIcon style={{ fontSize: 15, alignContent: 'end',alignItems:'center' }} />
              <span style={{ fontSize: 12,marginLeft: 5,alignItems:'center' }}>{timeRead}</span>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </CustomCardStyle>
  );
}

function Title({ children }) {
  return <div className="title-category">{children}</div>;
}

export default ArticleCard;
