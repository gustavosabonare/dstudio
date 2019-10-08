// Services
import { wpPages } from '../../services/wp';

// Constants
export const FETCH_PAGES = 'FETCH_PAGES';
export const FETCH_PAGES_SUCCESS = 'FETCH_PAGES_SUCCESS';
export const FETCH_PAGES_ERROR = 'FETCH_PAGES_ERROR';
export const CLEAR_PAGES = 'CLEAR_PAGES';

export function fetchPagesLogic() {
  return async (dispatch) => {
    dispatch(fetchPages());

    try {
      const pages = await wpPages();

      dispatch(success(pages));
    } catch (e) {
      dispatch(error(e));
    }
  };
}

export function clearPages() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_PAGES,
    });
  };
}

export function fetchPages() {
  return {
    type: FETCH_PAGES,
  };
}

export function success(pages) {
  return {
    type: FETCH_PAGES_SUCCESS,
    payload: {
      pages,
    },
  };
}

export function error(e) {
  return {
    type: FETCH_PAGES_ERROR,
    payload: {
      error: e,
    },
  };
}