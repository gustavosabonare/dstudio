// Services
import { wpServices } from '../../services/wp';

// Constants
export const FETCH_SERVICES = 'FETCH_SERVICES';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_ERROR = 'FETCH_SERVICES_ERROR';
export const CLEAR_SERVICES = 'CLEAR_SERVICES';

export function fetchServicesLogic() {
  return async (dispatch) => {
    dispatch(fetchServices());

    try {
      const events = await wpServices();

      dispatch(success(events));
    } catch (e) {
      console.log(e)
      dispatch(error(e.response.data.error));
    }
  };
}

export function clearServices() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_SERVICES,
    });
  };
}

export function fetchServices() {
  return {
    type: FETCH_SERVICES,
  };
}

export function success(musics) {
  return {
    type: FETCH_SERVICES_SUCCESS,
    payload: {
      musics,
    },
  };
}

export function error(e) {
  return {
    type: FETCH_SERVICES_ERROR,
    payload: {
      error: e,
    },
  };
}