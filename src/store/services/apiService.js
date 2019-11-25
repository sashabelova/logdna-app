import axios from 'axios';
import url from '../config/config';

export const get = apiEndpoint => {
  return axios
    .get(url + apiEndpoint)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
};

export const post = (apiEndpoint, payload) => {
  return axios
    .post(url + apiEndpoint, payload)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
};
