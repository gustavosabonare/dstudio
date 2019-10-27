// Constants
import {
  FETCH_EVENT,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_ERROR,
  CLEAR_EVENT,
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
    case FETCH_EVENT:
      newError = INITIAL_STATE.error;
      newRequesting = true;
      newState = { ...state, error: newError, requesting: newRequesting };

      return newState;
    case FETCH_EVENT_SUCCESS:
      newRequesting = INITIAL_STATE.requesting;
      newResult = { ...state.result, [action.payload.event.id]: action.payload.event };
      newState = { ...state, requesting: newRequesting, result: newResult };

      return newState;
    case FETCH_EVENT_ERROR:
      newError = action.payload.error;
      newRequesting = INITIAL_STATE.requesting;
      newState = { ...state, requesting: INITIAL_STATE.requesting, error: action.payload.error };

      return newState;
    case CLEAR_EVENT:
      return INITIAL_STATE;
    default:
      return state;
  }
}