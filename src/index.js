import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

// View
import Loading from './components/Loading'
import Layout from './components/Layout'

// Data
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store';
const { persistor, store } = configureStore();

// Render
ReactDOM.render(
    <Provider store={store}>
        <PersistGate 
            loading={<Loading />}
            persistor={persistor} >
            <Layout />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();