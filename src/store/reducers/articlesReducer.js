import * as actionTypes from '../actions/actionTypes';

const initialState = {
  articles: [],
  loading: false,
  error: false
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        articles: state.articles.concat(action.articles),
        loading: false,
        error: false
      };
    case actionTypes.CLEAR_ARTICLES:
      return {
        ...state,
        articles: []
      };

    case actionTypes.FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
};

export default articlesReducer;
