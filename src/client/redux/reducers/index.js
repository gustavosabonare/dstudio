import { combineReducers } from 'redux';

import { musicsReducer } from './musics';
import { pagesReducer } from './pages';
import { eventsReducer } from './events';

export default combineReducers({
  events: eventsReducer,
  musics: musicsReducer,
  pages: pagesReducer,
});