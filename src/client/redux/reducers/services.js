// Constants
import {
  FETCH_SERVICES,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_ERROR,
  CLEAR_SERVICES,
} from '../actions/services';

export const INITIAL_STATE = {
  error: null,
  result: [],
  requesting: false,
};

export function servicesReducer(state = INITIAL_STATE, action) {
  let newError;
  let newResult;
  let newRequesting;
  let newState;

  switch (action.type) {
    case FETCH_SERVICES:
      newError = INITIAL_STATE.error;
      newRequesting = true;
      newState = { ...state, error: newError, requesting: newRequesting };

      return newState;
    case FETCH_SERVICES_SUCCESS:
      newRequesting = INITIAL_STATE.requesting;
      newResult = [...state.result, ...action.payload.services];
      newState = { ...state, requesting: newRequesting, result: newResult };

      return newState;
    case FETCH_SERVICES_ERROR:
      newError = action.payload.error;
      newRequesting = INITIAL_STATE.requesting;
      newState = { ...state, requesting: INITIAL_STATE.requesting, error: action.payload.error };

      return newState;
    case CLEAR_SERVICES:
      return INITIAL_STATE;
    default:
      return state;
  }
}