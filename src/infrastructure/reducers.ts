import { combineReducers } from "redux";

import { reducer as toastrReducer } from 'react-redux-toastr';

import Auth from './Auth/AuthReducer';
import Child from './Child/ChildReducer';

export default combineReducers({
  toastr: toastrReducer,
  Auth,
  Child,
});
