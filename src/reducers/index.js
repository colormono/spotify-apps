// En lugar de combineReducers estoy exportando un objeto (reducers)
// porque en store uso persistCombineReducers (para cachear state)
//import { combineReducers } from 'redux';
import config from '../config';
import { reducer as formReducer } from 'redux-form';
import mecanicaReducer from './mecanicaReducer';
import mainReducer from './mainReducer';

// Capas de datos
//export default combineReducers({
const reducers = {
  config,
  mecanica: mecanicaReducer,
  main: mainReducer,
  form: formReducer,
  selectedPostsIds: function() {
    return ['bigLittleLies','ballers'];
  }
};

export default reducers;
