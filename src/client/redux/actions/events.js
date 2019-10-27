// Services
import { wpEvent } from '../../services/wp';

// Constants
export const FETCH_EVENT = 'FETCH_EVENT';
export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS';
export const FETCH_EVENT_ERROR = 'FETCH_EVENT_ERROR';
export const CLEAR_EVENT = 'CLEAR_EVENT';

export function fetchEventLogic(id) {
  return async (dispatch) => {
    dispatch(fetchEvent());

    try {
      const event = await wpEvent(id);

      dispatch(success(event));
    } catch (e) {
      dispatch(error(e));
    }
  };
}

export function clearEvent() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_EVENT,
    });
  };
}

export function fetchEvent() {
  return {
    type: FETCH_EVENT,
  };
}

export function success(event) {
  return {
    type: FETCH_EVENT_SUCCESS,
    payload: {
      event,
    },
  };
}

export function error(e) {
  return {
    type: FETCH_EVENT_ERROR,
    payload: {
      error: e,
    },
  };
}