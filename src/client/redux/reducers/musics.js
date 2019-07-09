// Constants
import {
  FETCH_MUSICS,
  FETCH_MUSICS_SUCCESS,
  FETCH_MUSICS_ERROR,
  CLEAR_SONGS,
} from '../actions/musics';

export const INITIAL_STATE = {
  error: null,
  result: [],
  requesting: false,
};

export function musicsReducer(state = INITIAL_STATE, action) {
  let newError;
  let newResult;
  let newRequesting;
  let newState;

  switch (action.type) {
    case FETCH_MUSICS:
      newError = INITIAL_STATE.error;
      newRequesting = true;
      newState = { ...state, error: newError, requesting: newRequesting };

      return newState;
    case FETCH_MUSICS_SUCCESS:
      newRequesting = INITIAL_STATE.requesting;
      newResult = [...state.result, ...action.payload.musics];
      newState = { ...state, requesting: newRequesting, result: newResult };

      return newState;
    case FETCH_MUSICS_ERROR:
      newError = action.payload.error;
      newRequesting = INITIAL_STATE.requesting;
      newState = { ...state, requesting: INITIAL_STATE.requesting, error: action.payload.error };

      return newState;
    case CLEAR_SONGS:
      return INITIAL_STATE;
    default:
      return state;
  }
}