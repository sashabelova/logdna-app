import * as actionTypes from './actionTypes';
import * as apiService from '../services/apiService';

export const clearArticles = () => {
  return {
    type: actionTypes.CLEAR_ARTICLES
  };
};

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_START
  };
};

export const fetchSuccess = articles => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    articles: articles
  };
};

export const fetchFailed = () => {
  return {
    type: actionTypes.FETCH_FAILED
  };
};

export const getArticles = () => {
  return dispatch => {
    dispatch(clearArticles());
    dispatch(fetchStart());
    const apiEndpoint = '/articles/';
    apiService
      .get(apiEndpoint)
      .then(response => {
        dispatch(fetchSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchFailed());
      });
  };
};
