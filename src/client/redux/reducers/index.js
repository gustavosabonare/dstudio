import { combineReducers } from 'redux';

import { eventsReducer } from './events';
import { servicesReducer } from './services';
import { musicsReducer } from './musics';
import { pagesReducer } from './pages';


export default combineReducers({
  events: eventsReducer,
  services: servicesReducer,
  musics: musicsReducer,
  pages: pagesReducer
});