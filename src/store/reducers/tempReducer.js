import * as actionTypes from '../actions/actionTypes';

const initialState = {
  temp: [],
  loading: false,
  error: false
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.FETCH_START:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    case actionTypes.GET_SUCCESS:
      //console.log(action.temp);


      return {
        ...state,
        temp: state.temp.concat(action.temp),
        loading: false,
        error: false
      };
    // case actionTypes.CLEAR_ARTICLES:
    //   return {
    //     ...state,
    //     articles: []
    //   };

    case actionTypes.GET_FAILED:
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
