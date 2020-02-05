import { combineReducers } from 'redux';
import articlesReducer from './reducers/articlesReducer';
import messagesReducer from './reducers/messagesReducer';
import tempReducer from './reducers/tempReducer';

export default combineReducers({
  articlesReducer,
  messagesReducer,
  tempReducer
});
