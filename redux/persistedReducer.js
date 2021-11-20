import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from './sync_storage';

import counterReducer from './counter/reducer'
import {
  reducer as exampleReducer,
  name as exampleName
} from './example'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: [''] // whitelist in root key
}

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

const rootReducer = combineReducers({
  counter: persistReducer(counterPersistConfig, counterReducer),
  [exampleName]: persistReducer(examplePersistConfig, exampleReducer),
  // example: exampleReducer,         // you can apply reducer without persistant
})

export default persistReducer(rootPersistConfig, rootReducer)