import { combineReducers } from 'redux';
import home from './home';
import search from './search';

const rootReducers = combineReducers({
  home,
  search
});

export default rootReducers;
