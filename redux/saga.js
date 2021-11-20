
import { all, call } from 'redux-saga/effects';
import example from './example/saga';

function* rootSaga () {
  yield all([
    call(example)
  ])
}

export default rootSaga
