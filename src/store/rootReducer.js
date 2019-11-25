import { combineReducers } from 'redux';
import articlesReducer from './reducers/articlesReducer';
import messagesReducer from './reducers/messagesReducer';

export default combineReducers({
  articlesReducer,
  messagesReducer
});
