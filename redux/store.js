import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootSaga  from './Saga';
import persistedReducer from './persistedReducer';



// BINDING MIDDLEWARE
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore = ({ isServer }) => {
	const sagaMiddleware = createSagaMiddleware();
	let store
  if (isServer) {
    //If it's on server side, create a store
    store = createStore(rootReducer, {}, bindMiddleware([sagaMiddleware]));
  } else {
    //If it's on client side, create a store which will persist
    const { persistStore } = require('redux-persist');

    store = createStore(persistedReducer, bindMiddleware([sagaMiddleware]));

    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

  }

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

// Export the wrapper & wrap the pages/_app.js with this wrapper only
export const wrapper = createWrapper(makeStore);
