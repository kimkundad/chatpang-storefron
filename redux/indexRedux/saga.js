import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import CoreService from '../../services/coreService';
import { callApiFail } from '../globalRedux/action';
import {
    // getArticleWithPaginate,
    getConfigYoutubeAction,
    // gettingArticle6BlockSuccess,
    // gettingArticleDetailSuccess,
    gettingCategoryData,
    // gettingRecommendArticleSuccess,
    getUserReviewAction,
    getYoutubeReviewAction,
    setLoadingOff,
    setLoadingOn,
} from './action';
import * as actionType from './actionType';
let service = new CoreService();
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchArticle(action) {
//     try {
//         yield put(setLoadingOn());
//         let data = yield service.getArticleList6Block();
//         yield put(gettingArticle6BlockSuccess(data));
//         yield put(setLoadingOff());
//     } catch (error) {
//         yield put(setLoadingOff());
//         console.error('ERROR', error);
//         yield put(callApiFail({ code: error.code, msg: error.msg }));
//     }
// }

// function* fetchRecommendArticle(action) {
//     try {
//         yield put(setLoadingOn());
//         let data = yield service.getRecommendArticle();
//         yield put(gettingRecommendArticleSuccess(data));
//         yield put(setLoadingOff());
//     } catch (error) {
//         yield put(setLoadingOff());
//         console.error('ERROR', error);
//         //yield put(callApiFail({ code: error.code, msg: error.msg }));
//     }
// }

// function* fetchDetailArticle(action) {
//     try {
//         yield put(setLoadingOn());
//         let data = yield service.getRecommendArticleDetail(action.payload.articleId);
//         yield put(gettingArticleDetailSuccess(data));
//         yield put(setLoadingOff());
//     } catch (error) {
//         console.error('ERROR', error);
//         yield put(setLoadingOff());
//         //yield put(callApiFail({ code: error.code, msg: error.msg }));
//     }
// }

function* fetchCategoryData(action) {
    try {
        yield put(setLoadingOn());
        let data = yield service.getCategoryData(action.payload.categoryId);
        yield put(gettingCategoryData(data));
        yield put(setLoadingOff());
    } catch (error) {
        yield put(setLoadingOff());
        console.error('ERROR', error);
        //yield put(callApiFail({ code: error.code, msg: error.msg }));
    }
}

// function* fetchArticleWithPaginate(action) {
//     try {
//         yield put(setLoadingOn());
//         let data = yield service.getArticle(action.payload.data.pageNo, action.payload.data.pageSize, action.payload.data.categoryId);
//         yield put(getArticleWithPaginate(data));
//         yield put(setLoadingOff());
//     } catch (error) {
//         console.error('ERROR', error);
//         yield put(setLoadingOff());
//         //yield put(callApiFail({ code: error.code, msg: error.msg }));
//     }
// }

function* fetchGetConfigYoutube(action) {
    try {
        yield put(setLoadingOn());
        let data = yield service.getConfigYoutube();
        yield put(getConfigYoutubeAction(data));
        yield put(setLoadingOff());
    } catch (error) {
        console.error('ERROR', error);
        yield put(setLoadingOff());
        //yield put(callApiFail({ code: error.code, msg: error.msg }));
    }
}

function* fetchUserReview(action) {
    try {
        yield put(setLoadingOn());
        let data = yield service.getUserReview();
        yield put(getUserReviewAction(data));
        yield put(setLoadingOff());
    } catch (error) {
        console.error('ERROR', error);
        yield put(setLoadingOff());
        //yield put(callApiFail({ code: error.code, msg: error.msg }));
    }
}

function* fetchYoutubeReview(action) {
    try {
        yield put(setLoadingOn());
        let data = yield service.getYoutubeReview();
        yield put(getYoutubeReviewAction(data));
        yield put(setLoadingOff());
    } catch (error) {
        console.error('ERROR', error);
        yield put(setLoadingOff());
        //yield put(callApiFail({ code: error.code, msg: error.msg }));
    }
}

function* indexSaga() {
    // yield takeEvery(actionType.FETCHING_ARTICLE_DATA_LIST, fetchArticle);
    // yield takeEvery(actionType.FETCHING_RECOMMEND_DATA, fetchRecommendArticle);
    // yield takeEvery(actionType.FETCHING_ARTICLE_DETAIL_DATA, fetchDetailArticle);
    yield takeEvery(actionType.FETCHING_CATEGORY_DATA, fetchCategoryData);
    // yield takeEvery(actionType.FETCHING_ARTICLE_DATA_PAGINATE, fetchArticleWithPaginate);
    yield takeEvery(actionType.FETCHING_GET_CONFIG_YOUTUBE, fetchGetConfigYoutube);
    yield takeEvery(actionType.FETCHING_USER_REVIEW, fetchUserReview);
    yield takeEvery(actionType.FETCHING_YOUTUBE_REVIEW, fetchYoutubeReview);
}

export default indexSaga;
