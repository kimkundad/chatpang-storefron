import { getThaiDate } from '../../modules/dateUtils';
import * as actionType from './actionType';
import initialState from './store';

const IndexRedux = (state = { ...initialState }, action) => {
    switch (action.type) {
        // case actionType.FETCH_ARTICLE_DATA_LIST: {
        //     return getArticleDataList(state, action);
        // }
        case actionType.SET_LOADING_ON: {
            return setLoading(state, { status: true });
        }
        case actionType.SET_LOADING_OFF: {
            return setLoading(state, { status: false });
        }
        case actionType.FETCH_RECOMMEND_DATA: {
            return fetchRecommendData(state, action);
        }
        // case actionType.FETCH_ARTICLE_DETAIL_DATA: {
        //     return getDetailArticleDataSuccess(state, action);
        // }
        case actionType.GET_CATEGORY_DATA_SUCCESS: {
            return getCategoryDataSuccessReducer(state, action);
        }
        // case actionType.GET_ARTICLE_DATA_PAGINATE: {
        //     return getDataArticlePaginate(state, action);
        // }
        case actionType.GETTING_GET_CONFIG_YOUTUBE: {
            return getDataConfigYoutubeSuccess(state, action);
        }
        case actionType.GETTING_USER_REVIEW: {
            return getUserReviewSuccess(state, action);
        }
        case actionType.GETTING_YOUTUBE_REVIEW: {
            return getUserYoutubeSuccess(state, action);
        }
        default: {
            return { ...state };
        }
    }
};
export default IndexRedux;

const setLoading = (state, action) => {
    return {
        ...state,
        options: {
            ...state.options,
            isLoading: action.status,
        },
    };
};

// const getArticleDataList = (state, action) => {
//     let data = article6BlockMapper(action.payload.data);
//     return {
//         ...state,
//         constants: {
//             ...state.constants,
//             articleList: data,
//         },
//     };
// };

// const article6BlockMapper = (data) => {
//     return data.map((item, index) => {
//         return {
//             key: `key_${index + 1}_${item.articleId}`,
//             articleId: item.articleId,
//             header: item.title,
//             category: item.categoryName,
//             date: `โพสต์เมื่อ  ${getThaiDate(item.date)}`,
//             timeRead: `ใช้เวลาอ่านประมาณ ${item.duration} นาที`,
//             src: item.imagePath,
//         };
//     });
// };

const fetchRecommendData = (state, action) => {
    let dataMapper = recommendDataMapper(action.payload.data);
    return {
        ...state,
        constants: {
            ...state.constants,
            recommendArticle: dataMapper,
        },
    };
};

const recommendDataMapper = (data) => {
    return data.map((item, index) => {
        return {
            key: `key_${index + 1}_${item.articleId}`,
            articleId: item.articleId,
            header: item.title,
            categoryId: item.categoryId,
            categoryName: item.categoryName,
            content: item.content,
            date: `โพสต์เมื่อ  ${getThaiDate(item.date)}`,
            timeRead: `ใช้เวลาอ่านประมาณ ${item.duration} นาที`,
            src: `${item.imagePath}`,
        };
    });
};

// const getDetailArticleDataSuccess = (state, action) => {
//     let dataMapper = detailArticleDataMapper(action.payload.data);
//     let dataMapper2 = detailArticleDataMapperRandom(action.payload.data);
//     return {
//         ...state,
//         constants: {
//             ...state.constants,
//             articleInfo: dataMapper,
//             randomArticle: dataMapper2,
//         },
//     };
// };

// const detailArticleDataMapper = (data) => {
//     let item = data.resGetDetailArticle;
//     return {
//         key: `key_details_${item.articleId}`,
//         articleId: item.articleId,
//         header: item.title,
//         categoryId: item.categoryId,
//         categoryName: item.categoryName,
//         content: item.content,
//         date: `โพสต์เมื่อ  ${getThaiDate(item.date)}`,
//         timeRead: `ใช้เวลาอ่านประมาณ ${item.duration} นาที`,
//         src: `${item.imagePath}`,
//     };
// };

// const detailArticleDataMapperRandom = (data) => {
//     let lists = data.data;
//     return lists.map((item, index) => ({
//         key: `key_detail_Random_${index + 1}_${item.articleId}`,
//         articleId: item.articleId,
//         header: item.title,
//         categoryId: item.categoryId,
//         categoryName: item.categoryName,
//         content: item.content,
//         date: `โพสต์เมื่อ  ${getThaiDate(item.date)}`,
//         timeRead: `ใช้เวลาอ่านประมาณ ${item.duration} นาที`,
//         src: item.imagePath,
//     }));
// };

const getCategoryDataSuccessReducer = (state, action) => {
    let dataMapper = categoryDataMapper(action.payload.data);
    return {
        ...state,
        options: {
            ...state.options,
            isLoading: false,
        },
        constants: {
            ...state.constants,
            category: dataMapper,
        },
    };
};

const categoryDataMapper = (data) => {
    return data.map((item) => ({
        id: item.id,
        name: item.name,
    }));
};

// const getDataArticlePaginate = (state, action) => {
//     let dataMapper = mapDataArticlePaginate(action.payload.data);
//     return {
//         ...state,
//         options: {
//             ...state.options,
//             isLoading: false,
//         },
//         constants: {
//             ...state.constants,
//             allArticleList: dataMapper,
//         },
//     };
// };

// const mapDataArticlePaginate = (data) => {
//     return {
//         activePage: data.page,
//         totalPage: data.totalPage,
//         totalRecord: data.totalRecord,
//         data: data.data.map((item) => ({
//             key: `key_article_all_${item.articleId}`,
//             articleId: item.articleId,
//             header: item.title,
//             categoryId: item.categoryId,
//             categoryName: item.categoryName,
//             content: item.content,
//             date: `โพสต์เมื่อ  ${getThaiDate(item.date)}`,
//             timeRead: `ใช้เวลาอ่านประมาณ ${item.duration} นาที`,
//             src: `${item.imagePath}`,
//         })),
//     };
// };

const getDataConfigYoutubeSuccess = (state, action) => {
    let data = action.payload.data;
    return {
        ...state,
        options: {
            ...state.options,
            isLoading: false,
        },
        constants: {
            ...state.constants,
            configYoutube: {
                block1: data.block1,
                block2: data.block2,
                block3: data.block3,
            },
        },
    };
};

const getUserReviewSuccess = (state, action) => {
    let data = action.payload.data;
    // while (data.length <= 3) {
    //     data = [...data, ...data];
    // }
    return {
        ...state,
        options: {
            ...state.options,
            isLoading: false,
        },
        constants: {
            ...state.constants,
            userReview: data.map((item) => ({
                key: item._id,
                src: item.imagePath,
                name: item.name,
                content: item.content,
                score: item.score,
            })),
        },
    };
};

const getUserYoutubeSuccess = (state, action) => {
    let data = action.payload.data;
    // while (data.length <= 3) {
    //     data = [...data, ...data];
    // }
    return {
        ...state,
        options: {
            ...state.options,
            isLoading: false,
        },
        constants: {
            ...state.constants,
            youtubeReview: data.map((item) => ({
                key: item._id,
                video: item.url,
            })),
        },
    };
};
