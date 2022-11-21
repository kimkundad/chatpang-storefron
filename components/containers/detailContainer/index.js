import React, { useEffect, useMemo, useRef, useState } from 'react';
import DetailContainerStyle from './style';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TimerIcon from '@mui/icons-material/Timer';
import _ from 'lodash';
import { Image } from 'react-bootstrap';
import Editor from '../../shared/editor/editor';
import { Container, Grid, Typography } from '@mui/material';
import * as constants from '../../../constants/detailConstants';
import ArticleCard from './ArticleCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticleDetail, setLoadingOff, setLoadingOn } from '../../../redux/indexRedux/action';
import DialogLoading from '../../shared/loadingDialog';

const DetailContainer = React.forwardRef((props, ref) => {
  let data = props.data;
  let articleId = props.articleId;
  const articleInfo = useSelector((state) => state.index.constants.articleInfo);
  const con = useSelector((state) => state.index.constants);
  const dispatch = useDispatch();
  const callApiGetDetailArticle = async () => {
    dispatch(setLoadingOn());
    await dispatch(fetchArticleDetail(articleId));
    dispatch(setLoadingOff());
  };

  const [imagePath, setImagePath] = useState(articleInfo.src);

  useEffect(() => {
    callApiGetDetailArticle();
    console.log('articleId:', articleId);
    console.log('articleId:', articleInfo.src);
    setImagePath(articleInfo.src);
    return {};
  }, [articleId, articleInfo.src]);
  return (
    <DetailContainerStyle>
      <DialogLoading open={articleInfo.articleId !== parseInt(articleId)} />
      <Container maxWidth="lg" className="detail-wrapper">
        <div className="title">
          <h3>{_.get(articleInfo, 'header', '')}</h3>
        </div>
        <div className="flex flex-center justify-center">
          <div className="flex flex-center justify-center">
            <CalendarTodayIcon style={{ fontSize: 15 }} />
            <span style={{ fontSize: 14, marginLeft: 5 }}>{_.get(articleInfo, 'date', '')}</span>
          </div>
          <div className="flex flex-center justify-center ml-2">
            <TimerIcon style={{ fontSize: 15 }} />
            <span style={{ fontSize: 14, marginLeft: 5 }}>{_.get(articleInfo, 'timeRead', '')}</span>
          </div>
        </div>
        <div className="flex flex-center justify-center mt-2">{articleInfo.src && <Image className="image-cover" src={articleInfo.src} />}</div>

        <div className="content-detail">
          <Editor data={_.get(articleInfo, 'content', '')} readOnly />
        </div>

        <div className="random-article">
          <Image className="random-article-icon" src="/images/logo/8.png" />
          <div className="random-article-text">บทความอื่นที่หน้าสนใจ</div>
        </div>

        <Grid container direction="row" className="random-article-list-block" columnSpacing={2} rowSpacing={2} alignContent="center" alignItems={'start'}>
          {_.get(con, 'randomArticle', []).map((item) => (
            <Grid item container direction="column" xs={12} sm={4} md={6} lg={4} xl={4} key={`LIST_FUNCTION_${item.key}`}>
              <ArticleCard articleId={item.articleId} title={item.header} src={item.src} tag={item.categoryName} date={item.date} timeRead={item.timeRead}></ArticleCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </DetailContainerStyle>
  );
});

export default DetailContainer;
