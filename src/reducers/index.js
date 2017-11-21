// En lugar de combineReducers estoy exportando un objeto (reducers)
// porque en store uso persistCombineReducers (para cachear state)
//import { combineReducers } from 'redux';
import config from '../config';
import mainReducer from './mainReducer';

// Capas de datos
//export default combineReducers({
const reducers = {
    config: config,
    mainReducer
};

export default reducers;