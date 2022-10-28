import * as actionType from './actionType';
import state from './store';
import initialState from './store';

const GlobalReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case actionType.SET_LOADING_ON: {
      return setLoading(state, { status: true });
    }
    case actionType.SET_LOADING_OFF: {
      return setLoading(state, { status: false });
    }
    case actionType.CALL_API_SUCCESS: {
      return callApiSuccess(state, { open: true, success: true });
    }
    case actionType.CALL_API_FAIL: {
      return callApiFail(state, { open: true, success: false, err: action.payload.error });
    }
    case actionType.CLOSE_ALERT: {
      return closeAlert(state);
    }
    case actionType.SET_NAV_KEY: {
      return {
        ...state,
        constants: {
          ...state.constants,
          navKey: action.payload.key,
        },
      };
    }
    case actionType.CLEAR_NAV_KEY: {
      return {
        ...state,
        constants: {
          ...state.constants,
          navKey: '',
        },
      };
    }
    default: {
      return { ...state };
    }
  }
};
export default GlobalReducer;

const setLoading = (state, action) => {
  return {
    ...state,
    options: {
      ...state.options,
      isLoading: action.status,
    },
  };
};

const callApiSuccess = (state, action) => {
  return {
    ...state,
    options: {
      ...state.options,
      isLoading: false,
      alert: {
        ...state.alert,
        open: action.open,
        success: action.success,
        message: '',
      },
    },
  };
};

const callApiFail = (state, action) => {
  return {
    ...state,
    options: {
      ...state.options,
      isLoading: false,
      alert: {
        ...state.alert,
        open: action.open,
        success: action.success,
        message: action.err.msg,
        code: action.err.code,
      },
    },
  };
};

const closeAlert = (state) => {
  return {
    ...state,
    options: {
      ...state.options,
      alert: {
        ...state.options.alert,
        open: false,
        message: '',
      },
    },
  };
};
