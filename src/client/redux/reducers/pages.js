// Constants
import {
  FETCH_PAGES,
  FETCH_PAGES_SUCCESS,
  FETCH_PAGES_ERROR,
  CLEAR_PAGES,
} from '../actions/pages';

export const INITIAL_STATE = {
  error: null,
  result: [],
  requesting: false,
};

export function pagesReducer(state = INITIAL_STATE, action) {
  let newError;
  let newResult;
  let newRequesting;
  let newState;

  switch (action.type) {
    case FETCH_PAGES:
      newError = INITIAL_STATE.error;
      newRequesting = true;
      newState = { ...state, error: newError, requesting: newRequesting };

      return newState;
    case FETCH_PAGES_SUCCESS:
      newRequesting = INITIAL_STATE.requesting;
      newResult = [...state.result, ...action.payload.pages];
      newState = { ...state, requesting: newRequesting, result: newResult };

      return newState;
    case FETCH_PAGES_ERROR:
      newError = action.payload.error;
      newRequesting = INITIAL_STATE.requesting;
      newState = { ...state, requesting: INITIAL_STATE.requesting, error: action.payload.error };

      return newState;
    case CLEAR_PAGES:
      return INITIAL_STATE;
    default:
      return state;
  }
}