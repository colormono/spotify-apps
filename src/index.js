import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store';

import { Loading } from './components/common'
import App from './app'

export const { persistor, store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={<Loading />}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();