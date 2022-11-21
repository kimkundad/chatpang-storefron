import GlobalReducer from './globalRedux/reducer';
import IndexRedux from './indexRedux/reducer';
const { combineReducers } = require('redux');

const rootReducers = combineReducers({
  global: GlobalReducer,
  index: IndexRedux,
});

export default rootReducers;
