const url =
  process.env.NODE_ENV === 'production'
    ? 'https://logdna-api.herokuapp.com'
    : 'http://localhost:3001';

export default url;
