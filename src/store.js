import { createStore, applyMiddleware } from 'redux';

// Middleware
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import ReduxPromise from 'redux-promise';

// Cache storage
// default: localStorage if web, AsyncStorage if react-native
// import { AsyncStorage } from 'react-native';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import reducers from './reducers';

const config = {
  key: 'root',
  //storage: AsyncStorage,
  storage
};

const logger = createLogger({
  collapsed: true
});

const middleware = applyMiddleware(ReduxPromise, thunk, logger);
const reducer = persistCombineReducers(config, reducers);

export const configureStore = () => {
  const store = createStore(reducer, middleware);
  const persistor = persistStore(store);
  return { persistor, store };
};

export default configureStore;
