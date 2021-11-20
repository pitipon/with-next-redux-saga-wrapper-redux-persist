import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from './sync_storage';

import counterReducer from './counter/reducer'
import {
  reducer as exampleReducer,
  name as exampleName
} from './example'

import {
  reducer as pokemonReducer,
  name as pokemonName
} from './pokemon'


/////// Setup Root for overall persist config /////
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: [''] // whitelist in root key
}

////// Setup each reducer config for persist //////
const counterPersistConfig = {
  key: 'counter',
  storage: storage,
  whitelist: ['counter'] // whitelist counter in counter reducer -> counter: {counter: 0}
}

const examplePersistConfig = {
    key: exampleName,
    storage: storage,
    whitelist: ['count'] // whitelist count in example reducer -> example: {count:0}
}

////// Add new reducer here .. you can add with or without persistReducer /////
const rootReducer = combineReducers({
  counter: persistReducer(counterPersistConfig, counterReducer),
  [exampleName]: persistReducer(examplePersistConfig, exampleReducer),
  [pokemonName]: pokemonReducer
  // example: exampleReducer,         // you can apply reducer without persistant
})

export default persistReducer(rootPersistConfig, rootReducer)