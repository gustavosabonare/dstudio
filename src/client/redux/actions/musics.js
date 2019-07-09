// Services
import { wpMusics } from '../../services/wp';

// Constants
export const FETCH_MUSICS = 'FETCH_MUSICS';
export const FETCH_MUSICS_SUCCESS = 'FETCH_MUSICS_SUCCESS';
export const FETCH_MUSICS_ERROR = 'FETCH_MUSICS_ERROR';
export const CLEAR_MUSICS = 'CLEAR_MUSICS';

export function fetchMusicsLogic() {
  return async (dispatch) => {
    dispatch(fetchMusics());

    try {
      const musics = await wpMusics();

      dispatch(success(musics));
    } catch (e) {
      dispatch(error(e));
    }
  };
}

export function clearMusics() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_MUSICS,
    });
  };
}

export function fetchMusics() {
  return {
    type: FETCH_MUSICS,
  };
}

export function success(musics) {
  return {
    type: FETCH_MUSICS_SUCCESS,
    payload: {
      musics,
    },
  };
}

export function error(e) {
  return {
    type: FETCH_MUSICS_ERROR,
    payload: {
      error: e,
    },
  };
}