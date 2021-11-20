import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
const { types, actions: {failure, loadDataSuccess, tickClock} } = require('./index')


function* runClockSaga() {
  yield take(types.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}

function* loadDataSaga() {
  try {
    console.log('saga: loadDataSaga')
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    // console.log('data', data)
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* allSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(types.LOAD_DATA, loadDataSaga),
  ])
}

export default allSaga;