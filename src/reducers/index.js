import config from '../config';
import AuthReducer from './AuthReducer';
import AnalizerReducer from './AnalizerReducer';
import ResultReducer from './ResultReducer';

const reducers = {
  config,
  auth: AuthReducer,
  analizer: AnalizerReducer,
  result: ResultReducer
};

export default reducers;
