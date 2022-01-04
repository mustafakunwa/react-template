import produce from 'immer';
import {
  SET_LANGUAGE,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  RESET_ERROR,
  STOP_LOADING,
  SHOW_ERROR,
  RESET_SUCCESS_MESSAGE,
  SET_SUCCESS_MESSAGE
} from '../constants/common';

const INIT_STATE = {
  lang: 'en',
  loading: 0,
  error: '',
  message: ''
};

export default produce((draft, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      draft.lang = action.payload;
      break;
    case FETCH_START:
      draft.error = '';
      draft.loading = draft.loading + 1;
      break;
    case FETCH_SUCCESS:
      draft.error = '';
      draft.loading = draft.loading !== 0 ? draft.loading - 1 : 0;
      break;
    case FETCH_ERROR:
      draft.error = action.payload;
      draft.loading = draft.loading !== 0 ? draft.loading - 1 : 0;
      break;
    case SHOW_ERROR:
      draft.error = action.payload;
      break;
    case RESET_ERROR:
      draft.error = '';
      break;
    case STOP_LOADING:
      draft.loading = 0;
      break;
    case SET_SUCCESS_MESSAGE:
      draft.message = action.payload;
      break;
    case RESET_SUCCESS_MESSAGE:
      draft.message = '';
      break;
    default:
      return draft;
  }
}, INIT_STATE);
