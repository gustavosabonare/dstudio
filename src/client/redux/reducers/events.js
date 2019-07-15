// Constants
import {
  FETCH_EVENTS,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_ERROR,
  CLEAR_EVENTS,
} from '../actions/events';

export const INITIAL_STATE = {
  error: null,
  result: {},
  requesting: false,
};

export function eventsReducer(state = INITIAL_STATE, action) {
  let newError;
  let newResult;
  let newRequesting;
  let newState;

  switch (action.type) {
    case FETCH_EVENTS:
      newError = INITIAL_STATE.error;
      newRequesting = true;
      newState = { ...state, error: newError, requesting: newRequesting };

      return newState;
    case FETCH_EVENTS_SUCCESS:
      newRequesting = INITIAL_STATE.requesting;
      newResult = { ...state.result, ...action.payload.events };
      newState = { ...state, requesting: newRequesting, result: newResult };
      return newState;
    case FETCH_EVENTS_ERROR:
      newError = action.payload.error;
      newRequesting = INITIAL_STATE.requesting;
      newState = { ...state, requesting: INITIAL_STATE.requesting, error: action.payload.error };

      return newState;
    case CLEAR_EVENTS:
      return INITIAL_STATE;
    default:
      return state;
  }
}