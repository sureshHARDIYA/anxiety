import { createStore, applyMiddleware, compose } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistCombineReducers } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import immutableTransform from 'redux-persist-transform-immutable';

import reducers from '@src/reducers';

const storeApp = () => {
  const persistConfig = {
    storage,
    key: 'root',
    transforms: [immutableTransform()],
  };

  const sagaMiddleware = createSagaMiddleware();
  const persistedReducer = persistCombineReducers(persistConfig, reducers);

  /* eslint-disable */
  const store = __DEV__ ?
    createStore(
      persistedReducer,
      {},
      compose(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(logger),
      )
    ) :
    createStore(
      persistedReducer,
      {},
      compose(
        applyMiddleware(sagaMiddleware),
      )
    );

  return store;
};

const store = storeApp();
const persistor = persistStore(store);

export {
  store,
  persistor,
};
