import config from '../config';
import GenresReducer from './GenresReducer';
import AuthReducer from './AuthReducer';
import AnalizerReducer from './AnalizerReducer';
import ResultReducer from './ResultReducer';

const reducers = {
  config,
  auth: AuthReducer,
  analizer: AnalizerReducer,
  result: ResultReducer,
  genres: GenresReducer
};

export default reducers;
