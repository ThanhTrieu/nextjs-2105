import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';
import rootSaga from './saga';

const configRootPersist = {
  key: 'nextjsMovies',
  storage: storage,
  whitelist: ['moviesReducer']
}

const rootReducerPersistent = persistReducer(configRootPersist, rootReducer);

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension')
      return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

export const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducerPersistent, bindMiddleware([sagaMiddleware]));
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}
export const wrapper = createWrapper(makeStore, { debug: true })
  