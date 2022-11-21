import axios from 'axios';
// import { SHOW_ARTICLE_NUM } from '../constants/allArticleConstants';
import { HTTP_UNAUTHORIZATION_CODE, INTERNAL_SERVER_ERROR } from '../constants/httpConstants';
import ErrorModel from '../models/errorModel';

class CoreService {
    _url = `${process.env.BASE_API_PATH}/api`;
    _header = {};

    async callService(path, method, data = {}) {
        try {
            let url = this._url + path;
            this._header = {
                'x-api-version': process.env.API_VERSION,

                'Content-Type': 'application/json',
            };
            //await this.refreshToken();
            let result = await axios({
                url: url,
                headers: this._header,
                data: JSON.stringify(data),
                method: method,
            });
            return result;
        } catch (error) {
            console.error('error call Services');
            throw error;
        }
    }

    async testFetchData() {
        try {
            let response = await axios({
                url: `${this._url}/users/getUsers`,
                method: 'get',
                headers: {
                    'x-api-version': '1.0.0',
                    'secret-key': '$2b$10$EzecunNps2N3FALdNpTQcO8Q0Vix5pRxk0aDT4F8LRikb1uhn3IXq',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjYyODBlZDNhZjNlNzM2ZTU3ZDhlZjBkOSIsInVzZXJuYW1lIjoiYWRtaW4iLCJzZWNyZXRLZXkiOiIkMmIkMTAkRXplY3VuTnBzMk4zRkFMZE5wVFFjTzhRMFZpeDVwUnhrMGFEVDRGOExSaWtiMXVobjNJWHEifSwiaWF0IjoxNjUzNzYxMDQ4LCJleHAiOjE2NTM3NjgyNDh9.SD3IxhUMtWxcYO9pkFZVn0WusPzEL34edIGI6z1eOmo',
                },
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    async refreshToken() {
        try {
            let response = await axios.post(`${this._url}/users/refresh-token`, { headers: this._header });
            let result = response.data.result;
            if (result.isExpire) {
                await localStorage.setItem('token', result.token);
                await localStorage.setItem('secret-key', result.secretKey);
                this._header = {
                    'x-api-version': process.env.API_VERSION,
                    'secret-key': result.secretKey,
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${result.token}`,
                };
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async checkTokenExpire(responseError) {
        let response = responseError.response;
        if (HTTP_UNAUTHORIZATION_CODE.includes(response.status)) {
            if (response.status === 403 || (response.status === 401 && response.data.statusMessage === 'UnAuthorization')) {
                await this.refreshToken();
            }
        }
    }

    // async getArticleList6Block() {
    //     try {
    //         let response = await this.callService('/article/getIntroArticle6Block', 'get');
    //         return response.data.result;
    //     } catch (error) {
    //         console.error('ERROR ', error);
    //         let responseError = error.response;
    //         if (responseError.statusCode) {
    //             throw new ErrorModel(error.statusCode, error.statusMessage);
    //         }
    //         throw new ErrorModel(INTERNAL_SERVER_ERROR.code, INTERNAL_SERVER_ERROR.msg);
    //     }
    // }

    async sendDataToLineNotification(data) {
        try {
            let response = await this.callService('/line/pushLine', 'post', data);
            return response.data.result;
        } catch (error) {
            console.error('ERROR ', error);
            let responseError = error.response;
            if (responseError.statusCode) {
                throw new ErrorModel(error.statusCode, error.statusMessage);
            }
            throw new ErrorModel(INTERNAL_SERVER_ERROR.code, INTERNAL_SERVER_ERROR.msg);
        }
    }

    // async getRecommendArticle() {
    //     try {
    //         let response = await this.callService('/article/getIntroArticle4Block', 'get');
    //         return response.data.result;
    //     } catch (error) {
    //         console.error('ERROR ', error);
    //         let responseError = error.response;
    //         if (responseError.statusCode) {
    //             throw new ErrorModel(error.statusCode, error.statusMessage);
    //         }
    //         throw new ErrorModel(INTERNAL_SERVER_ERROR.code, INTERNAL_SERVER_ERROR.msg);
    //     }
    // }

    // async getRecommendArticleDetail(id) {
    //     try {
    //         let body = {
    //             id: parseInt(id),
    //         };
    //         let response = await this.callService('/article/getDetailArticleAndRandom3Articles', 'post', body);
    //         return response.data.result;
    //     } catch (error) {
    //         console.error('ERROR ', error);
    //         let responseError = error.response;
    //         if (responseError.statusCode) {
    //             throw new ErrorModel(error.statusCode, error.statusMessage);
    //         }
    //         throw new ErrorModel(INTERNAL_SERVER_ERROR.code, INTERNAL_SERVER_ERROR.msg);
    //     }
    // }

    async getCategoryData(id = '') {
        try {
            let response = await this.callService('/category/getCategory', 'get');
            return response.data.result;
        } catch (error) {
            console.error('ERROR ', error);
            let responseError = error.response;
            if (responseError.statusCode) {
                throw new ErrorModel(error.statusCode, error.statusMessage);
            }
            throw new ErrorModel(INTERNAL_SERVER_ERROR.code, INTERNAL_SERVER_ERROR.msg);
        }
    }

    // async getArticle(pageNo = 1, pageSize = SHOW_ARTICLE_NUM, id = 0) {
    //     try {
    //         let data = {
    //             pageNo: pageNo,
    //             pageSize: pageSize,
    //             categoryId: id,
    //         };
    //         let response = await this.callService('/article/getArticleByCategory', 'post', data);
    //         return response.data.result;
    //     } catch (error) {
    //         console.error('ERROR ', error);
    //         let responseError = error.response;
    //         if (responseError.statusCode) {
    //             throw new ErrorModel(error.statusCode, error.statusMessage);
    //         }
    //         throw new ErrorModel(INTERNAL_SERVER_ERROR.code, INTERNAL_SERVER_ERROR.msg);
    //     }
    // }

    async getConfigYoutube() {
        try {
            let response = await this.callService('/config/youtube3block', 'get');
            return response.data.result;
        } catch (error) {
            console.error('ERROR ', error);
            let responseError = error.response;
            if (responseError.statusCode) {
                throw new ErrorModel(error.statusCode, error.statusMessage);
            }
            throw new ErrorModel(INTERNAL_SERVER_ERROR.code, INTERNAL_SERVER_ERROR.msg);
        }
    }

    async getUserReview() {
        try {
            let response = await this.callService('/reviews/user', 'get');
            return response.data.result;
        } catch (error) {
            let responseError = error.response;
            if (responseError.statusCode) {
                throw new ErrorModel(error.statusCode, error.statusMessage);
            }
            throw new ErrorModel(INTERNAL_SERVER_ERROR.code, INTERNAL_SERVER_ERROR.msg);
        }
    }

    async getYoutubeReview() {
        try {
            let response = await this.callService('/reviews/youtube', 'get');
            return response.data.result;
        } catch (error) {
            let responseError = error.response;
            if (responseError.statusCode) {
                throw new ErrorModel(error.statusCode, error.statusMessage);
            }
            throw new ErrorModel(INTERNAL_SERVER_ERROR.code, INTERNAL_SERVER_ERROR.msg);
        }
    }
}

export default CoreService;
