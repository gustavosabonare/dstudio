// Services
import { wpPages } from '../../services/wp';

// Constants
export const FETCH_PAGES = 'FETCH_PAGES';
export const FETCH_PAGES_SUCCESS = 'FETCH_PAGES_SUCCESS';
export const FETCH_PAGES_ERROR = 'FETCH_PAGES_ERROR';
export const CLEAR_PAGES = 'CLEAR_PAGES';

export function fetchPagesLogic() {
  console.log('action');
  return async (dispatch) => {
    dispatch(fetchPages());

    try {
      const musics = await wpPages();

      dispatch(success(musics));
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
  console.log('fetch action')
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