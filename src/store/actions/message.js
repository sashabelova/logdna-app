import * as actionTypes from './actionTypes';
import * as apiService from '../services/apiService';

export const sendMessageSuccess = message => {
  return {
    type: actionTypes.SEND_MESSAGE,
    message: message
  };
};

export const sendMessageFailed = () => {
  return {
    type: actionTypes.SEND_MESSAGE_FAILED
  };
};

export const sendMessage = val => {
  return dispatch => {
    const apiEndpoint = '/messages/';
    const payload = {
      message: val
    };
    apiService
      .post(apiEndpoint, payload)
      .then(response => {
        dispatch(sendMessageSuccess(response.data));
      })
      .catch(error => {
        dispatch(sendMessageFailed());
      });
  };
};
