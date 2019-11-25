import * as actionTypes from '../actions/actionTypes';

const initialState = {
  message: [],
  error: false
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return {
        ...state,
        message: action.message.text,
        error: false
      };

    case actionTypes.SEND_MESSAGE_FAILED:
      return {
        ...state,
        message: null,
        error: true
      };

    default:
      return state;
  }
};

export default messagesReducer;
