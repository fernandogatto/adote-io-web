import { combineReducers } from "redux";

import { reducer as toastrReducer } from 'react-redux-toastr';

import Auth from './Auth/AuthReducer';

export default combineReducers({
    toastr: toastrReducer,
    Auth,
});
