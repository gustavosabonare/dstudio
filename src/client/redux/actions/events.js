// Services
import { wpEvents } from '../../services/wp';

// Constants
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR';
export const CLEAR_EVENTS = 'CLEAR_EVENTS';

export function fetchEventsLogic() {
  return async (dispatch) => {
    dispatch(fetchEvents());

    try {
      const events = await wpEvents();

      dispatch(success(events));
    } catch (e) {
      dispatch(error(e.response.data.error));
    }
  };
}

export function clearEvents() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_EVENTS,
    });
  };
}

export function fetchEvents() {
  return {
    type: FETCH_EVENTS,
  };
}

export function success(events) {
  return {
    type: FETCH_EVENTS_SUCCESS,
    payload: {
      events,
    },
  };
}

export function error(e) {
  return {
    type: FETCH_EVENTS_ERROR,
    payload: {
      error: e,
    },
  };
}