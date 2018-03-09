import GenresReducer from './GenresReducer';
import AuthReducer from './AuthReducer';
import AnalyzerReducer from './AnalyzerReducer';
import ResultReducer from './ResultReducer';

const reducers = {
  auth: AuthReducer,
  analyzer: AnalyzerReducer,
  result: ResultReducer,
  genres: GenresReducer
};

export default reducers;
