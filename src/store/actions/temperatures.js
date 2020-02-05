import * as actionTypes from './actionTypes';
import * as apiService from '../services/apiService';

import axios from 'axios';

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

export const getSuccess = temp => {
  return {
    type: actionTypes.GET_SUCCESS,
    temp: temp
  };
};

export const getFailed = () => {
  return {
    type: actionTypes.GET_FAILED
  };
};

export const getTemperatures = () => {
  return dispatch => {
    //dispatch(clearArticles());
    //dispatch(fetchStart());
    //const apiEndpoint = '/articles/';
    axios
      .get('thermostat.json')
      .then(response => {
        dispatch(getSuccess(response.data));
      })

      .catch(error => {
        dispatch(getFailed());
      });
  };
};
