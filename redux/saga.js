import { all } from 'redux-saga/effects';
import globalSaga from './globalRedux/saga';
import indexSaga from './indexRedux/saga';

export default function* rootSaga() {
  yield all([globalSaga(), indexSaga()]);
  // code after all-effect
}
