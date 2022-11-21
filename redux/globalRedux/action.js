import * as actionType from './actionType';

export const setLoadingOn = () => ({
  type: actionType.SET_LOADING_ON,
});

export const setLoadingOff = () => ({
  type: actionType.SET_LOADING_OFF,
});

export const callApiSuccess = () => ({
  type: actionType.CALL_API_SUCCESS,
});

export const callApiFail = (error) => ({
  type: actionType.CALL_API_FAIL,
  payload: {
    error,
  },
});

export const closeAlert = () => ({
  type: actionType.CLOSE_ALERT,
});

export const setNavKey = (key) => ({
  type: actionType.SET_NAV_KEY,
  payload: {
    key: key,
  },
});

export const clearNavKey = () => ({
  type: actionType.CLEAR_NAV_KEY,
});
