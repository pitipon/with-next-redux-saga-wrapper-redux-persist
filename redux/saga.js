
import { all, call } from 'redux-saga/effects';
import exampleSaga from './example/saga';
import pokemonSaga from './pokemon/saga'

function* rootSaga () {
  yield all([
    call(exampleSaga),
    call(pokemonSaga)
  ])
}

export default rootSaga
