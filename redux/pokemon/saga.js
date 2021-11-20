import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { pokemonTypes, pokemonActions } from './index'


function* on_get_pokemon() {
  try {
    // console.log('saga: on_get_pokemon')
    const res = yield fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    const data = yield res.json()
    // console.log('pokemon data', data)
    yield put(pokemonActions.get_success(data.results))
  } catch (err) {
    yield put(pokemonActions.get_failed(err))
  }
}
function* get_pokemon() {
  yield takeLatest(pokemonTypes.GET_START, on_get_pokemon)
}

function* allSaga() {
  yield all([
    call(get_pokemon),
  ])
}

export default allSaga;