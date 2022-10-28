import CoreService from '../../services/coreService';
import * as actionType from './actionType';
import * as globalActionType from '../globalRedux/actionType';
import { callApiFail } from '../globalRedux/action';
// import { SHOW_ARTICLE_NUM } from '../../constants/allArticleConstants';

// export const gettingArticle6BlockSuccess = (data) => ({
//     type: actionType.FETCH_ARTICLE_DATA_LIST,
//     payload: {
//         data,
//     },
// });
// export const getArticleList = () => {
//     return {
//         type: actionType.FETCHING_ARTICLE_DATA_LIST,
//     };
// };

export const setLoadingOn = () => ({
    type: actionType.SET_LOADING_ON,
});

export const setLoadingOff = () => ({
    type: actionType.SET_LOADING_OFF,
});

export const fetchRecommendData = () => ({
    type: actionType.FETCHING_RECOMMEND_DATA,
});

// export const gettingRecommendArticleSuccess = (data) => ({
//     type: actionType.FETCH_RECOMMEND_DATA,
//     payload: {
//         data,
//     },
// });

// export const fetchArticleDetail = (articleId) => ({
//     type: actionType.FETCHING_ARTICLE_DETAIL_DATA,
//     payload: {
//         articleId,
//     },
// });

// export const gettingArticleDetailSuccess = (data) => ({
//     type: actionType.FETCH_ARTICLE_DETAIL_DATA,
//     payload: {
//         data,
//     },
// });

// export const fetchingCategoryData = (categoryId = '') => ({
//     type: actionType.FETCHING_CATEGORY_DATA,
//     payload: {
//         categoryId,
//     },
// });

// export const gettingCategoryData = (data) => ({
//     type: actionType.GET_CATEGORY_DATA_SUCCESS,
//     payload: {
//         data,
//     },
// });

// export const fetchingArticlePaginate = (pageNo = 1, pageSize = SHOW_ARTICLE_NUM, categoryId = 0) => ({
//     type: actionType.FETCHING_ARTICLE_DATA_PAGINATE,
//     payload: {
//         data: {
//             pageNo,
//             pageSize,
//             categoryId,
//         },
//     },
// });

// export const getArticleWithPaginate = (data) => ({
//     type: actionType.GET_ARTICLE_DATA_PAGINATE,
//     payload: {
//         data: data,
//     },
// });

// export const fetchGetConfigYoutubeAction = () => ({
//     type: actionType.FETCHING_GET_CONFIG_YOUTUBE,
// });
// export const fetchUserReviewAction = () => ({
//     type: actionType.FETCHING_USER_REVIEW,
// });
// export const fetchYoutubeReviewAction = () => ({
//     type: actionType.FETCHING_YOUTUBE_REVIEW,
// });

// export const getConfigYoutubeAction = (data) => ({
//     type: actionType.GETTING_GET_CONFIG_YOUTUBE,
//     payload: {
//         data,
//     },
// });
// export const getUserReviewAction = (data) => ({
//     type: actionType.GETTING_USER_REVIEW,
//     payload: {
//         data,
//     },
// });
// export const getYoutubeReviewAction = (data) => ({
//     type: actionType.GETTING_YOUTUBE_REVIEW,
//     payload: {
//         data,
//     },
// });
