import { combineReducers } from 'redux';

import { musicsReducer } from './musics';
import { pagesReducer } from './pages';

export default combineReducers({
  musics: musicsReducer,
  pages: pagesReducer,
});