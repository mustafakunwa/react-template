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

export const changeLanguage = (lang) => {
  document.body.dir = lang === 'en' ? 'ltr' : 'rtl';
  return (dispatch) =>
    dispatch({
      type: SET_LANGUAGE,
      payload: lang
    });
};

export const fetchSuccess = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_SUCCESS
    });
  };
};

export const fetchError = (error) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_ERROR,
      payload: error
    });
  };
};

export const showError = (error) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_ERROR,
      payload: error
    });
  };
};

export const fetchStart = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_START
    });
  };
};

export const resetError = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_ERROR
    });
  };
};

export const stopLoading = () => {
  return (dispatch) => {
    dispatch({
      type: STOP_LOADING
    });
  };
};

export const setSuccessMessage = (msg) => {
  return (dispatch) => {
    dispatch({
      type: SET_SUCCESS_MESSAGE,
      payload: msg
    });
  };
};
export const resetSuccessMessage = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_SUCCESS_MESSAGE
    });
  };
};
